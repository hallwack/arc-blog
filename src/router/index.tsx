import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

interface Props {}

const Router: React.FC = (props: Props) => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="articles" />
        <Route path="category">
          <Route path=":categoryName" />
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;
