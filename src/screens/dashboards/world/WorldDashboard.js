import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import PropTypes from 'prop-types'
import { Card, Row, Col, Layout, Typography, Divider } from 'antd'

import { getWorldCurrentStats } from '../../../actions/dashboards/worldActions'

import './world-dashboard.css'

const { Content } = Layout
const { Title } = Typography

const WorldDashboard = () => {
    const dispatch = useDispatch()
    const { current } = useSelector((state) => ({ current: state.worldDashboard.current }))
    const date = new Date()

    useEffect(() => { dispatch(getWorldCurrentStats()) }, [dispatch])

    return (
        <>
            <Content>
                <div className="world-title"><Title level={2}>As Of {date.toDateString()} </Title></div>
                <Divider />
                <Row gutter={16}>
                    <Col span={8}><Card title="Active" style={{ textAlign: 'center' }}>{current.todayCases}</Card></Col>
                    <Col span={8}><Card title="Recovered" style={{ textAlign: 'center' }}>{current.todayRecovered}</Card></Col>
                    <Col span={8}><Card title="Deaths" style={{ textAlign: 'center' }}>{current.todayDeaths}</Card></Col>
                </Row>
            </Content>
            <Divider />
            <Content>
                <div className="world-title"><Title level={2}>Current Status</Title></div>
                <Divider />
                <Row gutter={16}>
                    <Col span={8}><Card title="Active" style={{ textAlign: 'center' }}>{current.cases}</Card></Col>
                    <Col span={8}><Card title="Recovered" style={{ textAlign: 'center' }}>{current.recovered}</Card></Col>
                    <Col span={8}><Card title="Deaths" style={{ textAlign: 'center' }}>{current.deaths}</Card></Col>
                </Row>
            </Content>
        </>
    )
}

WorldDashboard.propTypes = {}

export default WorldDashboard