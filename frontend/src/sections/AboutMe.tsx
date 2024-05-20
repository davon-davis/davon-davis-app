import { Grid, Stack, Typography } from "@mui/material";

export const AboutMe = () => {
  return (
    <Stack
      id="aboutMeSection"
      className={"flex flex-col px-20"}
      style={{
        height: "100%",
        padding: "7rem 0rem",
        margin: "0 5rem",
      }}
    >
      <Typography
        variant="h4"
        style={{ textAlign: "center", paddingBottom: "2rem" }}
      >
        ABOUT ME
      </Typography>
      <Typography style={{ paddingBottom: "2rem", textAlign: "center" }}>
        Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and technology
      </Typography>
      <Grid container spacing={5} xs={12}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" pb={2}>
            Get to know me!
          </Typography>
          <div>
            <Typography>
              I'm a Frontend Web Developer building the Front-end of Websites
              and Web Applications that leads to the success of the overall
              product. Check out some of my work in the Projects section.
            </Typography>
            <br />
            <Typography>
              I also like sharing content related to the stuff that I have
              learned over the years in Web Development so it can help other
              people of the Dev Community. Feel free to Connect or Follow me on
              my Linkedin where I post useful content related to Web Development
              and Programming
            </Typography>
            <br />
            <Typography>
              I'm open to Job opportunities where I can contribute, learn and
              grow. If you have a good opportunity that matches my skills and
              experience then don't hesitate to contact me.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" py="2rem">
            My Skills
          </Typography>
          <div className={"flex flex-wrap"}>
            <div className={"skills"}>HTML</div>
            <div className={"skills"}>CSS</div>
            <div className={"skills"}>JavaScript</div>
            <div className={"skills"}>Flyway</div>
            <div className={"skills"}>TypeScript</div>
            <div className={"skills"}>React</div>
            <div className={"skills"}>Git</div>
            <div className={"skills"}>GitHub</div>
            <div className={"skills"}>Java</div>
            <div className={"skills"}>Spring</div>
            <div className={"skills"}>Knex</div>
            <div className={"skills"}>Docker</div>
          </div>
        </Grid>
      </Grid>
    </Stack>
  );
};
