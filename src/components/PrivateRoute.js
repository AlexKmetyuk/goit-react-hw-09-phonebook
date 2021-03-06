import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import authSelectors from "../redux/auth/aut-selectors";

const PrivateRoute = ({ component: Component, isAuth, redirectTo, ...routeProps }) => (
  <Route
    {...routeProps}
    render={(props) =>
      isAuth ? <Component {...props} /> : <Redirect to={redirectTo} />
    }
  />
);

const mapStateToProps = (state) => ({
  isAuth: authSelectors.getIsAuth(state),
});

export default connect(mapStateToProps)(PrivateRoute);
