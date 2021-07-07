const MongoClient = require("mongodb");
const connectionURI =
  "mongodb+srv://dbUser:pwd1234@firstclust.iacdv.mongodb.net/ford_hackathon?retryWrites=true&w=majority";

let _db;

module.exports = {
  connectToDB: (callback) => {
    MongoClient.connect(
      connectionURI,
      { useUnifiedTopology: true },
      (err, result) => {
        if (err) {
          console.error(err);
        } else {
          _db = result.db("ford_hackathon");
          callback();
        }
      }
    );
  },

  getDb: () => {
    return _db;
  },
};
