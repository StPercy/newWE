const express = require('express');
const {
    readShoppingListOf,
    saveShoppingListFor,
    updateShopingListFor,
    removeShoppingListEntryFor,
} = require('fs-json');
// Uebung 12 aus Kap.3 WE

router.get('/:id', (req, res, next) => {
    const { id } = req.params;
    res.send(`Shopping list for User ${id}: ${readShoppingListOf(id)}`)
});

router.post('/', (req, res, next) => {
    const { id, list } = req.body;
    saveShoppingListFor(id, list);
    res.send(`Saved new shopping list for User ${id} successfully ! 🌞`)
});

router.put('/', (req, res, next) => {
    const { id, list } = req.body;
    updateShopingListFor(id, list);
    res.send(`Updated shopping list for User ${id} successfully ! 🐱‍🏍`)
});

router.delete('/:id', (req, res, next) => {
const { id } = req.params;
removeShoppingListEntryFor(id);
res.send(`Deleted shopping List for User ${id} successfully 💥 !`)
});

router.delete('/:id/.entry', (req, res, next) => {
    const { id, entry } = req.params;
    removeShoppingListEntryFor(id, entry);
    res.send(`Removed ${entry} from User ${id}'s shopping list successfully 💥`)
})






const router = express.Router();

module.exports = router;