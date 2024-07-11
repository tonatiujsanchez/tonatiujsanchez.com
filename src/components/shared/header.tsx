import Image from "next/image"
import Link from "next/link"
import { DropdownTheme } from "@/components"


export const Header = () => {
    return (
        <header className="container py-6 md:pt-14 md:pb-10 flex justify-between">
            <div className="flex items-center gap-5">
                <Link
                    href="/"
                    className="rounded-full overflow-hidden bg-content-color w-[4.6rem] h-[4.6rem] pt-2"
                >
                    <Image
                        src="/images/ton.webp"
                        alt="Logo Tonatiuj Sánchez"
                        height={120}
                        width={120}
                    />
                </Link>
                <nav>
                    {/* <ul className="flex flex-col gap-1 text-text-color dark:text-text-color-dark">
                        <li>
                            <a href="#proyectos" className="dark:text-title-color-dark hover:text-primary-color dark:hover:text-primary-color">Proyectos</a>
                        </li>
                        <li>
                            <a href="#proyectos" className="dark:text-title-color-dark hover:text-primary-color dark:hover:text-primary-color">Experiencia</a>
                        </li>
                        <li>
                            <a href="#proyectos" className="dark:text-title-color-dark hover:text-primary-color dark:hover:text-primary-color">Contacto</a>
                        </li>
                    </ul> */}
                </nav>
            </div>
            <div>
                <DropdownTheme />
            </div>
        </header>
    )
}
