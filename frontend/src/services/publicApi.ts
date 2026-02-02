import api from './api';
import { Wing, WingWithRelations } from '@/types/wing';
import { Activity } from '@/types/activity';
import { Photo } from '@/types/photo';

/**
 * Public API functions for fetching wing, activity, and photo data
 */

export interface ActivityStatistic {
  wing_id: number;
  wing_name: string;
  wing_slug: string;
  activity_count: number;
}

export interface ActivityStatisticsResponse {
  statistics: ActivityStatistic[];
  available_years: number[];
  filtered_year: number | null;
}

export const publicApi = {
  // Wing endpoints
  getAllWings: async (): Promise<Wing[]> => {
    const response = await api.get<Wing[]>('/api/wings');
    return response.data;
  },

  getWingBySlug: async (slug: string): Promise<WingWithRelations> => {
    const response = await api.get<WingWithRelations>(`/api/wings/${slug}`);
    return response.data;
  },

  getWingPhotos: async (
    slug: string,
    limit: number = 100,
    offset: number = 0
  ): Promise<Photo[]> => {
    const response = await api.get<Photo[]>(`/api/wings/${slug}/photos`, {
      params: { limit, offset },
    });
    return response.data;
  },

  getWingActivities: async (slug: string): Promise<Activity[]> => {
    const response = await api.get<Activity[]>(`/api/wings/${slug}/activities`);
    return response.data;
  },

  // Activity endpoints
  getActivity: async (id: number): Promise<Activity> => {
    const response = await api.get<Activity>(`/api/activities/${id}`);
    return response.data;
  },

  getAllActivities: async (limit: number = 1000): Promise<Activity[]> => {
    const response = await api.get<Activity[]>('/api/activities', {
      params: { limit },
    });
    return response.data;
  },

  getActivityStatistics: async (year?: number): Promise<ActivityStatisticsResponse> => {
    const response = await api.get<ActivityStatisticsResponse>('/api/statistics/activities', {
      params: year ? { year } : undefined,
    });
    return response.data;
  },
};
