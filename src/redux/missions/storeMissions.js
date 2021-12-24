const ADD_MISSIONS = 'space-traveler/scr/redux/missions/ADD_MISSON';
const REMOVE_MISSIONS = 'space-traveler/scr/redux/missions/REMOVE_MISSON';

const initialState = [];

export const addMission = (payload) => ({
  type: ADD_MISSIONS,
  payload,
});

export const leaveMission = (payload) => ({
  type: REMOVE_MISSIONS,
  payload,
});

const add_remove_reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MISSIONS:
      return [...state, action.payload];
    case REMOVE_MISSIONS:
      return [...state.filter((mission) => mission.id !== action.payload)];
    default:
      return state;
  }
};

export default add_remove_reducer;
