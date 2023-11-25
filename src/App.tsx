import { Box, Button, Grow, LinearProgress, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useRef, useState } from "react";

function App() {
  const searchFieldRef = useRef<HTMLInputElement | null>(null);
  const [answer, setAnswer] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    if (searchFieldRef.current) {
      setIsLoading(true);
      const search = searchFieldRef.current.value;
      console.log(search);
      const result = await fetch(
        `http://localhost:3001/question`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ question: search })
        }
      );

      const { answer, sources } = await result.json();
      setAnswer(answer);
      setIsLoading(false);
    }
  }

  return (
    <Stack justifyContent="center" alignItems="center" pt="20vh">
      <Grow in={!answer}>
        <Box width={{ xs: "80%", md: "50%" }} >
          <Typography variant="h1" fontWeight={900} width="100%" fontSize={{ xs: 40, md: 80 }} textAlign="center">TULLIO</Typography>
          <Stack direction="row">
            <TextField inputRef={searchFieldRef} variant="outlined" placeholder="Search" sx={{ flex: 1 }} />
            <Button
              variant="contained"
              onClick={handleSearch}
            >
              Search
            </Button>
          </Stack>
          {isLoading && <LinearProgress sx={{ height: 2, width: "100%", mt: "0px" }} />}
        </Box>
      </Grow>
      <Stack width={{ xs: "80%", md: "50%" }} sx={{ visibility: answer ? "none" : "block" }}>
        <Typography>{answer}</Typography>
      </Stack>
    </Stack>
  );
}

export default App;
