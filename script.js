function changeIcon (elem) {
    elem.classList.toggle('change')
    // document.querySelector('.menu').classList.toggle('light-border')
    document.querySelector('.navigation').classList.toggle('show')
    document.querySelector('.home').classList.toggle('blur')
  }

 var tl = new TimelineMax()
 tl.staggerFrom('.cta', 1, {
  opacity: 0,
  y: -50,
  ease: "power3.out",
  delay: .5
}, .8)


    
 tl.staggerFrom('.home-left h1', 1, {
      opacity: 0,
      y: -50,
      ease: "power3.out",
      delay: 1
    }, .8)

    
    tl.from('.home-right p', 3, {
      opacity: 0,
      y: -100,
      ease: "elastic.out",
  
    })
    
    document.querySelector('.menu').addEventListener('click', function () {
      TweenMax.to('.nav-item', 1, { y: 10, delay: 1, opacity: 1})
    })
    
  function show () {
    document.querySelector('.loader').style.opacity = 0
    document.querySelector('.wrapper').style.display = 'block'
  
  }

  function myFunction() {
    setTimeout(show, 3000);
  }
  tl.from('.aboutj', 1, {
    opacity: 0,
    x: -50,
    ease: "power3.out",

  })