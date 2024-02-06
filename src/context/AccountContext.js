import React from 'react';
import createDataContext from './createDataContext';

const accountReducer = (state, action) => {
  switch(action.type) {
    case 'add_account':
      return [...state, { id: Math.floor(Math.random() * 99999), name: `account #${state.length + 1}`}];
    case 'get_accounts':
      return {
        ...state,
        accounts: action.payload
      };
    default:
      return state;
  }
}

const addAccount = (dispatch) => {
  return () => {
    dispatch({ type: 'add_account' })
  }
};

export const { Context, Provider } = createDataContext(
  accountReducer, 
  { addAccount }, 
  []
);  