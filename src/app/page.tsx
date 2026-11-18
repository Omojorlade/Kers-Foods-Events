import Image from 'next/image';
import Link from 'next/link';
import {FeaturedProducts} from '@/components/featured-products';
const services=[
 {name:'Catering',description:'Authentic food for occasions of every size.',url:'/catering',image:'/images/catering.svg'},
 {name:'Pastries & Bakes',description:'Freshly made treats, savouries and seasonal boxes.',url:'/shop',image:'/images/pastries.svg'},
 {name:'Event Decoration',description:'Thoughtful styling for memorable celebrations.',url:'/event-decoration',image:'/images/decor.svg'},
 {name:'Rentals & Hire',description:'Chairs, tables, marquees and event equipment.',url:'/rentals',image:'/images/rentals.svg'}
];
export default function Home(){return <main>
 <section className="hero"><div className="container hero-grid"><div className="hero-copy"><p className="eyebrow">CATERING · PASTRIES · EVENT DECORATION · RENTALS</p><h1>Exceptional Flavours,<br/>Beautiful <em>Celebrations.</em></h1><p>Delicious food, fresh pastries, elegant styling and quality event equipment hire across the UK.</p><div className="actions"><Link className="button button-gold" href="#services">Explore Our Services</Link><Link className="button button-outline-light" href="/request-quote">Request a Quote</Link></div></div><div className="hero-image"><Image src="/images/catering.svg" alt="Illustrative catering buffet placeholder" fill priority sizes="(max-width: 800px) 100vw, 50vw"/></div></div></section>
 <div className="benefits"><div className="container benefits-grid"><span>✦ Quality Food & Service</span><span>♧ Freshly Made Treats</span><span>▦ Events of All Sizes</span><span>↗ UK-wide Coverage</span></div></div>
 <section id="services" className="section container"><div className="services-grid">{services.map(s=><article className="service" key={s.name}><Image src={s.image} alt={'Illustrative placeholder for '+s.name} width={640} height={460}/><div className="service-overlay"><h2>{s.name}</h2><p>{s.description}</p><Link href={s.url} className="service-link">Explore {s.name} →</Link></div></article>)}</div></section>
 <FeaturedProducts/>
 <section className="event-banner container"><div><h2>Planning an Event?</h2><p>Request a personalised quotation for catering, decoration and equipment hire in one place.</p></div><Link href="/request-quote" className="button button-gold">Plan Your Event →</Link></section>
 <section className="section container"><div className="section-heading"><h2>Our Recent Events</h2><p>Explore the celebrations we've supported.</p></div><div className="gallery-grid">{services.map(s=><Link key={s.name} href="/gallery"><Image src={s.image} width={460} height={300} alt={'Gallery placeholder: '+s.name}/></Link>)}</div></section>
 </main>}
