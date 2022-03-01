const express = require("express");
const app = express();
app.use(express.static("public"));
const fs = require("fs");

const nav = fs.readFileSync("./public/components/nav.html").toString();
const footer = fs.readFileSync("./public/components/footer.html").toString();

const index = fs.readFileSync("./public/pages/index.html").toString();
const indexPage = nav.replace("%%DOCUMENT_TITLE%%", "Node.js") + index + footer;

app.get("/", (req, res) => {
    res.send(indexPage);
});

const node = fs.readFileSync("./public/pages/node.html").toString();
const nodePage = nav.replace("%%DOCUMENT_TITLE%%", "Node.js") + node + footer;

app.get("/node", (req, res) => {
    res.send(nodePage);
});


const callbacks = fs.readFileSync("./public/pages/callbacks.html").toString();
const callbackPage = nav.replace("%%DOCUMENT_TITLE%%", "Node.js") + callbacks + footer;

app.get("/callback", (req, res) => {
    res.send(callbackPage)
})

const variables = fs.readFileSync("./public/pages/variables.html").toString();
const variablesPage = nav.replace("%%DOCUMENT_TITLE%%", "Node.js") + variables + footer;

app.get("/variable", (req, res) => {
    res.send(variablesPage)
})

const cli = fs.readFileSync("./public/pages/cli.html").toString();
const cliPage = nav.replace("%%DOCUMENT_TITLE%%", "Node.js") + cli + footer;

app.get("/cli", (req, res) => {
    res.send(cliPage)
})


app.listen(8080, () => console.log("Server is running on port", 8080));