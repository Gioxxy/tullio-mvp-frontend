import { Box, Button, Grow, LinearProgress, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useRef, useState } from "react";

export default function ThankyouPage() {
  return (
    <Stack justifyContent="center" alignItems="center" pt="20vh" spacing={2}>
      <Typography variant="h1" width="100%" fontSize={30} fontWeight={900} textAlign="center">Grazie per la tua richiesta!</Typography>
      <Typography variant="h2" width="100%" fontSize={20} textAlign="center">Verrai presto ricontattato da un avvocato specifico per la tua richiesta</Typography>
    </Stack>
  );
}
