import React from "react";
import { Container, Table, Thead, Tbody, Tr, Th, Td, TableContainer, Heading, Button, IconButton } from "@chakra-ui/react";
import { FaPlus, FaTrash, FaEdit } from "react-icons/fa";

const Index = () => {
  // Sample static data
  const inventoryItems = [
    { id: 1, name: "Laptop", quantity: 15, location: "Warehouse A" },
    { id: 2, name: "Monitor", quantity: 30, location: "Warehouse B" },
    { id: 3, name: "Keyboard", quantity: 50, location: "Warehouse C" },
  ];

  return (
    <Container maxW="container.xl" py={5}>
      <Heading mb={4}>Inventory Management System</Heading>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Item Name</Th>
              <Th>Quantity</Th>
              <Th>Location</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {inventoryItems.map((item) => (
              <Tr key={item.id}>
                <Td>{item.id}</Td>
                <Td>{item.name}</Td>
                <Td>{item.quantity}</Td>
                <Td>{item.location}</Td>
                <Td>
                  <IconButton aria-label="Edit item" icon={<FaEdit />} mr={2} />
                  <IconButton aria-label="Delete item" icon={<FaTrash />} colorScheme="red" />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Button leftIcon={<FaPlus />} colorScheme="teal" mt={4}>
        Add New Item
      </Button>
    </Container>
  );
};

export default Index;
