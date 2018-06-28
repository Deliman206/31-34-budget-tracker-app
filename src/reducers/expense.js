const emptyState = [];

export default (state = emptyState, { type, payload }) => {
  switch (type) {
    case 'EXPENSE_CREATE':
      return [...state, payload];
    case 'EXPENSE_UPDATE': 
      return state.map(expense => (expense.id === payload.id ? payload : expense));
    case 'EXPENSE_DESTROY':
      return state.filter(expense => expense.id !== payload.id);
    default:
      return state;
  }
};
