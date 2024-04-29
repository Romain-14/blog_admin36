import { Router } from "express";

import pool from "../database/config.js";

const router = Router();

// la vue de la page d'accueil de l'admin
router.get("/admin", (req, res) => {
	res.render("home");
});

// la vue de la page de gestion des articles sous forme de liste ave les actions d'éditions et suppression
router.get("/admin/story", (req, res) => {
	const query = "SELECT * FROM story";
	pool.query(query)
		.then((result) => {
			res.render("story", {stories: result[0] })
		})
		.catch((error) => console.log(error));
});

// la vue de la page d'ajout d'un article avec son formulaire
router.get("/admin/story/add", (req, res) => {
	res.render("add_story");
});

// traitement de l'ajout d'un article via la méthode POST
router.post("/admin/story/add", (req, res) => {
	const query = "INSERT INTO story (title, content) VALUES (?, ?)";
	pool.execute(query, [req.body.title, req.body.content])
		.then(() => res.redirect("/admin/story"))
		.catch((error) => console.log(error));
});

// traitement de la suppression d'un article via la méthode DELETE (méthode non supportée par les formulaires HTML) et donc personnalisée via un fetch en JS du fichier datas-handler.js
router.delete("/admin/story/:id/delete", (req, res) => {
	const query = "DELETE FROM story WHERE id = ?";
	pool.execute(query, [req.params.id])
		.then(() => res.json({ message: "Story deleted" }))
		.catch((error) => console.log(error));
});

export default router;
