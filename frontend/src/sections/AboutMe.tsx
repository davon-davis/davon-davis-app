import { Grid, Stack, Typography } from "@mui/material";

export const AboutMe = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Flyway",
    "TypeScript",
    "React",
    "Git",
    "GitHub",
    "Java",
    "Spring",
    "Knex",
    "Docker",
  ];

  const renderSkills = () => {
    return skills.map((skill, index) => (
      <div key={index} className="skills">
        {skill}
      </div>
    ));
  };

  return (
    <Stack
      id="aboutMeSection"
      style={{
        height: "100%",
        padding: "12rem 0rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h4"
        style={{ textAlign: "center", paddingBottom: "2rem" }}
      >
        ABOUT ME
      </Typography>
      <Typography style={{ paddingBottom: "4rem", textAlign: "center" }}>
        Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and technology
      </Typography>
      <Grid container spacing={1} style={{ height: "100%" }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" pb={2}>
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
        <Grid item xs={12} md={6} style={{ textAlign: "center" }}>
          <Typography variant="h4" py="2rem">
            My Skills
          </Typography>
          <div className={"flex flex-wrap"}>{renderSkills()}</div>
        </Grid>
      </Grid>
    </Stack>
  );
};
