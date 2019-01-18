const { Router } = require('express');

const router = new Router();    

router.get('/', (req, res) => {
    res.json({ resume: req.app.locals.resume });
});

module.exports = router;