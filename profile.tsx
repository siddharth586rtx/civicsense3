import React from 'react';
import { User, Award, Clock, CheckCircle, TrendingUp } from 'lucide-react';
import { Issue } from '../types';

interface ProfileProps {
  issues: Issue[];
}

export const Profile: React.FC<ProfileProps> = ({ issues }) => {
  const userIssues = issues.filter(issue => issue.reportedBy === 'John Smith');
  const stats = {
    reported: userIssues.length,
    resolved: userIssues.filter(i => i.status === 'resolved').length,
    totalVotes: userIssues.reduce((sum, issue) => sum + issue.votes, 0)
  };

  return (
    <div className="space-y-8">
      {/* Profile Header */}
      <div className="bg-white rounded-xl shadow-sm border p-8">
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <User className="w-10 h-10 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">John Smith</h1>
            <p className="text-gray-600">Active Community Member</p>
            <p className="text-sm text-gray-500 mt-1">Member since January 2024</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Stats */}
        <div className="bg-white rounded-xl shadow-sm border p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Statistics</h2>
          <div className="space-y-4">
            {[
              { label: 'Issues Reported', value: stats.reported, icon: TrendingUp, color: 'text-blue-600' },
              { label: 'Issues Resolved', value: stats.resolved, icon: CheckCircle, color: 'text-green-600' },
              { label: 'Community Votes', value: stats.totalVotes, icon: Award, color: 'text-yellow-600' }
            ].map((stat, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <stat.icon className={`w-4 h-4 ${stat.color.replace('-600', '-500')}`} />
                  <span className="text-sm text-gray-600">{stat.label}</span>
                </div>
                <span className={`font-bold ${stat.color}`}>{stat.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* My Issues */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">My Reported Issues</h2>
          <div className="space-y-4">
            {userIssues.map(issue => (
              <div key={issue.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-medium text-gray-900">{issue.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    issue.status === 'resolved' ? 'bg-green-100 text-green-800' :
                    issue.status === 'in_progress' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {issue.status.replace('_', ' ')}
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm mb-3">{issue.description}</p>
                
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{issue.reportedAt.toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    <span>{issue.votes} votes</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};