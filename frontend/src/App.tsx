import "./index.css";
import { Badge } from "@/components/ui/badge.tsx";

function App() {
  return (
    <body className="flex flex-col justify-center">
      <h1 className=" text-xl font-bold mb-2">
        Hello! I'm <span className="text-yellow-400">Davon Davis</span>
      </h1>
      <p>
        A <span className={"font-bold"}>Full Stack Developer</span>
      </p>
      <p>
        with
        <Badge className={"mx-1 text-yellow-400"}>3.2 Years</Badge>
        Experience
      </p>
    </body>
  );
}

export default App;
