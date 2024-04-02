import Link from "next/link";
import {IconBrandGithub, IconBrandInstagram, IconBrandLinkedin} from "@tabler/icons-react";

export default function Icons() {
    return (
        <section className={"flex justify-space-between items-center absolute right-4 top-4"}>
            <ul className={"flex gap-1"}>
                <li>
                    <Link href={"https://www.instagram.com/_miraanek_/"} target={"_blank"}>
                        <IconBrandInstagram strokeWidth={2} color={"#ff2825"} width={48} height={48}/>
                    </Link>
                </li>
                <li>
                    <Link href={"https://github.com/Miraneek"} target={"_blank"}>
                        <IconBrandGithub strokeWidth={2} color={"white"} width={48} height={48}/>
                    </Link>
                </li>
                <Link href={"https://www.linkedin.com/in/miroslav-novotný-8a436b26b/"} target={"_blank"}>
                    <IconBrandLinkedin strokeWidth={2} color={"#00A8E8"} width={50} height={50}/>
                </Link>
            </ul>
        </section>
    )
}