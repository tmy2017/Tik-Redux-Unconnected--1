import { ADD_TODO, TOGGLE_TODO } from "../actionTypes";

const initialState = {
  allIds: [],
  byIds: {}
};

// zzCmt: intrst no name export
export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      //zzCmt: action really "describes" what is happening, but it's reducer to do the zzstate manipulation ((ℹ️ zzpp._51._y19.1222-1953))
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false
          }
        }
      };
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed
          }
        }
      };
    }
    default:
      return state;
  }
}
