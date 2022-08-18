import { ServiceCallActionType } from '../action-types';

interface ServiceCallCreateRequestAction {
  type: ServiceCallActionType.SERVICE_CALL_CREATE_REQUEST;
}

interface ServiceCallCreateRequestSuccessAction {
  type: ServiceCallActionType.SERVICE_CALL_CREATE_REQUEST_SUCCESS;
  payload: ServiceCallResponseData;
}

interface ServiceCallCreateRequestFailAction {
  type: ServiceCallActionType.SERVICE_CALL_CREATE_REQUEST_FAIL;
  payload: string;
}

interface ServiceCallGetAllRequestAction {
  type: ServiceCallActionType.SERVICE_CALL_GET_ALL_REQUEST;
}

interface ServiceCallGetAllRequestSuccessAction {
  type: ServiceCallActionType.SERVICE_CALL_GET_ALL_REQUEST_SUCCESS;
  payload: ServiceCallData[];
}

interface ServiceCallGetAllRequestFailAction {
  type: ServiceCallActionType.SERVICE_CALL_GET_ALL_REQUEST_FAIL;
  payload: string;
}

interface ServiceCallGetRequestAction {
  type: ServiceCallActionType.SERVICE_CALL_GET_REQUEST;
}

interface ServiceCallGetRequestSuccessAction {
  type: ServiceCallActionType.SERVICE_CALL_GET_REQUEST_SUCCESS;
  payload: ServiceCallData;
}

interface ServiceCallGetRequestFailAction {
  type: ServiceCallActionType.SERVICE_CALL_GET_REQUEST_FAIL;
  payload: string;
}

export type ServiceCallAction =
  | ServiceCallCreateRequestAction
  | ServiceCallCreateRequestSuccessAction
  | ServiceCallCreateRequestFailAction
  | ServiceCallGetAllRequestAction
  | ServiceCallGetAllRequestSuccessAction
  | ServiceCallGetAllRequestFailAction
  | ServiceCallGetRequestAction
  | ServiceCallGetRequestSuccessAction
  | ServiceCallGetRequestFailAction;

export interface ServiceCallResponseData {
  data: ServiceCallData;
  message: string;
  status: boolean;
}

export interface ServiceCallData {
  title: string;
  userId: string;
  body: string;
  id: number;
}
