import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'

import { Layout, Col, Row, Divider, Card, Typography } from 'antd'

import CountrySelector from '../../../components/filters/countries'

import { getSelectedCountry } from '../../../actions/dashboards/countryActions'

const { Content } = Layout
const { Title } = Typography

const WorldCountry = props => {
    const date = new Date()
    const dispatch = useDispatch()
    const { countryData } = useSelector((state) => ({ countryData: state.countryFilter.countryData }))
    const [isLoading, setLoading] = useState(false)
    const [country, SetCountry] = useState('')

    const handleOnSelectCountry = async (selectedCountry, record) => {
        try {
            console.debug(selectedCountry)
            SetCountry(record.children || '')
            setLoading(true)
            dispatch(await getSelectedCountry(selectedCountry))
            setLoading(false)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <Content>
                <div style={{ padding: '10px', textAlign: 'center' }}>
                    <Row gutter={16}>
                        <Col>
                            <p>Please select a country:&nbsp;</p>
                        </Col>
                        <Col>
                            <CountrySelector onCountrySelect={handleOnSelectCountry} />
                        </Col>
                    </Row>
                    <Divider />
                    <Title level={3}>{country} As of, {date.toDateString()}</Title>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card title="Cases" loading={isLoading}>{countryData.todayCases}</Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Recovered" loading={isLoading}>{countryData.todayRecovered}</Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Deaths" loading={isLoading}>{countryData.todayDeaths}</Card>
                        </Col>
                    </Row>
                    <Divider />
                    <Title level={3}>Current</Title>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card title="Cases">{countryData.cases}</Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Recovered">{countryData.recovered}</Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Deaths">{countryData.deaths}</Card>
                        </Col>
                    </Row>
                </div>
            </Content>
        </>
    )
}

WorldCountry.propTypes = {}

export default WorldCountry