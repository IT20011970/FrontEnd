import {createContext, FC} from "react"
import * as React from "react"
import {CustomerList, Item, ServiceCallData2} from "../Types/Types"

export  interface IService{
    getServiceCall():Promise<ServiceCallData2[]>
    getCustomerList():Promise<CustomerList[]>
    getItemList():Promise<Item[]>
}

export const ServiceContext =createContext<IService|undefined>(undefined)

const Service:FC =({children}:any)=>{
    //GET 
    const Service ={
        async getServiceCall() : Promise<ServiceCallData2[]>{
            const requestOptions = {
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
            };
           const data= fetch(process.env.React_App_BackendUrl+'/service-calls/service',requestOptions)
                .then(response=>{ return response.json()})
             
            return data
        },
        async getCustomerList()  : Promise<CustomerList[]> {
            const requestOptions = {
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
            };
            const data= fetch('http://localhost:3000/service-calls/list', requestOptions)
                .then(response => {return response.json()})
            return data
        },
        async getItemList()  : Promise<Item[]> {
            const requestOptions = {
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
            };
            const data= fetch('http://localhost:3000/service-calls/itemlist', requestOptions)
                .then(response => {return response.json()})
            return data
        }
    }
    return (
        <ServiceContext.Provider value={Service} >
        {children}
          </ServiceContext.Provider>
    )
}

export default Service;
