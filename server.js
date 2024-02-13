const express = require("express");
const app = express();
require("./config/mongoose.config");
const AllMyUserRoutes = require("./rutes/joke.routes");
AllMyUserRoutes(app);
    
app.use(express.json(), express.urlencoded({ extended: true }));
    

    
app.listen(8000, () => console.log("The server is all fired up on port 8000"));
