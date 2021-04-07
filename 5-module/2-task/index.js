function toggleText() {
  const btnToggle = document.querySelector(".toggle-text-button");
  const textHidden = document.getElementById("text");
  btnToggle.addEventListener("click", (e)=>{
    e.stopPropagation();
    textHidden.toggleAttribute('hidden');
  })
}
