import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

import { Layout, Menu } from "antd";
import { CompassOutlined, FlagOutlined, GlobalOutlined } from '@ant-design/icons'

import "./nav.css";
import logo from './logo.png';

const { Sider } = Layout;

function Nav({ isCollapsed, onCollapse }) {
    return (
        <Sider collapsed={isCollapsed} onCollapse={(value) => onCollapse(value)} collapsible>
            <div className="logo">{isCollapsed ? <img alt="logo.png" src={logo} height="32px" /> : process.env.REACT_APP_LOGO_TITLE}</div>
            <Menu theme="dark" defaultSelectedKeys={['world']} mode="inline">
                <Menu.Item key="world" icon={<GlobalOutlined />}><Link to="/">World</Link></Menu.Item>
                <Menu.Item key="region" icon={<CompassOutlined />}><Link to="/region">Region</Link></Menu.Item>
                <Menu.Item key="country" icon={<FlagOutlined />}><Link to="/country">Country</Link></Menu.Item>
            </Menu>
        </Sider>
    );
}

Nav.propTypes = {
    isCollapsed: PropTypes.bool.isRequired,
    onCollapse: PropTypes.func.isRequired,
};

export default Nav;
