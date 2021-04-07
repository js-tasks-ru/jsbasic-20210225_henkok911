function hideSelf() {
  const btn = document.querySelector(".hide-self-button");
  btn.addEventListener("click", (e)=>{
    e.stopPropagation();
    btn.hidden = true;
  })
}
