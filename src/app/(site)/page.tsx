import { Hero, NavDock, ProjectsSection, ExperienceSection, CompaniesSection } from "@/components"


export default function Home() {
    return (
        <>
            <main className="pb-16">
                <Hero />
                <ExperienceSection />
                <ProjectsSection />
                <CompaniesSection />
            </main>
            <NavDock />
        </>
    )
}
