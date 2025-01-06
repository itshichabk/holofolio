"use server";
import { MongoClient, ServerApiVersion } from "mongodb";

function dbClient() {
    const uri = process.env.MONGODB_URI;

    return new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });
}

export async function skillsDB(collection) {
    const client = dbClient();

    try {
        await client.connect();
        const db = client.db("skills");
        const places = db.collection(collection);
        
        const cursor = places.find({},{_id:0})

        let results = []
    
        for await(const doc of cursor) {
          results.push(doc);
        }
        
        const res = JSON.parse(JSON.stringify(results))
        return res;
      }
      catch(e) {
        console.log(e);
      }
      finally {
        await client.close();
      }
}