import * as types from '../constants/actionTypes';

export function playerReady(event) {
  return {type: types.PLAYER_READY, event};
}