import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

import { cn } from "@/lib/utils";

const headingFont = localFont({
    src: "../public/fonts/CalSans-SemiBold.woff2"
});

export const Logo = () => {
    return (
        <Link href="/">
            <div className="hiver:opacity-75 transition items-center gap-x-2 hidden md:flex">
                <Image 
                    src="/logo.svg"
                    alt="Imagem de logturnal no Freepik"
                    title="https://br.freepik.com/vetores-gratis/vetor-de-gradiente-de-logotipo-colorido-de-passaro_28267842.htm#query=free%20logo&position=1&from_view=keyword&track=ais&uuid=305b2925-63c8-4e39-b74f-b13036dcc4ef"
                    height={30}
                    width={30}
                />

                <p className={cn(
                    "text-lg text-neutral-700 pb-1",
                    headingFont.className
                    )}>
                    Taskify
                </p>
            </div>
        </Link>
    );
};