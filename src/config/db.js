import { MongoClient, ServerApiVersion } from "mongodb";

let cachedClient = null;
let cachedDb = null;

export const connectDB = async () => {
  if (cachedClient && cachedDb) return cachedDb;

  const client = new MongoClient(process.env.DATABASE_URL, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  await client.connect();
  const db = client.db(process.env.DATABASE_NAME);

  cachedClient = client;
  cachedDb = db;
  return db;
};

export const collections = {
  SERVICES: async () => (await connectDB()).collection("services"),
  USERS: async () => (await connectDB()).collection("users"),
  BOOKINGS: async () => (await connectDB()).collection("bookings"),
};
