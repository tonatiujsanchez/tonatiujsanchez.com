'use client'
import Image from "next/image"
import { useTheme } from "next-themes"
import { ICompany } from "@/interfaces"
import { cn } from "@/lib/utils"

export const CompanyItem = ({ name, image, imageDark, className }: ICompany) => {

    const { theme } = useTheme()
    const currentImage = theme === 'light' ? image : imageDark
    
    return (
        <figure className={cn(
            "relative flex items-center w-[5rem] h-full px-3",
            className
        )}>
            <Image
                src={currentImage}
                alt={name}
                title={name}
                width={200}
                height={40}
                className="w-full object-fill object-center"
            />
        </figure>
    )
}
