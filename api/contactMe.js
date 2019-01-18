const { Router } = require('express');

const router = new Router();    

router.get('/', (req, res) => {
    res.json({ contactMe: req.app.locals.contactMe });
});

module.exports = router;