import Link from "next/link";

export default function ProjectCard({title, description, link, img}: any) {

    return (
        <Link href={link} className={`w-[400px] bg-cover bg-center bg-no-repeat aspect-[16/9] block mt-4 rounded-xl`}
              target={"_blank"} style={{backgroundImage: `url('${img}')`}}>
            <div
                className={"w-full h-full bg-black bg-opacity-50 p-5 flex flex-col justify-end rounded-xl transition-all duration-3000 hover:bg-opacity-20"}>
                <h1 className={"text-3xl font-bold"}>{title}</h1>
                <p className={"text-lg"}>{description}</p>
            </div>
        </Link>
    )
}