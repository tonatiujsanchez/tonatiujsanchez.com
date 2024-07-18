import { cn } from "@/lib/utils"
import { ReactNode } from "react"


interface Props {
    children  : ReactNode
    className?: string
}
export const Paragraph = ({ children, className }:Props) => {
    return (
        <p className={`text-text-color dark:text-text-color-dark text-standard text-pretty ${className}`}>
            { children }
        </p>
    )
}
