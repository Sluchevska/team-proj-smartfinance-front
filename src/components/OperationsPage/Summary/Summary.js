import React, {useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import useMediaQuery from '@mui/material/useMediaQuery';
import { fetchSummary } from '../../../redux/summary/summary-operations';
import { getOperationsByMonth } from '../../../redux/summary/summary-selectors';
import { getOperations} from '../../../redux/transoperations/operations-selectors';
import {
    Wrapper,
    Title,
    List,
    ListItem
} from './Summary.styled';

const months = {
    '01' : 'январь',
    '02' : 'февраль',
    '03' : 'март',
    '04' : 'апрель',
    '05' : 'май',
    '06' : 'июнь',
    '07' : 'июль',
    '08' : 'август',
    '09' : 'сентябрь',
    '10' : 'октябрь',
    '11' : 'ноябрь',
    '12' : 'декабрь'
}

function Summary() {
    const dispatch = useDispatch();
    const location = useLocation();
    const operations = useSelector(getOperations);
    const data = useSelector(getOperationsByMonth);
    const matches = useMediaQuery('(min-width:768px)');
    const monthToLongName = () => new Date().toLocaleString('ru', {       
        month: 'long'       
    });

    useEffect(() => {
        if (location.pathname === '/expenses') {
            dispatch(fetchSummary('expenses'));
        }
        if (location.pathname === '/income') {
            dispatch(fetchSummary('income'));
        }
    }, [dispatch, location.pathname, operations]);
    

    
    if (matches === true) {
        return (
            <Wrapper>
                <Title>СВОДКА</Title>
                <List>
                    {data.map((data)=> (
                    <ListItem key={data.month}  >
                        <p>{monthToLongName(data.month)}</p>
                        <p>{data.total}</p>
                        </ListItem>
                    ))}
                </List>
            </Wrapper>
        )
    }
    return null;

}
Summary.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    ),
};

export default Summary;