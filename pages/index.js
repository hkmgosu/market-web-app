import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import MuiLink from "@material-ui/core/Link";
import RegisterBox from "../components/RegisterBox";

export default function Index() {
  return (
    <Box style={{ backgroundColor: "aliceblue" }}>
      <Container maxWidth="lg" fixed>
        <RegisterBox />
      </Container>
    </Box>
  );
}
