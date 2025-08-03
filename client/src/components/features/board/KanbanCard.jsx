import React from 'react';

// --- Helper Components & Icons ---
const Icon = ({ children, className = "w-4 h-4" }) => <span className={className}>{children}</span>;

/**
 * ==============================================================================
 * FILE: /client/src/components/features/board/KanbanCard.jsx
 * PURPOSE: A component that represents a single draggable task card on the board.
 * ==============================================================================
 */
const KanbanCard = ({ task }) => {
  
  const getTagClasses = (tag) => {
    switch (tag) {
      case 'Frontend': return 'bg-blue-100 text-blue-700';
      case 'Backend': return 'bg-purple-100 text-purple-700';
      case 'Design': return 'bg-pink-100 text-pink-700';
      case 'DevOps': return 'bg-gray-100 text-gray-700';
      default: return 'bg-yellow-100 text-yellow-700';
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4 cursor-pointer hover:shadow-md hover:border-primary/50 transition-all">
      <div className="flex justify-between items-start">
        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${getTagClasses(task.tag)}`}>
          {task.tag}
        </span>
        <button className="text-gray-400 hover:text-gray-600">
          <Icon className="w-5 h-5">
            <svg fill="currentColor" viewBox="0 0 20 20"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" /></svg>
          </Icon>
        </button>
      </div>
      
      <p className="font-semibold text-gray-800 mt-3">{task.title}</p>
      
      {task.description && (
        <p className="text-sm text-gray-500 mt-1">{task.description}</p>
      )}
      
      <div className="flex justify-between items-center mt-4">
        <div className="flex -space-x-2">
          {task.assignees.map((assignee, index) => (
            <img 
              key={index} 
              src={assignee.avatarUrl} 
              alt={`Assignee ${index + 1}`}
              className="w-7 h-7 rounded-full border-2 border-white"
              title={`Assigned to user ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Icon>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
          </Icon>
          <span>{task.dueDate}</span>
        </div>
      </div>
    </div>
  );
};

export default KanbanCard;
