const http = require('http');
const mongodb = require('mongodb').MongoClient;

let db;
const connectionString = "mongodb+srv://uzscooleducation:Chuncheon1)@cluster0.newpn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongodb.connect(connectionString, 
    {
    useNewUrlParser: true,   // Corrected typo here
    useUnifiedTopology: true,
    },
(err, client) => {
    if(err) {
        console.log("Error connecting to MongoDB:", err);
    } else {
        console.log("MongoDB connected successfully");
        module.exports = client;
        // console.log(client);
        const app = require("./app");
        const server = http.createServer(app);
        const PORT = 3000;
        server.listen(PORT, function(){
            console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
        });
    }
});
