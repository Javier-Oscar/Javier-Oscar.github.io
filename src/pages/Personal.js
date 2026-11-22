import {useState} from 'react';import {Plus} from 'lucide-react';import {useApp} from '../context/AppContext';import {Head,Table,Badge,Modal,Field,useForm} from '../components/UI';import {ROLES,AREAS} from '../data/mockData';import s from '../styles/ui.module.css';
function Form({onClose}){
 const {add}=useApp();const {f,ch,er,setEr}=useForm({nombre:'',ci:'',correo:'',telefono:'',password:'',rol:'Pasante',area:'Clínica'});
 const guardar=e=>{e.preventDefault();const x={};if(f.nombre.trim().split(/\s+/).length<2)x.nombre='Ingresa nombres y apellidos completos';if(!/^\d{5,10}$/.test(f.ci))x.ci='CI inválido (5–10 dígitos)';if(!/^\S+@\S+\.\S+$/.test(f.correo))x.correo='Correo inválido';if(!/^[67]\d{7}$/.test(f.telefono))x.telefono='Celular boliviano de 8 dígitos';if(f.password.length<6)x.password='Mínimo 6 caracteres';setEr(x);if(Object.keys(x).length)return;add('usuarios',{...f,estado:'Activo'});onClose();};
 return <Modal title="Nuevo personal / cuenta" onClose={onClose}><form onSubmit={guardar}><Field label="Nombres y apellidos *" error={er.nombre}><input value={f.nombre} onChange={ch('nombre')}/></Field>
 <div className={s.g2}><Field label="Carnet de identidad *" error={er.ci}><input value={f.ci} onChange={ch('ci')}/></Field><Field label="Teléfono / celular *" error={er.telefono}><input value={f.telefono} onChange={ch('telefono')}/></Field>
 <Field label="Correo electrónico *" error={er.correo}><input value={f.correo} onChange={ch('correo')}/></Field><Field label="Contraseña *" error={er.password}><input type="password" value={f.password} onChange={ch('password')}/></Field>
 <Field label="Rol"><select value={f.rol} onChange={ch('rol')}>{ROLES.map(r=><option key={r}>{r}</option>)}</select></Field><Field label="Área asignada"><select value={f.area} onChange={ch('area')}>{AREAS.map(r=><option key={r}>{r}</option>)}</select></Field></div><button className={s.btn}>Crear cuenta</button></form></Modal>;
}
export default function Personal(){
 const {db}=useApp();const [o,setO]=useState(false);
 return <><Head title="Personal y pasantes" sub="Gestión de cuentas · Rol: Administrador" action={<button className={s.btn} onClick={()=>setO(true)}><Plus size={15}/> Nuevo registro</button>}/>
 <div className={s.card}><h3>Personal registrado ({db.usuarios.length})</h3><Table rows={db.usuarios} cols={[{h:'Nombre',k:'nombre'},{h:'CI',k:'ci'},{h:'Correo',k:'correo'},{h:'Rol',k:'rol'},{h:'Área',k:'area'},{h:'Estado',r:r=><Badge t={r.estado}/>}]}/></div>{o&&<Form onClose={()=>setO(false)}/>}</>;
}
