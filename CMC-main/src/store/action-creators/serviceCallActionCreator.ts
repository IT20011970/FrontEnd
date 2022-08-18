import axios from 'axios';
import { Dispatch } from 'redux';
import { ServiceCallActionType } from '../action-types';
import {
  ServiceCallAction,
  ServiceCallData,
  ServiceCallResponseData,
} from '../actions';

export const createServiceCall = (serviceCall: ServiceCallData) => {
  const userData = JSON.parse(localStorage.getItem('user') || '{}');

  return async (dispatch: Dispatch<ServiceCallAction>) => {
    dispatch({
      type: ServiceCallActionType.SERVICE_CALL_CREATE_REQUEST,
    });

    try {
      const { data } = await axios({
        url: '/service-call-v1/servicecalls',
        method: 'POST',
        headers: {
          Accept: 'application',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + userData.access,
        },
        data: JSON.stringify(serviceCall),
      });

      dispatch({
        type: ServiceCallActionType.SERVICE_CALL_CREATE_REQUEST_SUCCESS,
        payload: data as ServiceCallResponseData,
      });
    } catch (err: any) {
      dispatch({
        type: ServiceCallActionType.SERVICE_CALL_CREATE_REQUEST_FAIL,
        payload: err.response.data.message,
      });
    }
  };
};

export const getAllServiceCalls = () => {
  const userData = JSON.parse(localStorage.getItem('user') || '{}');

  return async (dispatch: Dispatch<ServiceCallAction>) => {
    dispatch({
      type: ServiceCallActionType.SERVICE_CALL_GET_ALL_REQUEST,
    });
    try {
      const { data } = await axios({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'GET',
        headers: {
          Accept: 'application',
          'Content-Type': 'application/json',
        },
      });

      console.log(data);

      dispatch({
        type: ServiceCallActionType.SERVICE_CALL_GET_ALL_REQUEST_SUCCESS,
        payload: data as ServiceCallData[],
      });
    } catch (err: any) {
      dispatch({
        type: ServiceCallActionType.SERVICE_CALL_GET_ALL_REQUEST_FAIL,
        payload: err.response.data.message,
      });
    }
  };
};

export const getServiceCallById = (serviceCallId: string) => {
  const userData = JSON.parse(localStorage.getItem('user') || '{}');

  return async (dispatch: Dispatch<ServiceCallAction>) => {
    dispatch({
      type: ServiceCallActionType.SERVICE_CALL_GET_REQUEST,
    });
    try {
      const { data }: any = await axios({
        url: `service-call-v1/servicecalls/${serviceCallId}`,
        method: 'GET',
        headers: {
          Accept: 'application',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + userData.access,
        },
      });

      dispatch({
        type: ServiceCallActionType.SERVICE_CALL_GET_REQUEST_SUCCESS,
        payload: data as any,
      });
    } catch (err: any) {
      dispatch({
        type: ServiceCallActionType.SERVICE_CALL_GET_REQUEST_FAIL,
        payload: err.response?.data.message,
      });
    }
  };
};
