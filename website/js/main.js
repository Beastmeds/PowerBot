// Simple nav toggling and contact form handling
(function(){
  const navToggle = document.getElementById('navToggle')
  const nav = document.getElementById('primaryNav')
  const year = document.getElementById('year')

  if(navToggle && nav){
    navToggle.setAttribute('aria-expanded', 'false')
    navToggle.addEventListener('click', ()=>{
      const isOpen = nav.classList.toggle('open')
      navToggle.setAttribute('aria-expanded', String(isOpen))
      navToggle.textContent = isOpen ? '✕' : '☰'
    })
    // Close menu when a link is clicked (mobile)
    nav.querySelectorAll('a').forEach(a=>{
      a.addEventListener('click', ()=>{
        if(nav.classList.contains('open')){
          nav.classList.remove('open')
          navToggle.setAttribute('aria-expanded', 'false')
        }
      })
    })
  }

  if(year){
    year.textContent = new Date().getFullYear()
  }

  // Handle contact form submit - fallback to mailto
  const form = document.getElementById('contactForm')
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault()
      const name = document.getElementById('name').value.trim()
      const email = document.getElementById('email').value.trim()
      const message = document.getElementById('message').value.trim()

      // Basic validation
      if(!name || !email || !message){
        alert('Bitte fülle alle Felder aus.')
        return
      }

      const subject = encodeURIComponent('Kontaktanfrage von ' + name)
      const body = encodeURIComponent(`${message}\n\nName: ${name}\nE-Mail: ${email}`)
      window.location.href = `mailto:contact@powerbot.example?subject=${subject}&body=${body}`
    })
  }

  // Cookie banner handling — robust and accessible (works on all pages)
  function setCookieAccepted(){
    try{
      if(window.localStorage){
        localStorage.setItem('powerbot_cookie_ok', '1')
      }
    }catch(e){
      // ignore
    }
    // hide all cookie banners gracefully
    document.querySelectorAll('.cookie-banner').forEach(cb => {
      cb.classList.add('hidden')
      // remove from DOM after animation
      setTimeout(()=>{ try{ cb.remove() }catch(e){} }, 400)
    })
  }

  // Hide banner on load if already accepted
  try{
    if(window.localStorage && localStorage.getItem('powerbot_cookie_ok') === '1'){
      setCookieAccepted()
    }
  }catch(e){}

  // Add click handler fallback: delegate at document level
  document.addEventListener('click', (e)=>{
    const target = e.target.closest && e.target.closest('[data-accept-cookies], #acceptCookies')
    if(target){
      setCookieAccepted()
    }
  })

  // Also accept cookies if the page URL contains ?acceptCookies=1 (e.g. when opening in a new tab)
  try{
    const params = new URLSearchParams(window.location.search)
    if(params.get('acceptCookies') === '1'){
      setCookieAccepted()
    }
  }catch(e){}

  // Accept cookies when user clicks on DSGVO links
  // This makes the DSGVO-button act as cookie acceptance as requested
  const dsgvoLinks = Array.from(document.querySelectorAll('a[href*="dsgvo"]'))
  if(dsgvoLinks.length){
    dsgvoLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        if(window.localStorage){
          localStorage.setItem('powerbot_cookie_ok', '1')
        }
        if(cookieBanner){
          cookieBanner.style.display = 'none'
        }
        // We don't prevent the link navigation (user will still go to DSGVO page)
      })
    })
  }

  // Add scroll shadow to header when page scrolls
  try{
    const header = document.querySelector('.site-header')
    const onScroll = () => {
      if(window.scrollY > 12){
        header.classList.add('scrolled')
      }else{
        header.classList.remove('scrolled')
      }
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
  }catch(e){}

  // Highlight active nav link by path
  try{
    const current = location.pathname.split('/').pop() || 'index.html'
    nav.querySelectorAll('a').forEach(a=>{
      const href = a.getAttribute('href')
      if(href === current || href === './' || (href && href.endsWith(current)) ){
        a.setAttribute('aria-current', 'page')
        a.style.color = 'white'
      }
    })
  }catch(e){}

  // Reveal on scroll: use IntersectionObserver to toggle .revealed class
  try{
    const reveals = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('revealed')
          // optionally unobserve for performance
          io.unobserve(entry.target)
        }
      })
    }, {threshold: .12})
    reveals.forEach(r => io.observe(r))
  }catch(e){}

  // Back to top button
  try{
    const backToTop = document.createElement('button')
    backToTop.className = 'back-to-top hidden'
    backToTop.setAttribute('aria-label', 'Zum Seitenanfang')
    backToTop.innerHTML = '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 8l4 4H8l4-4z" fill="currentColor"></path></svg>'
    document.body.appendChild(backToTop)
    const toggleBack = () => {
      if(window.scrollY > 200) backToTop.classList.remove('hidden')
      else backToTop.classList.add('hidden')
    }
    window.addEventListener('scroll', toggleBack)
    backToTop.addEventListener('click', ()=>{ window.scrollTo({top:0, behavior:'smooth'}) })
    toggleBack()
  }catch(e){}

  // Also accept cookies if the page URL contains ?acceptCookies=1 (e.g. when opening in a new tab)
  try{
    const params = new URLSearchParams(window.location.search)
    if(params.get('acceptCookies') === '1'){
      if(window.localStorage){
        localStorage.setItem('powerbot_cookie_ok', '1')
      }
      if(cookieBanner){
        cookieBanner.style.display = 'none'
      }
    }
  }catch(e){
    // ignore
  }
})();