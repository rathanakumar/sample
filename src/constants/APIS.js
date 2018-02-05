export const GET_METHOD = 'get';
export const POST_METHOD = 'post';
export const PUT_METHOD = 'put';
export const DELETE_METHOD = 'delete';
const isMock = false;
const api = isMock ? '' : '/api/v1';

// / end points
export default {
  GET_META_DATA: `${api}/metadata?type=<type>`,
  GET_CONTENT: `${api}/<type>/<modulename>`,
  MOCKJSON: '/sample.json',
  POST_FORM: '/wp-admin/admin-ajax.php',
};
