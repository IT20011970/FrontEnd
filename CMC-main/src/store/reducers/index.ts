import { combineReducers } from 'redux';
import {
  serviceCallCreateReducer,
  serviceCallGetAllReducer,
  serviceCallGetReducer,
} from './serviceCallReducer';

const reducers = combineReducers({
  serviceCallCreate: serviceCallCreateReducer,
  serviceCallGetAll: serviceCallGetAllReducer,
  serviceCallGet: serviceCallGetReducer,
});

// reset the state of a redux store
const rootReducer = (state: any, action: any) => {
  // if (action.type === UserActionType.USER_LOGOUT) {
  //   state = undefined;
  // }
  return reducers(state, action);
};

export default rootReducer;

export type RootState = ReturnType<typeof reducers>;
