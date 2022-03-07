import { notification } from 'antd'

import { GET_WORLD_CURRENT_FAIL, GET_WORLD_CURRENT_REQUEST, GET_WORLD_CURRENT_SUCCESS } from '../../types/types'

export const worldDashboardReducer = (state = { current: [] }, action) => {
    const { payload, type } = action
    switch (type) {
        default:
            return { ...state }

        case GET_WORLD_CURRENT_REQUEST:
            return { loading: true, ...state }

        case GET_WORLD_CURRENT_SUCCESS:
            console.log('PAYLOAD', payload)
            notification.success({ description: 'Data is fetched successfully.', message: 'SUCCESS!' })
            return { ...state, loading: false, current: payload.data, }

        case GET_WORLD_CURRENT_FAIL:
            notification.error({ description: payload, message: 'ERROR!' })
            return { loading: false, ...state }

    }
}