import { RequestSuccess } from 'types/enums/enums';

export interface ApiResponse<T> {
  Response: RequestSuccess;
  Search?: T[];
  totalResults?: string;
  Error?: string;
}

export interface ApiFailResponse {
  message: string;
}
