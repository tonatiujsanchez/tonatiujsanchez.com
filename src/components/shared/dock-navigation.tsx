import React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Dock, DockIcon } from "@/components/magicui/dock"
import { ButtonTheme } from "@/components"
import { HomeIcon, EnvelopeClosedIcon, LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons"
import { IoBriefcaseOutline, IoCodeSlash } from "react-icons/io5"


export type IconPropsDock = React.HTMLAttributes<SVGElement>

const Icons = {
    email: EnvelopeClosedIcon,
    linkedin: LinkedInLogoIcon,
    x: (props: IconPropsDock) => (
        <svg viewBox="0 0 27 23" xmlns="http://www.w3.org/2000/svg" {...props}>
            <title>X</title>
            <path
                fill="currentColor"
                d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
            />
        </svg>
    ),
    youtube: (props: IconPropsDock) => (
        <svg
            width="32px"
            height="32px"
            viewBox="0 0 32 32"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <title>youtube</title>
            <path d="M29.41,9.26a3.5,3.5,0,0,0-2.47-2.47C24.76,6.2,16,6.2,16,6.2s-8.76,0-10.94.59A3.5,3.5,0,0,0,2.59,9.26,36.13,36.13,0,0,0,2,16a36.13,36.13,0,0,0,.59,6.74,3.5,3.5,0,0,0,2.47,2.47C7.24,25.8,16,25.8,16,25.8s8.76,0,10.94-.59a3.5,3.5,0,0,0,2.47-2.47A36.13,36.13,0,0,0,30,16,36.13,36.13,0,0,0,29.41,9.26ZM13.2,20.2V11.8L20.47,16Z" />
        </svg>
    ),
    github: GitHubLogoIcon,
}

const DATA = {
    navbar: [
        { href: "#", icon: HomeIcon, label: "Inicio" },
        { href: "#", icon: IoBriefcaseOutline, label: "Experiencia" },
        { href: "#", icon: IoCodeSlash, label: "Proyectos" },
    ],
    contact: {
        social: {
            email: {
                name: "Send Email",
                url: "#",
                icon: Icons.email,
            },
            LinkedIn: {
                name: "LinkedIn",
                url: "#",
                icon: Icons.linkedin,
            },
            GitHub: {
                name: "GitHub",
                url: "#",
                icon: Icons.github,
            },
            X: {
                name: "X",
                url: "#",
                icon: Icons.x,
            },
        },
    },
}

export function DockNavigation() {
    return (
        <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14">
            <div className="fixed bottom-0 inset-x-0 h-16 flex w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>
            <Dock direction="middle" className="z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
                {DATA.navbar.map((item) => (
                    <DockIcon key={item.label}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href={item.href}
                                    className={cn(
                                        buttonVariants({ variant: "ghost", size: "icon" }),
                                        "size-11 rounded-full",
                                    )}
                                >
                                    <item.icon className="size-4" />
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{item.label}</p>
                            </TooltipContent>
                        </Tooltip>
                    </DockIcon>
                ))}
                <Separator orientation="vertical" className="h-full" />
                {Object.entries(DATA.contact.social).map(([name, social]) => (
                    <DockIcon key={name}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href={social.url}
                                    className={cn(
                                        buttonVariants({ variant: "ghost", size: "icon" }),
                                        "size-11 rounded-full",
                                    )}
                                >
                                    <social.icon className="size-4" />
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{name}</p>
                            </TooltipContent>
                        </Tooltip>
                    </DockIcon>
                ))}
                <Separator orientation="vertical" className="h-full py-2" />
                <DockIcon>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <ButtonTheme />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Theme</p>
                        </TooltipContent>
                    </Tooltip>
                </DockIcon>
            </Dock>
        </div>
    )
}
