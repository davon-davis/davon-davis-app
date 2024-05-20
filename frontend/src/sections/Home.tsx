import { Stack, Typography } from "@mui/material";

export const Home = () => {
  return (
    <Stack
      id="homeSection"
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h4"
        style={{ textAlign: "center", paddingBottom: "4rem" }}
      >
        Hello! I'm <span className="text-yellow-400">Davon Davis</span>
      </Typography>
      <Typography
        className={"heading-sec_sub"}
        style={{ margin: "0 5rem 0 5rem" }}
      >
        A Frontend focused Web Developer building the Frontend of Websites and
        Web Applications that leads to the success of the overall product.
      </Typography>
    </Stack>
  );
};
