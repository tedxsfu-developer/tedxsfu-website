import React from "react";
import PageWrapper from "./src/2021/components/PageWrapper";
import "./src/2021/styles/global.css";
import "./src/2022/styles/main.css";

export const wrapPageElement = ({ element, ...props }) => (
  <PageWrapper {...props}>{element}</PageWrapper>
);
