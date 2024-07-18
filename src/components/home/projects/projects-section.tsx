import { IoCodeSlash } from "react-icons/io5"
import { ProjectItem } from "@/components"
import { IProject } from "@/interfaces"



const projects:IProject[] = [
    {
        id: '01',
        name: "Legado de Tlapa",
        caption: "Sitio web de noticias con dashboard administrativo.",
        slug: "/",
        image: '/images/projects/legado-de-tlapa/legado-de-tlapa_01.webp',
        classNameImage: 'scale-75 group-hover:scale-[0.85]',
    },
    {
        id: '02',
        name: "Constructora Sayca",
        caption: "Sitio web de empresa constructora.",
        slug: "/",
        image: '/images/projects/constructora-sayca/constructora-sayca_01.webp',
        classNameImage: 'scale-75 group-hover:scale-[0.85]',
    },
    {
        id: '03',
        name: "Contextos Guerrero",
        caption: "Sitio web de noticias con dashboard administrativo.",
        slug: "/",
        image: '/images/projects/contextos-guerrero/contextos-guerrero_01.webp',
        classNameImage: 'scale-75 group-hover:scale-[0.85]',
    },
    {
        id: '04',
        name: "Share Groups",
        caption: "Aplicación para compartir publicaciones en Facebook de forma aleatoria.",
        slug: "/",
        image: '/images/projects/share-groups/share-groups_01.webp',
        classNameImage: 'scale-75 group-hover:scale-[0.85]',
    },
    {
        id: '05',
        name: 'Admin Sites',
        caption: 'Dashboard administrativo para la gestión de la estructura y el contenido de sitios web, con roles de usuario.',
        slug: '/',
        image: '/images/projects/admin-sites/admin-sites.webp',
        classNameImage: 'scale-75 group-hover:scale-[0.85] -translate-y-6',
    },
    {
        id: '06',
        name: 'DevManager',
        caption: 'Herramienta colaborativa para gestionar proyectos con seguimiento de tareas en tiempo real.',
        slug: '/',
        image: '/images/projects/devmanager/devmanager_01.webp',
        classNameImage: 'scale-75 group-hover:scale-[0.85]',
    },
]


export const ProjectsSection = () => {
    return (
        <section className="container mb-20 mt-28">
            <h2 className="text-title-color dark:text-title-color-dark text-xl font-bold mb-5 flex items-center gap-2">
                <IoCodeSlash />
                <span className="dark:bg-gradient-to-br dark:text-pretty dark:text-transparent dark:bg-gradient-stop dark:bg-clip-text dark:from-white dark:via-white dark:via-20% dark:to-white/40">Proyectos</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5">
                {
                    projects.map(project => (
                        <ProjectItem key={ project.id } project={ project } />
                    ))
                }
            </div>
        </section>
    )
}
