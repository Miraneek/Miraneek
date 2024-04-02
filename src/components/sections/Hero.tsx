import Container from "@/components/Container";


export default function Hero() {
    return (
        <Container id={"Home"}>
            <h1 className={"text-6xl font-extrabold bg-gradient-to-br from-indigo-400 to-cyan-400 bg-clip-text text-transparent"}>Hello,
                I&apos;m Miroslav Novotny</h1>
            <p className={"text-white text-3xl font-bold bg-gradient-to-tl from-indigo-400 to-cyan-400 bg-clip-text text-transparent"}>student
                of IT</p>
        </Container>
    )
}