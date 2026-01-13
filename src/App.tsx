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
    <div className="h-full w-full flex overflow-hidden">
      {/* Sidebar - 256px fijo */}
      <div className="w-64 h-full flex-none">
        <Sidebar
          activeNav={activeNav}
          onNavChange={setActiveNav}
          activeDepartment={activeDepartment}
          onDepartmentChange={setActiveDepartment}
        />
      </div>

      {/* Lista de tareas - ocupa el espacio disponible */}
      <div className="flex-1 h-full min-w-0">
        <TaskList
          tasks={MOCK_TASKS}
          selectedTaskId={selectedTask?.id ?? null}
          onTaskSelect={handleTaskSelect}
        />
      </div>

      {/* Panel de contexto - 420px fijo */}
      {selectedTask && (
        <div className="w-[420px] h-full flex-none border-l-2 border-gray-300">
          <ContextBlade task={selectedTask} onClose={handleCloseBlade} />
        </div>
      )}
    </div>
  );
}

export default App;
