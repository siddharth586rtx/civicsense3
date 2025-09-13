export interface Issue {
    id: string;
    title: string;
    description: string;
    category: string;
    status: 'reported' | 'in_progress' | 'resolved';
    priority: 'low' | 'medium' | 'high' | 'critical';
    location: string;
    image?: string;
    reportedBy: string;
    reportedAt: Date;
    votes: number;
  }
  
  export type ViewType = 'dashboard' | 'report' | 'map' | 'profile';