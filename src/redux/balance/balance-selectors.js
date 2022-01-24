const getBalanceFromState = state => state.balance.balance;
const isGetFromState = state => state.balance.isGetBalance;

const selectors = { getBalanceFromState, isGetFromState };

export default selectors;
