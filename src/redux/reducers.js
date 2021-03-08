import { ACTION_EATING, ACTION_PLAYING } from './actionTypes';

export const activeState = (state, action) => {
    switch(action.type) {
        case ACTION_EATING:
            return {
                activity: 'eating'
            }

        case ACTION_PLAYING:
            return {
                activity: 'playing'
            }

        default: 
            return state
    }

}