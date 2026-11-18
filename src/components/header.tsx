'use client';
import Link from 'next/link';
import { useState } from 'react';
const links = [
  ['Home','/'],['Food & Pastries','/shop'],['Catering','/catering'],['Event Decoration','/event-decoration'],
  ['Rentals & Hire','/rentals'],['Gallery','/gallery'],['About Us','/about'],['Contact','/contact']
];
export function Header(){
  const [open,setOpen]=useState(false);
  return <>
    <div className="utility"><span>UK-wide services · Delivery & setup available · Owner-managed quotations</span><span>WhatsApp: +44 7902 030231</span></div>
    <header className="header container">
      <Link href="/" className="brand" aria-label="KERS Foods and Events home"><span className="brand-emblem">K</span><span><strong>KERS</strong><small>FOODS & EVENTS</small></span></Link>
      <nav className="desktop-nav" aria-label="Main navigation">{links.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</nav>
      <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-navigation" onClick={()=>setOpen(!open)}>{open?'Close':'Menu'} ☰</button>
    </header>
    {open && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">{links.map(([label,href])=><Link key={href} onClick={()=>setOpen(false)} href={href}>{label}</Link>)}</nav>}
  </>;
}
