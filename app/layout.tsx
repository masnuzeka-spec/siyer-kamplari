import type { Metadata } from "next"; import "./globals.css";
export const metadata: Metadata={title:"Siyer Kampları",description:"İlimden hayata uzanan kamp yolculuğu",manifest:"/manifest.webmanifest"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="tr"><body>{children}</body></html>}
