import axios from 'axios';
import {
    fetchSummaryRequest,
    fetchSummarySuccess,
    fetchSummaryError
} from './summary-action'

axios.defaults.baseURL = 'https://team-proj-smartfinance-back.herokuapp.com';

export const fetchSummary = (operationsType) => async dispatch => {
    console.log("fetchSummary запрос")
    dispatch(fetchSummaryRequest());

    try {
        const { data } = await axios.get(`api/operations/bymonth?${operationsType}`);
        dispatch(fetchSummarySuccess(data.MonthlyData));
        console.log("summary", data)
    } catch (error) {
            dispatch(fetchSummaryError(error.message))
        }
}


