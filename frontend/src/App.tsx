import "./index.css";
import { AboutMe } from "@/sections/AboutMe.tsx";
import { Header } from "@/components/Header.tsx";
import { Contact } from "@/sections/Contact.tsx";
import { Home } from "@/sections/Home.tsx";

function App() {
  return (
    <>
      <Header />
      <body className="flex flex-col bg-gray-50">
        <Home />
        <AboutMe />
        <Contact />
      </body>
    </>
  );
}

export default App;
