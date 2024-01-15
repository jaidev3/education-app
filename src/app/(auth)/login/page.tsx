'use client'
import LoginForm from "@/components/LoginForm";
import { Box, Button, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import { useState } from "react";

function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Add your authentication logic here
    console.log("Logging in with:", { email, password });
  };

  return (
    <Box p={4} w='50%'>
     <LoginForm/>
    </Box>
  );
};

export default Page;
