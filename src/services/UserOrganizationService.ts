import { UserOrganizationDto } from "@/@types/user-organization/user-organization-dto";
import axios, { AxiosResponse } from "axios";

interface ApiResponse<T> {
  data: T;
  status: number;
}

export class UserOrganizationService {
  static async getAllRelations(): Promise<ApiResponse<UserOrganizationDto[]>> {
    try {
      const response: AxiosResponse<UserOrganizationDto[]> = await axios.get(`http://localhost:3333/user-organizations`);
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
}
