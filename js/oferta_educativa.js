function desplegar(id) {
	let modal = Bulma("#modal-info-" + id).modal();
	modal.open();
}

// Controla los tabs de la sección de oferta educativa para pantallas grandes
let tabs = Bulma(".panel").data("panel-tabs");

// Cambia el color de fondo del elemento seleccionado
let element;
document.addEventListener("mousedown", (e) => {
	if (e.target.matches(".panel-block")) {
		if (element != null) {
			element.classList.remove("is-active-element");
		}
		element = e.target;
		element.classList.add("is-active-element");
	}
});