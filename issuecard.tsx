import React from 'react';
import { Issue } from '../types';
import { MapPin, Clock, ThumbsUp, User } from 'lucide-react';

interface IssueCardProps {
  issue: Issue;
}

export const IssueCard: React.FC<IssueCardProps> = ({ issue }) => {
  const getStatusColor = (status: string) => {
    const colors = {
      reported: 'bg-blue-100 text-blue-800',
      in_progress: 'bg-yellow-100 text-yellow-800',
      resolved: 'bg-green-100 text-green-800'
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getPriorityColor = (priority: string) => {
    const colors = {
      low: 'bg-green-100 text-green-800',
      medium: 'bg-yellow-100 text-yellow-800',
      high: 'bg-orange-100 text-orange-800',
      critical: 'bg-red-100 text-red-800'
    };
    return colors[priority as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-900 pr-4">{issue.title}</h3>
        <div className="flex gap-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(issue.priority)}`}>
            {issue.priority}
          </span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(issue.status)}`}>
            {issue.status.replace('_', ' ')}
          </span>
        </div>
      </div>

      <p className="text-gray-600 text-sm mb-4">{issue.description}</p>

      {issue.image && (
        <img 
          src={issue.image} 
          alt={issue.title}
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
      )}

      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
        <div className="flex items-center gap-1">
          <MapPin className="w-4 h-4" />
          <span>{issue.location}</span>
        </div>
      </div>

      <div className="flex justify-between items-center pt-4 border-t">
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{issue.reportedAt.toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>{issue.reportedBy}</span>
          </div>
        </div>
        
        <button className="flex items-center gap-1 text-blue-600 hover:text-blue-700">
          <ThumbsUp className="w-4 h-4" />
          <span className="font-medium">{issue.votes}</span>
        </button>
      </div>
    </div>
  );
};