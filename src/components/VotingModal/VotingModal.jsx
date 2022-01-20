import React, { useState } from "react";
import { Box, FormField, TextInput, Button } from "grommet";
import { useCreateVote } from "../../api/queries";

const VotingModal = ({ frameworkName, frameworkDisplay }) => {
  const [email, setEmail] = useState("");
  const { mutate } = useCreateVote();
  return (
    <Box
      background="light-1"
      height="small"
      width="medium"
      pad="small"
      direction="column"
      justify="start"
      align="center"
      gap="medium"
    >
      <Box alignSelf="start">
        <h1>Cast vote for: {frameworkDisplay}</h1>
      </Box>
      <Box width="full" height="full" justify="start" gap="medium">
        <FormField>
          <TextInput
            placeholder="Email Address..."
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </FormField>
        <Button
          primary
          label="Cast Vote"
          onClick={() =>
            mutate({
              email,
              framework: frameworkName,
            })
          }
        />
      </Box>
    </Box>
  );
};

export default VotingModal;
