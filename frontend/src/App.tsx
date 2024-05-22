import "./index.css";
import { AboutMe } from "@/sections/AboutMe.tsx";
import { Header } from "@/components/Header.tsx";
import { Contact } from "@/sections/Contact.tsx";
import { Home } from "@/sections/Home.tsx";
import { Stack } from "@mui/material";

function App() {
  return (
    <>
      <Header />
      <Stack mx={5}>
        <Home />
        <AboutMe />
        <Contact />
      </Stack>
    </>
  );
}

export default App;
