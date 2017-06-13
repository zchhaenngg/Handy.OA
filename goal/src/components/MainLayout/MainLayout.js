import React from 'react';
import Header from './Header';

function MainLayout({ children, location }) {
  return (
    <div>
      <Header location={location} />
      <div>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
}
export default MainLayout;
