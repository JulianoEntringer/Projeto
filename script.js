function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //se tiver sem light mode, manter imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }

  //substituir o texto
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar o texto 2
    img.setAttribute("alt", "foto do nft de um macaco com fundo azul")
  } else {
    //se tiver sem light mode, adicionar o texto 1
    img.setAttribute("alt", "foto do nft de macaco com fundo laranja do Neymar Jr")
  }
}
