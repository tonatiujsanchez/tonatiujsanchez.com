import { ReactNode } from "react"


interface Props {
    children  : ReactNode
    icon?     : ReactNode
    className?: string
}

export const SectionHeading = ({ children, icon, className }:Props) => {
    return (
        <h2 className={`text-title-color dark:text-title-color-dark text-xl font-bold mb-5 flex items-center gap-2 ${ className }`}>
            { icon && icon }
            <span className="dark:bg-gradient-to-br dark:text-pretty dark:text-transparent dark:bg-gradient-stop dark:bg-clip-text dark:from-white dark:via-white dark:via-20% dark:to-white/40">
                { children }
            </span>
        </h2>
    )
}
