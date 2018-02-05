import { fetchQuestions } from '../../api/QuestionsApi';
import { Constants } from '../../constants/Constants';

/* @desc It fetches top banner's background image url.
 * - dispatch the "FETCH_BACKGROUND_IMAGE" for update the store.
 * API URL: api/home/currentRates
 * @params
 *  - dispatch - Dispatch
 * @return
 *  - promise
 */
export function getQuestions(moduleName, pageNo) {
  return dispatch => fetchQuestions(moduleName, pageNo)
   .then((response) => {
     dispatch({
       type: Constants.FETCH_QUESTIONS_SUCCESS,
       payload: response,
     });
   }).catch((error) => {
     dispatch({
       type: Constants.FETCH_QUESTIONS_ERROR,
       payload: error,
     });
   });
}
