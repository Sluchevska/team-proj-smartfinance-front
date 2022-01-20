import { createSelector } from '@reduxjs/toolkit';

export const getLoading = state => state.operations.loading;

export const getFilter = state => state.operations.filter;

export const getOperations = state => state.operations.items;


// const getVisibleOperations = createSelector([getAllOperations, getFilter], (operations, filter) => {
//   console.log(filter);
//   const normalizedFilter = filter.toLowerCase();
//   return operations.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
// });

// const operationsSelectors = {
//   getLoading,
//   getOperations,
//   getFilter,
//   // getVisibleOperations,
// };
// export default operationsSelectors;