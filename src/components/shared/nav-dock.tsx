import { Dock, DockIcon } from "@/components/magicui/dock"
import { IoHomeOutline, IoBriefcaseOutline, IoCodeSlash } from "react-icons/io5"
import { Separator } from "../ui/separator";
import { ButtonTheme } from "@/components";
export type IconProps = React.HTMLAttributes<SVGElement>;


export const NavDock = () => {
    return (
        <div className="fixed bottom-5 left-[50%] -translate-x-[50%]">
            <div className="relative">
                <Dock magnification={70} distance={100} className="gap-5 border-slate-200 dark:border-neutral-600" >
                    <DockIcon className="hover:bg-black/10 hover:dark:bg-white/10 px-5 flex flex-col justify-center gap-1">
                        <IoHomeOutline size={18} />
                        <span className="text-[0.55rem]">Inicio</span>
                    </DockIcon>
                    <DockIcon className="hover:bg-black/10 hover:dark:bg-white/10 px-5 mr-2 flex flex-col justify-center gap-1">
                        <IoCodeSlash size={18} />
                        <span className="text-[0.55rem]">Proyectos</span>
                    </DockIcon>
                    <DockIcon className="hover:bg-black/10 hover:dark:bg-white/10 px-5 flex flex-col justify-center gap-1">
                        <IoBriefcaseOutline size={18} />
                        <span className="text-[0.55rem]">Experiencia</span>
                    </DockIcon>
                    <Separator orientation="vertical" className="h-full" />
                    <DockIcon className="hover:bg-black/10 hover:dark:bg-white/10">
                        <ButtonTheme />
                    </DockIcon>
                </Dock>
            </div>
        </div>
    )
}
