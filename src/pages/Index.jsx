import { Box, Button, FormControl, FormLabel, Input, Select, Table, Thead, Tbody, Tr, Th, Td, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, VStack } from "@chakra-ui/react";
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
            <FormLabel htmlFor="userRole">User Role</FormLabel>
            <Select id="userRole" placeholder="Select role" value={isAgent ? "Agent" : "Player"} onChange={(e) => setIsAgent(e.target.value === "Agent")}>
              <option value="Agent">Agent</option>
              <option value="Player">Player</option>
            </Select>
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
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Property</Th>
                  <Th>Value</Th>
                </Tr>
              </Thead>
              <Tbody>
                {Object.entries(mockResponse).map(([key, value]) =>
                  typeof value === "object" ? (
                    Object.entries(value).map(([nestedKey, nestedValue]) => (
                      <Tr key={nestedKey}>
                        <Td>{`${key} - ${nestedKey}`}</Td>
                        <Td>{JSON.stringify(nestedValue)}</Td>
                      </Tr>
                    ))
                  ) : (
                    <Tr key={key}>
                      <Td>{key}</Td>
                      <Td>{JSON.stringify(value)}</Td>
                    </Tr>
                  ),
                )}
              </Tbody>
            </Table>
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
