import React from "react";
import logo from "./logo.svg";
import { Input, InputGroup, InputLeftAddon, Stack } from "@chakra-ui/react";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-red-500">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Stack spacing={4}>
          <InputGroup>
            <InputLeftAddon background={"black"}>+91</InputLeftAddon>
            <Input type="tel" placeholder="Enter Phone Number" />
          </InputGroup>
        </Stack>
      </header>
    </div>
  );
}

export default Home;
