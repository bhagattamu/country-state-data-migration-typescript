import { Country, State } from '../models/index';
import { countryJSON } from '../data/countries';
import { statesJSON } from '../data/states';
import { IStateJSON } from 'country-migrate/interfaces/state-json.interface';
import { ICountry } from 'country-migrate/interfaces/country.interface';
import { IState } from 'country-migrate/interfaces/state.interface';

const { countries } = countryJSON;
const { states } = statesJSON;

async function up() {
    for (const country of countries) {
        let countryState: IStateJSON[] = [];
        const countryModel = new Country({
            _id: country.id,
            countryCode: country.sortname,
            name: country.name,
            phoneCode: country.phoneCode,
            states: []
        });
        const countryData: ICountry = await countryModel.save();
        countryState = states.filter(state => state.country_id.toString() === country.id.toString());

        for (const state of countryState) {
            const stateModel = new State({
                _id: state.id,
                name: state.name,
                countryId: state.country_id
            });
            const stateData: IState = await stateModel.save();
            countryData.states.push(stateData.id);
            await countryData.save();
        }
    }
}

async function down() {
    const fakeState = [3923, 3925, 3929, 3940, 3944, 3954, 3961, 3964, 3968, 3971];
    const UScountry = await Country.findOne({ countryCode: 'US' });
    const newStates = UScountry.states.filter(state => !fakeState.includes(state));
    UScountry.states = newStates;
    await UScountry.save();
    await State.deleteMany({ _id: { $in: fakeState } });
}

module.exports = { up, down };
