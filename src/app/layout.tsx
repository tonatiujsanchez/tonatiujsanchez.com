import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers"
import { TooltipProvider } from "@/components/ui/tooltip"

export const metadata: Metadata = {
    title: "Tonatiuj Sánchez",
    description: "Desarrollador Web Fullstack con interés por el diseño UI/UX y con un fuerte compromiso con la colaboración y solución de problemas de software, cumpliendo con los altos estándares de experiencia de usuario, usabilidad y rendimiento.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" suppressHydrationWarning>
            <body className={
                cn("font-rubik bg-body-color dark:bg-body-color-dark")
            }>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <TooltipProvider delayDuration={0}>
                        { children }
                    </TooltipProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
