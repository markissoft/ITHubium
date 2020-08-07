console.log('Client side javascript file is loaded!')
 
const searchForm = document.querySelector('form')
const search = document.querySelector('input')
const userImage = document.querySelector('#user-image')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageTwoOne = document.querySelector('#message-2-1')
const messageThree = document.querySelector('#message-3')
const messageFour = document.querySelector('#message-4')
const messageFive = document.querySelector('#message-5')
const messageSix = document.querySelector('#message-6')
const messageSeven = document.querySelector('#message-7')
const messageEight = document.querySelector('#message-8')
const messageNine = document.querySelector('#message-9')
const messageTen = document.querySelector('#message-10')
const messageEleven = document.querySelector('#message-11')
const messageTwelve = document.querySelector('#message-12')



messageOne.textContent = ''

searchForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const username = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('/search?username=' + username).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageTwoOne.textContent = data.name
                userImage.src = data.avatar_url
                messageOne.textContent = 'Username: ' + data.login
                messageTwo.textContent = '(id:' + data.id + ')'
                messageThree.textContent = 'Followers: ' + data.followers
                messageFour.textContent = 'Following: ' + data.following
                messageFive.textContent = 'Repositories: ' + data.public_repos
                messageSix.textContent = 'Gists: ' + data.public_gists
                messageSeven.textContent = 'Company: ' + data.company
                messageEight.textContent = 'Location: ' + data.location
                messageNine.textContent = 'Email: ' + data.email
                messageTen.textContent = 'Twitter: ' + data.twitter_username
                messageEleven.textContent = 'Blog: ' + data.blog
                messageTwelve.textContent = 'Bio: ' + data.bio
            }
        })
    })
})