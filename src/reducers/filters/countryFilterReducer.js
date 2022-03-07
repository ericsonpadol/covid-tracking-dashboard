import _ from 'lodash'

import { GET_COUNTRY_FILTER_FAIL, GET_COUNTRY_FILTER_REQUEST, GET_COUNTRY_FILTER_SUCCESS, GET_COUNTRY_DATA_FAIL, GET_COUNTRY_DATA_REQUEST, GET_COUNTRY_DATA_SUCCESS } from '../../types/types'

export const countryFilterReducer = (state = { countryList: [], countryData: [] }, action) => {
    const { payload, type } = action
    const record = []
    switch (type) {
        default:
            return { ...state }

        case GET_COUNTRY_FILTER_REQUEST:
            return { ...state, loading: true }

        case GET_COUNTRY_FILTER_FAIL:
            return { ...state, loading: false }

        case GET_COUNTRY_FILTER_SUCCESS:
            _.forEach(payload.data, (row) => {
                if (row && row.country && row.countryInfo && row.countryInfo.iso2) {
                    record.push({ iso2: row.countryInfo.iso2, country: row.country, key: row.countryInfo._id })
                }
            })
            return { ...state, loading: true, countryList: record }

        case GET_COUNTRY_DATA_FAIL:
            return { ...state, loading: false }

        case GET_COUNTRY_DATA_REQUEST:
            return { ...state, loading: true }

        case GET_COUNTRY_DATA_SUCCESS:
            return { ...state, loading: false, countryData: payload.data }
    }
}