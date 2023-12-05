export type TStatus = 'completed' | 'canceled' | 'pending';

export type TCareersOrdersObject = {
  _id: number;
  created_at: string;
  general: {
    fullname: string;
    email: string;
    product: string;
    status: TStatus;
  };
  securityData?: {
    ip: string;
    userAgent: string;
  };
};

export interface TItem {
  data: TCareersOrdersObject;
  onClickDelete: (obj: TCareersOrdersObject) => void;
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
