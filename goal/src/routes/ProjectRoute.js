import React from 'react';
import { connect } from 'dva';
import ProjectComponent from '../components/Project/ProjectComponent';
import MainLayout from '../components/MainLayout/MainLayout';

function ProjectRoute({ location }) {
  return (
    <MainLayout location={location}>
      <div>
        <ProjectComponent />
      </div>
    </MainLayout>
  );
}

export default connect()(ProjectRoute);
