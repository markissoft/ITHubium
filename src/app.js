const path = require('path')
const express = require('express')
const hbs = require('hbs')
const info = require('./utils/info')
const { response } = require('express')


console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'ITHubium',
        name: 'Markiyan Dmytriv'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Markiyan Dmytriv'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.',
        title: 'Help',
        name: 'Markiyan Dmytriv'
    })
})

app.get('/search', (req, res) => {
    if (!req.query.username) {
        return res.send({
            error: 'You must provide a username!'
        })
    }

    info(req.query.username, (error, body) => {
        if (error) {
            return res.send({ error })
        }

        res.send({
            avatar_url: body.avatar_url,
            login: body.login,
            id: body.id,
            name: body.name,
            followers: body.followers,
            following: body.following,
            public_repos: body.public_repos,
            public_gists: body.public_gists,
            company: body.company,
            location: body.location,
            email: body.email,
            twitter_username: body.twitter_username,
            blog: body.blog,
            bio: body.bio

        })
    })
   
})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term!'
        })
    }


    console.log(req.query.search)
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Markiyan Dmytriv',
        errorMessage: 'Help article not found!'

    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Markiyan Dmytriv',
        errorMessage: 'Page not found!'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})