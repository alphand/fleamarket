import * as types from './mutationTypes';

export const registerUser = ({ commit }, regoDetails ) => {
  commit(types.REGISTER_USER_REQUEST);
}
