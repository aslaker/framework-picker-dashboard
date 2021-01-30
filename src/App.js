import React from "react";

// Grommet
import { Box } from "grommet";

// Components
import FrameworkCard from "./components/FrameworkCard/FrameworkCard";

// Data
import { frameworks } from "./data/frameworks";

function App() {
  return (
    <Box
      background="brand"
      direction="row"
      justify="center"
      align="center"
      gap="medium"
      fill
    >
      {frameworks.map((framework) => (
        <FrameworkCard {...framework} />
      ))}
    </Box>
  );
}

export default App;
