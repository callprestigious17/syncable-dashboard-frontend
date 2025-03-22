
import React from 'react';
import { Users } from 'lucide-react';

interface TeamCardProps {
  name: string;
  memberCount: number;
  onClick: () => void;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, memberCount, onClick }) => {
  return (
    <div 
      className="team-card animate-fade-in" 
      onClick={onClick}
    >
      <div className="flex justify-between items-center">
        <h3 className="font-medium text-foreground truncate">{name}</h3>
        <div className="flex items-center text-muted-foreground text-sm">
          <Users size={14} className="mr-1" />
          <span>{memberCount}</span>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
