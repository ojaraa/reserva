export interface AppointmentData {
  id: string;
  clientFirstName: string;
  clientLastName: string;
  clientPhone: string;
  clientEmail?: string;
  serviceId: string;
  serviceCategory: string;
  serviceName: string;    
  duration: number;         
  price: number;         
  startTime: string;     
  endTime: string; 
  date: string;     
  notes?: string;
  status: string;
  createdAt: string;
  updatedAt?: string;
};

export type UserType = "client" | "vendor";



