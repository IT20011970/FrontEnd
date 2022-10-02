import {createContext, FC} from "react"
import * as React from "react"
import {ServiceCallData2} from "../Types/Types"

export  interface IService{
    getServiceCall():Promise<ServiceCallData2[]>
}

export const ServiceContext =createContext<IService|undefined>(undefined)

const Service:FC =({children}:any)=>{
    const Service ={
        async getServiceCall() : Promise<ServiceCallData2[]>{
            const requestOptions = {
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
            };
           const data= fetch(process.env.React_App_BackendUrl+'/service-calls/service',requestOptions)
                .then(response=>{ return response.json()})
             
            return data
        }
    }
    return (
        <ServiceContext.Provider value={Service}>
        {children}
          </ServiceContext.Provider>
    )
}

export default Service;
