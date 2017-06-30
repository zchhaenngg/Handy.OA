import React from 'react';
import { connect } from 'dva';
import { Table, Pagination, Popconfirm } from 'antd';
import { routerRedux } from 'dva/router';
import { PAGE_SIZE } from '../../constants';
import { PROJECT_SAVE as SAVE, PROJECT_GETPAGE as GETPAGE, PROJECT_REMOVE as REMOVE } from '../../common/DispatchSource';
import { PROJECT as PROJECT_NAMESPACE } from '../../common/NamespaceSource';

function ProjectComponent({ dispatch, list: dataSource, loading, total, page: current }) {
  function removeHandler(id) {
    dispatch({
      type: `${PROJECT_NAMESPACE}/${REMOVE}`,
      projectId: id,
    });
  }

  function pageChangeHandler(page) {
    dispatch(routerRedux.push({
      pathname: `/${PROJECT_NAMESPACE}`,
      query: { page },
    }));
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="">{text}</a>,
    }, {
      title: 'Email',
      dataIndex: 'eamil',
      key: 'email',
    }, {
      title: 'Website',
      dataIndex: 'website',
      key: 'website',
    },
  ];
}
