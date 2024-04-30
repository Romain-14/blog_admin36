import pool from "../database/config.js";

const admin_view = (req, res) => {
	res.render("home");
};

const storiesList_view = (req, res) => {
	const query = "SELECT * FROM story";
	pool.query(query)
		.then((result) => {
			res.render("story", {stories: result[0] })
		})
		.catch((error) => console.log(error));
}

const storyAdd_view = (req, res) => {
	res.render("add_story");
}

const storyEdit_view = (req, res) => {
    const query = "SELECT * FROM story WHERE id = ?";
    pool.execute(query, [req.params.id])
        .then((result) => {
            res.render("edit_story", { story: result[0][0] });
        })
        .catch((error) => console.log(error));
}

export { admin_view, storiesList_view, storyAdd_view, storyEdit_view };