var overley=document.querySelector(".pop_up_overley")
var pop_box=document.querySelector(".pop_box")
var add_btn=document.querySelector(".add-btn")

add_btn.addEventListener("click",function(){
    overley.style.opacity=0.08
    pop_box.style.opacity=100

})
var cancel=document.querySelector("#delete")
cancel.addEventListener("click",function(){
    overley.style.opacity=100
    pop_box.style.opacity=0
})
 var add=document.getElementById("add")
 var book_name=document.getElementById("book_name")
 var authur_name=document.getElementById("authur_name")
 var summary=document.getElementById("Summary")
 var card=document.querySelector(".bd")

 add.addEventListener("click",function(){
    overley.style.opacity=100
    pop_box.style.opacity=0
    var div=document.createElement("div")
    div.setAttribute("class","card")
    div.innerHTML=`<h2>${book_name.value}</h2>
      <h4>${authur_name.value}</h4>
      <p>
       ${summary.value}
      </p>
      <button onclick="delete_cnt(event)" class="delete-btn">Delete</button>`
    card.append(div)
 })

 function delete_cnt(event){
    event.target.parentElement.remove()
 }