import { connect } from 'react-redux';
import { compose } from 'redux';
import { Home } from '../../components/home';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

const withConnect = connect(mapDispatchToProps, mapStateToProps);

export const HomeContainer = compose(withConnect)(Home);
