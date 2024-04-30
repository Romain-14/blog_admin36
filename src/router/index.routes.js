import { Router } from "express";

import { admin_view, storiesList_view, storyAdd_view, storyEdit_view } from "../controllers/views.js";
import { add_story, edit_story, delete_story } from "../controllers/story.js";

const router = Router();

// GET
// la vue de la page d'accueil de l'admin
router.get("/admin", admin_view);

// la vue de la page de gestion des articles sous forme de liste ave les actions d'éditions et suppression
router.get("/admin/story", storiesList_view);

// la vue de la page d'ajout d'un article avec son formulaire
router.get("/admin/story/add", storyAdd_view);

router.get("/admin/story/:id/edit", storyEdit_view);


// POST
// traitement de l'ajout d'un article via la méthode POST
router.post("/admin/story/add", add_story);

// router.post("/admin/story/:id/edit", edit_story);
// edit version patch
router.patch("/admin/story/:id/edit", edit_story);


// DELETE
// traitement de la suppression d'un article via la méthode DELETE (méthode non supportée par les formulaires HTML) et donc personnalisée via un fetch en JS du fichier datas-handler.js
router.delete("/admin/story/:id/delete", delete_story);

export default router;
