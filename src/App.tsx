import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="coral">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="yellow">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
