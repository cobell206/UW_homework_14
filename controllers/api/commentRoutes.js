const router = require('express').Router()
const { Comment } = require('../../models')

// Post new comment
router.post('/', async (req, res) => {
    try {
        const commentData = Comment.create({
            ...req.body,
            user_id: req.session.user_id
        })
        res.status(200).json(commentData)
    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports = router