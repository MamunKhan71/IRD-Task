import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, Poppins } from 'next/font/google'
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";
import { Bounce, ToastContainer } from "react-toastify";
import TikMarkIcon from "@/components/Icons/TikMarkIcon";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const meQuranFont = localFont({
  src: "./fonts/me_quran.ttf",
  weight: "400",
  style: "normal",
  variable: "--font-me-quran",
});

export const metadata: Metadata = {
  title: "Dua Ruqyah - Job Task",
  description: "Job Task by IRD Foundation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${meQuranFont.variable} ${poppins.variable} antialiased`}
      >
        <ClientLayout>
          <div className="w-full ">
            {children}
          </div>
        </ClientLayout>
        <ToastContainer
          icon={<TikMarkIcon />}
          position="bottom-center"
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          className={'text-white'}
          transition={Bounce}
        />
      </body>
    </html>
  );
}
