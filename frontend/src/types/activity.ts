export interface Activity {
  id: number;
  wing_id: number;
  title: string;
  description: string;
  activity_date: string;
  faculty_coordinator: string | null;
  report_url: string | null;
  report_cloudinary_id: string | null;
  created_at: string;
}

export interface ActivityCreate {
  wing_id: number;
  title: string;
  description: string;
  activity_date: string;
  faculty_coordinator?: string;
}

export interface ActivityUpdate {
  title?: string;
  description?: string;
  activity_date?: string;
  faculty_coordinator?: string;
}
