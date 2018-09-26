const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const app = express();

const DESTINY_API = process.env.DESTINY_API;
const port = parseInt(process.env.PORT);

app.use(cors());
app.use(bodyparser.json());

app.get('/api', (request, response)=> {
    response.write(JSON.stringify({body: DESTINY_API}));
    response.end();
});

app.listen(port, ()=> {
    console.log('Server listening on port 3000');
})
