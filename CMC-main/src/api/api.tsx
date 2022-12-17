import {createContext, FC} from "react"
import * as React from "react"
import {CustomerList, ExpencesType, Item, ServiceCallData2, Solutions} from "../Types/Types"
import {now} from "moment"

export  interface IService{
    getServiceCall():Promise<ServiceCallData2[]>
    getCustomerList():Promise<CustomerList[]>
    getItemList(Id:any):Promise<Item[]>
    getSolutions(Id:any):Promise<any[]>
    addSolutions(Data:any,Id:any):Promise<Solutions[]>
    updateSolutions(Data:any):Promise<Solutions[]>
    addSchedule(Data:any):Promise<any[]>
    getServiceCallDocuments():Promise<ServiceCallData2[]>
    getExpences(Id:any):Promise<any[]>
    passValue(Data:any):Promise<any[]>
    ItemMasterEntity():Promise<any[]>
    addRemark(Id:any,Data:any):Promise<any[]>
    getSchedule(Id:any):Promise<any[]>
    addResolution(Id:any,Data:any):Promise<any[]>
    getResolution(Id:any):Promise<any[]>
    getFile(Id:any):Promise<any[]>
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
        async getSchedule(Id:any): Promise<any[]> {
            const requestOptions = {
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
            };
            const data = fetch(process.env.React_App_BackendUrl + '/service-calls/service/'+Id, requestOptions)
                .then(response => {
                    return response.json()
                })

            return data
        },
        async getSolutions(Id:any): Promise<any[]> {
            const requestOptions = {
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
            };
            const data = fetch(process.env.React_App_BackendUrl + '/service-calls/getSolutionsId/'+Id, requestOptions)
                .then(response => {
                    return response.json()
                })
            return data
        },
        async getResolution(Id:any): Promise<any[]> {
            const requestOptions = {
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
            };
            const data = fetch(process.env.React_App_BackendUrl + '/service-calls/getResolutionsId/'+Id, requestOptions)
                .then(response => {
                    return response.json()
                })
            return data
        },
        async getFile(Id:any): Promise<any[]> {
            const requestOptions = {
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
            };
            const data = fetch(process.env.React_App_BackendUrl + '/service-calls/getFiles/'+Id, requestOptions)
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
        async getItemList(Id:any): Promise<Item[]> {
            const requestOptions = {
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
            };
            const data = fetch('http://localhost:3000/service-calls/itemlist/'+Id, requestOptions)
                .then(response => {
                    return response.json()
                })
            return data
        },

        async getExpences(Id:any): Promise<any[]> {
            const requestOptions = {
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
            };
            const data = fetch('http://localhost:3000/service-calls/getExpences/'+Id, requestOptions)
                .then(response => {
                    return response.json()
                })
            return data
        },
        
        async addSolutions(Data:any,Id:any): Promise<Solutions[]> {
            console.log(Data)
                const requestOptions = {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                         Solution: Data.Solution,
                        CreatedOn: new Date(now()),
                         Owner: Data.Owner,
                         Status: Data.Status,
                         HandledBy: Data.HandledBy,
                        serviceCall:{
                            ServiceCallId:Id
                        }
                    })
                };
               const data= fetch('http://localhost:3000/service-calls/solutions', requestOptions)
                   .then(response => {
                       return response.json()
                   })
            return data
            },
        async updateSolutions(Data:any): Promise<Solutions[]> {
            console.log(Data)
            const requestOptions = {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    Id: Data.Id,
                    Solution: Data.Solution,
                    CreatedOn: Data.CreatedOn,
                    Owner: Data.Owner,
                    Status: Data.Status,
                    HandledBy: Data.HandledBy,
                })
            };
            const data= fetch('http://localhost:3000/service-calls/updatesolutions/', requestOptions)
                .then(response => {
                    return response.json()
                })
            return data
        },
        async  addRemark(Id:any,Data:any):Promise<any[]> {
            console.log(Data)
            const requestOptions = {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    ServiceCallId: Id,
                    Remark: Data.remark,
                })
            };
            const data= fetch('http://localhost:3000/service-calls/remark', requestOptions)
                .then(response => {
                    return response.json()
                })
            return data
        },
        async  addResolution(Id:any,Data:any):Promise<any[]> {
            console.log(Data)
            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    Resolution:Data.resolution,
                    Date:new Date(),
                    serviceCall:{
                        ServiceCallId:Id
                    }
                })
            };
            const data= fetch('http://localhost:3000/service-calls/resolutions', requestOptions)
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
        },
        async ItemMasterEntity(): Promise<any[]> {
            const requestOptions = {
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
            };
            const data = fetch(process.env.React_App_BackendUrl + '/spare-parts/itemService', requestOptions)
                .then(response => {
                    return response.json()
                })

            return data
        },
       
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
