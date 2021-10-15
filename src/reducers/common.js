import {
  APP_LOAD,
  REDIRECT,
  DELETE_ARTICLE,
  ARTICLE_PAGE_UNLOADED,
  HOME_PAGE_UNLOADED,
} from '../constants/actionTypes';

const defaultState = {
  appName: 'Characters',
  token: null,
  viewChangeCounter: 0
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case APP_LOAD:
      return {
        ...state,
        token: action.token || null,
        appLoaded: true,
        currentUser: action.payload ? action.payload.user : null
      };
    case REDIRECT:
      return { ...state, redirectTo: null };
    case DELETE_ARTICLE:
      return { ...state, redirectTo: '/' };
    case ARTICLE_PAGE_UNLOADED:
    case HOME_PAGE_UNLOADED:
      return { ...state, viewChangeCounter: state.viewChangeCounter + 1 };
    default:
      return state;
  }
};
