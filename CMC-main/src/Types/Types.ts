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
  Priority: string
  ProblemType: string
  Queue: string
  SalesAssistant: string
  Secretary: string
  ServiceCallId: string
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

export type Ticket = {
  TicketId: string,
  TicketType: string,
  Subject: string,
  AssignedTo: string,
  CreatedOn:string
  PlannedStartDate:string
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

export type DropdownUsers ={

  UserCode: number,
  UserName: string,
  Value: string

}

export type DropdownOrigins ={

  OriginCode: number,
  OriginName: string,
  OriginValue: string

}

export type DropdownProblemTypes ={

  ProblemTypeCode: number,
  ProblemTypeName: string,
  ProblemTypeValue: string

}

export type UserRoleTypes ={

  Id: number,
  Description: string,
  RoleDescription: string,
  Status: number

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


export type ArrayTab ={
  attachment:string;
  description:string;
  quantity:string;
  spid:string;
  type:string;
  remark:string;
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
