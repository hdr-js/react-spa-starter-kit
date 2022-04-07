import { createApiConstants } from '../utils/constant';

export const NAMESPACE = 'AUTH';

export const TYPE_LOGIN = createApiConstants(NAMESPACE, 'LOGIN');
export const TYPE_LOGOUT = `${NAMESPACE}/LOGOUT`;
