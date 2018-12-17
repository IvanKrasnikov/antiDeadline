$(function () {

    console.log('removed other console.logs\n this is not in master branch');

    console.log('halo test.html');

    FB.api(
        "/parkrunbitsa/feed",
        "POST",
        {
            "message": "This is a test message"
        },
        function (response) {
          if (response && !response.error) {
            console.log('response', response);
          }
        }
    );

});