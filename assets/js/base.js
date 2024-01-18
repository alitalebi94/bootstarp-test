function adviceSelection(el){
    let items =[{label:'دوره',discrip:'مقدماتی میکرو بلیدینگ',name:'دوره قلم طلایی',date:'3 تیر 1402',value:'6000,000 تومان'},
    {label:'',discrip:'',name:'ورکشاپ میکروبلیدینگ ابرو',date:'3 تیر 1402',value:'6000,000 تومان'},
    {label:'دوره',discrip:'مقدماتی میکرو بلیدینگ',name:'دوره قلم طلایی',date:'3 تیر 1402',value:'6000,000 تومان'},
    {label:'',discrip:'',name:'ورکشاپ میکروبلیدینگ ابرو',date:'3 تیر 1402',value:'6000,000 تومان'},
    {label:'دوره',discrip:'مقدماتی میکرو بلیدینگ',name:'دوره قلم طلایی',date:'3 تیر 1402',value:'6000,000 تومان'},
    {label:'',discrip:'مقدماتی میکرو بلیدینگ',name:'دوره قلم طلایی',date:'3 تیر 1402',value:'6000,000 تومان'},
    {label:'دوره',discrip:'مقدماتی میکرو بلیدینگ',name:'دوره قلم طلایی',date:'3 تیر 1402',value:'6000,000 تومان'},
    {label:'',discrip:'',name:'ورکشاپ میکروبلیدینگ ابرو',date:'3 تیر 1402',value:'6000,000 تومان'},
    ]
    let subAdvice = document.getElementById('sub-advice')
    subAdvice.innerHTML=' <option value=""  selected disabled hidden>جستجو ...</option>';
    if(el == 1){
        let container = document.getElementById('services');
        console.log(screen.width);
        if(screen.width <=460){
            items.forEach(element => {
                container.innerHTML = container.innerHTML +
                    '<div class="testimonial-item rtl"><div class="card ml-4"><div class="p-absolute card-inner-boader"></div> <img class="p-relative" src="assets/img/services01.jpg" width="100%" height="300px" alt=""><div class="p-absolute pt-5 mt-5 text-center service-card-body w-100">'+
                    '<h2 class="text-center white bold">'+element.label+'</h2>'+
                    '<p class="text-right white px-2 mt-4">'+element.discrip+'</p></div></img>'+              
                    '<div class="card-footer p-relative">'+
                        '<img src="assets/img/card-footer.jpeg" width="100%" height="auto" alt="">'+
                        '<div class="p-absolute card-footer-content w-100">'+
                        '<h6 class="text-center mt-2">'+element.name+'</h6>'+
                            '<p class="service-card-footer mx-4"><span class="mt-2">'+element.value+'</span><button class="btn btn-small btn-outline-light">جزییات</button><span class="mt-2">'+element.date+'</span></p>'+
                    '</div></img></div></div>'
            });
            if ($('.owl-testimonials').length) {
                $('.owl-testimonials').owlCarousel({
                    loop: true,
                    nav: false,
                    dots: true,
                    items: 1,
                   
                    autoplay: true,
                    smartSpeed: 700,
                    autoplayTimeout: 3000,
                    responsive: {
                        0: {
                            items: 1,
                            margin: 0
                        },
                        460: {
                            items: 1,
                            margin: 0
                        },
                        576: {
                            items: 2,
                            margin: 20
                        },
                        992: {
                            items: 4,
                            margin: 30
                        }
                    }
                });
            }
        }else{
            items.forEach(element => {
                container.innerHTML = container.innerHTML +
                    '<div class="col-12 col-md-6 col-lg-3"><div class="card m-4"><div class="p-absolute card-inner-boader"></div> <img class="p-relative" src="assets/img/services01.jpg" width="100%" height="300px" alt=""><div class="p-absolute pt-5 mt-5 text-center service-card-body w-100">'+
                    '<h2 class="text-center white bold">'+element.label+'</h2>'+
                    '<p class="text-right white px-2 mt-4">'+element.discrip+'</p></div></img>'+              
                    '<div class="card-footer p-relative">'+
                        '<img src="assets/img/card-footer.jpeg" width="100%" height="auto" alt="">'+
                        '<div class="p-absolute card-footer-content w-100">'+
                        '<h6 class="text-center mt-2">'+element.name+'</h6>'+
                            '<p class="service-card-footer mx-4"><span class="mt-2">'+element.value+'</span><button class="btn btn-small btn-outline-light">جزییات</button><span class="mt-2">'+element.date+'</span></p>'+
                    '</div></img></div></div>'
            });
        }
        
       
        subAdvice.innerHTML=subAdvice.innerHTML+' <option value="1">پیشنهاد 1</option>';
    }else if(el == 2){
        subAdvice.innerHTML=subAdvice.innerHTML+' <option value="2">پیشنهاد 2</option>';
    }
}
jQuery(document).ready(function($) {
    
    if(screen.width < 461){
        console.log(screen.width);
        document.getElementById('services').classList.add('owl-testimonials', 'owl-carousel');
    }
   
});
