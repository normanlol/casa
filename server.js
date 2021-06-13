const express = require("express");
const app = express();
const formidable = require("formidable");

app.use(express.static("web/static"));

app.post("/s", function(req, res) {
    const form = formidable();
    form.parse(req, function(err, fields) {
        if (err) {res.redirect("/")}
        switch(fields.site) {
            case "google":
                res.redirect(`https://www.google.com/search?q=${fields.query}`);
            return;

            case "bing":
                res.redirect(`https://www.bing.com/search?q=${fields.query}`);
            return;

            case "ddg":
                res.redirect(`https://duckduckgo.com/?q=${fields.query}`);
            return;

            case "seekly": 
                res.redirect(`https://seekly.org/search?q=${fields.query}`);
            return;
        }
    });
});

app.listen(3072);