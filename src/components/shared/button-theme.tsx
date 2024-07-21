"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"


interface Props {
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | "silver" | null | undefined
}
export function ButtonTheme({ variant='ghost' }:Props) {
    
    const { setTheme, theme } = useTheme()

    return (
        <Button 
            variant={ variant } 
            size="icon" 
            onClick={() => setTheme( theme === 'light' ? 'dark' : 'light' )}
            className="rounded-full size-11"
        >
            <SunIcon className="size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
    )
}
