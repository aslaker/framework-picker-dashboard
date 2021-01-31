import React from "react";
import MaterialTable from "material-table";

import { Wrapper } from "./FrameworkDetails.styles";

const FrameworkDetails = (props) => {
  return (
    <Wrapper>
      <MaterialTable title="Framework Details" />
    </Wrapper>
  );
};

export default FrameworkDetails;
