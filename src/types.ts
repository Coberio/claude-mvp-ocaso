export type Channel = 'whatsapp' | 'email' | 'phone';
export type Priority = 'critical' | 'high' | 'medium' | 'low';
export type Department = 'claims' | 'sales' | 'support' | 'renewals';
export type Sentiment = 'positive' | 'neutral' | 'negative' | 'interested';

export interface AITag {
  label: string;
  value: string;
  color: 'red' | 'yellow' | 'green' | 'blue' | 'purple' | 'gray';
}

export interface WhatsAppMessage {
  id: string;
  sender: 'client' | 'agent';
  content: string;
  timestamp: string;
  hasImage?: boolean;
  imageUrl?: string;
}

export interface EmailMessage {
  id: string;
  from: string;
  to: string;
  subject: string;
  body: string;
  timestamp: string;
}

export interface PhoneCall {
  duration: string;
  timestamp: string;
  transcript: TranscriptEntry[];
}

export interface TranscriptEntry {
  speaker: 'client' | 'agent' | 'ai';
  text: string;
  timestamp: string;
}

export interface Task {
  id: string;
  title: string;
  clientName: string;
  clientEmail?: string;
  channel: Channel;
  priority: Priority;
  department: Department;
  status: 'open' | 'in_progress' | 'resolved';
  createdAt: string;
  isVIP?: boolean;
  aiTags: AITag[];
  whatsappMessages?: WhatsAppMessage[];
  emailThread?: EmailMessage[];
  phoneCall?: PhoneCall;
}
