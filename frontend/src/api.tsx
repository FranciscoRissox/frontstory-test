import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface Campaign {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  cost: number;
  revenue: number;
  profit: number;
}

export type NewCampaign = Omit<Campaign, 'id' | 'profit'>;

export const api = {
  getCampaigns: async (): Promise<Campaign[]> => {
    const response = await apiClient.get('/campaigns');
    return response.data;
  },

  addCampaign: async (campaign: NewCampaign): Promise<Campaign> => {
    const response = await apiClient.post('/campaigns', campaign);
    return response.data;
  },

  deleteCampaign: async (id: number): Promise<void> => {
    await apiClient.delete(`/campaigns/${id}`);
  },
};