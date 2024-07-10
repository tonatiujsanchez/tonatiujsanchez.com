import { DropdownTheme } from "@/components";
import { BorderBeam } from "@/components/magicui/border-beam";
import ShimmerButton from "@/components/magicui/shimmer-button";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { MdOutlineFileDownload } from "react-icons/md";


export default function Home() {
    return (
        <>
            <header className="container py-6 md:py-14 flex justify-between">
                <div className="flex gap-5">
                    <Link
                        href="/"
                        className="rounded-full overflow-hidden bg-content-color w-20 h-20 pt-2"
                    >
                        <Image
                            src="/images/ton.webp"
                            alt="Logo Tonatiuj Sánchez"
                            height={120}
                            width={120}
                        />
                    </Link>
                    <nav>
                        <ul className="flex flex-col gap-2 text-text-color dark:text-text-color-dark">
                            <li>
                                <a href="#proyectos" className="dark:text-title-color-dark hover:text-primary-color dark:hover:text-primary-color">Proyectos</a>
                            </li>
                            <li>
                                <a href="#proyectos" className="dark:text-title-color-dark hover:text-primary-color dark:hover:text-primary-color">Experiencia</a>
                            </li>
                            <li>
                                <a href="#proyectos" className="dark:text-title-color-dark hover:text-primary-color dark:hover:text-primary-color">Contacto</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <DropdownTheme />
                </div>
            </header>
            <main className="">
                <section className="container">
                    <h1 className="text-3xl font-bold text-title-color dark:bg-gradient-to-br dark:text-pretty dark:text-transparent dark:bg-gradient-stop dark:bg-clip-text dark:from-white dark:via-white dark:via-10% dark:to-white/30">Tonatiuj Sánchez</h1>
                    <p className="text-primary-color">Desarrollador Web FullStack</p>
                    <div className="mt-7">
                        <p className="text-text-color dark:text-text-color-dark max-w-[40rem] text-standard text-pretty">
                            Soy un Desarrollador Web Fullstack con interés por el diseño UI/UX y con un fuerte compromiso con la colaboración y solución de problemas de software, cumpliendo con los altos estándares de experiencia de usuario, usabilidad y rendimiento.
                        </p>
                        <div className="flex items-center flex-wrap gap-4 md:gap-4 mt-7">
                            <a
                                href="mailto:tonatiujsanchez@gmail.com"
                                className="relative inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-zinc-950 hover:bg-title-color text-text-color-dark h-9 px-3 sm:px-4 py-2 gap-2 border-white/10 group font-medium shadow-[inset_0_-8px_10px_#ffffff1f] hover:text-primary-color dark:hover:text-primary-color">
                                Hablemos <GoArrowUpRight className="group-hover:rotate-45 transition" size={18} />
                                <BorderBeam 
                                    size={50} 
                                    duration={5} 
                                    delay={9}
                                />
                            </a>
                            <Link
                                href="about-me"
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-3 sm:px-4 py-2 text-text-color dark:text-text-color-dark hover:text-primary-color dark:hover:text-primary-color gap-2 group"
                            >
                                Descargar CV <MdOutlineFileDownload className="group-hover:animate-bounce group-hover:animate-infinite" size={20} />
                            </Link>
                            <Link
                                href="about-me"
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-3 sm:px-4 py-2 text-text-color dark:text-text-color-dark hover:text-primary-color dark:hover:text-primary-color gap-2 group"
                            >
                                Sobre mi <GoArrowUpRight className="group-hover:rotate-45 transition" size={18} />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}