const router = require("express").Router();
// get the database object from the config file by importing the getDb method
const { getDb } = require("../config/db_connection");

// configure a simple get request on the app
router.get("/", async (req, res) => {
  // grab the database
  const collection = getDb().collection("CarData");
  // grab the data from that collection (will come back as a cursor object)
  const cursor = await collection.find();
  // turn the object into an array of data
  const userData = await cursor.toArray();
  // send the data to the requester
  res.json(userData);
});

module.exports = router;
