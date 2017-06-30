import * as projectService from '../../services/project';
import { PROJECT as ProjectPath } from '../../common/PathSource';
import { PROJECT as ProjectNamespace } from '../../common/NamespaceSource';
import { PROJECT_SAVE as SAVE, PROJECT_GETPAGE as GETPAGE } from '../../common/DispatchSource';

export default {
  namespace: `${ProjectNamespace}`,
  state: {
    list: [],
    toal: null,
  },
  reducers: {
    save(state, { payload: { data: list, total, page } }) {
      return { ...state, list, total, page };
    },
  },
  effects: {
    *getPage({ payload: { page = 1, pagesize } }, { call, put }) {
      const { data, headers } = yield call(projectService.GetPage, { page, pagesize });
      yield put({
        type: `${SAVE}`,
        payload: {
          data,
          total: parseInt(headers['x-total-count'], 10),
          page: parseInt(page, 10),
        },
      });
    },
    *remove({ projectId: id }, { call, put, select }) {
      yield call(projectService.remove, id);
      const page = yield select(state => state.projects.page);
      yield put({ type: `${GETPAGE}`, payload: { page } });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === `/${ProjectPath}`) {
          dispatch({ type: `${GETPAGE}`, payload: query });
        }
      });
    },
  },
};
