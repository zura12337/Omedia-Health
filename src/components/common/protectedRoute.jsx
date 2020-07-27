import React from "react";
import { Route, Redirect } from "react-router-dom";
import Service from "../../services/service";

const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
  const user = Service("user");
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!user)
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location },
              }}
            />
          );
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoute;
