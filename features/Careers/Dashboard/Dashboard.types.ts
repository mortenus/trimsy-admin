export type TStatus = 'completed' | 'canceled' | 'pending';

export interface OrderData {
  _id: number;
  createdAt: string;
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
}

export interface DashboardData {
  totalOrders: number;
  newStatus: number;
  pendingStatus: number;
  items: OrderData[];
}
