var http = require('http');
http.createServer(function (req, res) {

res.writeHead(200, {'Content-Type': 'text/html'});
res.end('Hello World I am Megha');
 }).listen(4200);

 //connectivity to mongodb

const {MongoClient} = require("mongodb");
const url = 'mongodb://localhost:27017/';
const databasename = "demoDB";
MongoClient.connect(url , {useNewUrlParser: true})
.then(client => {
    const connect = client.db(databasename);
    const collection = connect.collection("demoCollection");
    
    collection.find({}).toArray().then((ans) => {
        console.table(ans);
    })
    }).catch((err) => {
        console.log(err.message);
    })