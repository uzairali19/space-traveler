const api = 'https://api.spacexdata.com/v3/rockets';
const GET_ROCKETS = 'GET_ROCKETS';
const initialState = [];

export const getRockets = () => async (res) => {
  const data = await fetch(api).then((dat) => dat.json());
  if (data) {
    res({
      type: GET_ROCKETS,
      payload: data,
    });
  }
};

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return action.payload;
    default:
      return state;
  }
};

export default rocketReducer;
