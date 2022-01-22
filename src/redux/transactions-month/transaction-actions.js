import { createAction } from '@reduxjs/toolkit';


export const selectedDate = createAction('operations/selectedDate')

export const operations = createAction('operations/fetch')

export const operationsRequest = createAction('operations/Request');
export const operationsSuccess = createAction('operations/Success');
export const operationsError = createAction('operations/Error');


// export const totalExpense = createAction('operation/totalExpense')
//произвольный путь