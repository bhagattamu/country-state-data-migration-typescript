import { IState } from "country-migrate/interfaces/state.interface";
import mongoose from "mongoose";

const State = new mongoose.Schema({
  _id: {
    type: Number,
  },
  name: {
    type: String,
  },
  countryId: {
    type: Number,
  },
  country: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "countries",
  },
});

export default mongoose.model<IState>("states", State);
