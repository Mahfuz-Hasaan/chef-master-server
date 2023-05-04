const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')
const chef = require('./data/shef_data.json');
const chef_details = require('./data/shef_details.json');

app.use(cors());

app.get("/", (req, res) => {
  res.send("Master chef server is running!");
});

app.get("/chef", (req, res) => {
  res.send(chef);
});

app.get("/chef/:id", (req,res) => {
    const id = req.params.id;
    const chefDetails = chef_details.find(n => n.chef_id === id);
    res.send(chefDetails);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
