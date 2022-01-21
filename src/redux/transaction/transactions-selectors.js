// export const getAllTransactions = state =>
//     state.transactions.transactionsByMonth;

// export const getIncomeTransactions = state => {
//     return state.transactions.transactionsByMonth.filter(item => item.isIncome);
// };

// export const getExpenseTransactions = state => {
//     return state.transactions.transactionsByMonth.filter(item => !item.isIncome);
// };


export const getTransactionsIsLoading = state => state.transactions.isLoading;

export const getTransactionsError = state => state.transactions.error;

export const getSelectedDate = state => state.transactions.selectedDate;
export const getSelectedMonth = state => state.transactions.selectedDate.month;
export const getSelectedYear = state => state.transactions.selectedDate.year;