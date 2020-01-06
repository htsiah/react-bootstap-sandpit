import React from "react";
import Container from "react-bootstrap/Container";
import { Header } from "./Header";

export function Layout(props) {
  return (
    <>
      <Header />
      <Container fluid={true}>{props.children}</Container>
    </>
  );
}
