var slider = tns({
   items: 3,
   slideBy: 1,
   autoplay: true,
   controls: false,
   autoplayButtonOutput: false,
   nav: false,
   speed: 1500,
   responsive: {
     360: {
       items: 1,
       gutter: 0
     },
     640: {
       items: 2
     },
     770: {
       items: 3
     }
   }
 });
