import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { Home } from '../../components/home';
import { HomeSaga } from './saga';
import { injectSaga } from '../../utils/injectSaga';
import { injectReducer } from '../../utils/injectReducer';
import { homeReducer } from './reducer';
import { homeBindActions } from './actions';
import { pokemonList } from './selectors';

const mapStateToProps = state => ({
  list: pokemonList(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(homeBindActions, dispatch)
});

const withReducer = injectReducer({ key: 'pokemonList', reducer: homeReducer });
const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withSaga = injectSaga({ key: 'home', saga: HomeSaga });

export const HomeContainer = compose(withReducer, withConnect, withSaga)(Home);
