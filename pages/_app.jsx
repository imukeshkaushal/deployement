import "../styles/globals.css";
import Head from "next/head";
import { Navbar } from "./navbar";
import { Avatar, ChakraBaseProvider, Flex, Spacer } from "@chakra-ui/react";
import Link from "next/Link"
function MyApp({ Component, pageProps }) {
  return (
    <ChakraBaseProvider>
      <Flex alignItems='center' gap='2' py={4} pl= {4} pr = {4} border = "2px solid black">
        <Flex gap="10">
          <Link href="/">Mukesh Kaushal</Link>
          <Link href="/project">Project</Link>
          <Link href="/experience">Experience</Link>
        </Flex>
        <Spacer/>
        <Flex>
          <img
          
            alt="Mukesh Kaushal"
            src="https://avatars.githubusercontent.com/u/97522154?v=4"
            style={{ height : "30px", width : "30px", borderRadius : "50%"}}
          />
        </Flex>
      </Flex>

      <Component {...pageProps} />
    </ChakraBaseProvider>
  );
}

export default MyApp;
