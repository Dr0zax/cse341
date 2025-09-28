const dotenv = require("dotenv");
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

dotenv.config();
let _db;

const mongoConnect = (callback) => {
    if (_db) {
        return callback(null, _db);
    }
    MongoClient.connect(process.env.MONGODB_URI)
        .then((client) => {
            // Use the database name from env (MONGODB_DB) or default to 'cse341'
            const dbName = process.env.MONGODB_DB || 'cse341';
            _db = client.db(dbName);

            callback(null, _db);
            
        })
        .catch((err) => {
            callback(err);
        });
        
};
const getDb = () => {
    if (!_db) {
        throw new Error("Database not initialized");
    }
    return _db;
};


module.exports = { mongoConnect, getDb };

