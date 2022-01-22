import axios from 'axios';
import {
    fetchSummaryRequest,
    fetchSummarySuccess,
    fetchSummaryError
} from './summary-action'

export const fetchSummary = (operationsType) => async dispatch => {
    console.log("fetchSummary запрос")
    dispatch(fetchSummaryRequest());

    try {
        const { data } = await axios.get(`api/operations/bymonth?&type=${operationsType}`);
        dispatch(fetchSummarySuccess(data.data.MonthlyData));
        console.log("summary", data)
    } catch (error) {
            dispatch(fetchSummaryError(error.message))
        }
}


