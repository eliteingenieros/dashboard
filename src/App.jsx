import React, { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as ReTooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from 'recharts';
import {
  Layout, Shield, Users, Clock, CheckCircle, AlertTriangle,
  RefreshCcw,
  FileText
} from 'lucide-react';
import './index.css';
import Automatizations from './Automatizations';
import { collaborators, globalStats, infraReport } from './data';

const StatCard = ({ title, value, subtext, icon: Icon, color = 'var(--elite-green)' }) => (
  <div className="stat-card" style={{ borderTopColor: color }}>
    <div className="flex justify-between items-start mb-2" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
      <span className="stat-label">{title}</span>
      {Icon && <Icon size={18} color={color} />}
    </div>
    <div className="stat-value" style={{ color: 'var(--dark-text)' }}>{value}</div>
    <div style={{ color: 'var(--secondary-text)', fontSize: '0.8rem' }}>{subtext}</div>
  </div>
);

const App = () => {
  const [activeTab, setActiveTab] = useState('desarrollo');

  const prData = [
    { name: 'Aceptados', value: globalStats.prAcceptance, color: '#2e7d32' },
    { name: 'Rebotes', value: globalStats.prRebound, color: '#c62828' }
  ];

  const hoursData = collaborators.map(c => ({
    name: c.name,
    horas: c.totalHours
  }));

  return (
    <div className="app-wrapper">
      <header className="glass">
        <div className="container" style={{ padding: '15px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--elite-green)' }}>
            DIRECCIÓN DE TECNOLOGÍA E INNOVACIÓN
          </div>
          <div className="tabs-container" style={{ margin: 0, border: 0 }}>
            <div
              className={`tab ${activeTab === 'desarrollo' ? 'active' : ''}`}
              onClick={() => setActiveTab('desarrollo')}>
              Desarrollo
            </div>
            <div
              className={`tab ${activeTab === 'infraestructura' ? 'active' : ''}`}
              onClick={() => setActiveTab('infraestructura')}>
              Infraestructura
            </div>
          </div>
        </div>
      </header>

      <main className="container" style={{ marginTop: '40px' }}>
        <section style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 700, margin: '10px 0' }}>Reporte de Gestión TI</h1>
          <p style={{ color: 'var(--secondary-text)' }}>Resultados técnicos consolidados y Hoja de Ruta - Elite Ingenieros</p>
        </section>

        {activeTab === 'desarrollo' ? (
          <div className="tab-content">
            <div className="summary-grid">
              <StatCard title="Esfuerzo Grupal" value={globalStats.totalHours} subtext="~21 días p/p" icon={Clock} />
              <StatCard title="PR Aceptados" value={`${globalStats.prAcceptance}%`} subtext={`${globalStats.rejectedPRs} rechazados`} icon={CheckCircle} color="var(--elite-green)" />
              <StatCard title="Automatizaciones" value={globalStats.automationsCount} subtext="Flujos activos" icon={RefreshCcw} color="var(--info-text)" />
              {/* <StatCard title="Tareas Gruesas" value={globalStats.heavyTasks} subtext="Nivel Core" icon={Layout} color="var(--alert-text)" /> */}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '40px' }}>
              <div className="stat-card" style={{ height: '350px' }}>
                <h3 className="section-header" style={{ margin: '0 0 20px 0', fontSize: '1.2rem' }}>Audit de PR (Rebotes)</h3>
                <ResponsiveContainer width="100%" height="80%">
                  <PieChart>
                    <Pie data={prData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                      {prData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                    </Pie>
                    <ReTooltip />
                    <Legend verticalAlign="bottom" height={36} />
                  </PieChart>
                </ResponsiveContainer>
                <p style={{ fontSize: '0.8rem', color: 'var(--secondary-text)', marginTop: '10px' }}>
                  Motivos: Rendimiento, Lógica de Negocio y Seguridad.
                </p>
              </div>

              <div className="stat-card" style={{ height: '350px' }}>
                <h3 className="section-header" style={{ margin: '0 0 20px 0', fontSize: '1.2rem' }}>Esfuerzo por Colaborador</h3>
                <ResponsiveContainer width="100%" height="80%">
                  <BarChart data={hoursData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <ReTooltip />
                    <Bar dataKey="horas" fill="var(--elite-green)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <h2 className="section-header"><Users size={24} /> Desglose por Colaborador</h2>
            <div className="detail-table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Colaborador</th>
                    <th>Tareas Específicas</th>
                    <th>Horas</th>
                    <th>Dificultades</th>
                    <th>Cierre Est.</th>
                  </tr>
                </thead>
                <tbody>
                  {collaborators.map((c, i) => (
                    <React.Fragment key={i}>
                      {c.projects.map((p, pi) => (
                        <tr key={pi}>
                          {pi === 0 && (
                            <td rowSpan={c.projects.length} style={{ background: '#fafafa', fontWeight: 600 }}>
                              {c.name}<br />
                              <span style={{ fontWeight: 400, fontSize: '0.8rem' }}>{c.daysWorked} días</span>
                            </td>
                          )}
                          <td>
                            <strong>{p.name}</strong><br />
                            <span style={{ fontSize: '0.85rem', color: 'var(--secondary-text)' }}>{p.desc}</span>
                          </td>
                          <td><span className="tag">{p.hours}h</span></td>
                          <td>{p.difficulty}</td>
                          <td style={{ fontWeight: 500 }}>{p.estClose}</td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
            <Automatizations />
          </div>
        ) : (
          <div className="tab-content">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '40px' }}>
              <div className="stat-card" style={{ borderLeft: '4px solid var(--alert-text)', borderTop: 'none' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--alert-text)', margin: '0 0 15px 0' }}>
                  <AlertTriangle /> Status: Elite Sign
                </h3>
                <p><strong>{infraReport.eliteSign.status}:</strong> {infraReport.eliteSign.reason}</p>
                <div style={{ marginTop: '20px', padding: '10px', background: 'var(--alert-bg)', borderRadius: '8px', textAlign: 'center' }}>
                  Fecha estimada: <strong>{infraReport.eliteSign.targetDate}</strong>
                </div>
              </div>

              <div className="stat-card" style={{ borderLeft: '4px solid var(--elite-green)', borderTop: 'none' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--elite-green)', margin: '0 0 15px 0' }}>
                  <Shield /> Auditoría y Seguridad
                </h3>
                <p><strong>Estado:</strong> {infraReport.securityAudit.status}</p>
                <p><strong>Foco:</strong></p>
                <ul style={{ fontSize: '0.95rem' }}>
                  {infraReport.securityAudit.focus.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
              </div>
            </div>

            <h2 className="section-header"><FileText size={24} /> Ruta al 100% (Hoja de Ruta)</h2>
            <div className="detail-table-wrapper" style={{ padding: '20px' }}>
              {infraReport.roadmap.map((item, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 0', borderBottom: i < infraReport.roadmap.length - 1 ? '1px solid #eee' : 'none' }}>
                  <div>
                    <strong style={{ color: 'var(--elite-green)' }}>{item.title}:</strong> {item.task}
                  </div>
                  <div style={{ fontWeight: 600, color: 'var(--secondary-text)' }}>{item.date}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        <footer style={{ textAlign: 'center', padding: '40px 0', color: 'var(--secondary-text)', fontSize: '0.85rem' }}>
          Elite Ingenieros © 2026 | Gerencia de Tecnología | Reporte de Innovación
        </footer>
      </main>
    </div>
  );
};

export default App;
