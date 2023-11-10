import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';


export const metadata = {
  title: 'Beatriz Beauté',
  description: 'Desperte sua beleza real!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
