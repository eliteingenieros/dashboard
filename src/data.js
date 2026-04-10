export const globalStats = {
  totalHours: "524h",
  prAcceptance: 81,
  prRebound: 19,
  automationsCount: 7,
  heavyTasks: 3,
  mergedPRs: 38,
  rejectedPRs: 9,
};

export const collaborators = [
  {
    name: "Samuel",
    totalHours: 189,
    projects: [
      { name: "Motor Presupuestos", desc: "Cálculo dinámico de costos y amortización CAPEX/OPEX.", hours: 64, difficulty: "Alta complejidad matemática", estClose: "20 de Abril" },
      { name: "Kardex Web", desc: "Sincronización de stock físico vs digital.", hours: 13, difficulty: "Inconsistencias con bases heredadas", estClose: "30 de Abril" },
      { name: "Evaluaciones (Eval)", desc: "Notificaciones masivas y cargas CSV.", hours: 34, difficulty: "Latencia en Amazon SES", estClose: "Finalizado" },
      { name: 'Reuniones, apoyos y otros', desc: 'Participación en reuniones, apoyo a compañeros y tareas administrativas.', hours: 13, difficulty: 'Tareas variadas y no planificadas', estClose: 'Continuo' },
      { name: 'Automatización y clasificación de actas', desc: 'Desarrollo de flujos para descarga y clasificación de actas en OneDrive y SIG.', hours: 20, difficulty: 'Integración con sistemas heredados y manejo de formatos variados', estClose: '30 de Abril' },
      { name: 'Refactors Automatización de cumpleaños', desc: 'Optimización de flujos para automatización de felicitaciones de cumpleaños.', hours: 42, difficulty: 'Integración con sistema de calendario', estClose: 'Finalizado' },
      { name: 'Refactors UI/UX modulo transporte', desc: 'Optimización de la interfaz de usuario y experiencia del usuario para el módulo de transporte.', hours: 3, difficulty: 'Diseño responsivo y compatibilidad con navegadores', estClose: 'Finalizado' }

    ],
    daysWorked: 21,
  },
  {
    name: "Gonzalo",
    totalHours: 178,
    projects: [
      { name: "Elite Sign", desc: "Core del sistema de firma digital y validación OTP.", hours: 90, difficulty: "Configuración estricta de seguridad", estClose: "24 de Abril" },
      { name: "Infraestructura AWS", desc: "Reestructuración de S3 y pipelines.", hours: 50, difficulty: "Permisos y CORS en producción", estClose: "15 de Abril" },
      { name: "Evaluaciones (Eval)", desc: "Notificaciones masivas y cargas CSV.", hours: 38, difficulty: "Latencia en Amazon SES", estClose: "Finalizado" }
    ],
    daysWorked: 22,
  },
  {
    name: "Emmanuel",
    totalHours: 184,
    projects: [
      { name: "Automatización Financiera", desc: "Scraping y procesamiento de facturas.", hours: 58, difficulty: "Formatos inconsistentes en PDFs", estClose: "10 de Mayo" },
      { name: "Kardex Web", desc: "Sincronización de stock físico vs digital.", hours: 79, difficulty: "Inconsistencias con bases heredadas", estClose: "30 de Abril" },
      { name: "Enter - Carga Masiva de PDFs", desc: "Automatización de carga de documentos PDF.", hours: 28, difficulty: "Accesibilidad y credenciales", estClose: "24 de Abril" },
      { name: 'DRACO', desc: 'Informe de discrepancias en pedidos digitados y validados', hours: 1, difficulty: '-', estClose: '15 de Mayo' },
      { name: 'Reuniones, apoyos y otros', desc: 'Participación en reuniones, apoyo a compañeros y tareas administrativas.', hours: 18, difficulty: 'Tareas variadas y no planificadas', estClose: 'Continuo' }
    ],
    daysWorked: 21,
  }
];

export const automations = [
  { owner: "Emmanuel", items: ["Clasificación de Pila", "Clasificación de ARL", "Descarga automática facturas DIAN", "Enter - carga de pdfs", "conversión de archivos para Generic Transfer", "Envío de correos de facturas descargas a siesa"] },
  { owner: "Samuel", items: ["Envío de cumpleaños + tarjetas personalizadas", "Descarga actas email + clasificación en OneDriive por mes y proyecto", "Sincronización y clasificación actas SIG por  colaborador", "Automatización flujo de aprobaciones & paz y salvos"] },
  { owner: "Gonzalo", items: ["Carga masiva PDFs Enter", "Descarga actas SIG", "Flujos de aprobación administrativos"] }
];

export const infraReport = {
  eliteSign: {
    status: "Retraso planificado",
    reason: "Reestructuración S3 y sistema OTP avanzado para validez legal.",
    targetDate: "25 de Abril",
  },
  securityAudit: {
    status: "En curso (Iniciada 01 de Abril)",
    focus: ["CI/CD pipelines", "Saneamiento de llaves", "Auditoría de logs"],
  },
  roadmap: [
    { title: "Elite Sign", task: "Integración bidireccional con RRHH.", date: "24 Abr" },
    { title: "Sistema Enter", task: "Mapeo de campos dinámicos internacionales.", date: "15 Abr" },
    { title: "Calidad", task: "Mantener aceptación PR > 80%.", date: "Continuo" }
  ]
};
