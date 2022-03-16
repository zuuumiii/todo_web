import { Checkbox, Box, Text } from "@chakra-ui/react";

const Task = (props) => {
  return (
    <Box mb="16px">
      <Checkbox colorScheme="blue" size="lg">
        <li>{props.name}</li>
      </Checkbox>
    </Box>
  );
};
export default Task;
