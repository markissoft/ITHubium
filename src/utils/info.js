const request = require('request')
const https = require('https')
const { response } = require('express')

const info = (username, callback) => {
    const url = 'https://api.github.com/users/' + username

    request({ url, json: true, headers: {'user-agent': 'node.js'}}, (error, {body} ) => {
        if (error) {
            callback('Unable to connect to GitHub!', undefined)
        } else if (body.error) {
            callback('Unable to find user!', undefined)
        } else {
            callback(undefined, 
                body
            )
        }
    })
}

module.exports = info

