const { Router } = require('express');

const router = new Router();    

router.get('/', (req, res) => {
    res.json({ portfolio: req.app.locals.portfolio });
});

module.exports = router;