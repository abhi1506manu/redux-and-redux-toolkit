import store  from "./store/configureStore";
import * as actionCreator from "./store/bug";
// store.state = 1;

// console.log(store)
// const store = configureStore();
// console.log(store)

store.subscribe(() => {
  console.log("store changed");
});
store.dispatch(actionCreator.bugAdded("Bug 1"));
store.dispatch(actionCreator.bugAdded("Bug 2"));
store.dispatch(actionCreator.bugAdded("Bug 3"));
store.dispatch(actionCreator.bugResolved("Bug 1"));

console.log(store.getState());

// import store from "./store";
// import { bugAdded, bugResolved } from "./actions";

// const unsubscribe = store.subscribe(()=>{
//     console.log("Store changed!",store.getState())
// })

// store.dispatch(bugAdded("Bug 1"))
// store.dispatch(bugResolved(1))

// unsubscribe()

// store.dispatch({
//     type:actions.BUG_REMOVED,
//     payload:{
//         id:1
//     }
// })

// console.log(store.getState())
