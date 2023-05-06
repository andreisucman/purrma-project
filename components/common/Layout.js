import { Montserrat } from "next/font/google";

const font = Montserrat({
  weights: [400, 600],
  display: "swap",
  subsets: ["latin"],
});

export default function Layout({ children }) {
  return (
    <div className="layout">
      <main id="body" className={`${font.className} main`}>
        {children}
      </main>
    </div>
  );
}
