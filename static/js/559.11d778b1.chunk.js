"use strict";(self.webpackChunkreact_ucenie=self.webpackChunkreact_ucenie||[]).push([[559,369],{4081:(i,e,t)=>{t.d(e,{A:()=>u});var l=t(5043),a=t(1412),s=t(4701),n=t(9473),c=t(423),r=t(2620),o=t(579);const u=i=>{let{data:e,buttonVariant:t,icon:u,size:d,image:m,text:p,buttonUrl:h,title:v,video:g,scrollButton:N}=i;const[f,x]=(0,l.useState)(0),j=(0,l.useRef)(null),_=(0,l.useRef)(null),[b,w]=(0,l.useState)(!1),k=()=>{j.current&&clearInterval(j.current),j.current=setInterval((()=>{x((i=>(i+1)%e.length))}),2e3)};(0,l.useEffect)((()=>(k(),()=>clearInterval(j.current))),[e.length]),(0,l.useEffect)((()=>{_.current&&(_.current.playbackRate=1.7)}),[]);const y=d?"animated-hero--small":"animated-hero--large";return(0,o.jsx)("div",{className:`animated-hero ${y} `,children:(0,o.jsxs)("div",{className:"animated-hero__card",children:[(0,o.jsxs)("div",{className:"animated-hero__card-wrapper",children:[!1===b?e.map(((i,e)=>(0,o.jsx)("div",{className:"animated-hero__card-image "+(f===e?"animated-hero__card-image--active":""),children:(0,o.jsx)(s.A,{src:i.image,alt:""})},e))):(0,o.jsx)("div",{className:"animated-hero__card-image animated-hero__card-image--active",children:(0,o.jsx)("video",{poster:"https://images.pexels.com/photos/1136466/pexels-photo-1136466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",autoPlay:!0,muted:!0,loop:!0,src:g,ref:_})}),(0,o.jsxs)("div",{className:"animated-hero__card-content container",children:[(0,o.jsxs)("div",{className:"animated-hero__content",children:[(0,o.jsx)("h2",{className:"animated-hero__content-title",children:v}),(0,o.jsx)("p",{className:"animated-hero__content-text",children:e.map(((i,e)=>(0,o.jsx)("span",{className:"animated-hero__text "+(f===e?"animated-hero__text--active":""),children:i.text},e)))}),h&&(0,o.jsx)(a.A,{text:"Viac informacii",url:h,variant:t,icon:!0})]}),(0,o.jsxs)("div",{className:"play-button",onClick:()=>w(!b),children:[(0,o.jsx)("span",{className:"play-icon",children:!1===b?(0,o.jsx)(r.Nxj,{}):(0,o.jsx)(r.HjL,{})}),(0,o.jsx)("span",{className:"play-text",children:!1===b?"Pozriet video":"Zastavit video"})]}),(0,o.jsx)("div",{className:"animated-hero__dots",children:e.map(((i,e)=>(0,o.jsx)("div",{className:"animated-hero__dot "+(f===e?"animated-hero__dot--active":""),onClick:()=>(i=>{x(i),k()})(e)},e)))})]})]}),N&&(0,o.jsx)(n.N_,{className:"animated-hero__scroll-down",to:"servicesBlock",activeClass:"menuItem--active-services",spy:!0,offset:window.innerWidth<=600?-50:-60,smooth:!0,duration:1500,children:(0,o.jsx)(c.pte,{})})]})})}},2208:(i,e,t)=>{t.d(e,{A:()=>c});var l=t(4701),a=t(1740),s=t(6519),n=t(579);const c=i=>{let{blog:e,index:t}=i;return(0,n.jsxs)(s.P.div,{initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.5,delay:.1*t},className:"blogcard",children:[(0,n.jsx)("div",{className:"P",children:(0,n.jsx)(l.A,{src:e.image,alt:e.title})}),(0,n.jsxs)("div",{className:"blogcard__content",children:[(0,n.jsx)("div",{className:"blogcard__title",children:e.title}),(0,n.jsx)("p",{className:"blogcard__text",children:e.text})]}),(0,n.jsxs)("div",{className:"blogcard__bottom",children:[(0,n.jsx)("span",{className:"blogcard__category",children:"Citat viac"}),(0,n.jsx)("span",{className:"blogcard__readingTime",children:"10min citania"})]}),(0,n.jsx)("div",{className:"blogcard__label",children:(0,n.jsx)(a.A,{children:e.category})})]},t)}},9983:(i,e,t)=>{t.d(e,{A:()=>n});var l=t(5713),a=t(1412),s=t(579);const n=i=>{let{children:e,title:t,buttonText:n,buttonUrl:c}=i;return(0,s.jsxs)("div",{className:"blog-wrapper",children:[(0,s.jsxs)("div",{className:"blog-wrapper__header",children:[t&&(0,s.jsx)(l.A,{tag:"h2",children:t}),n&&(0,s.jsx)(a.A,{variant:"primary",text:n,url:c,children:"View all"})]}),(0,s.jsx)("div",{className:"blog-wrapper__cards",children:e})]})}},8988:(i,e,t)=>{t.d(e,{A:()=>a});var l=t(579);const a=i=>{let{children:e,color:t}=i;return(0,l.jsx)("div",{className:`colored-wrapper colored-wrapper--${t}`,children:e})}},4387:(i,e,t)=>{t.d(e,{A:()=>n});var l=t(5043),a=t(4701),s=t(579);const n=i=>{let{data:e,variant:t}=i;const[n,c]=(0,l.useState)(!1),[r,o]=(0,l.useState)(null),[u,d]=(0,l.useState)(new Array(e.length).fill(!1)),m=(0,l.useRef)([]),p=()=>{c(!1),o(null)};return(0,l.useEffect)((()=>{const i=new IntersectionObserver((e=>{e.forEach((e=>{if(e.isIntersecting){const t=m.current.indexOf(e.target);d((i=>{const e=[...i];return e[t]=!0,e})),i.unobserve(e.target)}}))}),{threshold:0});return m.current.forEach((e=>{e&&i.observe(e)})),()=>{i.disconnect()}}),[e.length]),(0,s.jsxs)("div",{className:"gallery "+(t?"gallery--row":"gallery--grid"),children:[e.map(((i,e)=>(0,s.jsx)("div",{className:"gallery__card "+(u[e]?"visible":""),ref:i=>m.current[e]=i,onClick:()=>(i=>{o(i),c(!0)})(e),children:(0,s.jsx)(a.A,{src:i.image,alt:`gallery image ${e}`})},e))),n&&(0,s.jsx)("div",{className:"gallery__modal",onClick:p,children:(0,s.jsxs)("div",{className:"gallery__modal-content",onClick:i=>i.stopPropagation(),children:[(0,s.jsx)("span",{className:"gallery__modal-close",onClick:p,children:"\xd7"}),(0,s.jsx)(a.A,{src:e[r].image,alt:r}),(0,s.jsxs)("div",{className:"gallery__modal-navigation",children:[(0,s.jsx)("button",{onClick:i=>{i.stopPropagation(),o((i=>(i-1+e.length)%e.length))},children:"PREV"}),(0,s.jsx)("button",{onClick:i=>{i.stopPropagation(),o((i=>(i+1)%e.length))},children:"NEXT"})]})]})})]})}},4701:(i,e,t)=>{t.d(e,{A:()=>a});var l=t(579);const a=i=>{let{src:e,alt:t}=i;return(0,l.jsx)("img",{src:e,alt:t,className:"image"})}},1740:(i,e,t)=>{t.d(e,{A:()=>a});var l=t(579);const a=i=>{let{children:e}=i;return(0,l.jsx)("label",{className:"label",children:e})}},5713:(i,e,t)=>{t.d(e,{A:()=>a});var l=t(579);const a=i=>{let{children:e,tag:t}=i;const a=null!==t&&void 0!==t?t:"h1";return(0,l.jsx)(a,{className:"heading",children:e})}},2704:(i,e,t)=>{t.d(e,{G:()=>l});const l=[{id:1,title:"Kurenie drevom",category:"Drevo",date:"2021-10-10",image:"https://senzacne.s54.cdn-upgates.com/_cache/9/e/9e677ccd1a13b8ca93f98090b20a7bd7-canva-burning-wood.jpg",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus sit amet metus tincidunt fringilla. Nulla facilisi. Sed nec turpis vel libero vehicula tincidunt. Nulla facilisi. Suspendisse potenti. Nulla facilisi. Nullam nec purus sit amet metus tincidunt fringilla. Nulla facilisi. Sed nec turpis vel libero vehicula tincidunt. Nulla facilisi. Suspendisse potenti. Nulla facilisi."},{id:2,title:"Siatie ozimin",category:"Agro",date:"2021-10-11",image:"https://rno.sk/wp-content/uploads/2023/07/1-pospisil.jpg",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus sit amet metus tincidunt fringilla. Nulla facilisi. Sed nec turpis vel libero vehicula tincidunt. Nulla facilisi. Suspendisse potenti. Nulla facilisi. Nullam nec purus sit amet metus tincidunt fringilla. Nulla facilisi. Sed nec turpis vel libero vehicula tincidunt. Nulla facilisi. Suspendisse potenti. Nulla facilisi."},{id:3,title:"Treti blog",category:"Ostatne",date:"2021-10-12",image:"https://www.krby-kotly.sk/fotky47530/fotos/Drewno-bukowe-BUK-OPAL-30-KG.jpg",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus sit amet metus tincidunt fringilla. Nulla facilisi. Sed nec turpis vel libero vehicula tincidunt. Nulla facilisi. Suspendisse potenti. Nulla facilisi. Nullam nec purus sit amet metus tincidunt fringilla. Nulla facilisi. Sed nec turpis vel libero vehicula tincidunt. Nulla facilisi. Suspendisse potenti. Nulla facilisi."},{id:4,title:"Stvrty blog",category:"Komunalne",date:"2021-10-13",image:"https://www.krby-kotly.sk/fotky47530/fotos/Drewno-bukowe-BUK-OPAL-30-KG.jpg",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus sit amet metus tincidunt fringilla. Nulla facilisi. Sed nec turpis vel libero vehicula tincidunt. Nulla facilisi. Suspendisse potenti. Nulla facilisi. Nullam nec purus sit amet metus tincidunt fringilla. Nulla facilisi. Sed nec turpis vel libero vehicula tincidunt. Nulla facilisi. Suspendisse potenti. Nulla facilisi."},{id:5,title:"Preco pestovay zelene hnojivo?",category:"Agro",date:"2021-10-14",image:"https://www.chovatelahospodar.sk/upload/article/2017/09/zelene-hnojivo-oziminy_1506695937.jpg",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus sit amet metus tincidunt fringilla. Nulla facilisi. Sed nec turpis vel libero vehicula tincidunt. Nulla facilisi. Suspendisse potenti. Nulla facilisi. Nullam nec purus sit amet metus tincidunt fringilla. Nulla facilisi. Sed nec turpis vel libero vehicula tincidunt. Nulla facilisi. Suspendisse potenti. Nulla facilisi."},{id:6,title:"Siesty blog",category:"Ostatne",date:"2021-10-15",image:"https://www.krby-kotly.sk/fotky47530/fotos/Drewno-bukowe-BUK-OPAL-30-KG.jpg",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus sit amet metus tincidunt fringilla. Nulla facilisi. Sed nec turpis vel libero vehicula tincidunt. Nulla facilisi. Suspendisse potenti. Nulla facilisi. Nullam nec purus sit amet metus tincidunt fringilla. Nulla facilisi. Sed nec turpis vel libero vehicula tincidunt. Nulla facilisi. Suspendisse potenti. Nulla facilisi."},{id:7,title:"Vyhody krbu",category:"Drevo",date:"2021-10-16",image:"https://akopostavitkrb.eu/wp-content/uploads/2017/07/rohov%C3%BD-krb.jpg",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus sit amet metus tincidunt fringilla. Nulla facilisi. Sed nec turpis vel libero vehicula tincidunt. Nulla facilisi. Suspendisse potenti. Nulla facilisi. Nullam nec purus sit amet metus tincidunt fringilla. Nulla facilisi. Sed nec turpis vel libero vehicula tincidunt. Nulla facilisi. Suspendisse potenti. Nulla facilisi."},{id:8,title:"Jesenna orba",category:"Agro",date:"2021-10-17",image:"https://rno.sk/wp-content/uploads/2021/11/KV_Ecomat_3385_productslider-1024x683.jpg",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus sit amet metus tincidunt fringilla. Nulla facilisi. Sed nec turpis vel libero vehicula tincidunt. Nulla facilisi. Suspendisse potenti. Nulla facilisi. Nullam nec purus sit amet metus tincidunt fringilla. Nulla facilisi. Sed nec turpis vel libero vehicula tincidunt. Nulla facilisi. Suspendisse potenti. Nulla facilisi."},{id:9,title:"Drevo",category:"Drevo",date:"2021-10-18",image:"https://www.krby-kotly.sk/fotky47530/fotos/Drewno-bukowe-BUK-OPAL-30-KG.jpg",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus sit amet metus tincidunt fringilla. Nulla facilisi. Sed nec turpis vel libero vehicula tincidunt. Nulla facilisi. Suspendisse potenti. Nulla facilisi. Nullam nec purus sit amet metus tincidunt fringilla. Nulla facilisi. Sed nec turpis vel libero vehicula tincidunt. Nulla facilisi. Suspendisse potenti. Nulla facilisi."},{id:10,title:"Agro",category:"Agro",date:"2021-10-19",image:"https://www.krby-kotly.sk/fotky47530/fotos/Drewno-bukowe-BUK-OPAL-30-KG.jpg",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus sit amet metus tincidunt fringilla. Nulla facilisi. Sed nec turpis vel libero vehicula tincidunt. Nulla facilisi. Suspendisse potenti. Nulla facilisi. Nullam nec purus sit amet metus tincidunt fringilla. Nulla facilisi. Sed nec turpis vel libero vehicula tincidunt. Nulla facilisi. Suspendisse potenti. Nulla facilisi."},{id:11,title:"Ostatne",category:"Ostatne",date:"2021-10-20",image:"https://www.krby-kotly.sk/fotky47530/fotos/Drewno-bukowe-BUK-OPAL-30-KG.jpg",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus sit amet metus tincidunt fringilla. Nulla facilisi. Sed nec turpis vel libero vehicula tincidunt. Nulla facilisi. Suspendisse potenti. Nulla facilisi. Nullam nec purus sit amet metus tincidunt fringilla. Nulla facilisi. Sed nec turpis vel libero vehicula tincidunt. Nulla facilisi. Suspendisse potenti. Nulla facilisi."},{id:12,title:"Drevo",category:"Drevo",date:"2021-10-21",image:"https://www.krby-kotly.sk/fotky47530/fotos/Drewno-bukowe-BUK-OPAL-30-KG.jpg",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus sit amet metus tincidunt fringilla. Nulla facilisi. Sed nec turpis vel libero vehicula tincidunt. Nulla facilisi. Suspendisse potenti. Nulla facilisi. Nullam nec purus sit amet metus tincidunt fringilla. Nulla facilisi. Sed nec turpis vel libero vehicula tincidunt. Nulla facilisi. Suspendisse potenti. Nulla facilisi."}]},8740:(i,e,t)=>{t.d(e,{h:()=>l});const l=[{image:"https://www.wrp.pl/wp-content/uploads/2021/08/plug-orka-1068x707.jpg.webp",title:"AGRO SLU\u017dBY",text:"Agro",buttonLink:"/services#agro-sluzby",color:"94, 56, 6, 0.5",icon:"GiFarmTractor"},{image:"https://www.poettinger.at/img/landtechnik/newsletter/sk20191008oravaniznafoto2.jpg",title:"Okolie",text:"Okolie",buttonLink:"/services#komunalne-sluzby",color:"58, 100, 66, 0.5",icon:"PiFarm"},{image:"https://www.niznaboca.sk/wp-content/uploads/2023/03/palivove-drevo.jpeg",title:"Teplo",text:"Teplo",buttonLink:"/services#vyroba-a-dovoz-stiepane-drevo",color:"136, 124, 19, 0.5",icon:"GiWoodPile"},{image:"https://img.autobazar.sk/foto/Zml0LWluLzEwMjR4NzY4L2ZpbHRlcnM6cXVhbGl0eSg5MCkvYXNr/oXKydVGzf_fss?st=73bRqiygCZf2DzAoGx2NJpx-lneGlkCTpFFnsTuXrJI&ts=1696872345&e=0",title:"Material",text:"Material",buttonLink:"/services#dovoz-materialu",color:"40, 40, 40, 0.5",icon:"GiTowTruck"}]},2933:(i,e,t)=>{t.r(e),t.d(e,{default:()=>w});t(5043),t(3369);var l=t(4082),a=t(8740),s=t(4081),n=t(2704),c=t(9983),r=t(2208),o=t(8988),u=t(4387),d=t(5713),m=t(4701),p=t(6519),h=t(579);const v=i=>{let{children:e,imageRight:t}=i;const a=t?"content-block--image-right":"",s=t?100:-100;return(0,h.jsx)("div",{className:`content-block ${a} `,children:(0,h.jsxs)("div",{className:"content-block__wrapper container",children:[(0,h.jsxs)(p.P.div,{initial:{opacity:0,x:s},whileInView:{opacity:1,x:0},transition:{duration:.5,delay:.5},viewport:{once:!0},className:"content-block__content",children:[(0,h.jsxs)("div",{className:"content-block__heading",children:[(0,h.jsx)(p.P.div,{initial:{height:0},whileInView:{height:"100%"},transition:{duration:.5,delay:1},className:"content-block__heading-line"}),(0,h.jsx)(d.A,{level:2,children:"Title"})]}),(0,h.jsx)(l.A,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero nec metus convallis, auctor tincidunt nunc fermentum. Nullam nec nunc nec nunc fermentum."}),(0,h.jsx)(l.A,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero nec metus convallis, auctor tincidunt nunc fermentum. Nullam nec nunc nec nunc fermentum."}),(0,h.jsx)(l.A,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero nec metus convallis, auctor tincidunt nunc fermentum. Nullam nec nunc nec nunc fermentum."})]}),(0,h.jsx)(p.P.div,{initial:{opacity:0,x:-1*s},whileInView:{opacity:1,x:0},transition:{duration:.5,delay:.5},viewport:{once:!0},className:"content-block__image",children:(0,h.jsx)(m.A,{src:"https://urobsisam.zoznam.sk/wp-content/uploads/2024/09/stiepacka-dreva-1.jpg",alt:""})})]})})},g=()=>(0,h.jsx)("div",{className:"faqs-block",children:(0,h.jsx)("div",{className:"container",children:(0,h.jsxs)("div",{className:"faqs-block__wrapper",children:[(0,h.jsxs)("div",{className:"faqs__card",children:[(0,h.jsx)("span",{className:"faqs__title",children:"1000ton"}),(0,h.jsx)("p",{className:"faqs__text",children:"spracovaneho dreva"})]}),(0,h.jsxs)("div",{className:"faqs__card",children:[(0,h.jsx)("span",{className:"faqs__title",children:"100ha"}),(0,h.jsx)("p",{className:"faqs__text",children:"spracovanej ornej pody"})]}),(0,h.jsxs)("div",{className:"faqs__card",children:[(0,h.jsx)("span",{className:"faqs__title",children:"200km"}),(0,h.jsx)("p",{className:"faqs__text",children:"ocistenych cestnych komunikacii"})]}),(0,h.jsxs)("div",{className:"faqs__card",children:[(0,h.jsx)("span",{className:"faqs__title",children:"500+"}),(0,h.jsx)("p",{className:"faqs__text",children:"spokojnych zakaznikov"})]})]})})});t(1412);var N=t(9776),f=t(2639),x=t(3002),j=t(5843);const _=()=>{const{ref:i,inView:e}=(0,j.Wx)({threshold:1,delay:500,triggerOnce:!1});return(0,h.jsx)("div",{className:`services-block ${e?"services-block--inView":""} `,name:"servicesBlock",ref:i,children:(0,h.jsx)("div",{className:"container",children:(0,h.jsx)("ul",{className:"services-block__wrapper",children:a.h.map(((i,e)=>{const t="GiWoodPile"===i.icon?f.MxT:"GiFarmTractor"===i.icon?f.uu9:"GiTowTruck"===i.icon?f.Ky2:"PiFarm"===i.icon?x.CP2:void 0;return(0,h.jsxs)(N.Vq,{className:"services__card",href:i.buttonLink,to:i.buttonLink,smooth:!0,style:{transitionDelay:.1*e+"s"},children:[(0,h.jsx)("span",{className:"services__icon",children:t&&(0,h.jsx)(t,{})}),(0,h.jsxs)("span",{className:"services__title",children:[i.title,e]}),(0,h.jsx)("div",{className:"services__card-svg",children:(0,h.jsx)("svg",{viewBox:"-2 -2 104 104",xmlns:"http://www.w3.org/2000/svg",children:(0,h.jsx)("polygon",{points:"30 0, 70 0, 100 30, 100 70, 70 100, 30 100, 0 70, 0 30"})})})]},e)}))})})})},b=t.p+"static/media/video1.116d10454e2fc8806430.mp4",w=()=>(0,h.jsxs)("div",{className:"home",children:[(0,h.jsx)(s.A,{data:a.h,image:"https://freedomfirewood.com/wp-content/uploads/packaged-firewood.jpg",title:(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("span",{children:"Vas partner pre"})}),video:b,buttonUrl:"/services",scrollButton:!0}),(0,h.jsxs)("div",{className:"home__content",children:[(0,h.jsx)(_,{}),(0,h.jsx)(v,{}),(0,h.jsx)(g,{}),(0,h.jsx)(v,{imageRight:!0}),(0,h.jsx)(u.A,{variant:"row",data:a.h}),(0,h.jsx)(o.A,{color:"quaternary",children:(0,h.jsx)("div",{className:"container",children:(0,h.jsx)(c.A,{title:"Zaujimavosti",buttonText:"V\u0161etky \u010dl\xe1nky",buttonUrl:"/blog",children:n.G.slice(0,4).map(((i,e)=>(0,h.jsx)(r.A,{index:e,blog:i})))})})})]})]})},3369:(i,e,t)=>{t.r(e),t.d(e,{default:()=>l});const l={}}}]);
//# sourceMappingURL=559.11d778b1.chunk.js.map