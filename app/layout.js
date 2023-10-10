import "./globals.css";
import { ReduxProvider } from "./redux/provider";

export const metadata = {
  title: "Snake & Ladder",
  description: "Classic Snake & Ladder Game",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-custom-font-family">
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
