export const getSelectedDate = state => state.operations.selectedDate;
export const getTotalExpense = state => state.operations.transactionsByMonth;

export const getCategoryExpenses = state =>
  state.operations.transactionsByMonth.CategoryExpenses;
export const getCategoryIncome = state =>
  state.operations.transactionsByMonth.CategoryIncome;

export const getDescriptionExpenses = state =>
  state.operations.transactionsByMonth.DescriptionExpenses;
export const getDescriptionIncome = state =>
  state.operations.transactionsByMonth.DescriptionIncome;

export const getCategory = state => state.operations.category;
export const getType = state => state.operations.type;
export const getLoading = state => state.operations.loading;