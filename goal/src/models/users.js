import * as usersService from '../services/users';

export default {
  namespace: 'users',
  state: {
    list: [],
    total: null,
  },
  reducers: {// 处理同步操作，唯一可以修改 state 的地方，由 action 触发。
    // 定义对象方法可以省略关键字 function
    save(state, { payload: { data: list, total, page } }) {
      // 析构的反向操作。state的每个元素和list,total,page反向组成一个新的对象。
      return { ...state, list, total, page };
    },
  },
  effects: { // 用于处理异步操作和业务逻辑。不直接修改 state，可以触发 action。
    *fetch({ payload: { page = 1 } }, { call, put }) {
      // { page }析构的反向操作，用于重新组织一个 Object 。
      // yield表达式本身没有返回值或者说总是返回undefined。next方法可以待一个参数，该参数作为上一个yield的返回值。
      const { data, headers } = yield call(usersService.fetch, { page });
      yield put({// 通过 yield 关键字实现暂停功能,把异步逻辑通过同步的方式组织起来.
        type: 'save',
        payload: {
          data,
          total: parseInt(headers['x-total-count'], 10),
          page: parseInt(page, 10),
        },
      });
    },
    *remove({ payload: id }, { call, put, select }) {
      yield call(usersService.remove, id);
      const page = yield select(state => state.users.page);
      yield put({ type: 'fetch', payload: { page } });
    },
  },
  subscriptions: {// 订阅，用于订阅一个数据源，然后根据需要 dispatch 相应的 action。
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/users') {
          dispatch({ type: 'fetch', payload: query });
        }
      });
    },
  },
};
