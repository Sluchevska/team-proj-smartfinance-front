import axios from 'axios';
import {
    addOperationRequest,
    addOperationSuccess,
    addOperationError,
    deleteOperationRequest,
    deleteOperationSuccess,
    deleteOperationError,
    fetchOperationRequest,
    fetchOperationSuccess,
    fetchOperationError
} from './operations-action'

export const fetchOperations = (year, month, day, type) => async dispatch => {
    console.log("fetch запрос")
    dispatch(fetchOperationRequest());

    try {
        const { data } = await axios.get(`/api/operations/byday?year=${year}&month=${month}&day=${day}&type=${type}`);
        dispatch(fetchOperationSuccess(data.data.operations));
        console.log("список операций расходы", data)
        } catch (error) {
            dispatch(fetchOperationError(error.message))
        }
}

export const addOperation = ({ date, category, description, sum, type }) => async dispatch => {
    const operation = {
        date,
        category,
        description,
        sum,
        type
    }

    dispatch(addOperationRequest());

    try {
        const { data } = await axios.post('api/operations', operation);
        console.log(data);
        dispatch(addOperationSuccess(data.data.operation))
    } catch (error) {
        dispatch(addOperationError(error))
    }
}

export const deleteOperation = operationId => dispatch => {
    dispatch(deleteOperationRequest());

    axios
        .delete(`api/operations/${operationId}`)
        .then(() => dispatch(deleteOperationSuccess(operationId)))
        .catch(error => dispatch(deleteOperationError(error)));
}

