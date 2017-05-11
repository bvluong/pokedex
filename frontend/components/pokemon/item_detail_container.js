import { connect } from 'react-redux';
import ItemDetail from './item_detail';
import { selectPokemonItem } from '../../reducers/selectors';
import { requestSinglePokemon } from '../../actions/pokemon_actions';

const mapStatetoProps = (state, ownProps ) => (
  {
    itemdetail: selectPokemonItem(state,ownProps.match.params.itemId)
  }
);

const mapDispatchtoProps = (dispatch) => (
  {

  }
);

export default connect(mapStatetoProps)(ItemDetail);
