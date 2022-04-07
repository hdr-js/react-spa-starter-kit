import { createAction, createApiAction } from '../utils/actions';
import api from './api';
import { TYPE_LOGIN, TYPE_LOGOUT } from './types';

export const authLogin = createApiAction(TYPE_LOGIN, api.login);
export const authLogout = createAction(TYPE_LOGOUT);
