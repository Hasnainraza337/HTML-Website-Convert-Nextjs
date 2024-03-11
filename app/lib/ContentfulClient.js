const contentful = require('contentful')


const client = contentful.createClient({
    accessToken: process.env.CONTENTFULL_ACCESS_TOKEN,
    space: process.env.CONTENTFULL_SPACE_ID,
})


export default client