import { Header, Hero, NavDock, ProjectsSection } from "@/components"


export default function Home() {
    return (
        <>
            <Header />
            <main className="pb-16">
                <Hero />
                <ProjectsSection />
            </main>
            <NavDock />
        </>
    )
}
