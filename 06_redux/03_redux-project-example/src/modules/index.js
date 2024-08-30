import pokemonReducer from "./PokemonModule";
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    pokemonReducer
});

export default rootReducer;