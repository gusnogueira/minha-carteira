import React, { useImperativeHandle, useMemo } from "react";

import Toggle from "../Toggle";
import emojis from "../../Utils/emojis";

import { Container, Profile, Welcome, UserName } from "./styles";

const Layout: React.FC = () => {
  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length);
    return emojis[indice];
  }, []);

  return (
    <Container>
      <Toggle />
      <Profile>
        <Welcome>Olá, {emoji}</Welcome>
        <UserName>Gustavo Nogueira</UserName>
      </Profile>
    </Container>
  );
};

export default Layout;
