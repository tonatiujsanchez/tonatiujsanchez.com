import { CompaniesMarquee } from "@/components"

export const CompaniesSection = () => {
    return (
        <section className="container mb-20 mt-32">
            <h2 className="text-text-color dark:text-text-color-light text-sm text-center uppercase">
                Empresas a las que he agregado valor
            </h2>
            <CompaniesMarquee/>
            <div className="container relative bg-globe flex w-full items-center justify-center pointer-events-none -z-[2]  overflow-hidden [mask-image:radial-gradient(ellipse_at_center_center,#000,transparent_70%)] my-[-5.8rem]"></div>
        </section>
    )
}
