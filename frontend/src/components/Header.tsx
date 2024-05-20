import { CodeIconSvg } from "@/assets/CodeIconSvg.tsx";

export const Header = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      style={{ position: "fixed", zIndex: 1000 }}
      className="flex justify-between items-center w-screen py-5 px-10 bg-white"
    >
      <div className={"flex flex-row"}>
        <CodeIconSvg />
        <div className="ml-1">Davon Davis</div>
      </div>
      <div className="flex justify-end">
        <button className="px-4" onClick={() => scrollToSection("homeSection")}>
          Home
        </button>
        <button
          className="px-4"
          onClick={() => scrollToSection("aboutMeSection")}
        >
          About
        </button>
        <button
          className="px-4"
          onClick={() => scrollToSection("contactMeSection")}
        >
          Contact
        </button>
      </div>
    </header>
  );
};
