import { Header, Hero, NavDock, ProjectsSection, ExperienceSection } from "@/components"


export default function Home() {
    return (
        <>
            <main className="pb-16">
                <Hero />
                <ExperienceSection />
                <ProjectsSection />
            </main>
            <NavDock />
        </>
    )
}
