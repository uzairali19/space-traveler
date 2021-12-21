const GET_MISSION = 'GET_MISSON';
const BE_A_MEMBER = 'BE_A_MEMBER';
const LEAVE_MISSION = 'LEAVE_MISSION';

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

export const getMissionFromDatabae = () => async (
  dispatch, // dispatch( //   getMission( //     await (await fetch('https://api.spacexdata.com/v3/missions')).json(), //   ), // );
) => {
  const req = await fetch('https://api.spacexdata.com/v3/missions');
  const res = await req.json();
  res.map((data) => {
    data.isMember = false;
    return data;
  });
  dispatch(getMission(res));
};

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSION:
      return action.payload;
    case BE_A_MEMBER:
      return [...state];
    case LEAVE_MISSION:
      return [...state];
    default:
      return state;
  }
};

export default missionReducer;
