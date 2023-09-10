import configureAppStore from "./store/configureStore";
import { bugAdded, bugResolved,getUnresolvedBugs,bugAssignedToUser,getBugsByUser} from "./store/bug";
import { projectCreated } from "./store/project";
import { addUser } from "./store/user";
// store.state = 1;

// console.log(store)
const store = configureAppStore();

store.subscribe(() => {
  console.log("store changed");
});

store.dispatch(addUser({name:"Abhimanyu"}));
store.dispatch(addUser({name:"Arjun"}));
store.dispatch(projectCreated({ description: "Project 1" }));
store.dispatch(bugAdded({ description: "Bug 1" }));
store.dispatch(bugAdded({ description: "Bug 2" }));
store.dispatch(bugAdded({ description: "Bug 3" }));
store.dispatch(bugResolved({ id: 1 }));
store.dispatch(bugAssignedToUser({bugId:1, userId:1}))

const x = getUnresolvedBugs(store.getState());
const y = getUnresolvedBugs(store.getState());
console.log(x===y)

const bug = getBugsByUser(1)(store.getState());
console.log(bug)

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
