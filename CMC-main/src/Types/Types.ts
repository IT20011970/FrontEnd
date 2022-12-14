import {string} from "prop-types"
import { ReactNode } from "react";

export type TablePaginationActionsProps = {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => void;
};

export type SparePartInventoryData = {
  spid: string;
  description: string;
  type: string;
  remark: string;
  quantity: number;
  attachment: string;
};
export type itemMasterEntity={
  Id: string ,
  ItemCode: string,
  ItemName: string,
  ItemType: string,
  Onhand: number,
  SalUnitMsr: string,
  qty: number
};

export type SparePartsRequestListData = {
  itemCode: string;
  description: string;
  customer: string;
  status: string;
  createdDate: Date;
  priority: string;
  subject: string;
};

export type Sparepart = {
  [x: string]: ReactNode;
  SPReqId: string,
  Remark: string,
  Content: string,
  Secretary: string,
  ItemDescription: string,
  ServiceTicketEntity: {
    TicketId: string,
    TicketType: string,
    Subject: string,
    AssignedTo: string,
    AssignedBY: string,
    EstimatedDuration: string,
    ContactPerson: string,
    PlannedStartDate: string,
    PlannedEndDate: string,
    ActualStartDate: string,
    ActualEndDate: string,
    CreatedOn: string,
    serviceCall: {
      ServiceCallId: string,
      Status: string,
      Priority: string,
      Subject: string,
      Origin: string,
      ProblemType: string,
      InquiryType: string,
      CreatedBy: string,
      HandledBy: string,
      Queue: string,
      Secretary: string,
      SalesAssistant: string,
      CreatedOn: string,
      PlanedStartDateTime: string,
      EstimatedDutation: string,
      PlanedEndDateTime: string,
      ActualStartDate: string,
      ActualEndDate: string,
      customerEntity: {
        CustomerId: string,
        CustomeName: string,
        ContactPerson: string,
        TelephoneNo: string,
        CustomerAddressId: string
      },
      itemEntity: {
        ItemCode: string,
        MrfSerialNumber: string,
        SerialNumber: string,
        ItemDescriptio: string,
        ItemGroup: string
      }
    }
    "itemEntity": {
      "ItemCode": 12,
      "MrfSerialNumber": "aaa",
      "SerialNumber": "ssv",
      "ItemDescription": "css",
      "ItemGroup": "vss"
    }
  };
}
export type ServiceTicketData = {
  itemCode: string;
  description: string;
  customer: string;
  status: string;
  createdDate: Date;
  priority: string;
  subject: string;
};

export type File = {
  Id: string;
  Name: string;
  Path: string;
  status: string;
};

export type SparePartsData = {
  itemCode: string;
  description: string;
  customer: string;
  status: string;
  createdDate: Date;
  priority: string;
  subject: string;
};

export type ServiceCallData = {
  itemCode: string;
  description: string;
  customer: string;
  status: string;
  createdDate: Date;
  priority: string;
  subject: string;
};

export type ServiceCallData2 = {
  ServiceCallId:string
  ActualEndDate: string
  ActualStartDate: string
  CreatedBy: string
  CreatedOn: Date
  EstimatedDutation: string
  HandledBy: string
  InquiryType: string
  Origin: string
  PlanedEndDateTime: string
  PlanedStartDateTime: string
  NextStartDate: string,
  NextEndDate: string,
  Priority: string
  ProblemType: string
  Queue: string
  SalesAssistant: string
  Secretary: string
  Status: string
  Subject: string
  customerEntity:{
    ContactPerson: string
    CustomeName: string
    CustomerAddressId: string
    CustomerId: string
    TelephoneNo: string
  },
  itemEntity:{
    ItemCode: string
    ItemDescription: string
    ItemGroup: string
    MrfSerialNumber: string
    SerialNumber: string
  }

};
export type ResourceAllocation = {
  ToolId: string,
  ToolGroup:string,
  ToolReqID: string,
  ToolDescription: string,
  SerialNo:string,
  ToolRequestStatus: string,
  ToolType: string,
  CreatedDateAndTime:string,
  RequestDateAndTime:string,
  NoOfDays: string,
  HandOverDateAndTime: string,
  Status: string

}

