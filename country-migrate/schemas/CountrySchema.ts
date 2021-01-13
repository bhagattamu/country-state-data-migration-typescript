import { ICountry } from "country-migrate/interfaces/country.interface";
import mongoose from "mongoose";

const Country = new mongoose.Schema({
  _id: {
    type: Number,
  },
  name: {
    type: String,
  },
  countryCode: {
    type: String,
  },
  phoneCode: {
    type: Number,
  },
  states: [
    {
      type: Number,
    },
  ],
});

export default mongoose.model<ICountry>("countries", Country);
