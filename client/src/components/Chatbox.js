import { Box } from "@chakra-ui/layout";
import "./styles.css";
import SingleChat from "./SingleChat";
import { ChatState } from "../Context/ChatProvider";

const Chatbox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = ChatState();

  return (
    <Box
      d={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      alignItems="center"
      flexDir="column"
      paddingTop={3}
      backdropFilter="blur(16px) saturate(180%)"
      backgroundColor="rgba(216, 216, 216, 0.75)"
      borderRadius=" 12px"
      border="1px solid rgba(255, 255, 255, 0.125)"
      w={{ base: "100%", md: "48%" }}
      borderWidth="1px"
    >
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </Box>
  );
};

export default Chatbox;
