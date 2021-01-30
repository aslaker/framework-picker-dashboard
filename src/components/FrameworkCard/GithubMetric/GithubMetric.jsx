import React from "react";
import { Box } from "grommet";

const GithubMetric = ({ children, title }) => {
  return (
    <Box
      width="small"
      height="xsmall"
      direction="column"
      justify="center"
      align="center"
      gap="small"
      title={title}
      border={[
        {
          color: "border",
          size: "small",
          style: "solid",
          side: "right",
        },
        {
          color: "border",
          size: "small",
          style: "solid",
          side: "left",
        },
      ]}
    >
      {children}
    </Box>
  );
};

export default GithubMetric;
