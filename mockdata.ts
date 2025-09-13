import { Issue } from '../types';

export const mockIssues: Issue[] = [
  {
    id: '1',
    title: 'Large pothole on Main Street',
    description: 'Deep pothole causing vehicle damage near the intersection of Main St and Oak Ave.',
    category: 'Infrastructure',
    status: 'in_progress',
    priority: 'high',
    location: '123 Main Street, Downtown',
    image: 'https://images.pexels.com/photos/162539/street-pothole-asphalt-road-162539.jpeg',
    reportedBy: 'John Smith',
    reportedAt: new Date('2024-01-15'),
    votes: 23
  },
  {
    id: '2',
    title: 'Broken streetlight on Elm Street',
    description: 'Streetlight has been out for 3 weeks, making the area unsafe for pedestrians.',
    category: 'Utilities',
    status: 'reported',
    priority: 'medium',
    location: '456 Elm Street, Residential Area',
    image: 'https://images.pexels.com/photos/301703/pexels-photo-301703.jpeg',
    reportedBy: 'Sarah Johnson',
    reportedAt: new Date('2024-01-10'),
    votes: 15
  },
  {
    id: '3',
    title: 'Overflowing trash bins in Central Park',
    description: 'Multiple trash bins are overflowing, creating unsanitary conditions.',
    category: 'Sanitation',
    status: 'resolved',
    priority: 'medium',
    location: 'Central Park, Recreation Area',
    image: 'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg',
    reportedBy: 'Mike Wilson',
    reportedAt: new Date('2024-01-05'),
    votes: 8
  }
];

export const categories = ['Infrastructure', 'Utilities', 'Sanitation', 'Transportation', 'Safety', 'Environment'];
export const priorities = ['low', 'medium', 'high', 'critical'];