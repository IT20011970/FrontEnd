import {createContext, FC} from "react"
import * as React from "react"
import {CustomerList, ExpencesType, Item, ServiceCallData2, Solutions} from "../Types/Types"
import {now} from "moment"

export  interface IService{
    getServiceCall():Promise<ServiceCallData2[]>
    getCustomerList():Promise<CustomerList[]>
    getItemList():Promise<Item[]>
    getSolutions():Promise<Solutions[]>
    addSolutions(Data:any):Promise<Solutions[]>
    addSchedule(Data:any):Promise<any[]>
    getServiceCallDocuments():Promise<ServiceCallData2[]>
    getExpences():Promise<ExpencesType[]>
    passValue(Data:any):Promise<any[]>

}

export const ServiceContext =createContext<IService|undefined>(undefined)

const Service:FC =({children}:any)=>{
    //GET
    const Service = {
        async getServiceCall(): Promise<ServiceCallData2[]> {
            const requestOptions = {
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
            };
            const data = fetch(process.env.React_App_BackendUrl + '/service-calls/service', requestOptions)
                .then(response => {
                    return response.json()
                })

            return data
        },

        async getServiceCallDocuments(): Promise<ServiceCallData2[]> {
            const requestOptions = {
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
            };
            const data = fetch(process.env.React_App_BackendUrl + '/service-calls/service-documents', requestOptions)
                .then(response => {
                    return response.json()
                })

            return data
        },

        async getSolutions(): Promise<Solutions[]> {
            const requestOptions = {
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
            };
            const data = fetch(process.env.React_App_BackendUrl + '/service-calls/getSolutions', requestOptions)
                .then(response => {
                    return response.json()
                })
            return data
        },
        async getCustomerList(): Promise<CustomerList[]> {
            const requestOptions = {
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
            };
            const data = fetch(process.env.React_App_BackendUrl + '/service-calls/list', requestOptions)
                .then(response => {
                    return response.json()
                })
            return data
        },
        async getItemList(): Promise<Item[]> {
            const requestOptions = {
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
            };
            const data = fetch('http://localhost:3000/service-calls/itemlist', requestOptions)
                .then(response => {
                    return response.json()
                })
            return data
        },

        async getExpences(): Promise<ExpencesType[]> {
            const requestOptions = {
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
            };
            const data = fetch('http://localhost:3000/service-calls/getExpences', requestOptions)
                .then(response => {
                    return response.json()
                })
            return data
        },
        
        async addSolutions(Data:any): Promise<Solutions[]> {
            console.log(Data)
                const requestOptions = {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        Id: "",
                         Solution: Data.Solution,
                        CreatedOn: new Date(now()),
                         Owner: Data.Owner,
                         Status: Data.Status,
                         HandledBy: Data.HandledBy,
                    })
                };
               const data= fetch('http://localhost:3000/service-calls/solutions', requestOptions)
                   .then(response => {
                       return response.json()
                   })
            return data
            },
        async passValue(Data:any): Promise<any[]> {
            console.log(Data)
           var Data1=Data;
            return Data1
        },
        async addSchedule(Data:any): Promise<any[]> {
            console.log(Data)
            const requestOptions = {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    NextStartDate: Data.PlanedStart,
                    NextEndDate: Data.PlanedEnd
                })
            };
            const data= fetch('http://localhost:3000/service-calls/Schedule/'+Data.ServiceCallId, requestOptions)
                .then(response => {
                    return response.json()
                })
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














// import {createContext, FC} from "react"
// import * as React from "react"
// import {ServiceCallData2} from "../Types/Types"

// export  interface IService{
//     getServiceCall():Promise<ServiceCallData2[]>
// }

// export const ServiceContext =createContext<IService|undefined>(undefined)

// const Service:FC =({children}:any)=>{
//     const Service ={
//         async getServiceCall() : Promise<ServiceCallData2[]>{
//             const requestOptions = {
//                 method: 'GET',
//                 headers: {'Content-Type': 'application/json'}
//             };
//            const data= fetch(process.env.React_App_BackendUrl+'/service-calls/service',requestOptions)
//                 .then(response=>{ return response.json()})
             
//             return data
//         }
//     }
//     return (
//         <ServiceContext.Provider value={Service}>
//         {children}
//           </ServiceContext.Provider>
//     )
// }

// export default Service;