export type CustomerList = {
  label:string;
}

export type Item={
  ItemCode: string
  ItemDescription: string
  ItemGroup: string
  MrfSerialNumber: string
  SerialNumber: string
}

export type ExpencesType={
  Id: string,
  CreatedDate: Date,
  DateExpire: string,
  ExpenseType: string,
  CreatedBy: string,
  Amount: string,
  Remark: string
}

export type Ticket = {
  TicketId: string,
  TicketType: string,
  Subject: string,
  AssignedTo: string,
  CreatedOn:string,
  PlannedStartDate:string,
  PlannedEndDate:string,
  ActualStartDate:string,
  ActualEndDate:string,
  serviceCall: {
    ServiceCallId: string,
    Status: string,
    Priority: string,
    Subject: string,
    Origin: string,
    ProblemType: string,
    InquiryType: string,
    CreatedBy: string,
    HandledBy: string,
    Queue: string,
    Secretary: string,
    SalesAssistant: string,
    CreatedOn: string,
    PlanedStartDateTime: string,
    EstimatedDutation: string,
    PlanedEndDateTime: string,
    ActualStartDate: string,
    ActualEndDate: string,
    customerEntity: {
      CustomerId: string,
      CustomeName: string,
      ContactPerson: string,
      TelephoneNo: string,
      CustomerAddressId: string
    },
    itemEntity: {
      ItemCode: string,
      MrfSerialNumber: string,
      SerialNumber: string,
      ItemDescription: string,
      ItemGroup: string
    }
  }
}
export type TicketServiceCall = {
  TicketId: string,
  TicketType: string,
  Subject: string,
  AssignedTo: string,
  AssignedBY: string,
  EstimatedDuration:string,
  ContactPerson:string,
  PlannedStartDate: string,
  PlannedEndDate: string,
  ActualStartDate: string,
  ActualEndDate: string,
  CreatedOn: string,
  priority: string
}
export type DropdownUsers ={

  UserCode: number,
  UserName: string,
  Value: string

}
export type ResolutionType ={

  ResolutionId: string,
  Resolution: string,
  Date: string

}
export type DropdownOrigins ={

  OriginCode: number,
  OriginName: string,
  OriginValue: string

}

export type DropdownProblemTypes ={

  ProblemTypeCode: number,
  ProblemTypeName: string,
  ProblemTypeValue: string,
  Status: number

}

export type UserRoleTypes ={

  Id: number,
  Description: string,
  RoleDescription: string,
  Status: number

}

export type HandledBy ={

  HandledByCode: number,
  HandledByName: string,
  HandledByStatus: number

}

export type ClusterHead ={

  ClusterHeadCode: number,
  ClusterHeadName: string,
  ClusterHeadStatus: number

}

export type Secretary ={

  SecretaryCode: number,
  SecretaryName: string,
  SecretaryStatus: number

}

export type SalesAssistant ={

  SalesAssistantCode: number,
  SalesAssistantName: string,
  SalesAssistantStatus: number

}

export type Engineer ={

  EngineerCode: number,
  EngineerName: string,
  ClusterHead: string,
  EngineerStatus: number

}

export type ManageUserDetails = {

  Id: number,
  UserName: string,
  Email: string,
  user: {
    userType: any;
    id: string,
    NIC: string,
    ContactNumber: string,
  },
  userType: {
    Description: string
  }

}


export type CreateServiceCallTicketData = {
  date: Date;
  time: string;
  engineer: string;
  priority: string;
  plannedStart: Date;
  recurrence: string;
  content: string;
  more: string;
};

export type Solutions = {
  Id: number,
  Solution: string,
  CreatedOn: Date,
  Owner: string,
  Status: string,
  HandledBy: string
};

export type Schedule = {
  ServiceCallId: number,
  NextStartDate: Date,
  NextEndDate: Date,
};

export type ArrayTab ={
  Id: string;
  ItemCode: string;
  ItemName: string;
  ItemType: string;
  Onhand: number;
  SalUnitMsr: string;
  qty: number;
}


export type ExpensesData = {
  date: Date;
  serviceCallId: string;
  createdBy: string;
  expensesType: string;
  amount: string;
  noOfTickets: string;
  remarks: string;
  more: string;
};
