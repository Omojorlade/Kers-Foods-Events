'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { products, categories } from '@/data/catalogue';

export function FeaturedProducts(){
 const [category,setCategory]=useState<(typeof categories)[number]>('All Items');
 const visible=products.filter(p=>category==='All Items'?p.featured:p.category===category).slice(0,4);
 return <section className="section container" aria-labelledby="products-title">
  <div className="section-heading"><h2 id="products-title">Our Food & Pastries</h2><p>Freshly prepared favourites for your next celebration.</p></div>
  <div className="category-tabs" role="group" aria-label="Filter products by category">{categories.map(c=><button key={c} type="button" className={'pill '+(category===c?'active':'')} aria-pressed={category===c} onClick={()=>setCategory(c)}>{c}</button>)}</div>
  <div className="product-grid">{visible.length===0?<p className="empty">No products in this category yet.</p>:visible.map(p=><article className="product" key={p.id}>
   <Image src={p.image} alt={'Illustrative placeholder for '+p.name} width={550} height={350}/><div className="product-content"><h3>{p.name}</h3><p>{p.priceLabel}</p><Link className="button button-dark full" href="/shop">View in shop</Link></div>
  </article>)}</div>
  <div className="center"><Link className="button button-outline" href="/shop">View All Products →</Link></div>
 </section>;
}
