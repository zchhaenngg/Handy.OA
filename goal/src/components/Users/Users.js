import React from 'react';
import { connect } from 'dva';
import { Table, Pagination, Popconfirm } from 'antd';
import styles from './Users.css';
import { PAGE_SIZE } from '../../constants';

function Users({ list: dataSource, total, page: current }) {
  function deleteHandler(id) {
    console.warn(`TODO: ${id}`);
  }
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="">{text}</a>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Website',
      dataIndex: 'website',
      key: 'website',
    },
    {
      title: 'Operation',
      key: 'operation',
      render: (text, { id }) => (
        <span className={styles.operation}>
          <a href="">Edit</a>
          <Popconfirm title="Confirm to delete?" onConfirm={deleteHandler.bind(null, id)}>
            <a href="">Delete</a>
          </Popconfirm>
        </span>
      ),
    },
  ];// 是保留词，所以添加样式时，需用 className 代替 class
  return (// React组件中JavaScript 表达式需要用 {} 括起来，会执行并返回结果。
    <div className={styles.normal}>
      <div>
        <Table
          columns={columns}
          dataSource={dataSource}
          rowKey={record => record.id}
          pagination={false}
        /> {/* 这里尽量别用不要用双斜杠注释了 */}
        <Pagination className="ant-table-pagination" total={total} current={current} pageSize={PAGE_SIZE} />
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  const { list, total, page } = state.users;
  return {
    list, total, page,
  };
}
export default connect(mapStateToProps)(Users);
