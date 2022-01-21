export const getOperations = state => state.transOperations.operationsByDate;
export const getSelectedDate = state => state.transOperations.selectedDate;
//export const getTransactionsIsLoading = state => state.transactions.isLoading;
//export const getTransactionsError = state => state.transactions.error;
//export const getSelectedDate = state => state.transOperations.selectedDate;
export const getSelectedMonth = state => state.transOperations.selectedDate.month;
export const getSelectedYear = state => state.transOperations.selectedDate.year;
//export const getOperations = state => state.transOperations.operationsByDate;

