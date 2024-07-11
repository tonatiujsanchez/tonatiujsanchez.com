import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import Image from "next/image";

interface Props {
    src      : string
    alt      : string
    className: string
    width?   : number
    height?  : number
    
}
export const ProjectImage = ({ src, alt, className, width=400, height=400 }:Props)=> {
    return (
        <Image
            src={ src }
            alt={ alt }
            width={width}
            height={height}
            className={ className }

        />
    )
}

const features = [
    {
        name: "Legado de Tlapa",
        description: "Sitio web de noticias con dashboard administrativo.",
        href: "/",
        cta: "Ver detalles",
        // background: <img src="/images/projects/legado-de-tlapa/legado-de-tlapa_01.webp" className="absolute bottom-28 transition-all duration-500 opacity-70 dark:opacity-60 group-hover:bottom-20 group-hover:opacity-100 group-hover:scale-[1.2]" />,
        background: ( 
            <ProjectImage 
                src={'/images/projects/legado-de-tlapa/legado-de-tlapa_01.webp'}
                alt="Legado de Tlapa"
                className="absolute bottom-28 transition-all duration-500 opacity-70 dark:opacity-60 group-hover:bottom-20 group-hover:opacity-100 group-hover:scale-[1.2]"
            />
        ),
        className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
        name: "Constructora Sayca",
        description: "Sitio web de empresa constructora.",
        href: "/",
        cta: "Ver detalles",
        background: <img className="absolute -right-20 -top-20 opacity-60" />,
        className: "lg:row-start-4 lg:row-end-6 lg:col-start-2 lg:col-end-3",
    },
    {
        name: "Contextos Guerrero",
        description: "Sitio web de noticias con dashboard administrativo.",
        href: "/",
        cta: "Ver detalles",
        background: <img src="/images/projects/contextos-guerrero/contextos-guerrero_01.webp" className="absolute bottom-10 transition-all duration-500 opacity-70 scale-90 dark:opacity-60 group-hover:bottom-2 group-hover:opacity-100 group-hover:scale-110" />,
        className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
        name: "Share Groups",
        description: "Aplicación web para administrar páginas, perfiles y grupos de Facebook para compartir publicaciones de forma aleatoria.",
        href: "/",
        cta: "Ver detalles",
        background: <img src="/images/projects/share-groups/share-groups_01.webp" className="absolute bottom-28 transition-all duration-500 opacity-70 scale-105 dark:opacity-60 group-hover:bottom-20 group-hover:opacity-100 group-hover:scale-125" />,
        className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-6",
    },
    {
        name: "Admin Sites",
        description: "Dashboard administrativo con roles de usuario, para a la gestión eficiente de la estructura y el contenido de sitios web.",
        href: "/",
        cta: "Ver detalles",
        background: <img src="/images/projects/admin-sites/admin-sites.webp" className="absolute bottom-10 transition-all duration-500 opacity-70 scale-90 dark:opacity-60 group-hover:bottom-8 group-hover:opacity-100 group-hover:scale-105" />,
        className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-3",
    },
    {
        name: "DevManager",
        description:"Herramienta colaborativa para gestionar proyectos en equipo con seguimiento de tareas en tiempo real.",
        href: "/",
        cta: "Ver detalles",
        background: <img src="/images/projects/devmanager/devmanager_01.webp" className="absolute bottom-28 transition-all duration-500 opacity-70 dark:opacity-60 group-hover:bottom-20 group-hover:opacity-100 group-hover:scale-125" />,
        className: "lg:col-start-3 lg:col-end-3 lg:row-start-3 lg:row-end-6",
    },
];


export const ProjectsSection = () => {
    return (
        <section className="px-5 lg:px-12 max-w-[80rem] mx-auto mb-20 mt-28">
            <h2 className="text-xl font-bold mb-5">Proyectos</h2>
            <BentoGrid className="lg:grid-rows-5 lg:h-[40rem]">
                {features.map((feature) => (
                    <BentoCard key={feature.name} {...feature} />
                ))}
            </BentoGrid>
        </section>
    )
}
