import { connect } from 'react-redux';
import { requestAllPokemon } from '../../actions/pokemon_actions';
import selectAllPokemon from "../../reducers/selectors";
import PokemonIndex from "./pokemon_index";

const mapStatetoProps = state  => ({
  pokemon: selectAllPokemon(state)
});

const mapDispatchtoProps = dispatch => ({
  requestAllPokemon: () => dispatch(requestAllPokemon())
});

export default connect(mapStatetoProps, mapDispatchtoProps)(PokemonIndex);
