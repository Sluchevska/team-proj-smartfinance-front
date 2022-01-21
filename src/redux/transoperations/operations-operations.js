import axios from 'axios';
// import {
//     fetchOperations,
//     addOperation,
//     deleteOperation
// } from '../../api/operationsApi'
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

axios.defaults.baseURL = 'https://team-proj-smartfinance-back.herokuapp.com';

export const fetchOperation = (year, month, day, operationType) => async dispatch => {
    console.log("fetch запрос")
    dispatch(fetchOperationRequest());

    //асинхронный код
    try {
        const { data } = await axios.get(`/operations/byday?${year}&${month}&${day}&${operationType}`);
        dispatch(fetchOperationSuccess(data));
        console.log("список операций", data)
        } catch (error) {
            dispatch(fetchOperationError(error.message))
        }
}

// export const addOperation = ({ date, category, description,sum, type }) => async dispatch => {
//     const operation = {
//         date,
//         category,
//         description,
//         sum,
//         type
//     }

//     dispatch(addOperationRequest());

//     try {
//         const { data } = await axios.post('/operations', operation);
//         dispatch(addOperationSuccess(data))
//     } catch (error) {
//         dispatch(addOperationError(error))
//     }

//     // axios
//     //     .post('/Operations', Operation)
//     //     .then(({ data }) => dispatch(addOperationSuccess(data)))
//     //     .catch(error => dispatch(addOperationError(error)));
// }

export const deleteOperation = operationId => dispatch => {
    dispatch(deleteOperationRequest());

    axios
        .delete(`/operations/${operationId}`)
        .then(() => dispatch(deleteOperationSuccess(operationId)))
        .catch(error => dispatch(deleteOperationError(error)));
}

