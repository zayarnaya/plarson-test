const express = require('express');
const path = require("path");
const app = express();
const port = process.env.PORT || 4376;

app.use(express.static(path.join(__dirname, "")));
app.use(express.static('files'));

app.get('/', (_, res) => {
  res.sendFile(`${__dirname}/index.html`);
})
  
app.listen(port, () => {
  console.log(`App is live on http://localhost:${port}`)
})

