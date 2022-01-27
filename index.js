var estudiantes = [
    {
      apellidop: "Lorenzana",
      apellidom: "Suarez",
      nombre: "Perla ALine",
      edad: 21,
      fechanacimiento: {
        año: 2000,
        mes: "septiembre",
        dia: 14
      },
      carrera: "IRYC"
    },
    {
      apellidop: "",
      apellidom: "",
      nombre: "",
      edad: 1,
      fechanacimiento: {
  
        año: 1111,
        mes: "",
        dia: 1
      },
      carrera: "IRYC"
    }
  ]
  
  var table = document.getElementsByTagName("table")[0];
  for (var i = 0; i < estudiantes.length; i++) {
    var templ = document.getElementById('tbodyestudiantes').content.cloneNode(true);
    var celnumero = templ.querySelector("span[name='tbodynumero']");
    var celnombre = templ.querySelector("span[name='tbodynombre']");
    var celedad = templ.querySelector("span[name='tbodyedad']");
    var celcarrera = templ.querySelector("span[name='tbodycarrera']");
  
    celnumero.innerText = i + 1
    celnombre.innerText = estudiantes[i].apellidop + " " + estudiantes[i].apellidom + " " + estudiantes[i].nombre;
    celedad.innerText = estudiantes[i].edad;
    celcarrera.innerText = estudiantes[i].carrera
  
    table.append(templ);
  }
  