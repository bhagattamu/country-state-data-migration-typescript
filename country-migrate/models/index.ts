import mongoose from "mongoose";
import Country from "../schemas/CountrySchema";
import State from "../schemas/StateSchema";
import "dotenv/config";

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

export { Country, State };
