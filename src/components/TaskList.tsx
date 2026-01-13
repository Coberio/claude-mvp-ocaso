import {
  AlertCircle,
  ArrowUp,
  ArrowRight,
  ArrowDown,
  MessageCircle,
  Mail,
  Phone,
  Search,
  SlidersHorizontal,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { Task, Priority, Channel } from '../types';

interface TaskListProps {
  tasks: Task[];
  selectedTaskId: string | null;
  onTaskSelect: (task: Task) => void;
}

const priorityConfig: Record<Priority, { icon: LucideIcon; color: string; bgColor: string; label: string }> = {
  critical: { icon: AlertCircle, color: '#c41e3a', bgColor: '#fef2f2', label: 'Crítico' },
  high: { icon: ArrowUp, color: '#b45309', bgColor: '#fffbeb', label: 'Alta' },
  medium: { icon: ArrowRight, color: '#0056b3', bgColor: '#eff6ff', label: 'Media' },
  low: { icon: ArrowDown, color: '#6b7280', bgColor: '#f9fafb', label: 'Baja' },
};

const channelConfig: Record<Channel, { icon: LucideIcon; color: string; bgColor: string; label: string }> = {
  whatsapp: { icon: MessageCircle, color: '#166534', bgColor: '#f0fdf4', label: 'WhatsApp' },
  email: { icon: Mail, color: '#0056b3', bgColor: '#eff6ff', label: 'Email' },
  phone: { icon: Phone, color: '#7c3aed', bgColor: '#f5f3ff', label: 'Teléfono' },
};

function formatTime(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
}

export function TaskList({ tasks, selectedTaskId, onTaskSelect }: TaskListProps) {
  return (
    <div className="h-full bg-white flex flex-col overflow-hidden">
      {/* Header */}
      <header className="h-20 px-6 flex items-center justify-between border-b-2 border-[#d1d5db] bg-[#f8f9fa] flex-shrink-0">
        <div className="flex items-center gap-4">
          <h1 className="text-[1.375rem] font-bold text-[#1a1a1a]">Bandeja de entrada</h1>
          <span className="text-[1rem] px-4 py-1.5 rounded-full bg-[#0056b3] text-white font-bold">
            {tasks.length} tareas
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-3 rounded-xl hover:bg-[#e8eaed] text-[#4a4a4a] transition-all border-2 border-transparent hover:border-[#d1d5db]">
            <Search size={22} strokeWidth={2} />
          </button>
          <button className="p-3 rounded-xl hover:bg-[#e8eaed] text-[#4a4a4a] transition-all border-2 border-transparent hover:border-[#d1d5db]">
            <SlidersHorizontal size={22} strokeWidth={2} />
          </button>
        </div>
      </header>

      {/* Task List */}
      <div className="flex-1 overflow-y-auto">
        {tasks.map((task) => {
          const isSelected = selectedTaskId === task.id;
          const priority = priorityConfig[task.priority];
          const channel = channelConfig[task.channel];
          const PriorityIcon = priority.icon;
          const ChannelIcon = channel.icon;

          const rowClass = task.priority === 'critical'
            ? 'critical-glow'
            : task.isVIP
            ? 'vip-glow'
            : '';

          return (
            <div
              key={task.id}
              onClick={() => onTaskSelect(task)}
              className={`
                group flex items-center gap-4 px-6 py-5 cursor-pointer transition-all
                border-b-2 border-[#e5e7eb]
                ${rowClass}
                ${isSelected ? 'bg-[#eff6ff] border-l-4 border-l-[#0056b3]' : 'hover:bg-[#f8f9fa]'}
              `}
            >
              {/* Priority Icon */}
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: priority.bgColor, color: priority.color }}
              >
                <PriorityIcon size={22} strokeWidth={2.5} />
              </div>

              {/* Task ID */}
              <span className="flex-shrink-0 text-[0.9375rem] font-mono font-bold text-[#6b7280] w-20">
                {task.id}
              </span>

              {/* Title & Client */}
              <div className="flex-1 min-w-0">
                <p className={`text-[1.0625rem] font-bold truncate ${isSelected ? 'text-[#0056b3]' : 'text-[#1a1a1a]'}`}>
                  {task.title}
                </p>
                <p className="text-[0.9375rem] text-[#4a4a4a] truncate font-medium mt-0.5">
                  {task.clientName}
                </p>
              </div>

              {/* Channel Badge */}
              <div
                className="flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-[0.9375rem] font-bold border-2"
                style={{
                  backgroundColor: channel.bgColor,
                  color: channel.color,
                  borderColor: channel.color
                }}
              >
                <ChannelIcon size={20} strokeWidth={2.5} />
                <span>{channel.label}</span>
              </div>

              {/* Time */}
              <span className="flex-shrink-0 text-[0.9375rem] text-[#4a4a4a] w-14 text-right font-bold">
                {formatTime(task.createdAt)}
              </span>
            </div>
          );
        })}
      </div>

      {/* Footer with AI Status */}
      <footer className="h-16 px-6 flex items-center justify-between border-t-2 border-[#d1d5db] bg-[#f8f9fa] flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-3 h-3 rounded-full bg-[#166534]" />
            <div className="absolute inset-0 w-3 h-3 rounded-full bg-[#166534] animate-ping opacity-75" />
          </div>
          <span className="text-[0.9375rem] text-[#4a4a4a] font-semibold">IA procesando en tiempo real</span>
        </div>
        <span className="text-[0.9375rem] text-[#6b7280] font-medium">Actualizado hace 2 min</span>
      </footer>
    </div>
  );
}
