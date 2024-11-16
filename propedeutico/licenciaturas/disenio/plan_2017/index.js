let datos;

fetch("../../../archivos/carreras/Disenio.json")
  .then((response) => response.json())
  .then((data) => {
    datos = data;
    const contenido = data.actual.contenido;
    const tbody = document.getElementById("temario-tbody-content");

    const semestres = Object.keys(contenido).filter(
      (key) => contenido[key].numero <= 8
    );

    // itera sobre cada key (semestre) del objeto contenido (hasta 8vo semestre)
    semestres.forEach((key) => {
      const numSemestre = contenido[key].numero;
      const semestre = contenido[key].materias;

      const tablaMaterias = semestre
        .map(
          (m, i) => `<tr${i == semestre.length - 1 ? 'class="semestre-border"' : ""
            }>
                    <td >${m.nombre}</td>
                    <td>
                        <div class="is-flex is-justify-content-center">
                            <p class="buttons">
                                <a class="button is-small has-tooltip-arrow has-tooltip-multiline" href="../archivos/planes/plan_2017/${m.archivo
            }" target="_blank" download data-tooltip="Descargar">
                                    <span class="icon is-small">
                                        <i class="fas fa-download"></i>
                                    </span>
                                </a>
                                <a class="button is-small has-tooltip-arrow has-tooltip-multiline" href="../archivos/planes/plan_2017/${m.archivo
            }" target="_blank" data-tooltip="Visualizar">
                                    <span class="icon is-small">
                                      <i class="fas fa-eye"></i>
                                    </span>
                                </a>
                            </p>
                        </div>
                    </td>
                </tr>`
        )
        .join("");

      tbody.insertAdjacentHTML(
        "beforebegin",
        `<tr ${numSemestre % 2 != 0
          ? 'class="has-background-warning-light semestre-border"'
          : 'class="has-background-white-ter semestre-border""'
        }>
            <td rowspan="${semestre.length + 1}" ${numSemestre % 2 == 0
          ? 'class="has-background-warning-light semestre-border"'
          : 'class="has-background-white-ter semestre-border""'
        }>
                <p class="is-semestre-text" >${key}</p>
            </td>
        </tr>
        ${tablaMaterias}`
      );
    });

    // Para 9no y 10mo semestre
    const semestresOptativas = Object.keys(contenido).filter(
      (key) => contenido[key].numero > 8
    );

    semestresOptativas.forEach((key) => {
      const numSemestre = contenido[key].numero;
      const semestre = contenido[key].materias;

      const tablaMaterias = semestre
        .map(
          (m, i) => `<tr ${i == semestre.length - 1 ? 'class="semestre-border"' : ""
            }>
                    <td ${m.nombre == undefined
              ? `id=op${m.optativa[0].optativa}`
              : ""
            }>${m.nombre == undefined
              ? `Optativa ${m.optativa[0].optativa}`
              : m.nombre
            }</td>
                    <td>
                        <div class="is-flex is-justify-content-center">
                            <p class="buttons">
                                ${m.nombre == undefined
              ? `<div>
                                            <button id="di_${m.optativa[0].optativa}" class="button is-small has-tooltip-arrow has-tooltip-multiline" onclick="cambioOptativa(1,'op${m.optativa[0].optativa}', '${key}', this); mostrarToast()" data-tooltip="Diseño de Imagen">
                                                <span class="icon is-small">
                                                    <i class="has-text-weight-bold"> DI </i>
                                                </span>
                                            </button>
                                            <button id="do_${m.optativa[0].optativa}" class="button is-small has-tooltip-arrow has-tooltip-multiline" onclick="cambioOptativa(2,'op${m.optativa[0].optativa}', '${key}', this); mostrarToast()" data-tooltip="Diseño de Objetos">
                                                <span class="icon is-small">
                                                  <i class="has-text-weight-bold"> DO </i>
                                                </span>
                                            </button>
                                            <button id="de_${m.optativa[0].optativa}" class="button is-small has-tooltip-arrow has-tooltip-multiline" onclick="cambioOptativa(3,'op${m.optativa[0].optativa}', '${key}', this); mostrarToast()" data-tooltip="Diseño de Espacios	">
                                                <span class="icon is-small">
                                                  <i class="has-text-weight-bold"> DE </i>
                                                </span>
                                            </button>
                                        </div>`
              : ""
            }
                                <a class="button is-small has-tooltip-arrow has-tooltip-multiline" ${m.nombre == undefined
              ? `id="dwn_${m.optativa[0].optativa}" target="_blank" download`
              : `href="../archivos/planes/plan_2017/${m.archivo}" target="_blank" download`
            } download data-tooltip="Descargar">
                                    <span class="icon is-small">
                                        <i class="fas fa-download"></i>
                                    </span>
                                </a>
                                <a class="button is-small has-tooltip-arrow has-tooltip-multiline" ${m.nombre == undefined
              ? `id="vw_${m.optativa[0].optativa}" target="_blank"`
              : `href="../archivos/planes/plan_2017/${m.archivo}" target="_blank"`
            }  data-tooltip="Visualizar">
                                    <span class="icon is-small">
                                      <i class="fas fa-eye"></i>
                                    </span>
                                </a>
                            </p>
                        </div>
                    </td>
                </tr>`
        )
        .join("");

      tbody.insertAdjacentHTML(
        "beforebegin",
        `<tr ${numSemestre % 2 != 0
          ? 'class="has-background-warning-light semestre-border"'
          : 'class="has-background-white-ter semestre-border""'
        }>
                <td rowspan="${semestre.length + 1}" ${numSemestre % 2 == 0
          ? 'class="has-background-warning-light semestre-border"'
          : 'class="has-background-white-ter semestre-border""'
        }>
        <p class="is-semestre-text" >${key}</p>
                </td>
            </tr>
            ${tablaMaterias}`
      );
    });
  })
  .catch((error) => console.error(error));

