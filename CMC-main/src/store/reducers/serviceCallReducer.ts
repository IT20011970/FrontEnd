import { ServiceCallActionType } from '../action-types';
import { ServiceCallAction } from '../actions';

interface ServiceCallState {
  loading?: boolean;
  error?: string | null;
  data?: any | null;
}

const initialState = {
  loading: false,
  error: null,
  data: null,
};

// interface BrandSingleState {
//   brand_loading?: boolean;
//   brand_error?: string | null;
//   brand_data?: any | null;
// }

// const initialSingleState = {
//   brand_loading: false,
//   brand_error: null,
//   brand_data: null,
// };

export const serviceCallCreateReducer = (
  state: ServiceCallState = initialState,
  action: ServiceCallAction
): ServiceCallState => {
  switch (action.type) {
    case ServiceCallActionType.SERVICE_CALL_CREATE_REQUEST:
      return { loading: true, data: null, error: null };
    case ServiceCallActionType.SERVICE_CALL_CREATE_REQUEST_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ServiceCallActionType.SERVICE_CALL_CREATE_REQUEST_FAIL:
      return { loading: false, error: action.payload, data: null };
    default:
      return state;
  }
};

export const serviceCallGetAllReducer = (
  state: ServiceCallState = initialState,
  action: ServiceCallAction
): ServiceCallState => {
  switch (action.type) {
    case ServiceCallActionType.SERVICE_CALL_GET_ALL_REQUEST:
      return { loading: true, data: null, error: null };
    case ServiceCallActionType.SERVICE_CALL_GET_ALL_REQUEST_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ServiceCallActionType.SERVICE_CALL_GET_ALL_REQUEST_FAIL:
      return { loading: false, error: action.payload, data: null };
    default:
      return state;
  }
};

export const serviceCallGetReducer = (
  state: ServiceCallState = initialState,
  action: ServiceCallAction
): ServiceCallState => {
  switch (action.type) {
    case ServiceCallActionType.SERVICE_CALL_GET_REQUEST:
      return { loading: true, data: null, error: null };
    case ServiceCallActionType.SERVICE_CALL_GET_REQUEST_SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload,
      };
    case ServiceCallActionType.SERVICE_CALL_GET_REQUEST_FAIL:
      return {
        loading: false,
        error: action.payload,
        data: null,
      };
    default:
      return state;
  }
};
