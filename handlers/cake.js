const db = require('../models');

module.exports.create = async (req, res) => {
    try {
        const newCake = await db.Cake.create(req.body);
        console.log("New cake in database", newCake);
        res.status(200).json(newCake);
    } catch (e) {
        console.error("Error creating cake in db", e);
        res.status(400).json({
            message: "Cake was not created in db, this is most likely your cake not respecting the model"
        })
    }
};

module.exports.getAll = async (req, res) => {
    try {
        console.log("Input query :", req.query);
        const cakes = req.query && req.query.baker
            ? await db.Cake.find(req.query).select("name baker expirationDate -_id").sort('expirationDate')
            : await db.Cake.find(req.query);

        console.log(cakes);
        return res.status(200).json(cakes);
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};

module.exports.getOne = async (req, res) => {
    try {
        const cake = await db.Cake.findById(req.params.id);
        if (!cake)
            res.sendStatus(404);
        else
            res.status(200).json(cake);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
};

module.exports.updateOne = async (req, res) => {
    try {
        const updatedCake = await db.Cake.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
        res.status(200).json(updatedCake);
    } catch (e) {
        console.log(e);
        res.status(400).json({
            message: "Cake was not updated in db, this is most likely your cake not respecting the model"
        })
    }
};

module.exports.deleteOne = async (req, res) => {
    try {
        await db.Cake.findByIdAndRemove(req.params.id);
        res.sendStatus(204);
    } catch (e) {
        res.sendStatus(500);
    }
};
