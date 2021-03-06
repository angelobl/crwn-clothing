import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Route } from 'react-router-dom';

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";


const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
  </div>
);



export default ShopPage;
