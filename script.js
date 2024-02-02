function toggleMode(){
   const html= document.documentElement
   html.classList.toggle('light')

  //  if(html.classList.contains('light')){
  //      html.classList.remove('light')
  //  } else {
  //      html.classList.add('light')
  //  }

  // outro jeito de fazer 

  const img = document.querySelector("#profile img")

  if(html.classList.contains('light')){
    img.setAttribute('src','./assets/avatar.png')
  } else {
    img.setAttribute('src', './assets/avatar-dark.png' )
  }


}