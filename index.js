import axios from 'axios'
import express from 'express'

const app = express()

const primaryKey = 'enter key here'

const secondaryKey = 'enter key here'

//this just means that you only have to request for everything after the /odata since that is common-
//-amongst all requests
axios.defaults.baseURL = `https://api.tfgm.com/odata`

//this adds the header to all requests
axios.defaults.headers.common['Ocp-Apim-Subscription-Key'] = primaryKey

//this handles .get requests to this server you by using :id in the url it means that it will take in that section of the URL
//so that you can just pass the metrolink stop ID
app.get('/:id', (request, response) => {
    axios.get(`/Metrolinks(${request.params.id})`)
    .then((res) => {
        response.send(res.data)
    })
    .catch((err) => {
        console.log(err)
    })
})

//this just chooses which port to start the server on 
var port = process.env.PORT || 3000;
app.listen(port, () => console.log("Listening on localhost:" + port));

