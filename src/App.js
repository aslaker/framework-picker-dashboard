import { Box } from "grommet";

import axios from "axios";
import { useQuery } from "react-query";

function App() {
  const { data } = useQuery("choices", async () => {
    const { data } = await axios.get(".netlify/functions/get-choices");
    return data;
  });
  return (
    <Box background="brand" fill>
      <p>{JSON.stringify(data)}</p>
    </Box>
  );
}

export default App;
