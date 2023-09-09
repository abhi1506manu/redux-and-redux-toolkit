import configureAppStore  from "./store/configureStore";
import * as actionCreator from "./store/bug";
import { projectCreated } from "./store/project";
// store.state = 1;

// console.log(store)
const store = configureAppStore();

store.subscribe(() => {
  console.log("store changed");
});

store.dispatch(projectCreated({description:"Project 1"}))
store.dispatch(actionCreator.bugAdded({description:"Bug 1"}));
store.dispatch(actionCreator.bugAdded({description:"Bug 2"}));
store.dispatch(actionCreator.bugAdded({description:"Bug 3"}));
store.dispatch(actionCreator.bugResolved({id:1}));

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
