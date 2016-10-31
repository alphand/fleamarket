/* eslint-disable import/prefer-default-export */

import * as types from './mutationTypes';

export const registerUser = ({ commit }, regoDetails) => {
  console.log('try my rego details', regoDetails); // eslint-disable-line
  commit(types.REGISTER_USER_REQUEST);
};
