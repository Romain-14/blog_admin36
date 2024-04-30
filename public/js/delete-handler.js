console.log("datas-handler.js chargé !");

document.querySelectorAll(".delete-btn").forEach((element) => {
	element.addEventListener("click", (e) => {
		e.preventDefault();
		const deleteConfirmation = confirm(
			"Voulez-vous vraiment supprimer cet article ?"
		);

		if (!deleteConfirmation) return;

		const url =
			"/admin/story/" +
			e.currentTarget.getAttribute("data-id") +
			"/delete";

		fetch(url, {
			method: "DELETE",
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				location.reload();
			});
	});
});

