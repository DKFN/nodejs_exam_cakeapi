const express = require('express');

const router = express.Router();
const cakeHandlers = require('../handlers/cake');

router.route('/')
    .post(cakeHandlers.create)
    .get(cakeHandlers.getAll);

router.route('/:id')
    .get(cakeHandlers.getOne)
    .put(cakeHandlers.updateOne)
    .delete(cakeHandlers.deleteOne);

module.exports = router;
