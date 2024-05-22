import {
  Alert,
  Button,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [fromName, setFromName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isSnackbarOpen, setIsSnackbarOpen] = useState<boolean>(false);

  const sendEmail = () => {
    const serviceID = "service_q594uaq";
    const templateID = "personal_contact_form";
    const userID = "xbkvfaJjamU7yIJOy";

    const templateParams = {
      from_name: fromName,
      user_email: userEmail,
      message: message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
      })
      .catch((err) => {
        console.error("Failed to send email.", err);
      });
  };

  return (
    <>
      <Stack
        id="contactMeSection"
        style={{
          height: "100vh",
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
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
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
          <TextField
            label="Full Name"
            type="text"
            id="name"
            value={fromName}
            onChange={(event) => setFromName(event.target.value)}
          />
          <TextField
            label="Email"
            type="text"
            id="email"
            value={userEmail}
            onChange={(event) => setUserEmail(event.target.value)}
          />
          <TextField
            label="Message"
            type="text"
            id="message"
            multiline
            rows={5}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
          <Button
            variant="contained"
            style={{ width: "5rem", alignSelf: "end" }}
            onClick={sendEmail}
          >
            Submit
          </Button>
        </Stack>
      </Stack>
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={6000}
        onClose={() => setIsSnackbarOpen(false)}
        message="Note archived"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert variant="filled" severity="success">
          Message Sent!
        </Alert>
      </Snackbar>
    </>
  );
};
