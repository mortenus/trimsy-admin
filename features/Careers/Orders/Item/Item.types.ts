export type TStatus = 'completed' | 'canceled' | 'pending' | 'new';

export type TCareersOrdersObject = {
  _id: number;
  createdAt: string;
  general: {
    fullname: string;
    email: string;
    product: string;
    status: TStatus;
    description?: string;
  };
  securityData?: {
    ip: string;
    userAgent: string;
  };
};

export interface TItem {
  data: TCareersOrdersObject;
  onClickDelete: (obj: TCareersOrdersObject) => void;
  onTypeChange: (type: string) => void;
}

// export type TItem = {
//     _id: number;
//     fullname: string;
//     email: string;
//     type: string;
//     status: TStatus;
//     date: string;
//     ip: string;
//     userAgent: string;
// };
