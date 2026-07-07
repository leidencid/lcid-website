jQuery(".single_variation_wrap").on("show_variation", (e, { image_id }) => {
	if (image_id != undefined) spliderisVarChange(image_id);
});

var spliderisVarChange = (e) => {
	if (document.querySelector("#primary-slider .is-active")?.getAttribute("prvni-id") !== e) {
		document.querySelector("#primary-slider .is-active")?.classList?.remove("is-active");
		document.querySelector(`[prvni-id="${e}"]`)?.classList?.add("is-active");
		document.querySelector("#secondary-slider .is-active")?.classList?.remove("is-active");
		document.querySelector(`[druhy-id="${e}"]`)?.classList?.add("is-active");
	}
};
