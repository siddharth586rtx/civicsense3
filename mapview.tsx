import React from 'react';
import { Issue } from '../types';
import { MapPin, Navigation } from 'lucide-react';

interface MapViewProps {
  issues: Issue[];
}

export const MapView: React.FC<MapViewProps> = ({ issues }) => {
  const getPriorityColor = (priority: string) => {
    const colors = {
      low: 'bg-green-500',
      medium: 'bg-yellow-500',
      high: 'bg-orange-500',
      critical: 'bg-red-500'
    };
    return colors[priority as keyof typeof colors] || 'bg-gray-500';
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <div className="bg-gradient-to-r from-green-600 to-blue-600 px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-white">Issue Map</h1>
              <p className="text-green-100 mt-1">Visual overview of all reported issues</p>
            </div>
            <button className="px-4 py-2 bg-white bg-opacity-20 text-white rounded-lg hover:bg-opacity-30 transition-colors flex items-center gap-2">
              <Navigation className="w-4 h-4" />
              Center Map
            </button>
          </div>
        </div>

        {/* Simulated Map */}
        <div className="relative h-96 bg-gradient-to-br from-blue-50 to-green-50 overflow-hidden">
          {/* Issue Markers */}
          {issues.map((issue, index) => (
            <div
              key={issue.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
              style={{
                left: `${20 + (index * 15) % 60}%`,
                top: `${25 + (index * 12) % 50}%`
              }}
            >
              <div className={`w-6 h-6 ${getPriorityColor(issue.priority)} rounded-full flex items-center justify-center shadow-lg border-2 border-white transform transition-all duration-200 group-hover:scale-125`}>
                <MapPin className="w-3 h-3 text-white" />
              </div>
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                <div className="font-medium">{issue.title}</div>
                <div className="text-gray-300">{issue.location}</div>
              </div>
            </div>
          ))}

          {/* Legend */}
          <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-3">Priority</h3>
            {['low', 'medium', 'high', 'critical'].map(priority => (
              <div key={priority} className="flex items-center gap-2 mb-1">
                <div className={`w-3 h-3 rounded-full ${getPriorityColor(priority)}`}></div>
                <span className="text-sm text-gray-600 capitalize">{priority}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Issue List */}
      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Issues</h3>
        <div className="space-y-3">
          {issues.slice(0, 5).map(issue => (
            <div key={issue.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className={`w-4 h-4 rounded-full ${getPriorityColor(issue.priority)}`}></div>
                <div>
                  <div className="font-medium text-gray-900">{issue.title}</div>
                  <div className="text-sm text-gray-600">{issue.location}</div>
                </div>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs ${
                issue.status === 'resolved' ? 'bg-green-100 text-green-800' :
                issue.status === 'in_progress' ? 'bg-yellow-100 text-yellow-800' :
                'bg-blue-100 text-blue-800'
              }`}>
                {issue.status.replace('_', ' ')}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};