import {useState} from 'react';import s from '../styles/ui.module.css';
const C={Aprobado:'ok',Aprobada:'ok',Activo:'ok',Observado:'warn',Mora:'bad',Pendiente:'info',Préstamo:'info',Vigente:'ok',Reagendada:'warn'};
export const Badge=({t})=><span className={`${s.badge} ${s[C[t]||'info']}`}>{t}</span>;
export const Field=({label,error,children})=><label className={s.field}><span className={s.label}>{label}</span>{children}{error&&<span className={s.err}>{error}</span>}</label>;
export const Modal=({title,onClose,children})=><div className={s.back} onClick={onClose}><div className={s.modal} onClick={e=>e.stopPropagation()}><div className={s.mh}><h3>{title}</h3><button className={s.x} onClick={onClose}>×</button></div>{children}</div></div>;
export const Head=({title,sub,action})=><div className={s.head}><div><div className={s.eyebrow}>Demostración institucional</div><h1>{title}</h1><p className={s.sub}>{sub}</p></div>{action}</div>;
export const Table=({cols,rows,rowClass})=><div style={{overflowX:'auto'}}><table className={s.table}><thead><tr>{cols.map(c=><th key={c.h}>{c.h}</th>)}</tr></thead><tbody>{rows.map(r=><tr key={r.id} className={rowClass?s[rowClass(r)]:''}>{cols.map(c=><td key={c.h}>{c.r?c.r(r):r[c.k]}</td>)}</tr>)}{!rows.length&&<tr><td colSpan={cols.length}>Sin registros.</td></tr>}</tbody></table></div>;
export const useForm=init=>{const [f,set]=useState(init);const [er,setEr]=useState({});const ch=k=>e=>set(p=>({...p,[k]:e.target.value}));return {f,set,ch,er,setEr};};
