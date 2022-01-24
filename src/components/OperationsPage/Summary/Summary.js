import React, {useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import useMediaQuery from '@mui/material/useMediaQuery';
import { fetchSummary } from '../../../redux/summary/summary-operations';
import { getOperationsByMonth } from '../../../redux/summary/summary-selectors';
import { getOperations } from '../../../redux/transoperations/operations-selectors';
import formatSum from '../../../utils/formatSum';

import {
    Wrapper,
    Title,
    List,
    ListItem,
    BottomKapusta
} from './Summary.styled';


function Summary() {
    const dispatch = useDispatch();
    const location = useLocation();
    const operations = useSelector(getOperations);
    const data = useSelector(getOperationsByMonth);
    const matches = useMediaQuery('(min-width:768px)');
    function monthToName(data) {
        const monthName = new Date(data).toLocaleString('ru', {
            month: 'long'
        });
        return monthName;
    }

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
            <>
            <Wrapper>
                <Title>СВОДКА</Title>
                <List>
                    {data.map((data)=> (
                    <ListItem key={data.month}  >
                        <p>{monthToName(data.month)}</p>
                        <p>{formatSum(data.total)}</p>
                    </ListItem>
                    ))}
                </List>
               
            </Wrapper>
             <BottomKapusta/>
            </>
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