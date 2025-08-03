import React from 'react';
import KanbanCard from './KanbanCard'; // We'll import the card component

/**
 * ==============================================================================
 * FILE: /client/src/components/features/board/KanbanList.jsx
 * PURPOSE: A component that represents a single column (e.g., "To Do") on the
 * Kanban board. It contains a list of KanbanCard components.
 * ==============================================================================
 */
const KanbanList = ({ list }) => {
  // In a real app, 'list' would be a prop containing list data and tasks
  const mockList = list || {
    title: 'To Do',
    tasks: [
      { id: 101, title: 'Design Login Page UI', description: 'Create mockups in Figma.', tag: 'Design', dueDate: 'Dec 10', assignees: [{id: 1, avatarUrl: 'https://i.pravatar.cc/40?u=alexandra'}] },
      { id: 102, title: 'Setup User Authentication API', description: 'Endpoints for signup/login.', tag: 'Backend', dueDate: 'Dec 12', assignees: [{id: 2, avatarUrl: 'https://i.pravatar.cc/40?u=edwin'}] },
    ]
  };

  return (
    <div className="bg-slate-100 rounded-xl p-4 w-80 shrink-0 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-gray-800">{mockList.title}</h3>
        <span className="bg-gray-200 text-gray-600 text-sm font-semibold px-2.5 py-1 rounded-full">
          {mockList.tasks.length}
        </span>
      </div>
      
      {/* This div will handle the scrolling of cards if the list is long */}
      <div className="flex-grow overflow-y-auto pr-2">
        {mockList.tasks.map(task => (
          <KanbanCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default KanbanList;
