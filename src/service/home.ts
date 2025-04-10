import { endpoint } from "@/providers/service";
import { HomeResponseObject } from "@/types/home";
import axios from "axios";

export const fetchHome = async (): Promise<HomeResponseObject>  => {
    try {
      const { data } = await axios({
        url: endpoint(`/home`),
        method: 'GET',
      });
      if (data.code !== 200) {
        throw new Error(`Failed to fetch home: ${data.message}`);
      }
  
      return data.responseObject
    } catch (error) {
      console.error('Error fetching home:', error);
      throw error;
    }
  };