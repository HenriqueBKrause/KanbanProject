import React from "react";
import { Container, Label, label } from "./style";
export default function Card() {
  return (
    <Container>
      <header>
        <Label color="#7159c1" />
      </header>

      <p>Estudar React</p>
      <img src={"/home/krause/Documentos/to-do/src/Img/user.png"} />
    </Container>
  );
}
