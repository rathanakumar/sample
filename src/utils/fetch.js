import { baseUrl } from './config';
import {POST_METHOD, GET_METHOD, PUT_METHOD, DELETE_METHOD} from '../constants/APIS'; // eslint-disable-line

/*
 * Sending a GET request.
 */
export const fetchURL = (url, urlPrefix = baseUrl) => fetch(
    urlPrefix.concat(url),
    Object.assign({}, {
      headers: {
        Accept: 'application/json; charset=UTF-8',
      },
      mode: 'cors',
    }),
);

/*
 * Sending a GET request to JSON API.
 * @params
 *  - url - string
 *  - urlPrefix - string
 * @return
 *  - promise
 */
export const fetchToJson = (url, urlPrefix = baseUrl) => {
  const fetchData = fetchURL(url, urlPrefix).then((res) => {
    let response = null;
    if (res.ok) {
      response = res.json();
    } else if (!res.ok) {
      response = Promise.reject(res.statusText);
    }
    return response;
  });
  return fetchData;
};

/*
 * Sending a POST request.
 * @params
 *  - url - string
 *  - body - object
 *  - urlPrefix - string
 * @return
 *  - promise
 */
export const doPost = (url, body, urlPrefix = baseUrl) => fetch(
    urlPrefix.concat(url),
    Object.assign({}, {
      method: POST_METHOD,
      headers: {},
      body: JSON.stringify(body),
    }),
);

/*
 * Sending a PUT request.
 * @params
 *  - url - string
 *  - body - object
 *  - urlPrefix - string
 * @return
 *  - promise
 */
export const doPut = (url, body, urlPrefix = baseUrl) => fetch(
    urlPrefix.concat(url),
    Object.assign({}, {
      method: PUT_METHOD,
      headers: {},
      body: JSON.stringify(body),
    }),
);

/*
 * Sending a DELTE request.
 * @params
 *  - url - string
 *  - body - object
 *  - urlPrefix - string
 * @return
 *  - promise
 */
export const doDelete = (url, body, urlPrefix = baseUrl) => fetch(
    urlPrefix.concat(url),
    Object.assign({}, {
      method: DELETE_METHOD,
      headers: {},
      body: JSON.stringify(body),
    }),
);
