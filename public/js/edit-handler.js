document.querySelector("form").addEventListener("submit", function(e) {
	e.preventDefault();
    
	// on récupère la valeur de l'attribut action de la balise form
	// pour former l'URL de la requête fetch
	const url = this.action;
	const formData = new FormData(this);
	
	fetch(url, {
		method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
		// Object.fromEntries() permets de convertir un itérable en objet
		// on peut créer un itérable avec la méthode entries de formData 👌
		// on serialize (stringification) ce nouvel objet pour l'envoyer au serveur dans un format léger (JSON du coup)
		body: JSON.stringify(Object.fromEntries(formData.entries())),
	})
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			location.href = "/admin/story";
		});
});
