import "./index.css";
import {ModeToggle} from "@/components/mode-toggle.tsx";

function App() {
    return (
        <body className="flex flex-col">
        <header className="flex justify-between items-center w-screen mt-5 px-10">
            <div>Davon Davis</div>
            <div className="flex justify-end">
                <button className="px-4">Home</button>
                <button className="px-4">About</button>
                <button className="px-4">Contact</button>
                <ModeToggle/>
            </div>
        </header>
        <section className={"flex flex-col justify-center"} style={{height: '80vh'}}>
            <h1 className="text-header font-bold mb-2">
                Hello! I'm <span className="text-yellow-400">Davon Davis</span>
            </h1>
            <p className={"text-center"} style={{margin: "0 15rem 0 15rem"}}>
                A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to
                the success of the overall product.
            </p>
            {/*<p>*/}
            {/*    A <span className={"font-bold"}>Full Stack Developer</span>*/}
            {/*</p>*/}
            {/*<p>*/}
            {/*    with*/}
            {/*    <Badge className={"mx-1 text-yellow-400"}>3.2 Years</Badge>*/}
            {/*    Experience*/}
            {/*</p>*/}
        </section>
        </body>
    );
}

export default App;
