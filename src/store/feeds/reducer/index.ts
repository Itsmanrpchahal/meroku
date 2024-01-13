import {produce} from 'immer';
import {Action} from '../actions';
import {ActionType} from '../actions-types';

interface RepositoriesStateInterface {
  loading: boolean;
  error: string | null;
  feedData:any;
}

const initialState = {
  loading: false,
  error: null,
  feedData:{}
};

/**
 * @param state
 * @param action
 */
const reducer = (
  state: RepositoriesStateInterface = initialState,
  action: Action,
): RepositoriesStateInterface =>
  produce(state, draft => {
    switch (action.type) {
      case ActionType.FEED:
        draft.loading = true;
        draft.error = null;
        draft.feedData = {}
        return draft;
      case ActionType.FEED_SUCCESS:
        draft.loading = false;
        draft.error = null;
       draft.feedData = action.payload;
        return draft;
      case ActionType.FEED_ERROR:
        draft.loading = false;
        draft.error = action.payload;
       draft.feedData = {}
        return draft;

      default:
        return draft;
    }
  });

export default reducer;