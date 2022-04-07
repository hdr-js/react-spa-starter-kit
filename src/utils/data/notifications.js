import { enqueueNotification, removeNotification } from '../../redux/actions/notification';

export const LISTING_FAILURE = 'An error occurred while trying to populate list';
export const STATUS_CHANGED_SUCCESS = 'Status has been changed successfully';
export const STATUS_CHANGED_FAILED = 'Order status could not be changed at this moment';
export const DETAILS_UPDATED_SUCCESS = 'Details have been updated successfully';
export const DETAILS_UPDATED_FAILED = 'An error occurred while trying to update details';
export const ORDER_ITEMS_UPDATED_SUCCESS = 'Order items updated successfully';
export const ORDER_ITEMS_UPDATED_FAILED = 'An error occurred while trying to update order items';

export const notify = (variant, message, dispatch) => {
  dispatch(
    enqueueNotification({
      key: new Date().getTime(),
      message,
      options: {
        variant,
        onClose: key => dispatch(removeNotification(key)),
      },
    }),
  );
};

export const uiNotify = ({ variant, message }) => dispatch => {
  dispatch(
    enqueueNotification({
      key: new Date().getTime(),
      message,
      options: {
        variant,
        onClose: key => dispatch(removeNotification(key)),
      },
    }),
  );
};
