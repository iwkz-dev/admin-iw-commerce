export interface Event {
  id: number;
  name: string;
  startTime: string;
  endTime: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  isClosed: boolean;
  imageUrls: string[];
  contactPersonIds: number[];
  paymentInformation: number[];
}
