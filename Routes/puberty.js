const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("explorePages/_puberty");
});

module.exports = router;
