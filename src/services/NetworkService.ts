import Axios, { AxiosInstance, AxiosError, AxiosRequestConfig } from 'axios';
import Config from 'react-native-config';
import { ApiFailResponse } from 'types/interfaces/networkTypes';

class NetworkService {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = Axios.create({
      baseURL: Config.API_URL,
      headers: {
        'Content-Type': 'application/json',
        'x-rapidapi-key': Config.API_KEY,
        'x-rapidapi-host': Config.API_HOST,
      },
    });

    this.axiosInstance.interceptors.response.use(
      response => response,
      error => {
        return Promise.reject(this.handleError(error));
      },
    );
  }

  public async get<T>(url: string, params?: object): Promise<T> {
    const response = await this.axiosInstance.get<T>(url, { params });
    return response.data;
  }

  public async post<T>(
    url: string,
    data: object,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const response = await this.axiosInstance.post<T>(url, data, config);
    return response.data;
  }

  private handleError(error: AxiosError<ApiFailResponse>): string {
    if (error.response) {
      return `Error: ${error.response.status} - ${
        error.response.data?.message || 'Server Error'
      }`;
    } else if (error.request) {
      return 'Network Error: No response from server. Please try again.';
    } else {
      return `Unexpected Error: ${error.message}`;
    }
  }
}

export const networkService = new NetworkService();
