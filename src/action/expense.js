import uuid from 'uuid';

const create = ({ categoryId, name, price }) => ({
  type: 'EXPENSE_CREATE',
  payload: {
    id: uuid(),
    categoryId,
    name,
    price: Number(price),
    date: new Date(),
  },
});

const update = expense => ({
  type: 'EXPENSE_UPDATE',
  payload: expense,
});

const destroy = expense => ({
  type: 'EXPENSE_DESTROY',
  payload: expense,
});

export { create, update, destroy };
