import { Box, Button, Grow, Icon, LinearProgress, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useRef, useState } from "react";
import tullio from "./assets/tullio.png";
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  const searchFieldRef = useRef<HTMLInputElement | null>(null);
  const [data, setData] = useState<{ answer: string, sources: string[] } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    if (searchFieldRef.current) {
      setIsLoading(true);
      const search = searchFieldRef.current.value;
      console.log(search);
      const result = await fetch(
        `https://api.tullioai.com/question`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ question: search })
        }
      );

      setData(await result.json());
      setIsLoading(false);
    }
  }

  return (
    <Stack justifyContent="center" alignItems="center" pt="20vh">
      <Grow in={!data?.answer ?? true}>
        <Stack width={{ xs: "95%", md: "50%" }} spacing={5}>
          <Stack width="100%" alignItems="center">
            <img src={tullio} height="84px" width="84px" alt="logo" />
            <Typography variant="h1" fontWeight={400} width="100%" color="#6594e8" fontSize={{ xs: 40, md: 60 }} textAlign="center">TULLIO</Typography>
            <Typography variant="h2" fontWeight={400} width="100%" color="#000" fontSize={{ xs: 14, md: 16 }} textAlign="center">
              Naviga la legge con tullio e trova l'avvocato giusto per te.
            </Typography>
          </Stack>
          <Stack>
            <Stack direction="row">
              <TextField inputRef={searchFieldRef} variant="outlined" placeholder="Descrivi il tuo problema legale" sx={{ flex: 1 }} />
              <Button
                variant="contained"
                sx={{ fontWeight: 800 }}
                onClick={handleSearch}
              >
                <SearchIcon />
              </Button>
            </Stack>
            {isLoading && <LinearProgress sx={{ height: 2, width: "100%", mt: "0px" }} />}
            {isLoading && <Typography sx={{ color: "#adadad" }}>Sto cercando la risposta... può volerci qualche minuto</Typography>}
          </Stack>

          <Stack spacing={2}>
            <Typography variant="h2" fontWeight={400} width="100%" color="#4d4d4d" fontSize={{ xs: 20, md: 30 }}>
              Chi siamo?
            </Typography>
            <Typography variant="h3" fontWeight={400} width="100%" color="#636363" fontSize={{ xs: 14, md: 16 }}>
              Tullio ti guida attraverso il labirinto legale, aiutandoti a comprendere le tue opzioni e indicandoti la strada verso la soluzione giusta.
              <br />
              Con semplici domande, Tullio valuterà la tua situazione e ti fornirà una panoramica chiara e comprensibile. Questo è il primo passo verso l'ottenimento della giustizia, senza confusione e senza costi perchè la legge dovrebbe essere accessibile a tutti.
            </Typography>
          </Stack>
        </Stack>
      </Grow>
      <Stack width={{ xs: "80%", md: "50%" }} sx={{ display: !data ? "none" : "block" }} spacing="20px">
        <Button variant="text" onClick={() => setData(null)} sx={{ color: "#adadad" }}>Nuova domanda</Button>
        <Typography>{data?.answer ?? ""}</Typography>
        <Stack direction="row" justifyContent="space-between" mt="10px">
          <Box>
            {data?.sources.map((source, index) => (
              <Button key={index} variant="text" onClick={() => window.open(source)}>FONTE {index + 1}</Button>
            ))}
          </Box>
        </Stack>
        <Button variant="contained" onClick={() => navigate("/form")}>Parla con un professionista</Button>
      </Stack>
    </Stack>
  );
}
