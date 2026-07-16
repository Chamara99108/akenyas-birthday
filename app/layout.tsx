import type { Metadata } from "next";
import { Great_Vibes, Quicksand, Cinzel_Decorative } from "next/font/google";
import "./globals.css";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-fancy",
  weight: ["400"],
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

const cinzel = Cinzel_Decorative({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Akenya's 1st Birthday",
  description: "Birthday Invitation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${greatVibes.variable} ${quicksand.variable} ${cinzel.variable}`}>
        {children}
      </body>
    </html>
  );
}




// import type { Metadata } from "next";
// import { Great_Vibes, Quicksand } from "next/font/google";
// import "./globals.css";

// const greatVibes = Great_Vibes({
//   subsets: ["latin"],
//   weight: "400",
//   variable: "--font-heading",
// });

// const quicksand = Quicksand({
//   subsets: ["latin"],
//   variable: "--font-body",
//   weight: ["400", "500", "600", "700"],
// });

// export const metadata: Metadata = {
//   title: "Akenya's 1st Birthday",
//   description: "Birthday Invitation",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={`${greatVibes.variable} ${quicksand.variable}`}>
//         {children}
//       </body>
//     </html>
//   );
// }