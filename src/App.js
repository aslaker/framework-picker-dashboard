import React, { useState } from "react";

// Grommet
import { Box, Button, Layer, Grid } from "grommet";

// Components
import FrameworkCard from "./components/FrameworkCard/FrameworkCard";
import FrameworkDetails from "./components/FrameworkDetails/FrameworkDetails";
import ErrorBoundary from "./components/errors/ErrorBoundary";

// Data
import { frameworks } from "./data/frameworks";

function App() {
  const [isTableShowing, setIsTableShowing] = useState(false);

  return (
    <Box
      fill
      background="light-2"
      direction="column"
      justify="center"
      align="center"
      gap="small"
      pad="medium"
    >
      <Button
        primary
        color="accent-1"
        label="View Framework Details"
        onClick={() => setIsTableShowing(true)}
        alignSelf="end"
      />
      <Grid
        fill
        rows="medium"
        columns="medium"
        gap="medium"
        alignContent="center"
        justifyContent="center"
      >
        {frameworks.map((framework) => (
          <FrameworkCard key={framework.name} {...framework} />
        ))}
      </Grid>
      {isTableShowing ? (
        <Layer
          onEsc={() => setIsTableShowing(false)}
          onClickOutside={() => setIsTableShowing(false)}
        >
          <FrameworkDetails />
        </Layer>
      ) : null}
    </Box>
  );
}

export default App;
