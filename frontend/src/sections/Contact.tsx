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
import { Controller, useForm } from "react-hook-form";

export const Contact = () => {
  const [isSnackbarOpen, setIsSnackbarOpen] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const sendEmail = (data: any) => {
    const { fromName, userEmail, message } = data;
    const serviceID = import.meta.env.VITE_SERVICE_ID;
    const templateID = import.meta.env.VITE_TEMPLATE_ID;
    const userID = import.meta.env.VITE_EMAILJS_USER_ID;

    const templateParams = {
      from_name: fromName,
      user_email: userEmail,
      message: message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then(() => {
        setIsSnackbarOpen(true);
      })
      .catch((err) => {
        console.error("Failed to send email.", err);
      });

    reset();
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
        <form onSubmit={handleSubmit(sendEmail)}>
          <Stack
            gap={2}
            style={{
              boxShadow: "rgba(100,100,111,0.2) 0px 7px 29px 0px",
              background: "white",
              borderRadius: "5px",
              padding: "2rem",
            }}
          >
            <Controller
              name="fromName"
              control={control}
              defaultValue=""
              rules={{ required: "Full name is required" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Full Name"
                  type="text"
                  id="name"
                  error={!!errors.fromName}
                  helperText={
                    errors.fromName ? String(errors.fromName!.message) : ""
                  }
                />
              )}
            />
            <Controller
              name="userEmail"
              control={control}
              defaultValue=""
              rules={{ required: "Email is required" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Email"
                  type="text"
                  id="email"
                  error={!!errors.userEmail}
                  helperText={
                    errors.userEmail ? String(errors.userEmail!.message) : ""
                  }
                />
              )}
            />
            <Controller
              name="message"
              control={control}
              defaultValue=""
              rules={{ required: "Message is required" }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Message"
                  type="text"
                  id="message"
                  multiline
                  rows={5}
                  error={!!errors.message}
                  helperText={
                    errors.message ? String(errors.message!.message) : ""
                  }
                />
              )}
            />
            <Button
              type="submit"
              variant="contained"
              style={{ width: "5rem", alignSelf: "end" }}
            >
              Submit
            </Button>
          </Stack>
        </form>
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
