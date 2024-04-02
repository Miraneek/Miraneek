

interface ContainerProps {
    children: React.ReactNode;
    id?: string;
}

export default function Container({ children, id }: ContainerProps) {
    return (
        <section id={id} className={"h-screen flex flex-col items-center justify-center text-white max-w-4xl mx-auto"}>
            {children}
        </section>
    )
}