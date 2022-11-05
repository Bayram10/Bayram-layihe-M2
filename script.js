const addBtn = document.querySelector(".addbtn")
const ul = document.querySelector("ul")
addBtn.onclick = function(){
  const lielement = document.createElement("li")
ul.append(lielement)
lielement.innerHTML += '<input type="text"><i class="fa fa-light fa-circle-xmark"></i>'
deleteicon()
}

function deleteicon() {
  const removeiconall = document.querySelectorAll("li i")

  removeiconall.forEach((item, i) => {
    item.onclick = function(){
      item.parentElement.remove()
    }
  });

}
deleteicon()
function sortfunc(){
  const sortIcon = document.querySelector(".sortIcon")
  let opposite = false
  sortIcon.onclick = function(){
    const inputs = document.querySelectorAll("input")
  const arr = []
    inputs.forEach((item, i) => {
      arr.push(item.value)
    });
console.log(arr)
arr.sort()
if(opposite == true){
  arr.reverse()
  opposite = false
 sortIcon.classList.remove("active")
}
else {
  opposite = true
  sortIcon.classList.add("active")
}
console.log(arr)
arr.forEach((item, i) => {
  inputs[i].value = arr[i]
});

  }
}
sortfunc()
