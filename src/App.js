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
      background="brand"
      direction="column"
      justify="center"
      align="center"
      gap="large"
      pad="medium"
    >
      <Grid fill rows="medium" columns="medium" gap="medium" alignContent="center" justifyContent="center">
        {frameworks.map((framework) => (
          <FrameworkCard
            key={framework.name}
            {...framework}
          />
        ))}
      </Grid>
      <Button
        primary
        color="accent-1"
        label="View Details"
        onClick={() => setIsTableShowing(true)}
      />
      {isTableShowing ? (
        <Layer
          onEsc={() => setIsTableShowing(false)}
          onClickOutside={() => setIsTableShowing(false)}
        >
          <ErrorBoundary>
            <FrameworkDetails />
          </ErrorBoundary>
        </Layer>
      ) : null}
    </Box>
  );
}

export default App;
