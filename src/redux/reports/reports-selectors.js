export const getSelectedDate = state => state.reports.selectedDate;
export const getTotalExpense = state => state.reports.transactionsByMonth;

export const getCategoryExpenses = state =>
  state.reports.transactionsByMonth.CategoryExpenses;
export const getCategoryIncome = state =>
  state.reports.transactionsByMonth.CategoryIncome;

export const getDescriptionExpenses = state =>
  state.reports.transactionsByMonth.DescriptionExpenses;
export const getDescriptionIncome = state =>
  state.reports.transactionsByMonth.DescriptionIncome;

export const getCategory = state => state.reports.category;
export const getType = state => state.reports.type;
export const getLoading = state => state.reports.loading;
