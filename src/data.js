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
    totalHours: 175,
    projects: [
      { name: "Motor Presupuestos", desc: "Cálculo dinámico de costos y amortización CAPEX/OPEX.", hours: 95, difficulty: "Alta complejidad matemática", estClose: "15 de Mayo" },
      { name: "Kardex Web", desc: "Sincronización de stock físico vs digital.", hours: 80, difficulty: "Inconsistencias con bases heredadas", estClose: "30 de Abril" }
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
    totalHours: 171,
    projects: [
      { name: "Automatización Financiera", desc: "Scraping y procesamiento de facturas.", hours: 85, difficulty: "Formatos inconsistentes en PDFs", estClose: "10 de Mayo" },
      { name: "Core Mobile Institucional", desc: "Arquitectura base de la aplicación híbrida.", hours: 86, difficulty: "Integración de dependencias nativas", estClose: "30 de Abril" }
    ],
    daysWorked: 21,
  }
];

export const automations = [
  { owner: "Emmanuel", title: "Descarga de facturas", items: ["Descarga automática", "Clasificación por proveedor", "Validación DRACO", "Reporte de discrepancias"] },
  { owner: "Samuel", title: "AWS & Infra", items: ["Pipeline CI/CD Elite 360", "Envíos masivos SES", "Sistema de tokens OTP"] },
  { owner: "Gonzalo", title: "Data & Flujos", items: ["Carga masiva PDFs Enter", "Descarga actas SIG", "Flujos de aprobación administrativos"] }
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
