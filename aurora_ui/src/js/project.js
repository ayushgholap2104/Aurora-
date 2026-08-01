window.addEventListener("load", () => {
  sidebarClick()
})

function sidebarClick() {
  const sidebarIcon = document.querySelector('.sidebar_icon')
  const hide_texts = document.querySelectorAll('.hide_text')
  const sidebarContainer = document.querySelector('.Sidebar_container')
  const hide_bgs = document.querySelectorAll('.hide_bg')
  const auroraIcon = document.querySelector('.aurora_icon')

  sidebarIcon.addEventListener('click', () => {
    hide_texts.forEach(hide_text => {
      hide_text.style.display = 'none'
    });
    hide_bgs.forEach(hide_bg => {
      hide_bg.style.background = 'none'
    });
    hide_bgs.forEach(hide_bg => {
      hide_bg.style.padding = '0px'
      hide_bg.style.minWidth = "45px"
      hide_bg.style.justifyContent = 'center'
      hide_bg.addEventListener('mouseenter',() =>{
        hide_bg.style.background = '#1D213C'
      })
      hide_bg.addEventListener('mouseleave',() =>{
        hide_bg.style.background = 'none'
      })
    });
    sidebarIcon.style.display = 'none'
    sidebarContainer.classList.toggle('active')
  })

}