"use strict";(self.webpackChunkreact_ucenie=self.webpackChunkreact_ucenie||[]).push([[334,369],{4081:(i,e,t)=>{t.d(e,{A:()=>c});var l=t(5043),a=t(9425),s=t(4701),n=t(579);const c=i=>{let{data:e,buttonVariant:t,icon:c,size:r,image:o}=i;const[u,d]=(0,l.useState)(0),m=(0,l.useRef)(null),p=()=>{m.current&&clearInterval(m.current),m.current=setInterval((()=>{d((i=>(i+1)%e.length))}),9e3)};(0,l.useEffect)((()=>(p(),()=>clearInterval(m.current))),[e.length]);const h=r?"animated-hero--small":"animated-hero--large";return(0,n.jsx)("div",{className:`animated-hero ${h}`,children:(0,n.jsx)("div",{className:"animated-hero__card",children:(0,n.jsxs)("div",{className:"animated-hero__card-wrapper",children:[(0,n.jsx)("div",{className:"animated-hero__card-image",children:(0,n.jsx)(s.A,{src:o,alt:""})}),(0,n.jsx)("div",{className:"animated-hero__card-content container",children:(0,n.jsxs)("div",{className:"animated-hero__content",children:[(0,n.jsxs)("h2",{className:"animated-hero__content-title",children:[(0,n.jsx)("span",{children:"Drevo"}),(0,n.jsx)("span",{children:"a"}),(0,n.jsx)("span",{children:"Sluzby"})]}),(0,n.jsxs)("p",{className:"animated-hero__content-text",children:["Kvalitn\xe9 palivov\xe9 drevo, spo\u013eahliv\xe9 agro a komun\xe1lne slu\u017eby. ",(0,n.jsx)("br",{}),"Postar\xe1me sa o va\u0161e teplo, pozemky aj okolie s d\xf4razom na kvalitu a spo\u013eahlivos\u0165. ",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)("b",{children:"Va\u0161a spokojnos\u0165 je na\u0161ou prioritou."})]}),(0,n.jsx)(a.A,{text:"Viac informacii",url:"/services",variant:t,icon:c})]})})]})})})}},2208:(i,e,t)=>{t.d(e,{A:()=>n});var l=t(4701),a=t(1740),s=t(579);const n=i=>{let{blog:e,index:t}=i;return(0,s.jsxs)("div",{className:"blogcard",children:[(0,s.jsx)("div",{className:"blogcard__image",children:(0,s.jsx)(l.A,{src:e.image,alt:e.title})}),(0,s.jsxs)("div",{className:"blogcard__content",children:[(0,s.jsx)("div",{className:"blogcard__title",children:e.title}),(0,s.jsx)("p",{className:"blogcard__text",children:e.text}),(0,s.jsxs)("div",{className:"blogcard__bottom",children:[(0,s.jsx)("span",{className:"blogcard__category",children:"Citat viac"}),(0,s.jsx)("span",{className:"blogcard__readingTime",children:"10min citania"})]})]}),(0,s.jsx)("div",{className:"blogcard__label",children:(0,s.jsx)(a.A,{children:e.category})})]},t)}},9983:(i,e,t)=>{t.d(e,{A:()=>n});var l=t(5713),a=t(9425),s=t(579);const n=i=>{let{children:e,title:t,buttonText:n,buttonUrl:c}=i;return(0,s.jsxs)("div",{className:"blog-wrapper",children:[(0,s.jsxs)("div",{className:"blog-wrapper__header",children:[t&&(0,s.jsx)(l.A,{tag:"h2",children:t}),n&&(0,s.jsx)(a.A,{variant:"primary",text:n,url:c,children:"View all"})]}),(0,s.jsx)("div",{className:"blog-wrapper__cards",children:e})]})}},4387:(i,e,t)=>{t.d(e,{A:()=>n});var l=t(5043),a=t(4701),s=t(579);const n=i=>{let{data:e,variant:t}=i;const[n,c]=(0,l.useState)(!1),[r,o]=(0,l.useState)(null),[u,d]=(0,l.useState)(new Array(e.length).fill(!1)),m=(0,l.useRef)([]),p=()=>{c(!1),o(null)};return(0,l.useEffect)((()=>{const i=new IntersectionObserver((e=>{e.forEach((e=>{if(e.isIntersecting){const t=m.current.indexOf(e.target);d((i=>{const e=[...i];return e[t]=!0,e})),i.unobserve(e.target)}}))}),{threshold:0});return m.current.forEach((e=>{e&&i.observe(e)})),()=>{i.disconnect()}}),[e.length]),(0,s.jsxs)("div",{className:"gallery "+(t?"gallery--row":"gallery--grid"),children:[e.map(((i,e)=>(0,s.jsx)("div",{className:"gallery__card "+(u[e]?"visible":""),ref:i=>m.current[e]=i,onClick:()=>(i=>{o(i),c(!0)})(e),children:(0,s.jsx)(a.A,{src:i.image,alt:`gallery image ${e}`})},e))),n&&(0,s.jsx)("div",{className:"gallery__modal",onClick:p,children:(0,s.jsxs)("div",{className:"gallery__modal-content",onClick:i=>i.stopPropagation(),children:[(0,s.jsx)("span",{className:"gallery__modal-close",onClick:p,children:"\xd7"}),(0,s.jsx)(a.A,{src:e[r].image,alt:r}),(0,s.jsxs)("div",{className:"gallery__modal-navigation",children:[(0,s.jsx)("button",{onClick:i=>{i.stopPropagation(),o((i=>(i-1+e.length)%e.length))}}),(0,s.jsx)("button",{onClick:i=>{i.stopPropagation(),o((i=>(i+1)%e.length))}})]})]})})]})}},4701:(i,e,t)=>{t.d(e,{A:()=>a});var l=t(579);const a=i=>{let{src:e,alt:t}=i;return(0,l.jsx)("img",{src:e,alt:t,className:"image"})}},1740:(i,e,t)=>{t.d(e,{A:()=>a});var l=t(579);const a=i=>{let{children:e}=i;return(0,l.jsx)("label",{className:"label",children:e})}},4082:(i,e,t)=>{t.d(e,{A:()=>a});var l=t(579);const a=i=>{let{children:e}=i;return(0,l.jsx)("p",{className:"text container",children:e})}},5713:(i,e,t)=>{t.d(e,{A:()=>a});var l=t(579);const a=i=>{let{children:e,tag:t}=i;const a=null!==t&&void 0!==t?t:"h1";return(0,l.jsx)(a,{className:"heading",children:e})}},2704:(i,e,t)=>{t.d(e,{G:()=>l});const l=[{id:1,title:"Kurenie drevom",category:"Drevo",date:"2021-10-10",image:"https://senzacne.s54.cdn-upgates.com/_cache/9/e/9e677ccd1a13b8ca93f98090b20a7bd7-canva-burning-wood.jpg",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus sit amet metus tincidunt fringilla. Nulla facilisi. Sed nec turpis vel libero vehicula tincidunt. Nulla facilisi. Suspendisse potenti. Nulla facilisi. Nullam nec purus sit amet metus tincidunt fringilla. Nulla facilisi. Sed nec turpis vel libero vehicula tincidunt. Nulla facilisi. Suspendisse potenti. Nulla facilisi."},{id:2,title:"Siatie ozimin",category:"Agro",date:"2021-10-11",image:"https://rno.sk/wp-content/uploads/2023/07/1-pospisil.jpg",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus sit amet metus tincidunt fringilla. Nulla facilisi. Sed nec turpis vel libero vehicula tincidunt. Nulla facilisi. Suspendisse potenti. Nulla facilisi. Nullam nec purus sit amet metus tincidunt fringilla. Nulla facilisi. Sed nec turpis vel libero vehicula tincidunt. Nulla facilisi. Suspendisse potenti. Nulla facilisi."},{id:3,title:"Treti blog",category:"Ostatne",date:"2021-10-12",image:"https://www.krby-kotly.sk/fotky47530/fotos/Drewno-bukowe-BUK-OPAL-30-KG.jpg",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus sit amet metus tincidunt fringilla. Nulla facilisi. Sed nec turpis vel libero vehicula tincidunt. Nulla facilisi. Suspendisse potenti. Nulla facilisi. Nullam nec purus sit amet metus tincidunt fringilla. Nulla facilisi. Sed nec turpis vel libero vehicula tincidunt. Nulla facilisi. Suspendisse potenti. Nulla facilisi."},{id:4,title:"Stvrty blog",category:"Komunalne",date:"2021-10-13",image:"https://www.krby-kotly.sk/fotky47530/fotos/Drewno-bukowe-BUK-OPAL-30-KG.jpg",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus sit amet metus tincidunt fringilla. Nulla facilisi. Sed nec turpis vel libero vehicula tincidunt. Nulla facilisi. Suspendisse potenti. Nulla facilisi. Nullam nec purus sit amet metus tincidunt fringilla. Nulla facilisi. Sed nec turpis vel libero vehicula tincidunt. Nulla facilisi. Suspendisse potenti. Nulla facilisi."},{id:5,title:"Preco pestovay zelene hnojivo?",category:"Agro",date:"2021-10-14",image:"https://www.chovatelahospodar.sk/upload/article/2017/09/zelene-hnojivo-oziminy_1506695937.jpg",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus sit amet metus tincidunt fringilla. Nulla facilisi. Sed nec turpis vel libero vehicula tincidunt. Nulla facilisi. Suspendisse potenti. Nulla facilisi. Nullam nec purus sit amet metus tincidunt fringilla. Nulla facilisi. Sed nec turpis vel libero vehicula tincidunt. Nulla facilisi. Suspendisse potenti. Nulla facilisi."},{id:6,title:"Siesty blog",category:"Ostatne",date:"2021-10-15",image:"https://www.krby-kotly.sk/fotky47530/fotos/Drewno-bukowe-BUK-OPAL-30-KG.jpg",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus sit amet metus tincidunt fringilla. Nulla facilisi. Sed nec turpis vel libero vehicula tincidunt. Nulla facilisi. Suspendisse potenti. Nulla facilisi. Nullam nec purus sit amet metus tincidunt fringilla. Nulla facilisi. Sed nec turpis vel libero vehicula tincidunt. Nulla facilisi. Suspendisse potenti. Nulla facilisi."},{id:7,title:"Vyhody krbu",category:"Drevo",date:"2021-10-16",image:"https://akopostavitkrb.eu/wp-content/uploads/2017/07/rohov%C3%BD-krb.jpg",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus sit amet metus tincidunt fringilla. Nulla facilisi. Sed nec turpis vel libero vehicula tincidunt. Nulla facilisi. Suspendisse potenti. Nulla facilisi. Nullam nec purus sit amet metus tincidunt fringilla. Nulla facilisi. Sed nec turpis vel libero vehicula tincidunt. Nulla facilisi. Suspendisse potenti. Nulla facilisi."},{id:8,title:"Jesenna orba",category:"Agro",date:"2021-10-17",image:"https://rno.sk/wp-content/uploads/2021/11/KV_Ecomat_3385_productslider-1024x683.jpg",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus sit amet metus tincidunt fringilla. Nulla facilisi. Sed nec turpis vel libero vehicula tincidunt. Nulla facilisi. Suspendisse potenti. Nulla facilisi. Nullam nec purus sit amet metus tincidunt fringilla. Nulla facilisi. Sed nec turpis vel libero vehicula tincidunt. Nulla facilisi. Suspendisse potenti. Nulla facilisi."},{id:9,title:"Drevo",category:"Drevo",date:"2021-10-18",image:"https://www.krby-kotly.sk/fotky47530/fotos/Drewno-bukowe-BUK-OPAL-30-KG.jpg",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus sit amet metus tincidunt fringilla. Nulla facilisi. Sed nec turpis vel libero vehicula tincidunt. Nulla facilisi. Suspendisse potenti. Nulla facilisi. Nullam nec purus sit amet metus tincidunt fringilla. Nulla facilisi. Sed nec turpis vel libero vehicula tincidunt. Nulla facilisi. Suspendisse potenti. Nulla facilisi."},{id:10,title:"Agro",category:"Agro",date:"2021-10-19",image:"https://www.krby-kotly.sk/fotky47530/fotos/Drewno-bukowe-BUK-OPAL-30-KG.jpg",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus sit amet metus tincidunt fringilla. Nulla facilisi. Sed nec turpis vel libero vehicula tincidunt. Nulla facilisi. Suspendisse potenti. Nulla facilisi. Nullam nec purus sit amet metus tincidunt fringilla. Nulla facilisi. Sed nec turpis vel libero vehicula tincidunt. Nulla facilisi. Suspendisse potenti. Nulla facilisi."},{id:11,title:"Ostatne",category:"Ostatne",date:"2021-10-20",image:"https://www.krby-kotly.sk/fotky47530/fotos/Drewno-bukowe-BUK-OPAL-30-KG.jpg",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus sit amet metus tincidunt fringilla. Nulla facilisi. Sed nec turpis vel libero vehicula tincidunt. Nulla facilisi. Suspendisse potenti. Nulla facilisi. Nullam nec purus sit amet metus tincidunt fringilla. Nulla facilisi. Sed nec turpis vel libero vehicula tincidunt. Nulla facilisi. Suspendisse potenti. Nulla facilisi."},{id:12,title:"Drevo",category:"Drevo",date:"2021-10-21",image:"https://www.krby-kotly.sk/fotky47530/fotos/Drewno-bukowe-BUK-OPAL-30-KG.jpg",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus sit amet metus tincidunt fringilla. Nulla facilisi. Sed nec turpis vel libero vehicula tincidunt. Nulla facilisi. Suspendisse potenti. Nulla facilisi. Nullam nec purus sit amet metus tincidunt fringilla. Nulla facilisi. Sed nec turpis vel libero vehicula tincidunt. Nulla facilisi. Suspendisse potenti. Nulla facilisi."}]},8740:(i,e,t)=>{t.d(e,{h:()=>l});const l=[{image:"https://www.wrp.pl/wp-content/uploads/2021/08/plug-orka-1068x707.jpg.webp",title:"AGRO SLU\u017dBY",text:"This is a simple site made with React. It uses React Router for navigation and Material-UI for styling.",buttonLink:"/services#agro-sluzby",color:"94, 56, 6, 0.5"},{image:"https://www.poettinger.at/img/landtechnik/newsletter/sk20191008oravaniznafoto2.jpg",title:"KOMUN\xc1LNE SLU\u017dBY",text:"We are a small team of developers who love to learn and create new things. We hope you enjoy your visit!",buttonLink:"/services#komunalne-sluzby",color:"58, 100, 66, 0.5"},{image:"https://www.niznaboca.sk/wp-content/uploads/2023/03/palivove-drevo.jpeg",title:"V\xddROBA \u0160TIEPAN\xc9HO DREVA",text:"You can reach us a",buttonLink:"/services#vyroba-a-dovoz-stiepane-drevo",color:"136, 124, 19, 0.5"},{image:"https://img.autobazar.sk/foto/Zml0LWluLzEwMjR4NzY4L2ZpbHRlcnM6cXVhbGl0eSg5MCkvYXNr/oXKydVGzf_fss?st=73bRqiygCZf2DzAoGx2NJpx-lneGlkCTpFFnsTuXrJI&ts=1696872345&e=0",title:"DOVOZ MATERIALU",text:"You can reach us a",buttonLink:"/services#dovoz-materialu",color:"40, 40, 40, 0.5"}]},6334:(i,e,t)=>{t.r(e),t.d(e,{default:()=>f});t(5043),t(3369);var l=t(4082),a=t(8740),s=t(4081),n=t(2704),c=t(9983),r=t(2208),o=t(579);const u=i=>{let{children:e,color:t}=i;return(0,o.jsx)("div",{className:`colored-wrapper colored-wrapper--${t}`,children:e})};var d=t(4387),m=t(5713),p=t(4701);const h=i=>{let{children:e,imageRight:t}=i;const a=t?"content-block--image-right":"";return(0,o.jsx)("div",{className:`content-block ${a} `,children:(0,o.jsxs)("div",{className:"content-block__wrapper container",children:[(0,o.jsxs)("div",{className:"content-block__content",children:[(0,o.jsx)("div",{className:"content-block__heading",children:(0,o.jsx)(m.A,{level:2,children:"Title"})}),(0,o.jsx)(l.A,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero nec metus convallis, auctor tincidunt nunc fermentum. Nullam nec nunc nec nunc fermentum."}),(0,o.jsx)(l.A,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero nec metus convallis, auctor tincidunt nunc fermentum. Nullam nec nunc nec nunc fermentum."}),(0,o.jsx)(l.A,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero nec metus convallis, auctor tincidunt nunc fermentum. Nullam nec nunc nec nunc fermentum."})]}),(0,o.jsx)("div",{className:"content-block__image",children:(0,o.jsx)(p.A,{src:"https://urobsisam.zoznam.sk/wp-content/uploads/2024/09/stiepacka-dreva-1.jpg",alt:""})})]})})},v=()=>(0,o.jsx)("div",{className:"faqs-block",children:(0,o.jsx)("div",{className:"container",children:(0,o.jsxs)("div",{className:"faqs-block__wrapper",children:[(0,o.jsxs)("div",{className:"faqs__card",children:[(0,o.jsx)("span",{className:"faqs__title",children:"1000ton"}),(0,o.jsx)("p",{className:"faqs__text",children:"spracovaneho dreva"})]}),(0,o.jsxs)("div",{className:"faqs__card",children:[(0,o.jsx)("span",{className:"faqs__title",children:"100ha"}),(0,o.jsx)("p",{className:"faqs__text",children:"spracovanej ornej pody"})]}),(0,o.jsxs)("div",{className:"faqs__card",children:[(0,o.jsx)("span",{className:"faqs__title",children:"200km"}),(0,o.jsx)("p",{className:"faqs__text",children:"ocistenych cestnych komunikacii"})]}),(0,o.jsxs)("div",{className:"faqs__card",children:[(0,o.jsx)("span",{className:"faqs__title",children:"500+"}),(0,o.jsx)("p",{className:"faqs__text",children:"spokojnych zakaznikov"})]})]})})});t(9425);var g=t(9886);const N=()=>(0,o.jsx)("div",{className:"services-block",children:(0,o.jsx)("div",{className:"container",children:(0,o.jsx)("ul",{className:"services-block__wrapper",children:a.h.map(((i,e)=>(0,o.jsxs)(g.Vq,{className:"services__card",href:i.buttonLink,to:i.buttonLink,smooth:!0,children:[(0,o.jsx)("div",{className:"service__card-image",children:(0,o.jsx)(p.A,{src:i.image,alt:i.title})}),(0,o.jsx)("div",{className:"services__card-content",children:(0,o.jsx)("span",{className:"services__title",children:i.title})})]},e)))})})}),f=()=>(0,o.jsxs)("div",{className:"home",children:[(0,o.jsx)(s.A,{data:a.h,image:"https://freedomfirewood.com/wp-content/uploads/packaged-firewood.jpg"}),(0,o.jsx)(N,{}),(0,o.jsx)(h,{}),(0,o.jsx)(v,{}),(0,o.jsx)(h,{imageRight:!0}),(0,o.jsx)(d.A,{variant:"row",data:a.h}),(0,o.jsx)(u,{color:"quaternary",children:(0,o.jsx)("div",{className:"container",children:(0,o.jsx)(c.A,{title:"Zaujimavosti",buttonText:"V\u0161etky \u010dl\xe1nky",buttonUrl:"/blog",children:n.G.slice(0,4).map(((i,e)=>(0,o.jsx)(r.A,{blog:i},e)))})})})]})},3369:(i,e,t)=>{t.r(e),t.d(e,{default:()=>l});const l={}}}]);
//# sourceMappingURL=334.3fa599e7.chunk.js.map