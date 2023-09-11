import configureAppStore from "./store/configureStore";

const store = configureAppStore();

store.dispatch((dispatch,getState)=>{
  //call an api
  //when the promise resolve => dispatch()
  //if the promise rejected => dispatch()
  store.dispatch({type:'bugReceived', bugs:[1,2,3]})
  console.log(getState())

})

