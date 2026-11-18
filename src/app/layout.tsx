import type {Metadata} from 'next';
import {Header} from '@/components/header';
import './globals.css';
export const metadata:Metadata={title:'KERS Foods & Events | Catering, Pastries, Decoration & Hire',description:'KERS Foods & Events offers catering, pastries, event decoration and equipment hire across the UK.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en-GB"><body><Header/>{children}<footer className="footer"><div className="container footer-inner"><div><h2>KERS</h2><p>FOODS & EVENTS</p><small>Catering · Pastries · Event Decoration · Rentals</small></div><div><strong>Get in Touch</strong><p>WhatsApp: +44 7902 030231</p><p>UK-wide Services</p><small>Contact details to be verified before launch.</small></div></div></footer></body></html>}
