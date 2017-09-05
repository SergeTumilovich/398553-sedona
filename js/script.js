
var link=document.querySelector(".btn-search-hotel");
var form=document.querySelector(".search-form");

link.addEventListener("click", function(evt){
  evt.preventDefault();
  form.classList.toggle("form-closed");
});
