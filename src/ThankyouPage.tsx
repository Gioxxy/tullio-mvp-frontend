import { Box, Button, Grow, LinearProgress, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useRef, useState } from "react";

export default function ThankyouPage() {
  return (
    <Stack justifyContent="center" alignItems="center" pt="20vh" spacing={2}>
      <Typography variant="h2" fontWeight={400} width="100%" color="#4d4d4d" fontSize={{ xs: 20, md: 30 }} textAlign="center">
        Grazie per la tua richiesta!
      </Typography>
      <Typography variant="h3" fontWeight={400} width="100%" color="#636363" fontSize={{ xs: 14, md: 16 }} textAlign="center">
        Verrai presto ricontattato da un avvocato specifico per la tua richiesta
      </Typography>
    </Stack>
  );
}
