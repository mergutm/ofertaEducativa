function inicializarBtn(path, carrera) {
    // let url_actual = url;
    // if (bandera != 1) {
    // 	// Eliminamos el caracter '/' del inicio y fin de la cadena
    // 	url_actual = url_actual.substring(1, url_actual.length - 1);
    // } else {
    // 	url_actual = url_actual.substring(0, url_actual.lastIndexOf("/"));
    // 	console.log(url);
    // 	url_actual = url_actual.split("/")[1];
    // }

    url_actual = carrera;

    url_carrera = url_actual;

    //console.log("url_actual = ", url_actual);
    //console.log("url_carrera = ", url_carrera);


    if (carrera == "diseño") {
        url_imagen = "'" + path + "disenio" + ".jpg' ";
    } else {
        // Dirección del logo de la carrera
        url_imagen = "'" + path + url_carrera + ".jpg' ";

        //console.log("url_imagen = ", url_imagen);
    }

    // Primera letra en mayúscula
    url_actual = url_actual.charAt(0).toUpperCase() + url_actual.slice(1);

    // Label menu carrera
    // let label_carrera =
    // 	url_actual != "Matematicas-aplicadas" || url_actual != "Ciencias-empresariales"
    // 		? url_actual == "civil"
    // 			? "Ingeniería " + url_actual
    // 			: "Ingeniería en " + url_actual
    // 		: "Licenciatura en " + url_actual;

    console.log("url_actual = ", url_actual);


    if (url_actual != "Matematicas" || url_actual != "Empresariales") {
        if (url_actual == "Civil" || url_actual == "Automotriz" || url_actual == "Industrial") {
            label = url_actual == "Automotriz" ? "Mecánica Automotriz" : url_actual;
            label_carrera = "Ingeniería " + label;
        } else if (url_actual == "Dcpnya") {
            label = "DCPNYA";
            label_carrera = "" + label;
        } else if (url_actual == "Deosia") {
            label = "DEOSIA";
            label_carrera = "" + label;
        } else if (url_actual == "Dia") {
            label = "DIA";
            label_carrera = "" + label;
        } else if (url_actual == "Dmm") {
            label = "DMM";
            label_carrera = "" + label;
        } else if (url_actual == "Dr") {
            label = "DR";
            label_carrera = "" + label;
        } else if (url_actual == "Man") {
            label = "MAN";
            label_carrera = "" + label;
        } else if (url_actual == "Mcd") {
            label = "MCD";
            label_carrera = "" + label;
        } else if (url_actual == "Mcm") {
            label = "MCM";
            label_carrera = "" + label;
        } else if (url_actual == "Mcpnyal") {
            label = "MCPNYA";
            label_carrera = "" + label;
        } else if (url_actual == "Mcpnya") {
            label = "MCPNYA";
            label_carrera = "" + label;
        } else if (url_actual == "Mdmu") {
            label = "MDMU";
            label_carrera = "" + label;
        } else if (url_actual == "Meosia") {
            label = "MEOSIA";
            label_carrera = "" + label;
        } else if (url_actual == "Mia") {
            label = "MIA";
            label_carrera = "" + label;
        } else if (url_actual == "Mis") {
            label = "MIS";
            label_carrera = "" + label;
        } else if (url_actual == "Mmi") {
            label = "MMI";
            label_carrera = "" + label;
        } else if (url_actual == "Mmm") {
            label = "MMM";
            label_carrera = "" + label;
        } else if (url_actual == "Mr") {
            label = "MR";
            label_carrera = "" + label;
        } else if (url_actual == "Mtam") {
            label = "MTAM";
            label_carrera = "" + label;
        } else {
            label = url_actual == "Fisica" ? "Física Aplicada" : url_actual;
            label_carrera = "Ingeniería en " + label;
        }
    } else {
        label = url_actual == "Matematicas" ? "Matemáticas Aplicadas" : "Ciencias Empresariales";
        label_carrera = "Licenciatura en" + label;
    }

    console.log(url_carrera);


    // Configuración de el botón flotante
    const options = [{
            icon: '<i class="fa-solid fa-house" aria-hidden="true" style="font-size: 0.73em;"></i>',
            label: "Regresar al listado de carreras",
            callback: () => {
                window.location.href = "https://mixteco.utm.mx/~ofertaeducativa/";
                //http://192.100.170.152/updateOfertaEducativa/licenciaturas/mecatronica/
            },
        },
        {
            icon: '<i class="" aria-hidden="true" style="font-size: 0.73em;"><img src =' +
                url_imagen +
                'width="45" height="auto" ></i>',
            label: label_carrera,
            callback: () => {
                // Si la carrera es diseño redireccionamos a la página de diseño
                href = "";
                if (carrera == "diseño") {
                    href = "https://mixteco.utm.mx/~ofertaeducativa/licenciaturas/" + "disenio";
                } else if (carrera == "empresariales") {
                    href = "https://mixteco.utm.mx/~ofertaeducativa/licenciaturas/" + "empresariales";
                } else if (carrera == "quimica") {
                    href = "https://mixteco.utm.mx/~ofertaeducativa/licenciaturas/" + "quimica";
                } else if (carrera == "fisica") {
                    href = "https://mixteco.utm.mx/~ofertaeducativa/licenciaturas/" + "fisica_aplicada";
                } else if (carrera == "automotriz") {
                    href = "https://mixteco.utm.mx/~ofertaeducativa/licenciaturas/" + "mecanica_automotriz";
                } else if (carrera == "dcpnya" || carrera == "deosia" || carrera == "dia" || carrera == "dmm" || carrera == "dr" || carrera == "man" || carrera == "mcd" || carrera == "mcm" || carrera == "mcpnyal" || carrera == "mcpnya" || carrera == "mdmu" || carrera == "meosia" || carrera == "mia" || carrera == "mis" || carrera == "mmi" || carrera == "mmm" || carrera == "mr" || carrera == "mtam") {
                    href = "https://mixteco.utm.mx/~ofertaeducativa/posgrados/" + carrera;
                } else {
                    href = "https://mixteco.utm.mx/~ofertaeducativa/licenciaturas/" + url_carrera;
                }

                window.location.href = href;
            },
        },
    ];

    return options;
}
