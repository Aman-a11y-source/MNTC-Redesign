import { Poppins } from "next/font/google";
import type { ReactNode } from "react";
import "./app.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-primary text-white min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
