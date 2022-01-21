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

export const fetchOperationExpenses = (year, month, day) => async dispatch => {
    console.log("fetch запрос")
    dispatch(fetchOperationRequest());

    //асинхронный код
    try {
        const { data } = await axios.get(`/api/operations/byday?year=${year}&month=${month}&day=${day}&type=expenses`);
        dispatch(fetchOperationSuccess(data.data.operations.expenses));
        console.log("список операций расходы", data)
        } catch (error) {
            dispatch(fetchOperationError(error.message))
        }
}

export const fetchOperationIncome = (year, month, day) => async dispatch => {
    console.log("fetch запрос")
    dispatch(fetchOperationRequest());

    //асинхронный код
    try {
        const { data } = await axios.get(`/api/operations/byday?year=${year}&month=${month}&day=${day}&type=income`);
     dispatch(fetchOperationSuccess(data.data.operations.income));
        console.log("список операций доходы", data)
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
//     //     .post('api/operations', Operation)
//     //     .then(({ data }) => dispatch(addOperationSuccess(data)))
//     //     .catch(error => dispatch(addOperationError(error)));
// }

export const deleteOperation = operationId => dispatch => {
    dispatch(deleteOperationRequest());

    axios
        .delete(`api/operations/${operationId}`)
        .then(() => dispatch(deleteOperationSuccess(operationId)))
        .catch(error => dispatch(deleteOperationError(error)));
}

