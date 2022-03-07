import axios from 'axios'

import {
    GET_COUNTRY_FILTER_FAIL, GET_COUNTRY_FILTER_REQUEST, GET_COUNTRY_FILTER_SUCCESS, GET_COUNTRY_DATA_FAIL, GET_COUNTRY_DATA_REQUEST, GET_COUNTRY_DATA_SUCCESS
} from '../../types/types'
import { apiRoutes } from '../../api/api-uri'

const BASE_URL = `${apiRoutes.host}/${apiRoutes.version}`

export const getAllCountries = () => async (dispatch) => {
    try {
        dispatch({ type: GET_COUNTRY_FILTER_REQUEST })

        const response = await axios.get(`${BASE_URL}/${apiRoutes.actions.getAllCountry}?yesterday=&sort=`);

        console.table(response)
        dispatch({ type: GET_COUNTRY_FILTER_SUCCESS, payload: { data: response.data } })
    } catch (error) {
        console.error(error)
        dispatch({ type: GET_COUNTRY_FILTER_FAIL, payload: error.message })
    }
}

export const getSelectedCountry = (selectedCountry) => async (dispatch) => {
    try {
        console.log(selectedCountry)
        dispatch({ type: GET_COUNTRY_DATA_REQUEST })
        const response = await axios.get(`${BASE_URL}/${apiRoutes.actions.getAllCountry}/${selectedCountry}?yesterday=true&strict=true&query=`)
        console.table(selectedCountry, response)
        dispatch({ type: GET_COUNTRY_DATA_SUCCESS, payload: { data: response.data } })
    } catch (error) {
        console.error(error)
        dispatch({ type: GET_COUNTRY_DATA_FAIL, payload: error.message })
    }
}