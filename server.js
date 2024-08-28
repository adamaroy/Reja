const http = require('http');
const mongodb = require('mongodb').MongoClient;

let db;
const connectionString = "mongodb+srv://uzscooleducation:Chuncheon1)@cluster0.newpn.mongodb.net/REJA?retryWrites=true&w=majority&appName=Cluster0"

mongodb.connect(connectionString, 
    {
    useNewUrlParser: true,   
    useUnifiedTopology: true,
    },
(err, data) => {
    if(err) {
        console.log("Error connecting to MongoDB:", err);
    } else {
        console.log("MongoDB connected successfully");
        module.exports = data;
        // console.log(client);
        const app = require("./app");
        const server = http.createServer(app);
        const PORT = 7012;
        server.listen(PORT, function(){
            console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`);
        });
    }
});
