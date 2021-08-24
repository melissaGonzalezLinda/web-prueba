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

/*let datos={
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

   console.log({datos});/*

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

const crearDatos=(nombre,apellido)=>({nombre,apellido});

const datos=crearDatos('Maria','Cardona');
console.log(datos);

const TodosArgumentos=(...argu)=>{
  console.log(argu);
}
   
TodosArgumentos('Oscar', 'Carla',6,10,true,false);