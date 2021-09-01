//------------------------------------------------peticiones HTTP


const apiURL ='https://reqres.in/api/users/2';

fetch(apiURL).then(resp=>{
  resp.json().then(datos=>{
  console.log(datos);
  console.log(datos.data.id);
  console.log(datos.data.email);
  });
});
 

//--------------------------------------------------------
//console.log("Hola de nuevo");
//let a=5,b=25, c=15,d=100, e=12.2;
//let CadenaCompuesta='Buen dia';
//let x=a+d;
//console.log(x);



/*console.log("Mensaje normal  ",x);
console.warn("Mensaje alerta", x);
console.error("Este es un mensaje de error", x);

console.log({a});
console.log({b});
console.log({c});

console.log('%c Mis valores','color:blue; font-weight: bold');
console.table({a,b,c,d});
*/

//let nombre=prompt("Ingrese su nombre:", 'Claudia');
//console.log(nombre);

//console.log(typeof CadenaCompuesta);

/*let comida=['manzana','pastel','chocolate'];

console.log(comida[0]);
*/
//let elementos=[true, 1234,'Carla Miranda',1+2+3,['uno', 'dos','tres','cuatro',['azucar', 'maiz']]];
//console.log(elementos);
//console.log(elementos[4][4][0]);

//console.log('largo',elementos.length);

//let primerEle=elementos[0];
//let ultimoEle=elementos[elementos.length-1];
//console.log({primerEle,ultimoEle});

//elementos.forEach((elementos,indice,arr)=>{
  //  console.log({elementos, indice,arr});
  // });
   
//elementos.push('Quetzaltenango');
//console.log(elementos);

//let array=['uno','dos','tres','cuatro'];
//let encontrarNum=array.indexOf('cinco');
//console.log({encontrarNum});

/*

   /*console.log('Telefono de casa',datos.telefonos.telefonoCasa);
   console.log('Direccion',datos.direccion);
   console.log('Coordenadas',datos.cordenadas);
   console.log('Auto',datos.autos[1]);*/

   /*const y ='estado';
   console.log('Estado: ',datos[y]);

   delete datos.direccion;
   console.log(datos);

   const converArray=Object.entries(datos);
   console.log(converArray);*/

/*function saludar(nombre){
  console.log('Hola '+nombre);
  return 0;
  console.log('Estoy fuera de la función');
}


const valorreturn=saludar('hola este es el nombre');
console.log(valorreturn);*/
/*
let datos={
  nombre:"Karla Miranda",
  direccion:"Xela",
  estado:true,
  telefonos:{
  telefonoCasa:3646546,
  telefonoOficina:654654
  },
  cordenadas:{
  lat:35.231,
  lng:-135.5
  },
  autos:['Mazda','Yaris','VMW']
 }

 console.log({datos});

datos.documentos=true;
const converArray=Object.entries(datos);
console.log(converArray);

const primeraFincion=function(){
  console.log('Hola esta es un función');
 }
 primeraFincion();

const primeraFincionF=() =>{
  console.log('Hola esta es un función de flecha');
}

primeraFincionF();

 const segundaFuncion=function(nombre){
  console.log('Hola '+nombre);
  
  console.log('Esta es una linea fuera de la funcion');
  return 0;
}
  segundaFuncion('Estudiantes de ingenieria');

 const segundaFuncionF=(nombre1, apellido) =>{
   console.log('Esta es una funcion de flecha con parametros' +nombre1, apellido);
 }

 segundaFuncionF('Hola Cristian','Castro');

const crearDatos=(nombre,apellido)=>({nombre,apellido});
const datos1=crearDatos('Maria','Cardona');
console.log(datos1);

const Argumentos=(otroArgumento ,...argumento)=>{
  console.log(otroArgumento,argumento);
}

Argumentos('Otro Argumento','Oscar', 'Carla', 12,15,true, false);*/

/*----------------------------------Promesas---------------------*/

//import { buscarEmpleado,buscarEmpleadoAsync, tiempoLento, tiempoMedio,tiempoRapido } from "../promesas/promesas.js";
//import { obtenerEmpleadosArr } from "../promesas/awite.js";

//obtenerEmpleadosArr().then(console.table);


//tiempoRapido.then(console.log);
//tiempoMedio.then(console.log);
//tiempoLento.then(console.log);

//Promise.race([tiempoLento,tiempoMedio,tiempoRapido])
 // .then(mensaje=>console.log(mensaje));

/*

buscarEmpleadoAsync('informatica')
  .then(empleado=>console.log(empleado)) 
  .catch(console.warn);

const empleadoUno="ventas";
const empleadoDos="informatica";*/

//Promise.all([buscarEmpleado(empleadoUno), buscarEmpleado(empleadoDos)]).then(([ResEmpleado1,ResEmpleado2])=>{
//  console.log(`Felicidades ${ResEmpleado1.nombre} y ${ResEmpleado2.nombre} son los mejores em
//pleados`)
//}).catch(err=>{alert(err)
//}).finally(console.log("La promesa ha terminado"));


//console.log('Fin de codigo promesas');


//buscarEmpleado(empleadoUno).then(empleado=>{
//  console.log(`Empleado encontrado ${empleado.nombre} el mejor empleado`);
//}).catch(err=>{alert(err)}).finally(console.log("Fin de la promesa"));
/*----------------------------------------------------*/
document.addEventListener('DOMContentLoaded',function(){
  const dat1=document.getElementById('dato1');
  const dat2=document.getElementById('dato2');
  const alert=document.getElementById('alert');
  const tab=document.getElementById('tabla');
  const boto=document.getElementById('add');
  let id=1;

  function removeTodo(id){
    document.getElementById(id).remove();
   //console.log(id);
  }

  function agregar(){
    if(dat1.value===''|| dat2.value===''){
      alert.classList.remove('d-none');
      alert.innerText='Los datos son requeridos';
    } 
    else 
    {alert.classList.add('d-none');
    const row =tab.insertRow();
    row.setAttribute('id',id++);
    row.innerHTML=`
    <td>${dat1.value}</td>
    <td>${dat2.value}</td>
    <td class="text-center">
    <input type="checkbox">
    </td>
    <td class="text-right">
      <button class="btn btn-warning mb-1">
       Editar
      </button>
    </td>
    `;
    const removeBtn=document.createElement('button');
    removeBtn.classList.add('btn','btn-danger','mb-1','ml-1');
    removeBtn.innerHTML=('Eliminar');
    removeBtn.onclick=function(e){
      removeTodo(row.getAttribute('id'));
    }
    row.children[3].appendChild(removeBtn);
  }
  }
 
  boto.onclick=agregar;
 });
 


