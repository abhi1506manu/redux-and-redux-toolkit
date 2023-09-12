import configureAppStore from "./store/configureStore";
import * as actions from "./store/api"

const store = configureAppStore();

store.dispatch(
  actions.apiCallBegan({
    url:"/bugs",
    onSucess:"bugReceived"  
}))


