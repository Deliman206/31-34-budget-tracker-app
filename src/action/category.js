import uuid from 'uuid';

const create = ({ title, price }) => ({
  type: 'CATEGORY_CREATE',
  payload: {
    title,
    id: uuid(),
    createdOn: new Date(),
    price,
  },
});

const update = category => ({
  type: 'CATEGORY_UPDATE',
  payload: category,
});

const remove = category => ({
  type: 'CATEGORY_REMOVE',
  payload: category,
});

export { create, update, remove };
