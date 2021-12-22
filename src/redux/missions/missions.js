const GET_MISSION = 'space-traveler/scr/redux/missions/GET_MISSON';
const BE_A_MEMBER = 'space-traveler/scr/redux/missions/BE_A_MEMBER';
const LEAVE_MISSION = 'space-traveler/scr/redux/missions/LEAVE_MISSION';

const initialState = [];

export const getMission = (payload) => ({
  type: GET_MISSION,
  payload,
});

export const beMemeber = (payload) => ({
  type: BE_A_MEMBER,
  payload,
});

export const removeMemebership = (payload) => ({
  type: LEAVE_MISSION,
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
        isMember: false,
        mission_id: mission.mission_id,
        mission_name: mission.mission_name,
        description: mission.description,
      }));
    case BE_A_MEMBER:
      return state.map((missions) => {
        if (missions.mission_id === action.payload) {
          return {
            ...missions,
            isMember: true,
          };
        }
        return missions;
      });
    case LEAVE_MISSION:
      return state.map((missions) => {
        if (missions.mission_id === action.payload) {
          return {
            ...missions,
            isMember: false,
          };
        }
        return missions;
      });
    default:
      return state;
  }
};

export default missionReducer;
