'use client'
import Image from "next/image"
import { useTheme } from "next-themes"
import { ICompany } from "@/interfaces"

export const CompanyItem = ({ name, image, imageDark, className }: ICompany) => {

    const { theme } = useTheme()

    return (
        <figure className={`relative flex items-center w-[5rem] h-full px-3 ${className}`}>
            <Image
                src={theme === 'dark' ? imageDark : image}
                alt={name}
                title={name}
                width={200}
                height={40}
                className="w-full object-fill object-center"
            />
        </figure>
    )
}
