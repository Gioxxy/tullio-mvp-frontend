import { Button, Stack, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function FormPage() {
  const navigate = useNavigate();

  return (
    <Stack justifyContent="center" alignItems="center" pt="20vh" spacing={5}>
      <Stack spacing={2} sx={{ width: { xs: "95%", md: "50%" } }}>
        <Typography variant="h2" fontWeight={400} width="100%" color="#4d4d4d" fontSize={{ xs: 20, md: 30 }}>
          Ora che hai un'idea chiara grazie a Tullio, è il momento di andare oltre!
        </Typography>
        <Typography variant="h3" fontWeight={400} width="100%" color="#636363" fontSize={{ xs: 14, md: 16 }}>
          Compila il form qui sotto con i tuoi dettagli di contatto e la tua posizione geografica. Queste informazioni ci aiuteranno a connetterti con l'avvocato più adatto per il tuo caso specifico.
        </Typography>
      </Stack>
      <Stack spacing={2} sx={{ width: { xs: "95%", md: "50%" } }}>
        <TextField variant="outlined" placeholder="Email" />
        <TextField variant="outlined" placeholder="Numero di telefono" />
        <TextField variant="outlined" placeholder="Città" />
      </Stack>

      <Button variant="contained" onClick={() => navigate("/thankyou")} style={{ fontWeight: 700 }}>Conferma</Button>

      <Typography width="100%" fontSize={10} textAlign="center" color="#adadad" sx={{ width: { xs: "95%", md: "50%" } }}>
        Il tuo viaggio verso una soluzione legale su misura inizia qui. La privacy e la sicurezza dei tuoi dati sono la nostra massima priorità. Non vediamo l'ora di guidarti nel prossimo passo del tuo percorso legale.
      </Typography>
    </Stack>
  );
}
