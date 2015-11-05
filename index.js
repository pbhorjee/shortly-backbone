var app = require('./server.js');

app.set('port', process.env.PORT || 4568);

app.listen(app.get('port'));

console.log('Server now listening on port ' + app.get('port'));