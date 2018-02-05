import { doGet } from '../utils/fetch';
import envConfig from 'envConfig';
import { Constants } from '../constants/Constants';

/*
 * It Returns the Contacts information
   @ params
    - type - string
    - modulename - string

   @ return
    - promise
 */
export const fetchQuestions = (modulename, pageNo) => {
  const URL = envConfig.getQuestions.replace('<modulename>', modulename).replace('<pageNo>', pageNo);
  return doGet(URL);
};
