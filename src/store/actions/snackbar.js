import * as types from '../types';

export const showSnackbarAction = (message , snacknarType) => {
  return {
  type: types.SHOW_SNACKBAR, 
  message ,
  snacknarType  
  };
};

export const hideSnackbarAction = () => {
  return {
   type: types.HIDE_SNACKBAR 
  };
};