const teclaList = document.querySelectorAll('.tecla');
teclaList.forEach((element) =>{
  const idAudio = `#som_${element.classList[1]}`

  element.onclick = ()=>{
    document.querySelector(idAudio).play()
  }

  element.onkeydown = (ev)=>{
    if(ev.code === 'Enter' || ev.code === 'Space'){
      element.classList.add('ativa')
    }
  }

  element.onkeyup = (ev)=>{
    if(ev.code === 'Enter' || ev.code === 'Space'){
      element.classList.remove('ativa')
    }
  }
});