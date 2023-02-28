const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000

app.use(cors())

app.get('/translate', async (req, res) => {
    let text = req.query.text;
    let langIn = req.query.in;
    let langOut = req.query.out;

    if(!text | !langIn | !langOut){//if text is null then end and send error
        res.status(400);
        res.send("missing parameter");
        return;
    }

    const response = await fetch("https://translate.argosopentech.com/translate", {
        method: "POST", 
        body: JSON.stringify({
            q: text, 
            source: langIn,
            target: langOut
        }),
        headers: {
            "Content-Type": "application/json"
        }
    });

    const responseJson = await response.json();

    if(response.status != 200){//if unable to translate send error
        res.status(500);
        res.send("unable to translate");
        return;
    }

    let translatedText = responseJson.translatedText;
    res.status(200);
    res.send(translatedText);

})

app.listen(port)