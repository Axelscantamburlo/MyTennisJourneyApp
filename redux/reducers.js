import {
  SET_USER_NAME,
  SET_USER_SEXE,
  SET_USER_AGE,
  SET_USER_SIZE,
  SET_USER_WEIGHT,
  SET_USER_LEVEL_PLAYEUR,
  SET_USER_RANKING,
  SET_USER_RANKING_GOAL,
} from "./actions";

const initialState = {
  name: "",
  sexe: "",
  age: 25,
  size: 175,
  weight: 80,
  levelPlayeur: "",
  ranking: 1,
  rankingGoal: 1
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_NAME: {
      return { ...state, name: action.payload };
    }
    case SET_USER_SEXE: {
      return { ...state, sexe: action.payload };
    }
    case SET_USER_AGE: {
      return { ...state, age: action.payload };
    }
    case SET_USER_SIZE: {
      return { ...state, size: action.payload };
    }
    case SET_USER_WEIGHT: {
      return { ...state, weight: action.payload };
    }
    case SET_USER_LEVEL_PLAYEUR: {
      return { ...state, levelPlayeur: action.payload };
    }
    case SET_USER_RANKING: {
      return { ...state, ranking: action.payload };
    }
    case SET_USER_RANKING_GOAL: {
      return { ...state, rankingGoal: action.payload };
    }
    default:
      return state;
  }
};

export default userReducer;