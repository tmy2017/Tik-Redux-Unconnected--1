import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from "./actionTypes";

let nextTodoId = 0;

//zzCmt: action we are dispatching just like https://redux.js.org/introduction/getting-started? zzQ
//  store.dispatch({ type: 'INCREMENT' })

// zzCmt: intrst that zzactions are actually zzfunction! so you pass thing INTO it, and he added
// somthing and put INTO zzstore! ((⚪️ zzp._51._y19.1222-2049 ))
/* function addtodo(content)
{
  return (
    {
      type: ADD_TODO,
      payload:{
        id: ++nextTodoId,
        content
      }
    }
  )
} */

export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    //zzCmt: zzQ content also follow this property value syntax? ((⚪️ zzp._51._y19.1222-1648))
    content
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
