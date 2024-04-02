import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";

export default function MyProjects() {
    return (
        <Container id={"My projects"}>
            <h1 className={"text-5xl font-bold"}>My projects</h1>
            <div className={"flex flex-wrap w-full justify-center items-center mt-4 gap-4"}>
                <ProjectCard title={"Finanční Svět"} description={"Website for financial advice"}
                             link={"https://financnisvet.vercel.app"} img={"/FinancniSvet.png"}/>
            </div>
        </Container>
    )
}