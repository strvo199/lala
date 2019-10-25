const menu = document.querySelector('.appear'),
      navBar = document.querySelector('.collection'),
      homeCover = document.querySelector('.cover-body'),
      remove = document.querySelector('.fa-remove'),
      mainHeader = document.querySelector('.main-header');
      
mainHeader.addEventListener('mousedown',open)
mainHeader.addEventListener('mousedown',function (e) {
    if (e.target.classList.contains('fa-remove')) {
        document.querySelector('.collection-2').remove()
        window.location.reload()
    }

    e.preventDefault()
})
function open(e) {
        
    if (e.target.classList.contains('appear')) {
        
        homeCover.innerHTML = `
        <nav class="collection-2">
        
        <ul>
          <li><a href="#">home</a></li>
          <li><a href="#about">about</a></li>
          <li><a href="#services">services</a></li>
          <li><a href="#contact">contact us</a></li>
        </ul>
      </nav>`
        const menus = document.createElement('div')
        menu.className = 'appears'
        menus.innerHTML = '<i class="fa fa-remove appear" aria-hidden="true"></i>'
        mainHeader.replaceChild(menus,menu)
         document.querySelector('.cover-content').style.backgroundImage = 'linear-gradient(to right bottom, rgba(0, 0, 0, 0.889), rgba(0, 20, 0, 0.593))'
    }
e.preventDefault()
}