import { Document } from 'mongoose';
import { IState } from './state.interface';

export interface ICountry extends Document {
    _id: string;
    countryCode: string;
    name: string;
    states?: Array<number>;
}
