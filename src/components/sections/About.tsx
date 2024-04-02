import Container from "@/components/Container";
import {
    IconBrandJavascript,
    IconBrandNextjs,
    IconBrandReact,
    IconBrandTailwind
} from "@tabler/icons-react";

export default function About() {
    return (
        <Container id={"About"}>
            <h1 className={"text-5xl font-bold"}>About me</h1>
            <p className={"text-2xl mt-5 text-justify"}>I&apos;m a frontend developer and a student on Educanet Praha IT. Besides some school projects Im building a website in Next JS to help young people
                with financial problems and how to enter the working life. In my free time I like to play florball. </p>
            <h2 className={"text-3xl mt-5"}>
                My skills:
            </h2>
            <ul className={"flex mt-4 gap-4 [&>*>span]:text-2xl text-center"}>
                <li>
                    <IconBrandNextjs color={"white"} size={100} strokeWidth={1.5}/>
                    <span>Next JS</span>
                </li>
                <li>
                    <IconBrandTailwind color={"#31b2e7"} size={100} strokeWidth={1.5}/>
                    <span>Tailwind</span>
                </li>
                <li>
                    <IconBrandJavascript color={"yellow"} size={100} strokeWidth={1.5}/>
                    <span>Java Script</span>
                </li>
                <li>
                    <IconBrandReact color={"#31b2e7"} size={100} strokeWidth={1.5}/>
                    <span>React</span>
                </li>
            </ul>
        </Container>
    )
}