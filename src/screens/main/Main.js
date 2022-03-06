import React, { useState } from "react";
// import PropTypes from "prop-types";
import { Route } from "react-router-dom"

import { Layout } from "antd";

import Navigation from "../../components/common/navigation";
import MainHeader from '../../components/common/header'
import MainFooter from '../../components/common/footer'
import WorldDashboard from "../dashboards/world";
import WorldRegion from "../dashboards/region";
import WorldCountry from "../dashboards/country"

import './main.css'

function Main() {
    const [isCollapsed, setCollapse] = useState(false);

    const onCollapse = (value) => {
        console.log(value);
        setCollapse(value);
    };

    return (
        <>
            <Layout style={{ minHeight: "100vh" }}>
                <Navigation isCollapsed={isCollapsed} onCollapse={onCollapse} />
                <Layout>
                    <MainHeader />
                    <Route path="/" component={WorldDashboard} exact />
                    <Route path="/region" component={WorldRegion} />
                    <Route path="/country" component={WorldCountry} />
                    <MainFooter />
                </Layout>
            </Layout>
        </>

    );
}

Main.propTypes = {};

export default Main;
