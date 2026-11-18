export type Category = 'Pies & Rolls' | 'Snacks' | 'Banana Bread' | 'Treat Boxes' | 'Frozen Range';
export type Product = { id: string; name: string; category: Category; priceLabel: string; image: string; featured: boolean };

// DESIGN ONLY: These are examples. Prices are not verified current KERS prices.
export const categories = ['All Items', 'Pies & Rolls', 'Snacks', 'Banana Bread', 'Treat Boxes', 'Frozen Range'] as const;
export const products: Product[] = [
  {id:'meat-pie',name:'Meat Pie',category:'Pies & Rolls',priceLabel:'Price on request',image:'/images/pastries.svg',featured:true},
  {id:'fish-roll',name:'Fish Roll',category:'Pies & Rolls',priceLabel:'Price on request',image:'/images/pastries.svg',featured:true},
  {id:'banana-bread',name:'Whole Banana Bread',category:'Banana Bread',priceLabel:'Price on request',image:'/images/bread.svg',featured:true},
  {id:'doughnuts',name:'Doughnuts',category:'Snacks',priceLabel:'Price on request',image:'/images/pastries.svg',featured:true},
  {id:'spring-rolls',name:'Spring Rolls',category:'Snacks',priceLabel:'Price on request',image:'/images/pastries.svg',featured:false},
  {id:'christmas-box',name:'Seasonal Treat Box',category:'Treat Boxes',priceLabel:'Price on request',image:'/images/bread.svg',featured:false},
  {id:'frozen-pies',name:'Frozen Meat Pies',category:'Frozen Range',priceLabel:'Price on request',image:'/images/pastries.svg',featured:false},
];
