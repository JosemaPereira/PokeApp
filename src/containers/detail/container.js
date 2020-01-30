import { connect } from 'react-redux';
import { compose } from 'redux';
import { Detail } from '../../components/detail';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

const withConnect = connect(mapDispatchToProps, mapStateToProps);

export const DetailContainer = compose(withConnect)(Detail);
