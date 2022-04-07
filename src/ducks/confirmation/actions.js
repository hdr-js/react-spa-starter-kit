import { createAction } from '../utils/actions';

import { TYPE_ASK_CONFIRMATION, TYPE_REMOVE_CONFIRMATION } from './types';

export const askConfirmation = createAction(TYPE_ASK_CONFIRMATION);
export const removeConfirmationDialog = createAction(TYPE_REMOVE_CONFIRMATION);
