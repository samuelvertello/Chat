const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

const CLIENT_ID = "eea3fc491de514842c4c";
const CLIENT_SECRET = "1d0ad1a54c2d643ad942d18ee01498c69248dfe0";
const GITHUB_URL = "https://github.com/login/oauth/access_token";

app.use(cors({ credentials: true, origin: true }));
app.get("/oauth/redirect", (req, res) => {
axios({
method: "POST",
url: `${GITHUB_URL}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${req.query.code}`,
headers: {
Accept: "application/json",
},
}).then((response) => {
res.redirect(
`http://localhost:3000?access_token=${response.data.access_token}`
);
});

});

const PORT = 8080;

app.listen(PORT, () => {
console.log(`Listening at port ${PORT}`);
});
