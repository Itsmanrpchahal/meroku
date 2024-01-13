import {Dispatch} from 'redux';
import {ActionType} from '../actions-types';
import {Action} from '../actions';
import {apiUri} from '../../../service/apiEndPoints';
import service from '../../../service/axios';
/**
 *
 * @param data
 */
export const feed = () => {

  return async (dispatch: Dispatch<Action | any>) => {
    dispatch({
      type: ActionType.FEED,
    });
    try {
      const response = await service.get(apiUri.feedAPI);
      if (response?.data?.success) {
        dispatch({
            type: ActionType.FEED_SUCCESS,
            payload: response.data,
        })
        return response;
    }
 
      return response;
    } catch (e: any) {
      dispatch({
        type: ActionType.FEED_ERROR,
        payload: 'Something wents wrong',
      });
    }
  };
};
