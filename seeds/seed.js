const sequelize = require('../config/connection')
const { User, Comment, Post } = require('../models')

const userSeedData = require('./userSeedData.json')
const postSeedData = require('./postSeedData.json')
const commentSeedData = require('./commentSeedData.json')

const seedDatabase = async () => {

    await sequelize.sync({force: true})

    await User.bulkCreate(userSeedData, { individualHooks: true })
    await Post.bulkCreate(postSeedData)
    await Comment.bulkCreate(commentSeedData)
}

seedDatabase()