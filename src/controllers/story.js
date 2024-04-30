import pool from "../database/config.js";

const add_story = (req, res) => {
	const query = "INSERT INTO story (title, content) VALUES (?, ?)";
	pool.execute(query, [req.body.title, req.body.content])
		.then(() => res.redirect("/admin/story"))
		.catch((error) => console.log(error));
}

const edit_story = (req, res) => {
    const query = "UPDATE story SET title = ?, content = ? WHERE id = ?";
    pool.execute(query, [req.body.title, req.body.content, req.params.id])
        .then(() => res.json({ message: "Story updated" }))
        .catch((error) => console.log(error));
}

const delete_story = (req, res) => {
	const query = "DELETE FROM story WHERE id = ?";
	pool.execute(query, [req.params.id])
		.then(() => res.json({ message: "Story deleted" }))
		.catch((error) => console.log(error));
}

export { add_story, edit_story, delete_story };