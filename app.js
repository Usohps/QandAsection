//using selectors inside the element

const questions= document.querySelectorAll(".question")
questions.forEach(function(question){
    const btn= question.querySelector(".question-btn")
    btn.addEventListener("click",function(){
    questions.forEach(function(item){
    if( item !== question){
        item.classList.remove("show-text")
}
})
    question.classList.toggle("show-text")
    })
})











// traversing the dom
 
// let btns= document.querySelectorAll(".question-btn");
// let question = document.querySelectorAll(".question")
// btns.forEach(function(btn){

//     btn.addEventListener("click",function(e){
//       let article=(e.currentTarget.parentElement.parentElement)
//       article.classList.toggle("show-text");
//     })
// })
