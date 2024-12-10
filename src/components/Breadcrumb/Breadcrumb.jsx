import { Breadcrumbs } from "@mui/material";
import React from "react";

const Breadcrumb = ({ children }) => {
  return (
    <Breadcrumbs aria-label="breadcrumb">{children}</Breadcrumbs>
  );
};

export default Breadcrumb;
