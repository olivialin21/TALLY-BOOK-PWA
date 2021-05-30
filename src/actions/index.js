import {
  SET_DATE,
  CHOOSE_CLASS,
  ADD_RECORD,
  REMOVE_RECORD
} from "../utils";

export const setDate = (dispatch, date) => {
  dispatch({
    type: SET_DATE,
    payload: date
  });
};

export const chooseClass = (dispatch, aClass) => {
  dispatch({
    type: CHOOSE_CLASS,
    payload: aClass
  });
};


export const addRecord = (dispatch, date, aClass, ps, cost) => {
  const record = {
    date,
    aClass,
    ps,
    cost,
  };
  dispatch({
    type: ADD_RECORD,
    payload: record
  });
};

export const removeRecord = (dispatch, record) => {
  dispatch({
    type: REMOVE_RECORD,
    payload: record,
  });
};