import '@styles/globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Putra's Portfolio",
  description: 'Portfolio of a SPARTAN by the name of Buege Mahara Putra'
}

const Root = ({ children }) => {
  return (
    <html lang='en'>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </head>
      <body className="mb-8">
        {children}
      </body>
    </html>
  )
}

export default Root