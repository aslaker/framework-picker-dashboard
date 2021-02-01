import React from "react";
import MaterialTable from "material-table";

import { Wrapper } from "./FrameworkDetails.styles";

const columns = [
  { title: "Name", field: "name" },
  { title: "Stars", field: "stargazers_count" },
  { title: "Watching", field: "subscribers_count" },
  { title: "Open Issues", field: "open_issues_count" },
  { title: "Forks", field: "forks" },
  { title: "Created", field: "created_at" },
  { title: "Last Updated", field: "updated_at" },
];

const FrameworkDetails = ({ data }) => {
  return (
    <Wrapper>
      <MaterialTable
        title="Framework Details"
        columns={columns}
        data={data}
        options={{
          paging: false,
        }}
      />
    </Wrapper>
  );
};

export default FrameworkDetails;