// IA -> 1
// IS -> 2
function cambioOptativa(optativa, id, semestre, e) {
  const textoElement = document.getElementById(id);

  const idOrignal = id.split("op")[1];

  const btnDI = document.getElementById(`di_${idOrignal}`);
  const btnDO = document.getElementById(`do_${idOrignal}`);
  const btnDE = document.getElementById(`de_${idOrignal}`);


  // establece el nuevo boton activo con la clase is-active
  if (btnDI.id == e.id) {
    btnDI.classList.add("is-active");
    btnDI.classList.add("btn-active");

    btnDO.classList.remove("is-active");
    btnDO.classList.remove("btn-active");

    btnDE.classList.remove("is-active");
    btnDE.classList.remove("btn-active");
  } else if (btnDO.id == e.id) {
    btnDO.classList.add("is-active");
    btnDO.classList.add("btn-active");

    btnDI.classList.remove("is-active");
    btnDI.classList.remove("btn-active");

    btnDE.classList.remove("is-active");
    btnDE.classList.remove("btn-active");
  } else {
    btnDE.classList.add("is-active");
    btnDE.classList.add("btn-active");

    btnDI.classList.remove("is-active");
    btnDI.classList.remove("btn-active");

    btnDO.classList.remove("is-active");
    btnDO.classList.remove("btn-active");
  }

  const dwnElement = document.getElementById(`dwn_${idOrignal}`);
  const vwElement = document.getElementById(`vw_${idOrignal}`);
  const rutaInicial = "../archivos/planes/plan_2017/";

  console.log(id)

  if (optativa == 1) {
    switch (id) {
      case "op1":
      case "op3":
        textoElement.innerHTML =
          datos.actual.contenido[semestre].materias[2].optativa[0].nombre;

        dwnElement.href =
          rutaInicial +
          datos.actual.contenido[semestre].materias[2].optativa[0].archivo;
        vwElement.href =
          rutaInicial +
          datos.actual.contenido[semestre].materias[2].optativa[0].archivo;
        break;

      case "op2":
      case "op4":
        textoElement.innerHTML =
          datos.actual.contenido[semestre].materias[2].optativa[0].nombre;

        dwnElement.href =
          rutaInicial +
          datos.actual.contenido[semestre].materias[2].optativa[0].archivo;
        vwElement.href =
          rutaInicial +
          datos.actual.contenido[semestre].materias[2].optativa[0].archivo;
        break;
    }
  } else if (optativa == 2) {
    switch (id) {
      case "op1":
      case "op3":
        textoElement.innerHTML =
          datos.actual.contenido[semestre].materias[2].optativa[1].nombre;

        dwnElement.href =
          rutaInicial +
          datos.actual.contenido[semestre].materias[2].optativa[1].archivo;
        vwElement.href =
          rutaInicial +
          datos.actual.contenido[semestre].materias[2].optativa[1].archivo;
        break;

      case "op2":
      case "op4":
        textoElement.innerHTML =
          datos.actual.contenido[semestre].materias[2].optativa[1].nombre;

        dwnElement.href =
          rutaInicial +
          datos.actual.contenido[semestre].materias[2].optativa[1].archivo;
        vwElement.href =
          rutaInicial +
          datos.actual.contenido[semestre].materias[2].optativa[1].archivo;
        break;
    }
  }
  else {
    switch (id) {
      case "op1":
      case "op3":
        textoElement.innerHTML =
          datos.actual.contenido[semestre].materias[2].optativa[2].nombre;

        dwnElement.href =
          rutaInicial +
          datos.actual.contenido[semestre].materias[2].optativa[2].archivo;
        vwElement.href =
          rutaInicial +
          datos.actual.contenido[semestre].materias[2].optativa[2].archivo;
        break;

      case "op2":
      case "op4":
        textoElement.innerHTML =
          datos.actual.contenido[semestre].materias[2].optativa[2].nombre;

        dwnElement.href =
          rutaInicial +
          datos.actual.contenido[semestre].materias[2].optativa[2].archivo;
        vwElement.href =
          rutaInicial +
          datos.actual.contenido[semestre].materias[2].optativa[2].archivo;
        break;
    }
  }
}

// Toast
let mostrar = false;
function mostrarToast() {
  // si ya se mostro el toast, no lo muestres de nuevo
  if (mostrar) return;

  // si no se ha mostrado, muestralo y cambia el valor de mostrar a true
  mostrar = true;

  // Crea el elemento HTML que tendra el texto del toast 
  const textoToast = document.createElement("div");
  textoToast.innerHTML = "Recuerda que tras elegir una optativa en octavo semestre, solo podrás cursar materias de esa optativa en los siguientes semestres.";
  textoToast.classList.add("has-text-centered", "has-text-weight-bold", "has-text-info-dark");

  // Crea el toast con BulmaToast
  bulmaToast.toast({
    message: textoToast,
    type: "has-background-info-light",
    dismissible: true,
    position: "top-center",
    closeOnClick: true,
    duration: 90000,
  });
}
