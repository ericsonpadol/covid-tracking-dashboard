import React from 'react';
// import PropTypes from 'prop-types';
import { Layout } from 'antd'

import './main-header.css'

const { Header } = Layout;

function MainHeader() {
  return (
    <Header style={{ padding: 0 }} className="header-title">
      <h1>{process.env.REACT_APP_TITLE}</h1>
    </Header>
  )
}

MainHeader.propTypes = {};

export default MainHeader;
