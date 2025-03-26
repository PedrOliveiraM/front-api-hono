import { ApiResponse } from "@/@types/apiResponse/api-response-dto";
import { UserDto } from "@/@types/user/user-dto";
import axios, { AxiosResponse } from "axios";

export class UserService {
  static async getUserById(userId: string): Promise<ApiResponse<UserDto>> {
    try {
      const response: AxiosResponse<UserDto> = await axios.get(`/user/${userId}`);
      return {
        data: response.data,
        status: response.status,
      };
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        throw new Error(`Request failed with status ${error.response?.status}`);
      } else {
        throw new Error("An unexpected error occurred.");
      }
    }
  }

  static async createUser(userData: UserDto): Promise<ApiResponse<UserDto>> {
    try {
      const response: AxiosResponse<UserDto> = await axios.post("/user", userData);
      return {
        data: response.data,
        status: response.status,
      };
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        throw new Error(`Request failed with status ${error.response?.status}`);
      } else {
        throw new Error("An unexpected error occurred.");
      }
    }
  }

  static async updateUser(userId: string, userData: UserDto): Promise<ApiResponse<UserDto>> {
    try {
      const response: AxiosResponse<UserDto> = await axios.put(`/user/${userId}`, userData);
      return {
        data: response.data,
        status: response.status,
      };
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        throw new Error(`Request failed with status ${error.response?.status}`);
      } else {
        throw new Error("An unexpected error occurred.");
      }
    }
  }

  static async deleteUser(userId: string): Promise<ApiResponse<null>> {
    try {
      const response: AxiosResponse = await axios.delete(`/user/${userId}`);
      return {
        data: null,
        status: response.status,
      };
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        throw new Error(`Request failed with status ${error.response?.status}`);
      } else {
        throw new Error("An unexpected error occurred.");
      }
    }
  }
}
