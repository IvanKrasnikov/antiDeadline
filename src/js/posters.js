$(function() {
    var posterImage = $("#posterImage"),
        posterText = $("#posterText"),
        posterPlaceholder = $("#posterPlaceholder");

    console.log("posterImage", posterImage);

    var req = new XMLHttpRequest();

    req.addEventListener("readystatechange", () => {
        if (req.readyState === 4) {
            if (req.status === 200) {
                console.log("data sended", req.responseText);
            }
        }
    });

    // Send data
    req.open("POST", "/api");
    req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    req.send(JSON.stringify(["test", "2"]));

    // "scripts": {
    //     "browsersync": "browser-sync start --proxy \"localhost:8080\" --files \"src/**/*.ejs\" \"src/assets/**/*\" \"src/**/*.md\" --no-open",
    //     "webpack": "NODE_ENV=production webpack",
    //     "webpack:watch": "webpack --progress --colors --watch",
    //     "build": "npm run build:svg && npm run webpack",
    //     "build:svg": "svg-sprite -s --symbol-dest src/assets/images --ss sprite.svg  src/assets/images/svg/*.svg",
    //     "server": "node server/server",
    //     "prestart": "npm run build:svg",
    //     "start": "npm run server & npm run webpack:watch & npm run browsersync",
    //     "postversion": "git push --follow-tags",
    //     "yaspeller": "yaspeller src/",
    //     "format": "prettier --write --loglevel warn \"src/**/*.{js,css}\""
    //   },

    // FB.api(
    //     "/parkrunbitsa/feed",
    //     "POST",
    //     {
    //         "message": "This is a test message"
    //     },
    //     function (response) {
    //       if (response && !response.error) {
    //         console.log('response', response);
    //       }
    //     }
    // );
});
