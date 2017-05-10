import { connect } from 'react-redux';
import { requestAllPokemon} from '../../actions/pokemon_actions';

const mapStatetoProps = state  => ({
  pokemon: state.pokemon
});

const mapDispatchtoProps = dispatch => ({
  requestAllPokemon: dispatch(requestAllPokemon())
});
