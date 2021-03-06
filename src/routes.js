const express = require('express');
const routes = express.Router();

const views = __dirname + "/views/"

const profile = {
    name: "Lucas",
    avatar: "https://avatars.githubusercontent.com/u/58092679?v=4",
    "monthly-budget": 3000,
    "days-per-week": 5,
    "hours-per-day": 5,
    "vacation-per-year": 4
}

const jobs = []

routes.get('/', (req, res) => res.render(views + "index"))
routes.get('/job', (req, res) => res.render(views + "job"))
routes.get('/job/edit', (req, res) => res.render(views + "job-edit"))
routes.get('/profile', (req, res) => res.render(views + "profile", { profile }))

routes.post('/job', (req, res) => {
    jobs.push(req.body)
    return res.redirect('/')
})

module.exports = routes;