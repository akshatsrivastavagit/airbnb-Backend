const mongo=require('mongodb');
const MongoClient=mongo.MongoClient;

const MONGO_URI="mongodb+srv://akgreninja:akgreninja@airbnbcluster.iq8wz75.mongodb.net/?retryWrites=true&w=majority&appName=AirbnbCluster"

let _db;


const mongoConnect=(callback)=>{

MongoClient.connect(MONGO_URI).then(client=>{
  
  callback()
  _db=client.db('airbnb')
}).catch(err=>{
  console.log("Error while connecting to Mongo :",err);
}) 
}


const getDB=()=>{
  if(!_db){
    throw new Error('Mongo not connected');
  }
  return _db;
}
exports.mongoConnect=mongoConnect;
exports.getDB=getDB;