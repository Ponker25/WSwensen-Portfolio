const { Router } = require('express');

const router = new Router();    

router.get('/', (req, res) => {
    res.json({ aboutMe: req.app.locals.about});
});

module.exports = router;