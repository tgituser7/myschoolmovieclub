import { MongoClient, type Db } from "mongodb";

const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017";
const dbName = process.env.MONGODB_DB || "myschoolmovieclub";

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

function getClientPromise(): Promise<MongoClient> {
  if (!global._mongoClientPromise) {
    const client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  return global._mongoClientPromise;
}

export async function getDb(): Promise<Db> {
  const client = await getClientPromise();
  return client.db(dbName);
}

/** Current instant as a UTC ISO-8601 string, e.g. 2026-09-12T14:03:21.000Z */
export function nowUtcIso(): string {
  return new Date().toISOString();
}

/** Inserts a form submission with a UTC ISO `createdAt` timestamp attached. */
export async function insertSubmission(
  collection: string,
  data: Record<string, unknown>
) {
  const db = await getDb();
  const doc = { ...data, createdAt: nowUtcIso() };
  const result = await db.collection(collection).insertOne(doc);
  return result.insertedId;
}
