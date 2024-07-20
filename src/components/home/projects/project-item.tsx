'use client'
import Link from "next/link"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { GoArrowUpRight } from "react-icons/go"
import { MagicCard } from "@/components/magicui/magic-card"
import { Paragraph, ProjectImage } from "@/components"
import { cn } from "@/lib/utils"
import { IProject } from "@/interfaces"

interface Props {
    project: IProject
}
export const ProjectItem = ({ project }:Props) => {

    const { theme } = useTheme()

    return (
        <MagicCard
            key={project.id}
            className="relative group cursor-pointer flex-col items-center justify-center shadow-lg whitespace-nowrap"
            gradientColor={theme === "light" ? "#C0C0C053" : "#262626"}
        >

            <figure className={cn(
                "opacity-60 group-hover:opacity-100 transition-all duration-500 flex justify-center items-center",
                project.classNameImage
            )}>
                <ProjectImage
                    src={project.image}
                    alt={project.name}
                />
            </figure>
            <div className="absolute bottom-0 px-3 py-5 w-full bg-gradient-to-t dark:from-black dark:to-black/0 from-white to-white/0 transition duration-500 group-hover:opacity-0">
                <div className="group-hover:translate-y-10 group-hover:opacity-0 transition duration-500">
                    <h3 className="font-medium">{project.name}</h3>
                    <Paragraph>{project.caption}</Paragraph>
                </div>
            </div>
            <div className="absolute top-0 px-3 py-4 w-full transition duration-500 -translate-y-14 group-hover:translate-y-0 flex justify-end">
                <Button variant="default" asChild size="sm" className="pointer-events-auto">
                    <Link href={project.slug}>
                        Detalles
                        <GoArrowUpRight className="group-has-[link]:rotate-45 transition" size={18} />
                    </Link>
                </Button>
            </div>
        </MagicCard>
    )
}
