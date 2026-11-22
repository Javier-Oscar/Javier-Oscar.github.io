export const ROLES=['Administrador','Supervisor','Psicólogo','Pasante','Recepción'];
export const AREAS=['Clínica','Educativa','Social','Audi'];
export const config0={latitud:-16.5,longitud:-68.15,radio:100};
export const usuarios=[
{id:1,nombre:'Lucía Fernández Rojas',ci:'6543210',correo:'admin@enfoqueysalud.bo',telefono:'71234567',rol:'Administrador',area:'Social',estado:'Activo'},
{id:2,nombre:'Marcelo Quispe Mamani',ci:'5432109',correo:'supervisor@enfoqueysalud.bo',telefono:'72345678',rol:'Supervisor',area:'Clínica',estado:'Activo'},
{id:3,nombre:'Andrea Villarroel Cussi',ci:'7654321',correo:'psicologa@enfoqueysalud.bo',telefono:'73456789',rol:'Psicólogo',area:'Clínica',estado:'Activo'},
{id:4,nombre:'Camila Choque Apaza',ci:'9876543',correo:'camila@enfoqueysalud.bo',telefono:'74567890',rol:'Pasante',area:'Educativa',estado:'Activo'},
{id:5,nombre:'Diego Mamani Condori',ci:'9123456',correo:'diego@enfoqueysalud.bo',telefono:'75678901',rol:'Pasante',area:'Audi',estado:'Activo'},
{id:6,nombre:'Rosa Limachi Flores',ci:'6123987',correo:'recepcion@enfoqueysalud.bo',telefono:'76789012',rol:'Recepción',area:'Social',estado:'Activo'}];
export const pacientes=[
{id:1,nombres:'Mateo',apellidos:'Gutiérrez Paz',ci:'12345678',nacimiento:'2014-05-12',celular:'70011223',tipo:'Juzgado',institucion:'Juzgado de Niñez 2',tutor:'Elena Paz Ríos',tutorTel:'70011224'},
{id:2,nombres:'Valentina',apellidos:'Soria Calle',ci:'11223344',nacimiento:'2009-09-30',celular:'70022334',tipo:'Convenio',institucion:'Unidad Educativa Don Bosco',tutor:'Jorge Soria',tutorTel:'70022335'},
{id:3,nombres:'Ricardo',apellidos:'Alanoca Vera',ci:'8765432',nacimiento:'1988-02-17',celular:'70033445',tipo:'Particular',institucion:'',tutor:'',tutorTel:''},
{id:4,nombres:'Marta',apellidos:'Huanca Ticona',ci:'4455667',nacimiento:'1962-11-03',celular:'70044556',tipo:'Juzgado',institucion:'Juzgado de Familia 1',tutor:'',tutorTel:''}];
export const sesiones=[
{id:1,pacienteId:1,servicio:'Terapia',fechaHora:'2026-11-09T10:00',numero:3,motivo:'Dificultades de conducta en el colegio',notas:'Muestra mejor regulación emocional; se trabaja con juego simbólico.',acuerdos:'Registro de emociones diario',autorId:3},
{id:2,pacienteId:3,servicio:'Consultoría',fechaHora:'2026-11-10T15:00',numero:1,motivo:'Estrés laboral',notas:'Refiere insomnio y ansiedad anticipatoria.',acuerdos:'Higiene del sueño',autorId:4}];
export const bitacoras=[
{id:1,pasanteId:4,fecha:'2026-11-10',ini:'09:00',fin:'11:00',descripcion:'Apoyo en taller de habilidades sociales',estado:'Aprobado',feedback:'Buen trabajo.'},
{id:2,pasanteId:4,fecha:'2026-11-10',ini:'14:00',fin:'16:00',descripcion:'Observación de sesión grupal',estado:'Pendiente',feedback:''},
{id:3,pasanteId:4,fecha:'2026-11-11',ini:'09:00',fin:'12:00',descripcion:'Elaboración de material psicoeducativo',estado:'Aprobado',feedback:'Material claro.'},
{id:4,pasanteId:5,fecha:'2026-11-11',ini:'10:00',fin:'12:00',descripcion:'Aplicación de pruebas audiométricas',estado:'Observado',feedback:'Detallar protocolo.'}];
export const documentos=[
{id:1,pasanteId:4,tipo:'CI Anverso',archivo:'ci_anverso.jpg',estado:'Observado',motivo:'La foto está muy oscura'},
{id:2,pasanteId:4,tipo:'Título',archivo:'titulo.pdf',estado:'Aprobado',motivo:''},
{id:3,pasanteId:5,tipo:'Carta de Solicitud',archivo:'carta.pdf',estado:'Pendiente',motivo:''}];
export const reportes=[{id:1,pasanteId:4,titulo:'Informe de Pasantía Octubre',desde:'2026-10-01',hasta:'2026-10-31',resumen:'Participación en talleres y apoyo clínico.',tareas:[1]}];
export const inventario=[
{id:1,material:'Pruebas Psicológicas (WISC-V)',tipo:'Préstamo',cantidad:1,motivo:'Evaluación externa',limite:'2026-10-30',responsable:'Ps. Villarroel'},
{id:2,material:'Pruebas Psicológicas (Rorschach)',tipo:'Préstamo',cantidad:1,motivo:'Supervisión',limite:'2026-11-25',responsable:'Dr. Quispe'},
{id:3,material:'Material de Oficina (resmas)',tipo:'Entrada',cantidad:20,motivo:'Compra mensual',limite:'',responsable:'Administración'},
{id:4,material:'Pruebas Psicológicas (Beck)',tipo:'Préstamo',cantidad:2,motivo:'Taller',limite:'2026-11-05',responsable:'C. Choque'}];
export const asistencias=[{id:1,userId:3,tipo:'Entrada',hora:'12/11/2026, 08:02:11',dist:12,obs:''}];
usuarios.push({id:7,nombre:'Gabriel Nina Torrez',ci:'7012345',correo:'gabriel@enfoqueysalud.bo',telefono:'77890123',rol:'Psicólogo',area:'Educativa',estado:'Activo'});
export const citas=[
{id:1,pacienteId:1,psicologoId:3,fechaHora:'2026-11-16T09:00',motivo:'Seguimiento terapéutico',estado:'Programada',agendadaPor:6,fechaAnterior:'',motivoReagenda:''},
{id:2,pacienteId:3,psicologoId:3,fechaHora:'2026-11-17T15:30',motivo:'Segunda consulta',estado:'Programada',agendadaPor:6,fechaAnterior:'',motivoReagenda:''},
{id:3,pacienteId:2,psicologoId:7,fechaHora:'2026-11-18T10:00',motivo:'Orientación vocacional',estado:'Programada',agendadaPor:6,fechaAnterior:'',motivoReagenda:''}];
