// DEPENDENCIES
const express = require('express');

// EXPRESS SERVER SETUP
const app = express();

// Initial PORT 
const PORT = 3000;

// Data parsing for Express
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

// ROUTING
require('routes/apiRoutes')(app);
require('routes/htmlRoutes')(app);

// LISTENER
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });