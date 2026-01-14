import type { User } from "firebase/auth";

export type UserType = "client" | "vendor";
export type OnboardingStatus = "NOT_STARTED" | "IN_PROGRESS" | "COMPLETED";
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

export interface UserData {
  name: string;
  email: string;
  uid: string;
  role: UserType | null;
  createdAt: string;
  onboardingStatus: OnboardingStatus;
}


export interface AuthContextType {
  user: User | null;
  loading :boolean;
  userData: UserData | null;
}

