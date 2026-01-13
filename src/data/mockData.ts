import type { Task } from '../types';

export const MOCK_TASKS: Task[] = [
  {
    id: 'CLM-129',
    title: 'Accidente de tráfico - Reporte urgente',
    clientName: 'Carlos Martínez Ruiz',
    clientEmail: 'carlos.martinez@empresa.com',
    channel: 'phone',
    priority: 'critical',
    department: 'claims',
    status: 'open',
    createdAt: '2024-01-15T09:23:00',
    isVIP: true,
    aiTags: [
      { label: 'Urgencia', value: 'Alta', color: 'red' },
      { label: 'Departamento', value: 'Siniestros', color: 'purple' },
      { label: 'Cliente', value: 'VIP', color: 'yellow' },
    ],
    phoneCall: {
      duration: '4:32',
      timestamp: '2024-01-15T09:23:00',
      transcript: [
        { speaker: 'agent', text: 'Buenos días, SegurosIA, ¿en qué puedo ayudarle?', timestamp: '00:00' },
        { speaker: 'client', text: 'Hola, acabo de tener un accidente de coche. Estoy en la A-6, kilómetro 23.', timestamp: '00:08' },
        { speaker: 'agent', text: '¿Se encuentra usted bien? ¿Hay heridos?', timestamp: '00:22' },
        { speaker: 'client', text: 'Sí, estoy bien, solo nervioso. Mi coche tiene un golpe importante.', timestamp: '00:28' },
        { speaker: 'ai', text: '🤖 IA: Cliente VIP detectado. Grúa disponible en 15 min.', timestamp: '00:45' },
        { speaker: 'agent', text: 'Perfecto, señor Martínez. Ya he activado el servicio de grúa.', timestamp: '00:52' },
      ],
    },
  },
  {
    id: 'VNT-847',
    title: 'Consulta seguro de vida - Nuevo lead',
    clientName: 'Ana García López',
    clientEmail: 'ana.garcia@gmail.com',
    channel: 'whatsapp',
    priority: 'medium',
    department: 'sales',
    status: 'open',
    createdAt: '2024-01-15T10:45:00',
    aiTags: [
      { label: 'Sentimiento', value: 'Interesado', color: 'green' },
      { label: 'Producto', value: 'Vida', color: 'blue' },
    ],
    whatsappMessages: [
      { id: 'w1', sender: 'client', content: 'Hola, he visto vuestra publicidad sobre seguros de vida.', timestamp: '10:45' },
      { id: 'w2', sender: 'agent', content: 'Buenos días Ana, gracias por contactarnos. ¿Podrías indicarme tu edad?', timestamp: '10:47' },
      { id: 'w3', sender: 'client', content: 'Tengo 34 años. Acabo de tener mi primer hijo.', timestamp: '10:50' },
      { id: 'w4', sender: 'client', content: '¿Cuánto costaría una cobertura de 200.000€?', timestamp: '10:51' },
      { id: 'w5', sender: 'agent', content: 'Para 34 años, una cobertura de 200.000€ estaría entre 25-35€/mes.', timestamp: '10:54' },
    ],
  },
  {
    id: 'SOP-562',
    title: 'Reclamación error de facturación',
    clientName: 'Roberto Fernández Vega',
    clientEmail: 'r.fernandez@juridico-vega.es',
    channel: 'email',
    priority: 'high',
    department: 'support',
    status: 'in_progress',
    createdAt: '2024-01-15T08:12:00',
    aiTags: [
      { label: 'Sentimiento', value: 'Negativo', color: 'red' },
      { label: 'Tipo', value: 'Facturación', color: 'purple' },
    ],
    emailThread: [
      {
        id: 'e1',
        from: 'r.fernandez@juridico-vega.es',
        to: 'atencion@seguros-ia.com',
        subject: 'URGENTE: Cobro duplicado - INACEPTABLE',
        body: `Estimados señores,

Me dirijo a ustedes EXTREMADAMENTE disgustado.

Esta mañana he comprobado un DOBLE COBRO de mi seguro de hogar. En lugar de 89,50€, me han cargado 179€.

EXIJO la devolución INMEDIATA del cobro duplicado.

Roberto Fernández Vega
Abogado colegiado nº 28.456`,
        timestamp: '2024-01-15T08:12:00',
      },
      {
        id: 'e2',
        from: 'atencion@seguros-ia.com',
        to: 'r.fernandez@juridico-vega.es',
        subject: 'RE: URGENTE: Cobro duplicado',
        body: `Estimado Sr. Fernández,

Le pido disculpas por las molestias. He verificado su cuenta y confirmo el error.

✓ Devolución de 89,50€ ordenada (24-48h)
✓ Devolución de 35€ por comisiones bancarias
✓ 10% descuento en próxima renovación

Un cordial saludo,
María Santos
Atención al Cliente`,
        timestamp: '2024-01-15T09:45:00',
      },
    ],
  },
  {
    id: 'DOC-234',
    title: 'Envío documentación renovación',
    clientName: 'Isabel Torres Muñoz',
    clientEmail: 'isabel.torres@outlook.es',
    channel: 'email',
    priority: 'low',
    department: 'renewals',
    status: 'open',
    createdAt: '2024-01-15T11:30:00',
    aiTags: [
      { label: 'Tipo', value: 'Documentación', color: 'gray' },
      { label: 'Estado', value: 'Completo', color: 'green' },
    ],
    emailThread: [
      {
        id: 'e1',
        from: 'isabel.torres@outlook.es',
        to: 'documentacion@seguros-ia.com',
        subject: 'Documentos para renovación AUTO-2023-45123',
        body: `Buenos días,

Adjunto la documentación para renovación:
- Carnet de conducir (renovado)
- Ficha técnica del vehículo
- Último recibo de ITV

Saludos,
Isabel Torres Muñoz`,
        timestamp: '2024-01-15T11:30:00',
      },
    ],
  },
  {
    id: 'CLM-130',
    title: 'Parte de siniestro con fotos',
    clientName: 'Miguel Ángel Ruiz',
    clientEmail: 'miguelangel.ruiz@hotmail.com',
    channel: 'whatsapp',
    priority: 'high',
    department: 'claims',
    status: 'open',
    createdAt: '2024-01-15T14:20:00',
    aiTags: [
      { label: 'Tipo', value: 'Siniestro', color: 'red' },
      { label: 'Evidencia', value: 'Fotos', color: 'green' },
    ],
    whatsappMessages: [
      { id: 'w1', sender: 'client', content: 'Hola, me han dado un golpe en el parking. El otro coche se ha ido.', timestamp: '14:20' },
      { id: 'w2', sender: 'agent', content: 'Lamento escuchar eso. ¿Puede enviarme fotos de los daños?', timestamp: '14:22' },
      { id: 'w3', sender: 'client', content: 'Sí, ahora mismo', timestamp: '14:23' },
      { id: 'w4', sender: 'client', content: '', timestamp: '14:24', hasImage: true, imageUrl: 'car-damage-1' },
      { id: 'w5', sender: 'client', content: '', timestamp: '14:24', hasImage: true, imageUrl: 'car-damage-2' },
      { id: 'w6', sender: 'client', content: 'El golpe está en la puerta trasera derecha', timestamp: '14:25' },
      { id: 'w7', sender: 'agent', content: '🤖 IA: Daños detectados. Estimación: 850€ - 1.200€', timestamp: '14:26' },
    ],
  },
];
