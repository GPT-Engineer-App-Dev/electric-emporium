import { Box, Container, Flex, Heading, HStack, Image, Link, SimpleGrid, Text, VStack, Input, InputGroup, InputRightElement, IconButton } from "@chakra-ui/react";
import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
import { useState } from "react";

const products = [
  { id: 1, name: "Smartphone", price: "$699", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Laptop", price: "$999", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Smartwatch", price: "$199", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Headphones", price: "$149", image: "https://via.placeholder.com/150" },
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // Implement search logic here
    console.log("Searching for:", searchQuery);
  };
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="blue.800" color="white" p={4} justify="space-between" align="center">
        <Heading size="lg">ElectroShop</Heading>
        <HStack spacing={4}>
          <Link href="#">Home</Link>
          <Link href="#">Products</Link>
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
          <InputGroup>
            <Input
              placeholder="Search products"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              bg="white"
              color="black"
            />
            <InputRightElement>
              <IconButton
                aria-label="Search"
                icon={<FaSearch />}
                onClick={handleSearch}
              />
            </InputRightElement>
          </InputGroup>
          <FaShoppingCart />
          <FaUser />
        </HStack>
      </Flex>

      <Box as="main" p={4}>
        <Heading as="h2" size="xl" mb={4}>Featured Products</Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={4}>
          {products.map(product => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={product.image} alt={product.name} />
              <Box p={4}>
                <Heading as="h3" size="md">{product.name}</Heading>
                <Text mt={2}>{product.price}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      <Box as="footer" bg="blue.800" color="white" p={4} mt={8}>
        <Text textAlign="center">&copy; 2023 ElectroShop. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;