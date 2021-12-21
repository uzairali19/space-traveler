const POST_RESERVE = 'POST_RESERVE';
const DELETE_RESERVE = 'DELETE_RESERVE';

const initialState = [];

export const postReserve = (payload) => ({
  type: POST_RESERVE,
  payload,
});

export const deleteReserve = (payload) => ({
  type: DELETE_RESERVE,
  payload,
});

const reserveReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_RESERVE:
      return [...state, action.payload];
    case DELETE_RESERVE:
      return [...state.filter((res) => res.id !== action.payload)];
    default:
      return state;
  }
};

export default reserveReducer;
