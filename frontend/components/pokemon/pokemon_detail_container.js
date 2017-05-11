import { connect } from 'react-redux';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import pokemonDetail from './pokemon_detail';

const mapStatetoProps = ( state ) => (
  {
    pokemondetail: state.pokemonDetail
  }
);

const mapDispatchtoProps = (dispatch) => (
  {
    requestSinglePokemon: ((id) => dispatch(requestSinglePokemon(id)))
  }
);

export default connect(mapStatetoProps,mapDispatchtoProps)(pokemonDetail);
