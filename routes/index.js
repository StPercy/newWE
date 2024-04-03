const express = require('express')
const { validList, validEntryName } = require('../api/middlewares/index.middleware')


const router = express.Router()

router.get('/', async function (req, res, next) {
    const userId = req.user.id
    const userData = await (await fetch(`http://localhost:3000/api/${userId}`)).json()
    res.render('index', { lists: userData.lists, username: req.user.username })
})

router.get('/addList', (req, res, next) => {
    res.render('addList', { username: req.user.username })
})

router.post('/addList', validList, async (req, res)  => {
    const response = await fetch('http://localhost:3000/api', {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify(req.body),
    })


    const result = await response.json()

    res.json(result)
})

router.delete('/:listId', async (req, res) => {
    const { listId } = req.params
    const userId = req.user.id
    const response = await fetch(`http://localhost:3000/api/${userId}/${listId}`, {
        headers: { 'Content-Type': 'application/json' },
        method: 'DELETE',
    })

    const result = await response.json()

    res.json(result)
})

router.delete('/:listId/:entryName', validEntryName, async (req, res) => {
    const { listId, entryName } = req.params
    const userId = req.user.id
    const response = await fetch(`http://localhost:3000/api/${userId}/${listId}/${entryName}`, {
        headers: { 'Content-Type': 'application/json' },
        method: 'DELETE',
    })

    const result = await response.json()

    res.json(result)
})
module.exports = router
