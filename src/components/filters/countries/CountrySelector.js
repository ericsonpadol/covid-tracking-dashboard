import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import { Select } from 'antd'

import { getAllCountries } from '../../../actions/dashboards/countryActions'

const { Option } = Select

const CountrySelector = ({ onCountrySelect }) => {
    const dispatch = useDispatch()
    const { listCountries } = useSelector((state) => ({ listCountries: state.countryFilter.countryList }))

    const [isLoading, setLoading] = useState(false)

    const handleCountryOptions = async () => {
        try {
            setLoading(true)
            dispatch(await getAllCountries())
            setLoading(false)
        } catch (error) {
            console.error(error)
        }
    }

    const handleOnChange = (value, record) => {
        console.debug(record)
        console.debug(value)
        console.debug('rabbit')
        onCountrySelect(value, record)
    }

    return (
        <>
            <Select style={{ width: 120 }} onChange={(value, record) => handleOnChange(value, record)} onFocus={() => handleCountryOptions()} disabled={isLoading}>
                {listCountries && listCountries.map((item) => <Option value={item.iso2} key={item.key}>{item.country}</Option>)}
            </Select>
        </>
    )
}

CountrySelector.propTypes = {
    onCountrySelect: PropTypes.func.isRequired
}

export default CountrySelector