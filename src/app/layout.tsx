import "~/styles/globals.css";
import Topbar from "src/components/Topbar";
import { ThemeProvider } from "src/components/theme-provider";
import { GeistSans } from "geist/font/sans";
import { Poppins } from "next/font/google";
import { type Metadata } from "next";
import { Providers } from "~/components/providers";

export const metadata: Metadata = {
  title: "Résumé AI",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${poppins.className} overflow-hidden`}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            <Topbar></Topbar>
            {children}
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
