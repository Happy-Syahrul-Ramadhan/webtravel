$('#carousel-rute').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

// $('.owl-carousel').owlCarousel({
//     stagePadding: 80,
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         700:{
//             items:3
//         },
//         900:{
//             items:5
//         }
//     }
// })

$('.owl-carousel').owlCarousel({
    items:1,
    margin:10,
    autoHeight:true
});