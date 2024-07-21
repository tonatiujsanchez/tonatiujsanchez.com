import { Hero, ProjectsSection, ExperienceSection, CompaniesSection, DockNavigation } from "@/components"


export default function Home() {
    return (
        <>
            <main className="pb-16">
                <Hero />
                <ExperienceSection />
                <ProjectsSection />
                <CompaniesSection />
            </main>
            <DockNavigation />
        </>
    )
}
