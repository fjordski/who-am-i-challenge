const express = require('express');
const app = express();


app.use(express.static('public'));

app.set('view engine', 'pug')

app.get('/', function(request, response) {
  response.redirect('/api/whoami');
});

app.get("/api/whoami", function(request, response) {
  const userInformation = {
    get userIP() {
      return request.headers['x-forwarded-for'] || request.connection.remoteAddress;
    },
    get acceptLanguage() {
      return request.headers['accept-language'];
    },
    get userAge() {
      return request.headers['user-agent'];
    }
  }
  response.render('index', {userInfo: JSON.stringify(userInformation) });
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
