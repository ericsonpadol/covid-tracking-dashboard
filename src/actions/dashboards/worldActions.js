import axios from 'axios'

import { GET_WORLD_CURRENT_FAIL, GET_WORLD_CURRENT_REQUEST, GET_WORLD_CURRENT_SUCCESS } from '../../types/types'
import { apiRoutes } from '../../api/api-uri'

const BASE_URL = `${apiRoutes.host}/${apiRoutes.version}`
export const getWorldCurrentStats = () => async (dispatch) => {
    try {
        dispatch({ type: GET_WORLD_CURRENT_REQUEST })

        const response = await axios.get(`${BASE_URL}/${apiRoutes.actions.getAll}`)

        console.table(response.data)

        dispatch({ type: GET_WORLD_CURRENT_SUCCESS, payload: { data: response && response.data ? response.data : [] } })
    } catch (error) {
        console.error(error)
        dispatch({ type: GET_WORLD_CURRENT_FAIL, payload: error.message })
    }
}