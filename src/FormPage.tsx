import { Button, Stack, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function FormPage() {
  const navigate = useNavigate();

  return (
    <Stack justifyContent="center" alignItems="center" pt="20vh" spacing={2}>
      <Typography width="100%" fontSize={20} textAlign="center">TULLIO</Typography>
      <TextField variant="outlined" placeholder="Email" sx={{ width: { xs: "80%", md: "50%" } }} />
      <TextField variant="outlined" placeholder="Numero di telefono" sx={{ width: { xs: "80%", md: "50%" } }} />

      <Button variant="contained" onClick={() => navigate("/thankyou")}>Conferma</Button>
    </Stack>
  );
}
