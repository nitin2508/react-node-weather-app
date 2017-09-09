const express = require('express');
var path = require('path');
const bodyParser = require('body-parser');
const weatherRouter = require('./routes/weatherRoute');
const app = express();
const port = 3007;

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.json());
app.use('/weather',weatherRouter)


if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    console.log('Error handleing');
    res.status(err.status || 500);
    res.json( {
      message: err.message,
      error: err
    });
  });
}

app.listen(port,()=>{
  console.log(`Magic happen on port ${port}`);
})
