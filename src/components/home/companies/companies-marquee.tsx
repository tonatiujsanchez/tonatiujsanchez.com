import Marquee from "@/components/magicui/marquee"
import { CompanyItem } from "@/components"
import { ICompany } from "@/interfaces"

const companies:ICompany[] = [
    {
        id: '01',
        image: '/images/companies/imtkd_light.png',
        imageDark: '/images/companies/imtkd_light.png',
        name: 'IMTKD',
    },
    {
        id: '02',
        image: '/images/companies/despertar-de-la-montana_light.png',
        imageDark: "/images/companies/despertar-de-la-montana_dark.png",
        name: 'Despertar de la Montaña',
        className:'w-[11rem] h-[5rem]',
    },
    {
        id: '03',
        image: '/images/companies/jmx_light.png',
        imageDark: '/images/companies/jmx_dark.png',
        name: 'JMX',
    },
    {
        id: '04',
        image: '/images/companies/yolostyle_light.svg',
        imageDark: '/images/companies/yolostyle_dark.svg',
        name: 'YoloStyle',
        className:'w-[7.5rem]',
    },
    {
        id: '07',
        image: '/images/companies/towers-cem_light.png',
        imageDark: '/images/companies/towers-cem_dark.png',
        name: 'Towers Cem',
    },
    {
        id: '05',
        image: '/images/companies/legado-de-tlapa_light.png',
        imageDark: '/images/companies/legado-de-tlapa_dark.png',
        name: 'Legado de Tlapa',
        className:'w-[6rem] h-[5rem]',
    }, 
    {
        id: '08',
        image: '/images/companies/nunca-mas-un-tlapa-sin-nosotros_light.png',
        imageDark: '/images/companies/nunca-mas-un-tlapa-sin-nosotros_light.png',
        name: 'Nunca más un Tlapa sin nosotros A.C.',
    },
    {
        id: '06',
        image: '/images/companies/contextos-guerrero_light.svg',
        imageDark: '/images/companies/contextos-guerrero_dark.svg',
        name: 'Contextos Guerrero',
        className:'w-[10.5rem] h-[5rem]',
    },
]


export function CompaniesMarquee() {
    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mb-10 mt-10">
            <Marquee pauseOnHover className="[--duration:30s]">
                { companies.map((company) => (
                    <CompanyItem key={company.id} {...company} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-[2rem] bg-gradient-to-r from-body-color dark:from-body-color-dark"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-[2rem] bg-gradient-to-l from-body-color dark:from-body-color-dark"></div>
        </div>
    )
}
