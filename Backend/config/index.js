var admin = require("firebase-admin");

var serviceAccount = require("../key.json");

const conn = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fir-web-9dd79-default-rtdb.firebaseio.com"
});

  
module.exports = conn;