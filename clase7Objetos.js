function alumnosReprobados(){
  alumnos = [{
       nombre: "Julian",
       calificaciones:[6,7,8]
       },{
       nombre:"Adrian",
       calificaciones:[8,8,8]
       },{
       nombre:"Victor",
       calificaciones:[6,3,2]
       },{
       nombre:"Clarita",
       calificaciones:[2,4,8]
       }
  ]
  for(var i=0; i <alumnos.length; i++){
       var promedio = 0;
       var calificacionPorAlumno, sumaCalificacion = 0;
       for(var c=0; c < alumnos[i].calificaciones.length;c++){
            calificacionPorAlumno = alumnos[i].calificaciones[c];
            sumaCalificacion += calificacionPorAlumno;
            //console.log("Calificacion " + c + " de Alumno " + i + " " + calificacionPorAlumno);
            //console.log("Suma al momento = " + sumaCalificacion);
       }
       promedio = sumaCalificacion/alumnos[i].calificaciones.length;
       //console.log("Promedio de alumno " + i + " = " + promedio);
       if(promedio<=5){
            promedio = promedio.toFixed(2)
            console.log("Alumno " + alumnos[i].nombre + " NO aprobado.  Promedio de alumno  = " + promedio);
       }
  }
}
/*******************************************************************************************************************/
/*******************************************************************************************************************/
function materiasReprobadas(){
var alumnos = [{
    nombre: "Julian",
    materias:[
    {
      nombreMateria : "Mate",
      calificacion : 6
      },{
      nombreMateria : "Español",
      calificacion : 8
      }
      ]
    },{
      nombre: "Ale",
      materias:[
      {
      nombreMateria : "Mate",
      calificacion : 5
    },{
      nombreMateria : "Español",
      calificacion : 4
      }
      ]
    },{
       nombre: "Josue",
       materias:[
        {
        nombreMateria : "Mate",
        calificacion : 8
    },{
        nombreMateria : "Español",
        calificacion : 4
      }
      ]
    }
    ]


  for(var i=0; i <alumnos.length; i++){
       var calificacionPorAlumno, sumaCalificacion = 0;
       for(var m=0; m < alumnos[i].materias.length;m++){
            if(alumnos[i].materias[m].calificacion <= 5)
            console.log("Alumno " + alumnos[i].nombre + " NO aprobó materia: " + alumnos[i].materias[m].nombreMateria + ". Calificación obtenida = " + alumnos[i].materias[m].calificacion);
       }

  }
}

/*******************************************************************************************************************/
/*******************************************************************************************************************/
function alumnosReprobadosReloaded(){
  var alumnos = [];
  var numeroDeAlumnos = parseInt(prompt("Cuántos alumnos son?"));

  if ((!/^([0-9])*$/.test(numeroDeAlumnos)))
  {
     alert("Debe introducir un valor numérico");
  }else{
      var numeroDeMaterias = parseInt(prompt("Cuántas materias son?"));
      if ((!/^([0-9])*$/.test(numeroDeMaterias)))
      {
          alert("Debe introducir un valor numérico");
      }else {
          var nombreNuevo= "";
          var calificacionesNuevas=[];
          for(var contador = 0; contador<numeroDeAlumnos;contador++){
            nombreNuevo = prompt("Captura el nombre del alumno " + (contador+1));
            for(var contMateria=0; contMateria<numeroDeMaterias;contMateria++){
              calificacionesNuevas[contMateria] = parseInt(prompt("Captura la calificacion de la materia " + (contMateria+1)));
              if ((!/^([0-9])*$/.test(calificacionesNuevas[contMateria])))
              {
                alert("Debe introducir un valor numérico");
                contMateria--;
              }
            }
            alumnos.push({
            nombre:nombreNuevo,
            calificaciones:calificacionesNuevas
            });
            console.log("Total de elementos en arreglo alumnos " + alumnos.length);
          }
      }
  }
  for(var i=0; i <alumnos.length; i++){
       var promedio = 0;
       var calificacionPorAlumno, sumaCalificacion = 0;
       for(var c=0; c < alumnos[i].calificaciones.length;c++){
            calificacionPorAlumno = alumnos[i].calificaciones[c];
            sumaCalificacion += calificacionPorAlumno;
            console.log("Calificacion " + (c+1) + " de Alumno " + (i+1) + ": " + calificacionPorAlumno);
            console.log("Suma al momento = " + sumaCalificacion);
            }
       promedio = sumaCalificacion/alumnos[i].calificaciones.length;
       console.log("Promedio de alumno " + (i+1) + " = " + promedio);
       if(promedio<=5){
            promedio = promedio.toFixed(2)
            console.log("Alumno " + alumnos[i].nombre.toUpperCase() + " NO aprobado.  Promedio de alumno  = " + promedio);
        }
  }

}

/*******************************************************************************************************************/
/*******************************************************************************************************************/
function materiasReprobadasReloaded(){
  var alumnos = [];
  var numeroDeAlumnos = parseInt(prompt("Cuántos alumnos son?"));

  if ((!/^([0-9])*$/.test(numeroDeAlumnos)))
  {
     alert("Debe introducir un valor numérico");
  }else{
      var numeroDeMaterias = parseInt(prompt("Cuántas materias son?"));
      if ((!/^([0-9])*$/.test(numeroDeMaterias)))
      {
          alert("Debe introducir un valor numérico");
      }else {
          var nombreNuevo= "";
          for(var contador = 0; contador<numeroDeAlumnos;contador++){
            var calificacionesNuevas=[];
            nombreNuevo = prompt("Captura el nombre del alumno " + (contador+1));
            for(var contMateria=0; contMateria<numeroDeMaterias;contMateria++){
              var nomMat  = prompt("Captura nombre de la materia " + (contMateria+1));
              var califIn =  parseInt(prompt("Captura la calificacion de la materia " + (contMateria+1)));
              if ((!/^([0-9])*$/.test(califIn)))
              {
                alert("Debe introducir un valor numérico");
                contMateria--;
              }
              calificacionesNuevas.push(
              {
                nombreMateria: nomMat,
                califMateria: califIn
              }
              );
              console.log("Alumno: " + nombreNuevo);
              console.log("Materia: " + calificacionesNuevas[contMateria].nombreMateria);
              console.log("Calificación: " + calificacionesNuevas[contMateria].califMateria);
            }

            alumnos.push({
            nombre:nombreNuevo,
            calificaciones:calificacionesNuevas
            });
            console.log("Total de elementos en arreglo alumnos " + alumnos.length);
          }
      }
  }

/*Inicia lógica para alumnos que reprobaron materias*/
  for(var i=0; i <alumnos.length; i++){
       var calificacionPorAlumno, sumaCalificacion = 0;
       for(var m=0; m < numeroDeMaterias;m++){
            if(alumnos[i].calificaciones[m].califMateria <= 5)
            console.log("Alumno " + alumnos[i].nombre + " NO aprobó materia: " + alumnos[i].calificaciones[m].nombreMateria + ". Calificación obtenida = " + alumnos[i].calificaciones[m].califMateria);
       }

  }
}
