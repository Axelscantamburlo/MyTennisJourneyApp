import { createStore } from 'redux';
import { combineReducers } from 'redux';

// Définir les actions
export const setName = (name) => ({
  type: 'SET_NAME',
  payload: name,
});

export const setAge = (age) => ({
  type: 'SET_AGE',
  payload: age,
});

export const setHeight = (sexe) => ({
  type: 'SET_SEXE',
  payload: sexe,
});

// Définir les reducers
const nameReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_NAME':
      return action.payload;
    default:
      return state;
  }
};

const ageReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_AGE':
      return action.payload;
    default:
      return state;
  }
};

const sexeReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEXE':
      return action.payload;
    default:
      return state;
  }
};

// Combinez les reducers en un seul
const rootReducer = combineReducers({
  name: nameReducer,
  age: ageReducer,
  sexe: sexeReducer,
});

// Créez le store Redux
const store = createStore(rootReducer);

export default store;
