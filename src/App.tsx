import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TaskList } from './components/TaskList';
import { ContextBlade } from './components/ContextBlade';
import { MOCK_TASKS } from './data/mockData';
import type { Task } from './types';

function App() {
  const [activeNav, setActiveNav] = useState('inbox');
  const [activeDepartment, setActiveDepartment] = useState<string | null>(null);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const handleTaskSelect = (task: Task) => {
    setSelectedTask(task);
  };

  const handleCloseBlade = () => {
    setSelectedTask(null);
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-white">
      {/* Sidebar - Fixed width */}
      <Sidebar
        activeNav={activeNav}
        onNavChange={setActiveNav}
        activeDepartment={activeDepartment}
        onDepartmentChange={setActiveDepartment}
      />

      {/* Main Content Area - Fills remaining space */}
      <div className="flex flex-1 min-w-0 overflow-hidden">
        {/* Task List - Shrinks when blade is open */}
        <div className={`${selectedTask ? 'flex-1 min-w-[400px]' : 'flex-1'} overflow-hidden`}>
          <TaskList
            tasks={MOCK_TASKS}
            selectedTaskId={selectedTask?.id ?? null}
            onTaskSelect={handleTaskSelect}
          />
        </div>

        {/* Context Blade - Fixed width, only shown when task selected */}
        {selectedTask && (
          <div className="flex-shrink-0 overflow-hidden">
            <ContextBlade task={selectedTask} onClose={handleCloseBlade} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
