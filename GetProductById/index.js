const{ObjectId}=require('mongodb');

const createMongoClient=require('../shared/mongoClient')

module.exports = async function (context, req) {
    const{id}=red.params;

    const{client:MongoClient, closeConnectionFn} = await cr
    const Products=MongoClient.collection('products');
    const rest=await Products.findOne({_id: ObjectId(id)});
    
    closeConnectionFn();
    context.res={
        status:200,
        body:res,
    }

};