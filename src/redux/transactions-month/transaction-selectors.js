export const getSelectedDate = state => state.operations.selectedDate;
export const getTotalExpense = state => state.operations.transactionsByMonth.monthTotal;

export const getCategoryExpenses = state => state.operations.transactionsByMonth.CategoryExpenses;
export const getCategoryIncome = state => state.operations.transactionsByMonth.CategoryIncome;

export const getDescriptionExpenses = state => state.operations.transactionsByMonth.CategoryExpenses;
export const getDescriptionIncome = state => state.operations.transactionsByMonth.DescriptionIncome;

