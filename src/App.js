import React, { useState, useCallback } from "react";

// Grommet
import { Box, Button, Layer } from "grommet";

// Components
import FrameworkCard from "./components/FrameworkCard/FrameworkCard";
import FrameworkDetails from "./components/FrameworkDetails/FrameworkDetails";
import ErrorBoundary from "./components/errors/ErrorBoundary";

// Data
import { frameworks } from "./data/frameworks";

function findAndReplaceData(tableData, newData) {
  const tableDataCopy = [...tableData];
  const tableIndex = tableDataCopy.findIndex(
    (tableItem) => tableItem.name === newData.name
  );
  if (tableIndex === -1) {
    tableDataCopy.push(newData);
  } else {
    tableDataCopy[tableIndex] = newData;
  }
  return tableDataCopy;
}

function App() {
  const [tableData, setTableData] = useState([]);
  const [isTableShowing, setIsTableShowing] = useState(false);

  const onNewData = useCallback(
    (newData) => {
      const newTableData = findAndReplaceData(tableData, newData);
      setTableData(newTableData);
    },
    [tableData, setTableData]
  );

  return (
    <Box
      fill
      background="brand"
      direction="column"
      justify="center"
      align="center"
      gap="large"
    >
      <Box direction="row" justify="center" align="center" gap="medium">
        {frameworks.map((framework) => (
          <FrameworkCard
            key={framework.name}
            {...framework}
            onNewData={onNewData}
          />
        ))}
      </Box>
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
            <FrameworkDetails data={tableData} />
          </ErrorBoundary>
        </Layer>
      ) : null}
    </Box>
  );
}

export default App;
