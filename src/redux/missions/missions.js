const GET_MISSION = 'GET_MISSON';

const initialState = [];

export const getMission = (payload) => ({
  type: GET_MISSION,
  payload,
});

export const getMissionFromDatabae = () => async (dispatch) =>
  dispatch(
    getMission(
      await (await fetch('https://api.spacexdata.com/v3/missions')).json(),
    ),
  );

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSION:
      return action.payload;
    default:
      return state;
  }
};

export default missionReducer;
