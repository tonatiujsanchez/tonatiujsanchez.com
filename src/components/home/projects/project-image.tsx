import Image from "next/image"

interface Props {
    src: string
    alt: string
    className?: string
    width?: number
    height?: number

}
export const ProjectImage = ({ src, alt, className = '', width = 400, height = 400 }: Props) => {
    return (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={className}

        />
    )
}