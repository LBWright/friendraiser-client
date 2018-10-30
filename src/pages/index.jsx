// router

import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter";
import PublicRouter from "./PublicRouter";

const Router = () => (
  <BrowserRouter>
    <Fragment>
      <AppRouter />
      <PublicRouter />
    </Fragment>
  </BrowserRouter>
);

export default Router;
