import type React from "react"
import "@/app/globals.css"
import { Lato } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { icons } from "lucide-react"

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
    <html lang="en" suppressHydrationWarning>
      <body className={lato.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
