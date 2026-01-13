import { useState } from 'react';
import {
  X,
  MessageCircle,
  Mail,
  Phone,
  User,
  Clock,
  Tag,
  ExternalLink,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  Image,
  Send,
  Paperclip,
  Bot,
  CheckCircle2,
  AlertCircle,
  Star,
} from 'lucide-react';
import type { Task, AITag, WhatsAppMessage, EmailMessage, PhoneCall } from '../types';

interface ContextBladeProps {
  task: Task | null;
  onClose: () => void;
}

const tagColorMap: Record<AITag['color'], { bg: string; text: string; border: string }> = {
  red: { bg: '#fef2f2', text: '#c41e3a', border: '#fecaca' },
  yellow: { bg: '#fffbeb', text: '#b45309', border: '#fde68a' },
  green: { bg: '#f0fdf4', text: '#166534', border: '#bbf7d0' },
  blue: { bg: '#eff6ff', text: '#0056b3', border: '#bfdbfe' },
  purple: { bg: '#f5f3ff', text: '#7c3aed', border: '#ddd6fe' },
  gray: { bg: '#f9fafb', text: '#4a4a4a', border: '#e5e7eb' },
};

function WhatsAppView({ messages }: { messages: WhatsAppMessage[] }) {
  return (
    <div className="flex flex-col h-full">
      {/* Chat Header */}
      <div className="flex items-center gap-4 p-5 border-b-2 border-[#d1d5db] bg-[#f0fdf4]">
        <div className="w-12 h-12 rounded-full bg-[#166534] flex items-center justify-center">
          <MessageCircle size={24} className="text-white" strokeWidth={2} />
        </div>
        <div>
          <p className="text-[1.0625rem] font-bold text-[#1a1a1a]">Chat de WhatsApp</p>
          <p className="text-[0.9375rem] text-[#166534] font-semibold">En línea</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-[#f8f9fa]">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === 'client' ? 'justify-start' : 'justify-end'}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-5 py-4 shadow-sm ${
                msg.sender === 'client'
                  ? 'bg-white border-2 border-[#d1d5db] rounded-tl-md'
                  : 'bg-[#dcfce7] border-2 border-[#86efac] rounded-tr-md'
              }`}
            >
              {msg.hasImage && (
                <div className="mb-3 rounded-xl overflow-hidden bg-[#f0f1f3] p-8 flex flex-col items-center justify-center gap-3 border-2 border-[#d1d5db]">
                  <Image size={36} className="text-[#6b7280]" strokeWidth={1.5} />
                  <span className="text-[0.9375rem] text-[#4a4a4a] font-medium">Imagen adjunta</span>
                  <span className="text-[0.875rem] text-[#166534] font-bold">{msg.imageUrl === 'car-damage-1' ? 'foto_daños_1.jpg' : 'foto_daños_2.jpg'}</span>
                </div>
              )}
              {msg.content && (
                <p className="text-[1rem] text-[#1a1a1a] whitespace-pre-wrap leading-relaxed">{msg.content}</p>
              )}
              <p className="text-[0.8125rem] text-[#6b7280] mt-2 text-right font-semibold">{msg.timestamp}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 border-t-2 border-[#d1d5db] bg-white">
        <div className="flex items-center gap-3">
          <button className="p-3 rounded-xl hover:bg-[#f0f1f3] text-[#4a4a4a] transition-all border-2 border-[#d1d5db]">
            <Paperclip size={22} strokeWidth={2} />
          </button>
          <input
            type="text"
            placeholder="Escribe un mensaje..."
            className="flex-1 bg-[#f8f9fa] border-2 border-[#d1d5db] rounded-xl px-5 py-3 text-[1rem] text-[#1a1a1a] placeholder-[#6b7280] focus:outline-none focus:border-[#166534] transition-all font-medium"
          />
          <button className="p-3 rounded-xl bg-[#166534] hover:bg-[#15803d] text-white transition-all shadow-md">
            <Send size={22} strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>
  );
}

function EmailView({ thread }: { thread: EmailMessage[] }) {
  return (
    <div className="flex flex-col h-full">
      {/* Email Header */}
      <div className="p-5 border-b-2 border-[#d1d5db] bg-[#eff6ff]">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[#0056b3] flex items-center justify-center">
            <Mail size={24} className="text-white" strokeWidth={2} />
          </div>
          <div>
            <p className="text-[1.0625rem] font-bold text-[#1a1a1a]">Hilo de correo</p>
            <p className="text-[0.9375rem] text-[#0056b3] font-semibold">{thread.length} mensaje{thread.length > 1 ? 's' : ''}</p>
          </div>
        </div>
      </div>

      {/* Email Thread */}
      <div className="flex-1 overflow-y-auto bg-[#f8f9fa]">
        {thread.map((email, idx) => (
          <div
            key={email.id}
            className={`p-5 bg-white ${idx !== thread.length - 1 ? 'border-b-2 border-[#e5e7eb]' : ''}`}
          >
            {/* Email Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#0056b3] flex items-center justify-center text-[1rem] font-bold text-white">
                  {email.from.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="text-[1rem] font-bold text-[#1a1a1a]">{email.from}</p>
                  <p className="text-[0.875rem] text-[#6b7280] font-medium">Para: {email.to}</p>
                </div>
              </div>
              <span className="text-[0.875rem] text-[#4a4a4a] font-semibold">
                {new Date(email.timestamp).toLocaleString('es-ES', {
                  day: '2-digit',
                  month: 'short',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </span>
            </div>

            {/* Subject */}
            <h3 className="text-[1.0625rem] font-bold text-[#1a1a1a] mb-4">{email.subject}</h3>

            {/* Body */}
            <div className="text-[1rem] text-[#1a1a1a] whitespace-pre-wrap leading-relaxed bg-[#f8f9fa] rounded-xl p-5 border-2 border-[#e5e7eb]">
              {email.body}
            </div>
          </div>
        ))}
      </div>

      {/* Reply Input */}
      <div className="p-4 border-t-2 border-[#d1d5db] bg-white">
        <button className="w-full py-4 px-6 bg-[#0056b3] hover:bg-[#004494] text-white text-[1rem] font-bold rounded-xl transition-all shadow-md">
          Responder
        </button>
      </div>
    </div>
  );
}

function PhoneView({ call }: { call: PhoneCall }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const bars = Array.from({ length: 40 }, () => Math.random() * 100);

  return (
    <div className="flex flex-col h-full">
      {/* Call Header */}
      <div className="p-5 border-b-2 border-[#d1d5db] bg-[#f5f3ff]">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[#7c3aed] flex items-center justify-center">
            <Phone size={24} className="text-white" strokeWidth={2} />
          </div>
          <div>
            <p className="text-[1.0625rem] font-bold text-[#1a1a1a]">Llamada telefónica</p>
            <p className="text-[0.9375rem] text-[#7c3aed] font-semibold">Duración: {call.duration}</p>
          </div>
        </div>
      </div>

      {/* Audio Player */}
      <div className="p-6 bg-white border-b-2 border-[#d1d5db]">
        {/* Waveform */}
        <div className="h-16 flex items-center justify-center gap-1 mb-6 px-4 bg-[#f5f3ff] rounded-xl py-4">
          {bars.map((height, idx) => (
            <div
              key={idx}
              className={`w-1.5 rounded-full bg-[#7c3aed] transition-all ${isPlaying ? 'audio-bar' : ''}`}
              style={{
                height: `${Math.max(16, height * 0.7)}%`,
                opacity: isPlaying ? 0.9 : 0.4,
                animationDelay: `${idx * 0.03}s`,
              }}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="h-2 bg-[#e5e7eb] rounded-full overflow-hidden">
            <div className="h-full w-1/3 bg-[#7c3aed] rounded-full" />
          </div>
          <div className="flex justify-between mt-2 text-[0.875rem] text-[#4a4a4a] font-semibold">
            <span>1:32</span>
            <span>{call.duration}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6">
          <button className="p-3 rounded-xl hover:bg-[#f5f3ff] text-[#4a4a4a] transition-all border-2 border-[#d1d5db]">
            <SkipBack size={24} strokeWidth={2} />
          </button>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-5 rounded-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white transition-all shadow-lg"
          >
            {isPlaying ? <Pause size={28} strokeWidth={2.5} /> : <Play size={28} strokeWidth={2.5} className="ml-1" />}
          </button>
          <button className="p-3 rounded-xl hover:bg-[#f5f3ff] text-[#4a4a4a] transition-all border-2 border-[#d1d5db]">
            <SkipForward size={24} strokeWidth={2} />
          </button>
          <button className="p-3 rounded-xl hover:bg-[#f5f3ff] text-[#4a4a4a] transition-all border-2 border-[#d1d5db]">
            <Volume2 size={24} strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Transcript */}
      <div className="flex-1 overflow-y-auto p-5 bg-[#f8f9fa]">
        <h4 className="text-[0.875rem] font-bold text-[#6b7280] uppercase tracking-wide mb-5 flex items-center gap-3">
          <Bot size={18} strokeWidth={2} />
          Transcripción generada por IA
        </h4>
        <div className="space-y-4">
          {call.transcript.map((entry, idx) => (
            <div
              key={idx}
              className={`flex gap-4 p-4 rounded-xl ${entry.speaker === 'ai' ? 'bg-[#f5f3ff] border-2 border-[#ddd6fe]' : 'bg-white border-2 border-[#e5e7eb]'}`}
            >
              <span className="flex-shrink-0 text-[0.875rem] text-[#6b7280] font-mono font-bold w-12">
                {entry.timestamp}
              </span>
              <div className="flex-1">
                <span
                  className={`text-[0.875rem] font-bold ${
                    entry.speaker === 'client'
                      ? 'text-[#166534]'
                      : entry.speaker === 'agent'
                      ? 'text-[#0056b3]'
                      : 'text-[#7c3aed]'
                  }`}
                >
                  {entry.speaker === 'client' ? 'Cliente' : entry.speaker === 'agent' ? 'Agente' : 'Sistema IA'}:
                </span>
                <p className="text-[1rem] text-[#1a1a1a] mt-1.5 leading-relaxed">{entry.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ContextBlade({ task, onClose }: ContextBladeProps) {
  if (!task) return null;

  const channelIcon = {
    whatsapp: MessageCircle,
    email: Mail,
    phone: Phone,
  };
  const ChannelIcon = channelIcon[task.channel];

  return (
    <div className="w-[480px] h-full bg-white border-l-2 border-[#d1d5db] flex flex-col slide-in shadow-xl">
      {/* Header */}
      <header className="h-20 px-5 flex items-center justify-between border-b-2 border-[#d1d5db] bg-[#f8f9fa] flex-shrink-0">
        <div className="flex items-center gap-3">
          <span className="text-[1rem] font-mono text-[#0056b3] bg-[#eff6ff] px-4 py-2 rounded-xl font-bold border-2 border-[#bfdbfe]">
            {task.id}
          </span>
          {task.isVIP && (
            <span className="flex items-center gap-2 text-[0.9375rem] text-[#b45309] bg-[#fffbeb] px-4 py-2 rounded-xl font-bold border-2 border-[#fde68a]">
              <Star size={16} fill="#b45309" strokeWidth={0} />
              VIP
            </span>
          )}
        </div>
        <button
          onClick={onClose}
          className="p-3 rounded-xl hover:bg-[#e8eaed] text-[#4a4a4a] transition-all border-2 border-[#d1d5db]"
        >
          <X size={22} strokeWidth={2} />
        </button>
      </header>

      {/* Task Info */}
      <div className="p-5 border-b-2 border-[#d1d5db] flex-shrink-0 bg-white">
        <h2 className="text-[1.25rem] font-bold text-[#1a1a1a] mb-5">{task.title}</h2>

        {/* Meta Info */}
        <div className="grid grid-cols-2 gap-4 text-[0.9375rem]">
          <div className="flex items-center gap-3 text-[#1a1a1a] bg-[#f8f9fa] p-3 rounded-xl">
            <User size={20} className="text-[#6b7280]" strokeWidth={2} />
            <span className="font-semibold truncate">{task.clientName}</span>
          </div>
          <div className="flex items-center gap-3 text-[#1a1a1a] bg-[#f8f9fa] p-3 rounded-xl">
            <Clock size={20} className="text-[#6b7280]" strokeWidth={2} />
            <span className="font-semibold">
              {new Date(task.createdAt).toLocaleString('es-ES', {
                day: '2-digit',
                month: 'short',
                hour: '2-digit',
                minute: '2-digit',
              })}
            </span>
          </div>
          <div className="flex items-center gap-3 text-[#1a1a1a] bg-[#f8f9fa] p-3 rounded-xl">
            <ChannelIcon size={20} className="text-[#6b7280]" strokeWidth={2} />
            <span className="capitalize font-semibold">{task.channel === 'phone' ? 'Teléfono' : task.channel}</span>
          </div>
          <div className="flex items-center gap-3 text-[#1a1a1a] bg-[#f8f9fa] p-3 rounded-xl">
            {task.status === 'open' ? (
              <AlertCircle size={20} className="text-[#b45309]" strokeWidth={2} />
            ) : (
              <CheckCircle2 size={20} className="text-[#166534]" strokeWidth={2} />
            )}
            <span className="font-semibold">{task.status === 'open' ? 'Abierto' : task.status === 'in_progress' ? 'En curso' : 'Resuelto'}</span>
          </div>
        </div>

        {/* AI Tags */}
        <div className="mt-5">
          <div className="flex items-center gap-3 mb-3">
            <Tag size={18} className="text-[#6b7280]" strokeWidth={2} />
            <span className="text-[0.875rem] font-bold text-[#6b7280] uppercase tracking-wide">
              Etiquetas IA
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {task.aiTags.map((tag, idx) => {
              const colors = tagColorMap[tag.color];
              return (
                <span
                  key={idx}
                  className="text-[0.875rem] px-4 py-2 rounded-xl border-2 font-bold"
                  style={{ backgroundColor: colors.bg, color: colors.text, borderColor: colors.border }}
                >
                  <span className="opacity-70">{tag.label}:</span> {tag.value}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      {/* Channel Content */}
      <div className="flex-1 overflow-hidden">
        {task.channel === 'whatsapp' && task.whatsappMessages && (
          <WhatsAppView messages={task.whatsappMessages} />
        )}
        {task.channel === 'email' && task.emailThread && (
          <EmailView thread={task.emailThread} />
        )}
        {task.channel === 'phone' && task.phoneCall && (
          <PhoneView call={task.phoneCall} />
        )}
      </div>

      {/* Actions Footer */}
      <footer className="p-4 border-t-2 border-[#d1d5db] flex items-center gap-3 flex-shrink-0 bg-[#f8f9fa]">
        <button className="flex-1 py-4 px-6 bg-[#0056b3] hover:bg-[#004494] text-white text-[1rem] font-bold rounded-xl transition-all shadow-md">
          Asignar agente
        </button>
        <button className="p-4 bg-white hover:bg-[#f0f1f3] text-[#4a4a4a] rounded-xl transition-all border-2 border-[#d1d5db]">
          <ExternalLink size={22} strokeWidth={2} />
        </button>
      </footer>
    </div>
  );
}
