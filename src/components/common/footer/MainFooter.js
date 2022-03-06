import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'

const { Footer } = Layout

function MainFooter() {
    return (
        <><Footer style={{ textAlign: 'center' }}><p>Covid Dashboard (c)2022 created by: ericson padol</p></Footer></>
    )
}

MainFooter.propTypes = {}

export default MainFooter