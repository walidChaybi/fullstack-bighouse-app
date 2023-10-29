require("dotenv").config();

import { connectDatabase } from "../src/database";

const clear = async () => {
  try {
    console.log("clear: running...");
    const db = await connectDatabase();

    await db.listings.drop();
    await db.users.drop();

    console.log("clear successful");
  } catch {
    throw new Error("clear: failed.");
  }
};

clear();
