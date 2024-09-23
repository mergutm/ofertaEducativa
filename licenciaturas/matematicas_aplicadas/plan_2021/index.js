let datos;

fetch("../../../archivos/carreras/Matematicas_aplicadas.json")
    .then((response) => response.json())
    .then((data) => {
            datos = data;
            const contenido = data.actual.contenido;
            const tbody = document.getElementById("temario-tbody-content");

            const semestres = Object.keys(contenido).filter(
                (key) => contenido[key].numero <= 7
            );

            // itera sobre cada key (semestre) del objeto contenido (hasta 8vo semestre)
            semestres.forEach((key) => {
                const numSemestre = contenido[key].numero;
                const semestre = contenido[key].materias;

                const tablaMaterias = semestre
                    .map(
                        (m, i) => `<tr${
            i == semestre.length - 1 ? 'class="semestre-border"' : ""
          }>
                    <td >${m.nombre}</td>
                    <td>
                        <div class="is-flex is-justify-content-center">
                            <p class="buttons">
                                <a class="button is-small has-tooltip-arrow has-tooltip-multiline" href="../archivos/planes/plan_2021/${
                                  m.archivo
                                }" target="_blank" download data-tooltip="Descargar">
                                    <span class="icon is-small">
                                        <i class="fas fa-download"></i>
                                    </span>
                                </a>
                                <a class="button is-small has-tooltip-arrow has-tooltip-multiline" href="../archivos/planes/plan_2021/${
                                  m.archivo
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
                    `<tr ${
          numSemestre % 2 != 0
            ? 'class="has-background-warning-light semestre-border"'
            : 'class="has-background-white-ter semestre-border""'
        }>
            <td rowspan="${semestre.length + 1}" ${
          numSemestre % 2 == 0
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
                (key) => contenido[key].numero > 7
            );

            semestresOptativas.forEach((key) => {
                        const numSemestre = contenido[key].numero;
                        const semestre = contenido[key].materias;

                        const tablaMaterias = semestre
                            .map(
                                (m, i) => `<tr ${
            i == semestre.length - 1 ? 'class="semestre-border"' : ""
          }>
                    <td ${
                      m.nombre == undefined
                        ? `id=op${m.optativa[0].optativa}`
                        : ""
                    }>${
            m.nombre == undefined
              ? `Optativa ${m.optativa[0].optativa}`
              : m.nombre
          }</td>
                    <td>
                        <div class="is-flex is-justify-content-center">
                            <p class="buttons">
                                ${
                                  m.nombre == undefined
                                    ? `<div>
                                            <button id="ia_${m.optativa[0].optativa}" class="button is-small has-tooltip-arrow has-tooltip-multiline" onclick="cambioOptativa(1,'op${m.optativa[0].optativa}', '${key}', this); mostrarToast()" data-tooltip="Inteligencia Artificial y Ciencia de Datos">
                                                <span class="icon is-small">
                                                    <i class="has-text-weight-bold"> IA </i>
                                                </span>
                                            </button>
                                            <button id="ef_${m.optativa[0].optativa}" class="button is-small has-tooltip-arrow has-tooltip-multiline" onclick="cambioOptativa(2,'op${m.optativa[0].optativa}', '${key}', this); mostrarToast()" data-tooltip="Economía y Finanzas">
                                                <span class="icon is-small">
                                                  <i class="has-text-weight-bold"> EF </i>
                                                </span>
                                            </button>
                                            <button id="ao_${m.optativa[0].optativa}" class="button is-small has-tooltip-arrow has-tooltip-multiline" onclick="cambioOptativa(3,'op${m.optativa[0].optativa}', '${key}', this); mostrarToast()" data-tooltip="Aproximación y Optimización">
                                                <span class="icon is-small">
                                                  <i class="has-text-weight-bold"> AO </i>
                                                </span>
                                            </button>
                                            <button id="bm_${m.optativa[0].optativa}" class="button is-small has-tooltip-arrow has-tooltip-multiline" onclick="cambioOptativa(4,'op${m.optativa[0].optativa}', '${key}', this); mostrarToast()" data-tooltip="Biología Matemática">
                                                <span class="icon is-small">
                                                  <i class="has-text-weight-bold"> BM </i>
                                                </span>
                                            </button>
                                            <button id="ts_${m.optativa[0].optativa}" class="button is-small has-tooltip-arrow has-tooltip-multiline" onclick="cambioOptativa(5,'op${m.optativa[0].optativa}', '${key}', this); mostrarToast()" data-tooltip="Tolpología y Sistemas Dinámicos">
                                                <span class="icon is-small">
                                                  <i class="has-text-weight-bold"> TS </i>
                                                </span>
                                            </button>
                                            <button id="pe_${m.optativa[0].optativa}" class="button is-small has-tooltip-arrow has-tooltip-multiline" onclick="cambioOptativa(6,'op${m.optativa[0].optativa}', '${key}', this); mostrarToast()" data-tooltip="Probabilidad y Estadísticas">
                                                <span class="icon is-small">
                                                  <i class="has-text-weight-bold"> PE </i>
                                                </span>
                                            </button>

                                        </div>`
                                    : ""
                                }
                                <a class="button is-small has-tooltip-arrow has-tooltip-multiline" ${
                                  m.nombre == undefined
                                    ? `id="dwn_${m.optativa[0].optativa}" target="_blank" download`
                                    : `href="../archivos/planes/plan_2021/${m.archivo}" target="_blank" download`
                                } download data-tooltip="Descargar">
                                    <span class="icon is-small">
                                        <i class="fas fa-download"></i>
                                    </span>
                                </a>
                                <a class="button is-small has-tooltip-arrow has-tooltip-multiline" ${
                                  m.nombre == undefined
                                    ? `id="vw_${m.optativa[0].optativa}" target="_blank"`
                                    : `href="../archivos/planes/plan_2021/${m.archivo}" target="_blank"`
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
                `<tr ${
          numSemestre % 2 != 0
            ? 'class="has-background-warning-light semestre-border"'
            : 'class="has-background-white-ter semestre-border""'
        }>
                <td rowspan="${semestre.length + 1}" ${
          numSemestre % 2 == 0
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

    const btnIA = document.getElementById(`ia_${idOrignal}`);
    const btnEF = document.getElementById(`ef_${idOrignal}`);
    const btnAO = document.getElementById(`ao_${idOrignal}`);
    const btnBM = document.getElementById(`bm_${idOrignal}`);
    const btnTS = document.getElementById(`ts_${idOrignal}`);
    const btnPE = document.getElementById(`pe_${idOrignal}`);

    // establece el nuevo boton activo con la clase is-active
    if (btnIA.id == e.id) {
        btnIA.classList.add("is-active");
        btnIA.classList.add("btn-active");

        btnEF.classList.remove("is-active");
        btnEF.classList.remove("btn-active");

        btnAO.classList.remove("is-active");
        btnAO.classList.remove("btn-active");

        btnBM.classList.remove("is-active");
        btnBM.classList.remove("btn-active");
        
        btnTS.classList.remove("is-active");
        btnTS.classList.remove("btn-active");
        
        btnPE.classList.remove("is-active");
        btnPE.classList.remove("btn-active");


    } else if (btnEF.id == e.id) {
      btnIA.classList.remove("is-active");
      btnIA.classList.remove("btn-active");

      btnEF.classList.add("is-active");
      btnEF.classList.add("btn-active");

      btnAO.classList.remove("is-active");
      btnAO.classList.remove("btn-active");

      btnBM.classList.remove("is-active");
      btnBM.classList.remove("btn-active");
      
      btnTS.classList.remove("is-active");
      btnTS.classList.remove("btn-active");
      
      btnPE.classList.remove("is-active");
      btnPE.classList.remove("btn-active");


  } else if (btnAO.id == e.id) {
    btnIA.classList.remove("is-active");
    btnIA.classList.remove("btn-active");

    btnEF.classList.remove("is-active");
    btnEF.classList.remove("btn-active");

    btnAO.classList.add("is-active");
    btnAO.classList.add("btn-active");

    btnBM.classList.remove("is-active");
    btnBM.classList.remove("btn-active");
    
    btnTS.classList.remove("is-active");
    btnTS.classList.remove("btn-active");
    
    btnPE.classList.remove("is-active");
    btnPE.classList.remove("btn-active");


} else if (btnBM.id == e.id) {
  btnIA.classList.remove("is-active");
  btnIA.classList.remove("btn-active");

  btnEF.classList.remove("is-active");
  btnEF.classList.remove("btn-active");

  btnAO.classList.remove("is-active");
  btnAO.classList.remove("btn-active");

  btnBM.classList.add("is-active");
  btnBM.classList.add("btn-active");
  
  btnTS.classList.remove("is-active");
  btnTS.classList.remove("btn-active");
  
  btnPE.classList.remove("is-active");
  btnPE.classList.remove("btn-active");


} else if (btnTS.id == e.id) {
  btnIA.classList.remove("is-active");
  btnIA.classList.remove("btn-active");

  btnEF.classList.remove("is-active");
  btnEF.classList.remove("btn-active");

  btnAO.classList.remove("is-active");
  btnAO.classList.remove("btn-active");

  btnBM.classList.remove("is-active");
  btnBM.classList.remove("btn-active");
  
  btnTS.classList.add("is-active");
  btnTS.classList.add("btn-active");
  
  btnPE.classList.remove("is-active");
  btnPE.classList.remove("btn-active");


} else if (btnPE.id == e.id) {
  btnIA.classList.remove("is-active");
  btnIA.classList.remove("btn-active");

  btnEF.classList.remove("is-active");
  btnEF.classList.remove("btn-active");

  btnAO.classList.remove("is-active");
  btnAO.classList.remove("btn-active");

  btnBM.classList.remove("is-active");
  btnBM.classList.remove("btn-active");
  
  btnTS.classList.remove("is-active");
  btnTS.classList.remove("btn-active");
  
  btnPE.classList.add("is-active");
  btnPE.classList.add("btn-active");


} 








    const dwnElement = document.getElementById(`dwn_${idOrignal}`);
    const vwElement = document.getElementById(`vw_${idOrignal}`);
    const rutaInicial = "../archivos/planes/plan_2021/";

    // opt I
    if (idOrignal == 1) {
        textoElement.innerHTML = "(Optativa " + romano(parseInt(idOrignal)) + "): " +
            datos.actual.contenido[semestre].materias[3].optativa[optativa - 1].nombre;
        dwnElement.href =
            rutaInicial +
            datos.actual.contenido[semestre].materias[3].optativa[optativa - 1].archivo;
        vwElement.href =
            rutaInicial +
            datos.actual.contenido[semestre].materias[3].optativa[optativa - 1].archivo;

    }
    // opt II
    else if (idOrignal == 2) {
        textoElement.innerHTML = "(Optativa " + romano(parseInt(idOrignal)) + "): " +
            datos.actual.contenido[semestre].materias[3].optativa[optativa - 1].nombre;
        dwnElement.href =
            rutaInicial +
            datos.actual.contenido[semestre].materias[3].optativa[optativa - 1].archivo;
        vwElement.href =
            rutaInicial +
            datos.actual.contenido[semestre].materias[3].optativa[optativa - 1].archivo;
    }
    // opt III
    else if (idOrignal == 3) {
        textoElement.innerHTML = "(Optativa " + romano(parseInt(idOrignal)) + "): " +
            datos.actual.contenido[semestre].materias[3].optativa[optativa - 1].nombre;
        dwnElement.href =
            rutaInicial +
            datos.actual.contenido[semestre].materias[3].optativa[optativa - 1].archivo;
        vwElement.href =
            rutaInicial +
            datos.actual.contenido[semestre].materias[3].optativa[optativa - 1].archivo;
    }

    // opt IV
    else if (idOrignal == 4) {
        textoElement.innerHTML = "(Optativa " + romano(parseInt(idOrignal)) + "): " +
            datos.actual.contenido[semestre].materias[4].optativa[optativa - 1].nombre;
        dwnElement.href =
            rutaInicial +
            datos.actual.contenido[semestre].materias[4].optativa[optativa - 1].archivo;
        vwElement.href =
            rutaInicial +
            datos.actual.contenido[semestre].materias[4].optativa[optativa - 1].archivo;
    }

}


function romano(n) {
    switch (n) {
        case 1:
            return "I";
            break;
        case 2:
            return "II";
            break;
        case 3:
            return "III";
            break;
        case 4:
            return "IV";
            break;
        case 5:
            return "V";
            break;
        case 6:
            return "VI";
            break;
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
    textoToast.innerHTML = "Recuerda que tras elegir una optativa en séptimo semestre, sólo podrás cursar materias de esa optativa en los siguientes semestres.";
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