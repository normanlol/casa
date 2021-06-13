function search() {
    switch(document.getElementById("site").value) {
        case "google":
            window.open(`https://www.google.com/search?q=${document.getElementById("query").value}`, "_self");
        return;

        case "bing":
            window.open(`https://www.bing.com/search?q=${document.getElementById("query").value}`, "_self");
        return;

        case "ddg":
            window.open(`https://duckduckgo.com/?q=${document.getElementById("query").value}`, "_self");
        return;

        case "seekly":
            window.open(`https://seekly.org/search?q=${fields.query}`, "_self");
        return;
    }
}