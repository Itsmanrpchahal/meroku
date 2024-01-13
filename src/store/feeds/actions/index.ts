import {ActionType} from '../actions-types';

interface FeedAction {
  type: ActionType.FEED;
}

interface FeedSuccessAction {
  type: ActionType.FEED_SUCCESS;
  payload: any;
}


interface FeedErrorAction {
  type: ActionType.FEED_ERROR;
  payload: any;
}



export type Action =
  | FeedAction
  | FeedSuccessAction
  | FeedErrorAction