import {useState} from 'react';import {Plus} from 'lucide-react';import {useApp} from '../context/AppContext';import {Head,Table,Badge,Field,Modal,useForm} from '../components/UI';import {calcularEdad} from '../utils';import s from '../styles/ui.module.css';
function Form({onClose}){
 const {add}=useApp();const {f,ch,er,setEr}=useForm({nombres:'',apellidos:'',ci:'',nacimiento:'',celular:'',alterno:'',correo:'',domicilio:'',tipo:'Particular',institucion:'',tutor:'',tutorTel:'',antecedentes:'',terapias:'',alergias:''});
 const edad=calcularEdad(f.nacimiento);const menor=edad!==null&&edad<18;
 const guardar=e=>{e.preventDefault();const x={};['nombres','apellidos','ci','nacimiento','celular'].forEach(k=>{if(!f[k].trim())x[k]='Requerido';});if(f.tipo!=='Particular'&&!f.institucion.trim())x.institucion='Indica la institución de origen';if(menor){if(!f.tutor.trim())x.tutor='Obligatorio para menores';if(!f.tutorTel.trim())x.tutorTel='Obligatorio para menores';}setEr(x);if(Object.keys(x).length)return;add('pacientes',f);onClose();};
 const I=(k,l,t='text')=><Field label={l} error={er[k]}><input type={t} value={f[k]} onChange={ch(k)}/></Field>;
 return <Modal title="Ficha de paciente nuevo" onClose={onClose}><form onSubmit={guardar}><div className={s.g2}>{I('nombres','Nombres *')}{I('apellidos','Apellidos *')}{I('ci','CI *')}{I('nacimiento','Fecha de nacimiento *','date')}{I('celular','Celular *')}{I('alterno','Contacto alternativo')}{I('correo','Correo','email')}{I('domicilio','Domicilio actual')}
 <Field label="Tipo de paciente"><select value={f.tipo} onChange={ch('tipo')}>{['Particular','Juzgado','Convenio'].map(t=><option key={t}>{t}</option>)}</select></Field>{I('institucion','Institución de origen (ej. Juzgado de Niñez 2)')}</div>
 {edad!==null&&<div className={`${s.alert} ${s.lock}`}>Edad: {edad} años{menor&&' · Menor de edad: tutor/apoderado obligatorio'}</div>}
 <div className={s.g2}>{I('tutor',`Tutor / apoderado${menor?' *':''}`)}{I('tutorTel',`Teléfono del tutor${menor?' *':''}`)}</div>
 <Field label="Antecedentes médicos"><textarea rows={2} value={f.antecedentes} onChange={ch('antecedentes')}/></Field><Field label="Historial de terapias previas"><textarea rows={2} value={f.terapias} onChange={ch('terapias')}/></Field><Field label="Alergias conocidas"><input value={f.alergias} onChange={ch('alergias')}/></Field><button className={s.btn}>Registrar paciente</button></form></Modal>;
}
export default function Pacientes(){
 const {db,rol}=useApp();const [o,setO]=useState(false);const puede=rol==='Recepción'||rol==='Psicólogo';
 return <><Head title="Pacientes y atención psicológica" sub={`Fichas de pacientes · Rol: ${rol}`} action={puede&&<button className={s.btn} onClick={()=>setO(true)}><Plus size={15}/> Nuevo registro</button>}/>
 <div className={s.card}><h3>Pacientes ({db.pacientes.length})</h3><Table rows={db.pacientes} cols={[{h:'Paciente',r:r=>`${r.nombres} ${r.apellidos}`},{h:'CI',k:'ci'},{h:'Edad',r:r=>calcularEdad(r.nacimiento)},{h:'Tipo',r:r=><Badge t={r.tipo}/>},{h:'Institución',r:r=>r.institucion||'—'},{h:'Tutor',r:r=>r.tutor||'—'}]}/></div>{o&&<Form onClose={()=>setO(false)}/>}</>;
}
