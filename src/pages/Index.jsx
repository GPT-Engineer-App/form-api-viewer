import { Box, Button, FormControl, FormLabel, Input, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Text, VStack, Code } from "@chakra-ui/react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Index = () => {
  const [username, setUsername] = useState("");
  const [isAgent, setIsAgent] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Mock response data
  const mockResponse = {
    clientId: 400959205,
    isAgent: false,
    userType: "Player",
    username: "Chubbyme",
    topManager: "Marcthepogi",
    immediateManager: "agentmakdo",
    statistic: {
      currentBalance: 4.82,
      statisticsForThePast7Days: {
        totalDeposit: 109000,
        totalBet: 362045,
        totalWithdraw: 70000,
        canWithdraw: true,
        amountToBet: 0,
        wageringFactor: 3.32151376146789,
      },
      statisticsForMostRecentDeposit: {
        totalDeposit: 30000,
        totalBet: 62500,
        totalWithdraw: 0,
        canWithdraw: true,
        amountToBet: 0,
        wageringFactor: 2.0833333333333335,
      },
      status: 0,
      message: "OK",
    },
    turnOver: null,
    managers: ["agentmakdo", "Chubbyme"],
  };

  // Handle form submission
  const handleSearch = (e) => {
    e.preventDefault();
    // This is where you would normally make an API call
    // For this implementation, we will just open the modal with the mock response
    onOpen();
  };

  return (
    <Box p={8}>
      <form onSubmit={handleSearch}>
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel htmlFor="username">Username</FormLabel>
            <Input id="username" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="isAgent">Is Agent?</FormLabel>
            <Input id="isAgent" placeholder="Enter true or false" value={isAgent} onChange={(e) => setIsAgent(e.target.value.toLowerCase() === "true")} />
          </FormControl>
          <Button leftIcon={<FaSearch />} colorScheme="blue" type="submit">
            Search
          </Button>
        </VStack>
      </form>

      {/* Modal for displaying the response */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>API Response</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Code as="pre" width="full" p={5} overflowX="auto">
              {JSON.stringify(mockResponse, null, 2)}
            </Code>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Index;
