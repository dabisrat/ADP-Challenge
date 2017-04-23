
const express = require('express');
const app = express();
const path = require('path');

let port = process.env.PORT || 8080
app.use(express.static(__dirname + '/dist'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});
app.listen(port, () => console.log(`listening on ${port}`));
