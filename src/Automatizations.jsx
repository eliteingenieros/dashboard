import { Sparkles } from "lucide-react";
import { automations } from "./data";
import React from "react";
 
const Automatizations = () => {
 
    return (
        <>
            <h2 className="section-header"><Sparkles size={24} /> Automatizaciones</h2>
            <div className="detail-table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>Colaborador</th>
                            <th>Automatización</th>
                            <th>Impacto</th>
                            <th>Tiempo antes</th>
                            <th>Tiempo ahorrado</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {automations.map((c, i) => (
                            <React.Fragment key={i}>
                                {c.items.map((p, pi) => (
                                    <tr key={pi}>
                                        {pi === 0 && (
                                            <td rowSpan={c.items.length} style={{ background: '#fafafa', fontWeight: 600 }}>
                                                {c.owner}
                                            </td>
                                        )}
                                        <td>
                                            <strong>{p.name}</strong><br />
                                            <span style={{ fontSize: '0.85rem', color: 'var(--secondary-text)' }}>{p.desc}</span>
                                        </td>
                                        <td><span className="tag">{p.impact}</span></td>
                                        <td><span className="tag">{p.timeBefore}</span></td>
                                        <td><span className="tag">{p.timeAfter}</span></td>
                                        <td style={{ fontWeight: 500 }}>{p.status}</td>
                                    </tr>
                                ))}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
 
export default Automatizations;