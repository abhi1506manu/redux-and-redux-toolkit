import axios from "axios"
import * as actions from "../api" 

const api = ({dispatch})=> next => async action=>{
    if(action.type !== actions.apiCallBegan.type){
        return next(action);
    }

    next(action)

    const {url,method,data,onSucess,onError} = action.payload;

    try {
        const response = await axios.request({
            baseURL:"http://localhost:5000/api",
            url,
            method,
            data
        })

        //general
        dispatch(actions.apiCallSuccess(response.data))

        if(onSucess) dispatch({type:onSucess, payload:response.data})
        
    } catch (error) {
        //General
        dispatch(actions.apicallFail(error));

        //Specific

        if(onError) dispatch({type:onError,payload:error})
        
        
    }

    

}

export default api