import React from 'react';

// --- Helper Components & Icons ---

const Icon = ({ children, className = "w-5 h-5" }) => <span className={className}>{children}</span>;

// --- Sub-components for the Project Board Page ---

/**
 * KanbanCard Component
 * Represents a single task card on the board.
 */
const KanbanCard = ({ task }) => (
  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4 cursor-pointer hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start">
      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
        task.tag === 'Frontend' ? 'bg-blue-100 text-blue-700' :
        task.tag === 'Backend' ? 'bg-purple-100 text-purple-700' :
        'bg-yellow-100 text-yellow-700'
      }`}>{task.tag}</span>
      <button className="text-gray-400 hover:text-gray-600">...</button>
    </div>
    <p className="font-semibold text-gray-800 mt-3">{task.title}</p>
    <p className="text-sm text-gray-500 mt-1">{task.description}</p>
    <div className="flex justify-between items-center mt-4">
      <div className="flex -space-x-2">
        {task.assignees.map(assignee => (
          <img key={assignee.id} src={assignee.avatarUrl} alt={assignee.name} className="w-7 h-7 rounded-full border-2 border-white" />
        ))}
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <Icon className="w-4 h-4"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg></Icon>
        <span>{task.dueDate}</span>
      </div>
    </div>
  </div>
);

/**
 * KanbanList Component
 * Represents a single column (e.g., "To Do", "In Progress") on the board.
 */
const KanbanList = ({ list }) => (
  <div className="bg-slate-100 rounded-xl p-4 w-80 shrink-0">
    <div className="flex justify-between items-center mb-4">
      <h3 className="font-bold text-gray-800">{list.title}</h3>
      <span className="bg-gray-200 text-gray-600 text-sm font-semibold px-2.5 py-1 rounded-full">{list.tasks.length}</span>
    </div>
    <div className="h-full overflow-y-auto">
      {list.tasks.map(task => (
        <KanbanCard key={task.id} task={task} />
      ))}
    </div>
  </div>
);

/**
 * BoardHeader Component
 * The header section of the board page, with project title and controls.
 */
const BoardHeader = ({ projectTitle }) => (
  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
    <div>
      <h1 className="text-3xl font-bold text-gray-800">{projectTitle}</h1>
      <p className="text-gray-500 mt-1 text-sm">Track your project progress from start to finish.</p>
    </div>
    <div className="flex items-center gap-3 mt-4 sm:mt-0">
      <div className="flex -space-x-2">
        <img src="https://i.pravatar.cc/40?u=alexandra" alt="Member 1" className="w-9 h-9 rounded-full border-2 border-white" />
        <img src="https://i.pravatar.cc/40?u=edwin" alt="Member 2" className="w-9 h-9 rounded-full border-2 border-white" />
        <img src="https://i.pravatar.cc/40?u=isaac" alt="Member 3" className="w-9 h-9 rounded-full border-2 border-white" />
        <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-xs font-semibold text-gray-600 border-2 border-white">+5</div>
      </div>
      <button className="bg-primary text-white px-5 py-2.5 rounded-lg shadow-md shadow-primary/30 hover:shadow-lg hover:shadow-primary/40 transition-all text-sm font-semibold">
        + Add Task
      </button>
    </div>
  </div>
);


/**
 * ==============================================================================
 * FILE: /client/src/pages/project/ProjectBoardPage.jsx
 * PURPOSE: The main page for displaying a Kanban board for a single project.
 * ==============================================================================
 */
const ProjectBoardPage = () => {
  // Mock data for demonstration. In a real app, this would come from an API.
  const boardData = {
    title: 'College ERP Project',
    lists: [
      {
        id: 1,
        title: 'To Do',
        tasks: [
          { id: 101, title: 'Design Login Page UI', description: 'Create mockups in Figma.', tag: 'Design', dueDate: 'Dec 10', assignees: [{id: 1, name: 'Alex', avatarUrl: 'https://i.pravatar.cc/40?u=alexandra'}] },
          { id: 102, title: 'Setup User Authentication API', description: 'Create endpoints for signup and login.', tag: 'Backend', dueDate: 'Dec 12', assignees: [{id: 2, name: 'Edwin', avatarUrl: 'https://i.pravatar.cc/40?u=edwin'}] },
        ],
      },
      {
        id: 2,
        title: 'In Progress',
        tasks: [
          { id: 201, title: 'Develop Sidebar Component', description: 'Use React and Tailwind CSS.', tag: 'Frontend', dueDate: 'Dec 8', assignees: [{id: 3, name: 'Isaac', avatarUrl: 'https://i.pravatar.cc/40?u=isaac'}, {id: 4, name: 'David', avatarUrl: 'https://i.pravatar.cc/40?u=david'}] },
        ],
      },
      {
        id: 3,
        title: 'In Review',
        tasks: [
          { id: 301, title: 'Database Schema Design', description: 'Review the proposed MongoDB schema.', tag: 'Backend', dueDate: 'Dec 9', assignees: [{id: 2, name: 'Edwin', avatarUrl: 'https://i.pravatar.cc/40?u=edwin'}] },
        ],
      },
      {
        id: 4,
        title: 'Done',
        tasks: [
          { id: 401, title: 'Project Initialization', description: 'Setup client and server repositories.', tag: 'DevOps', dueDate: 'Dec 1', assignees: [{id: 1, name: 'Alex', avatarUrl: 'https://i.pravatar.cc/40?u=alexandra'}] },
        ],
      },
    ],
  };

  return (
    <div className="p-6 h-full flex flex-col">
      <BoardHeader projectTitle={boardData.title} />
      <div className="flex-grow flex gap-6 overflow-x-auto pb-4">
        {boardData.lists.map(list => (
          <KanbanList key={list.id} list={list} />
        ))}
        <button className="bg-slate-200/50 text-slate-500 hover:bg-slate-200 transition-colors w-80 shrink-0 rounded-xl font-semibold text-sm">
          + Add New List
        </button>
      </div>
    </div>
  );
};

export default ProjectBoardPage;
