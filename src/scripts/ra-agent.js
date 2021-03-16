(() => {
	const staffInfoSvg = document.querySelectorAll(".agents-stafflist__col:last-child>svg") || document.querySelectorAll(".events-timetable__col:last-child>svg");
	const infoContainer = document.querySelector(".agents-stafflist__info");
	if (staffInfoSvg) {
		staffInfoSvg.forEach((item) => {
			item.addEventListener("click", function (e) {
				if (this.closest(".agents-stafflist__col").classList.contains("active")) {
					this.closest(".agents-stafflist__col").classList.remove("active");
					infoContainer.classList.remove("active");
				} else {
					document.querySelectorAll(".agents-stafflist__col:last-child").forEach((item) => item.classList.remove("active"));
					this.closest(".agents-stafflist__col").classList.add("active");
					infoContainer.classList.add("active");
					infoContainer.style.top = `${e.clientY + 5 + window.pageYOffset}px`;
					infoContainer.style.left = `${e.clientX - infoContainer.clientWidth - 5}px`;
				}
			});
			document.addEventListener("click", function (e) {
				const container = document.querySelector(".agents-stafflist__info");
				if (e.target !== container && e.target.closest(".agents-stafflist__info") === null && e.target !== item && e.target.closest("svg") === null) {
					infoContainer.classList.remove("active");
					item.closest(".agents-stafflist__col").classList.remove("active");
				}
			});
		});
	}

	window.addEventListener("resize", function (e) {
		if (document.querySelector(".agents-stafflist__info.active")) {
			document.querySelector(".agents-stafflist__info.active").classList.remove("active");
			document.querySelector(".agents-stafflist__col.active").classList.remove("active");
		}
	});
})();

(() => {
	// Раскрытие карточек в списке квартир
	document.querySelectorAll("[data-card-control]").forEach((control, index, controlList) => {
		const card = control.parentElement.querySelector(".card");
		card.style.display = "none";

		let cardList = [];
		for (const control of controlList) cardList.push(control.parentElement.querySelector(".card"));

		control.addEventListener("click", (event) => {
			event.preventDefault();
			for (const card of cardList) card.style.display = "none";
			card.style.display = card.style.display == "none" ? "flex" : "none";
		});
	});
})();
