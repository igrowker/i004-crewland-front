import Link from "next/link";
import BackArrow from "../icons/BackArrow";
import Title from "../Titles/Title";

interface NavTitleProps {
    link: string;
    title: string;
}

export default function NavTitle({link, title}: NavTitleProps) {
  return (
    <section className="flex justify-start items-center w-full pb-4 gap-5">
        <Link href={`/${link}`} aria-label={`Volver a la interface de ${link}`}>
            <BackArrow/>
        </Link>
        <Title
            size="small"
            text={title}
            className="font-medium text-xl font-title"
        />
    </section>
  )
}