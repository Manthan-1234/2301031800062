const http = require("http");
const { MongoClient } = require("mongodb");


const mongoURL = "mongodb://127.0.0.1:27017";
const dbName = "mydb"; // 

  
const server = http.createServer(async (req, res) => {
  try {
    
    const client = await MongoClient.connect(mongoURL, { useUnifiedTopology: true });
    const db = client.db(dbName);

    
    const users = await db.collection("users").find({}).toArray();

  
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));

    
    client.close();
  } catch (error) {
  

    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("MongoDB Connection Failed: " + error.message);
  }
});


server.listen(3001, () => {
  console.log("Server running at http://localhost:3001/");
});
