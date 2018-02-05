import { Constants } from '../../constants/Constants';

export default (state = {}, action) => {
  switch (action.type) {
    case Constants.FETCH_QUESTIONS_SUCCESS:
      return {
        ...state,
        questions: action.payload.questions,
      }
    case Constants.FETCH_QUESTIONS_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state;
  }
};
