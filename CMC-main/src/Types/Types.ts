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
  CreatedOn: string
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
