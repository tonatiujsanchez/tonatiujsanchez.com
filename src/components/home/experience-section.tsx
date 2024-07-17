import Image from 'next/image'
import { IoBriefcaseOutline } from 'react-icons/io5'

const experience = [
    {
        id: '01',
        position: 'Desarrollador Web FullStack',
        company: 'Towers Cem - Empresa Cementera',
        companyImage: '/images/jobs/towercem-logo.webp',
        date: '2024'
    },
    {
        id: '02',
        position: 'Desarrollador Web FullStack',
        company: 'JMX - Agencia de Publicidad y desarrollo web',
        companyImage: '/images/jobs/jmx-logo.webp',
        date: '2022 - 2024'
    },
    {
        id: '03',
        position: 'Desarrollador Frontend y Creador de Contenido',
        company: 'JMX - Agencia de Publicidad y desarrollo web',
        companyImage: '/images/jobs/jmx-logo.webp',
        date: '2018 - 2022'
    },
    {
        id: '04',
        position: 'Desarrollador Frontend',
        company: 'Despertar de la Montaña',
        companyImage: '/images/jobs/despertar-logo.webp',
        date: '2017 - 2018'
    },
    {
        id: '05',
        position: 'Desarrollador Java',
        company: 'Instituto Marcial de TaeKwonDo',
        companyImage: '/images/jobs/imtkd-logo.webp',
        date: '2017'
    },
]

export const ExperienceSection = () => {
    return (
        <section className="container mb-20 mt-28">
            <h2 className="text-title-color dark:text-title-color-dark text-xl font-bold mb-5 flex items-center gap-2">
                <IoBriefcaseOutline />
                <span className="dark:bg-gradient-to-br dark:text-pretty dark:text-transparent dark:bg-gradient-stop dark:bg-clip-text dark:from-white dark:via-white dark:via-20% dark:to-white/40">Experiencia</span>
            </h2>
            <ul className="flex flex-col gap-3">
                {
                    experience.map(({ id, position, company, companyImage, date}) => (
                        <div key={ id } className="flex justify-between gap-4 py-2">
                            <div className="flex-1 flex items-center gap-2">
                                <figure className="rounded-full border overflow-hidden min-w-[3.7rem]">
                                    <Image
                                        src={ companyImage }
                                        alt={ company }
                                        width={60}
                                        height={60}
                                    />
                                </figure>
                                <div>
                                    <h3>{ position }</h3>
                                    <p className="text-text-color dark:text-text-color-dark opacity-90 text-standard text-pretty">{ company }</p>
                                </div>
                            </div>
                            <div className="text-text-color dark:text-text-color-dark opacity-90 w-[4.3rem] sm:w-auto text-standard text-pretty">
                                { date }
                            </div>
                        </div>
                    ))
                }
            </ul>
        </section>
    )
}

