import {
  Inbox,
  AlertTriangle,
  FileText,
  RefreshCw,
  Shield,
  TrendingUp,
  Star,
  Sparkles,
  Settings,
  ChevronDown,
} from 'lucide-react';

import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Inbox,
  AlertTriangle,
  FileText,
  RefreshCw,
  Shield,
  TrendingUp,
  Star,
};

interface NavItem {
  id: string;
  label: string;
  icon: string;
  count?: number;
}

interface Department {
  id: string;
  label: string;
  icon: string;
  color: string;
}

interface SidebarProps {
  activeNav: string;
  onNavChange: (id: string) => void;
  activeDepartment: string | null;
  onDepartmentChange: (id: string | null) => void;
}

const NAVIGATION_ITEMS: NavItem[] = [
  { id: 'inbox', label: 'Bandeja de entrada', icon: 'Inbox', count: 12 },
  { id: 'claims', label: 'Siniestros', icon: 'AlertTriangle', count: 5 },
  { id: 'policies', label: 'Pólizas', icon: 'FileText', count: 0 },
  { id: 'renewals', label: 'Renovaciones', icon: 'RefreshCw', count: 3 },
];

const DEPARTMENTS: Department[] = [
  { id: 'claims-agent', label: 'Agente Siniestros', icon: 'Shield', color: '#c41e3a' },
  { id: 'sales-rep', label: 'Comercial', icon: 'TrendingUp', color: '#166534' },
  { id: 'vip-support', label: 'Soporte VIP', icon: 'Star', color: '#b45309' },
];

export function Sidebar({
  activeNav,
  onNavChange,
  activeDepartment,
  onDepartmentChange,
}: SidebarProps) {
  return (
    <aside className="h-full bg-[#f8f9fa] border-r-2 border-[#d1d5db] flex flex-col overflow-hidden">
      {/* Logo */}
      <div className="h-20 px-5 flex items-center gap-3 border-b-2 border-[#d1d5db] bg-white">
        <div className="w-12 h-12 rounded-xl bg-[#0056b3] flex items-center justify-center shadow-md">
          <Sparkles size={24} className="text-white" strokeWidth={2} />
        </div>
        <span className="font-bold text-[1.25rem] text-[#1a1a1a] tracking-tight">SegurosIA</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 px-3 overflow-y-auto">
        <div className="mb-8">
          {NAVIGATION_ITEMS.map((item) => {
            const Icon = iconMap[item.icon];
            const isActive = activeNav === item.id;

            return (
              <button
                key={item.id}
                onClick={() => onNavChange(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-4 rounded-xl text-[1rem] font-semibold transition-all mb-2 ${
                  isActive
                    ? 'bg-[#0056b3] text-white shadow-md'
                    : 'text-[#1a1a1a] hover:bg-[#e8eaed] hover:shadow-sm'
                }`}
              >
                {Icon && (
                  <Icon
                    size={22}
                    strokeWidth={2}
                    className={isActive ? 'text-white' : 'text-[#4a4a4a]'}
                  />
                )}
                <span className="flex-1 text-left">{item.label}</span>
                {item.count !== undefined && item.count > 0 && (
                  <span
                    className={`text-[0.875rem] min-w-[28px] h-7 px-2 flex items-center justify-center rounded-full font-bold ${
                      isActive
                        ? 'bg-white text-[#0056b3]'
                        : 'bg-[#0056b3] text-white'
                    }`}
                  >
                    {item.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Departments Section */}
        <div className="mb-2">
          <div className="flex items-center gap-2 px-4 py-3 text-[0.875rem] font-bold text-[#6b7280] uppercase tracking-wide">
            <ChevronDown size={16} strokeWidth={2.5} />
            <span>Equipos</span>
          </div>

          {DEPARTMENTS.map((dept) => {
            const Icon = iconMap[dept.icon];
            const isActive = activeDepartment === dept.id;

            return (
              <button
                key={dept.id}
                onClick={() => onDepartmentChange(isActive ? null : dept.id)}
                className={`w-full flex items-center gap-3 px-4 py-4 rounded-xl text-[1rem] font-semibold transition-all mb-2 ${
                  isActive
                    ? 'bg-[#e8eaed] text-[#1a1a1a] shadow-sm border-2 border-[#0056b3]'
                    : 'text-[#1a1a1a] hover:bg-[#e8eaed]'
                }`}
              >
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: dept.color }}
                />
                {Icon && <Icon size={20} strokeWidth={2} className="text-[#4a4a4a]" />}
                <span className="flex-1 text-left">{dept.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* User Section */}
      <div className="p-4 border-t-2 border-[#d1d5db] bg-white">
        <div className="flex items-center gap-3 px-2 py-3 rounded-xl hover:bg-[#f0f1f3] cursor-pointer transition-all">
          <div className="w-11 h-11 rounded-full bg-[#0056b3] flex items-center justify-center text-white text-[1rem] font-bold shadow-md">
            JL
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[1rem] font-bold text-[#1a1a1a] truncate">Juan López</p>
            <p className="text-[0.875rem] text-[#6b7280] font-medium">Supervisor</p>
          </div>
          <Settings size={20} className="text-[#6b7280]" strokeWidth={2} />
        </div>
      </div>
    </aside>
  );
}
