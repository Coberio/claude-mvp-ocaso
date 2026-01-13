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
    <div className="flex min-h-screen w-full bg-white">
      {/* Sidebar - fixed 256px */}
      <aside className="w-64 flex-shrink-0 bg-white">
        <Sidebar
          activeNav={activeNav}
          onNavChange={setActiveNav}
          activeDepartment={activeDepartment}
          onDepartmentChange={setActiveDepartment}
        />
      </aside>

      {/* Main content - flexible */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <TaskList
          tasks={MOCK_TASKS}
          selectedTaskId={selectedTask?.id ?? null}
          onTaskSelect={handleTaskSelect}
        />
      </main>

      {/* Context Blade - fixed 420px, conditional render */}
      {selectedTask && (
        <aside className="w-[420px] flex-shrink-0 border-l-2 border-[#d1d5db] overflow-hidden">
          <ContextBlade task={selectedTask} onClose={handleCloseBlade} />
        </aside>
      )}
    </div>
  );
}

export default App;
