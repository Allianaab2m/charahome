import React from "react"
import { Box, Flex, Heading, Button } from "./common/components"
import Link from "next/link"

export default function Header() {
  return (
    <Box as="header">
      <Flex
        bg="white"
        color="gray.600"
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle="solid"
        borderColor="gray.200"
        align="center"
      >
        <Flex flex={1} justify="space-between" maxW="5xl" mx="auto">
          <Heading as="h1" size="lg">
            <Link href="/">charahome</Link>
          </Heading>
          <Button
            as={Link}
            fontSize="sm"
            fontWeight="normal"
            color="white"
            bg="green.400"
            href="/login"
            _hover={{ bg: "green.300" }}
          >
            Misskey.artアカウントでログイン
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
}
