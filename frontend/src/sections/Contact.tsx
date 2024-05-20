import { Stack, Typography } from "@mui/material";

export const Contact = () => {
  return (
    <Stack
      id="contactMeSection"
      className={"flex flex-col px-20"}
      style={{
        height: "100vh",
        padding: "7rem 0rem",
        margin: "0 5rem",
      }}
    >
      <Typography
        variant="h4"
        style={{ textAlign: "center", paddingBottom: "2rem" }}
      >
        CONTACT
      </Typography>
      <Typography style={{ textAlign: "center" }}>
        Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and technology
      </Typography>
      <div
        style={{
          boxShadow: "rgba(100,100,111,0.2) 0px 7px 29px 0px",
          background: "white",
          padding: "2rem",
          marginTop: "1rem",
          maxWidth: "80rem",
          textAlign: "right",
          width: "70vw",
          borderRadius: "5px",
          margin: "5rem auto 0 auto",
        }}
      >
        <div className={"mb-4"}>
          <label className={"contact__form-label"}>Name</label>
          <input
            placeholder="Enter Your Name"
            type="text"
            className="contact__form-input"
            name="name"
            id="name"
          />
          <label className={"contact__form-label"}>Name</label>
          <input
            placeholder="Enter Your Name"
            type="text"
            className="contact__form-input"
            name="name"
            id="name"
          />
          <label className={"contact__form-label"}>Name</label>
          <input
            placeholder="Enter Your Name"
            type="text"
            className="contact__form-input"
            name="name"
            id="name"
          />
        </div>
      </div>
    </Stack>
  );
};
