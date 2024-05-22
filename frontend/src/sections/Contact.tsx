import { Button, Stack, TextField, Typography } from "@mui/material";

export const Contact = () => {
  return (
    <Stack
      id="contactMeSection"
      style={{
        height: "100vh",
        // padding: "7rem 0rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h4"
        style={{ textAlign: "center", marginBottom: "2rem" }}
      >
        CONTACT
      </Typography>
      <Typography style={{ textAlign: "center", paddingBottom: "4rem" }}>
        Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and technology
      </Typography>
      <Stack
        gap={2}
        style={{
          boxShadow: "rgba(100,100,111,0.2) 0px 7px 29px 0px",
          background: "white",
          borderRadius: "5px",
          padding: "2rem",
        }}
      >
        <TextField label="Full Name" type="text" id="name" />
        <TextField label="Email" type="text" id="email" />
        <TextField label="Phone Number" type="text" id="phone-number" />
        <Button variant="contained" style={{ width: "5rem", alignSelf: "end" }}>
          Submit
        </Button>
      </Stack>
    </Stack>
  );
};
