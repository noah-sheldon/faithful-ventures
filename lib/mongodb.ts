import { MongoClient } from "mongodb";

// Get environment variables
const uri = process.env.MONGODB_URI;
const env = process.env.NODE_ENV;

if (!uri) {
  throw new Error("❌ Missing MONGODB_URI in environment variables");
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// Augment global type in TypeScript for HMR-safe caching
declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (env === "development") {
  // Reuse the same connection promise during HMR in dev
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, create a new client instance each time
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

// Export the MongoClient connection promise
export default clientPromise;
