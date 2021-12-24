const GET_MISSION = 'space-traveler/scr/redux/missions/GET_MISSON';

const initialState = [];

export const getMission = (payload) => ({
  type: GET_MISSION,
  payload,
});

export const getMissionFromDatabae = () => async (dispatch) => {
  dispatch(
    getMission(
      await (await fetch('https://api.spacexdata.com/v3/missions')).json(),
    ),
  );
};

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSION:
      return action.payload.map((mission) => ({
        mission_name: mission.mission_name,
        mission_id: mission.mission_id,
        reserved: false,
        description: mission.description,
      }));
    default:
      return state;
  }
};

export default missionReducer;
