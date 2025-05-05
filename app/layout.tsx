import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Lato } from "next/font/google"
import type React from "react"

const lato = Lato({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  title: "Unknown Games Labs - Game Development Assets",
  description: "Creating innovative tools and assets for game developers",
  generator: 'v0.dev',
  icons: '/images/logo.png',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={lato.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
