const form = document.querySelector("form");
// const button = document.querySelector("button");
const input = document.querySelector("input");
const container = document.getElementById("container");


form.addEventListener("submit", (eo)=>{//يفصل استخدام سبميت مع الفورم معناها ارسال وليس كليك وبوتن لان البوتن بيرسل للفورم 
eo.preventDefault();
const task =` <div class="w-75 m-auto bg-secondary text-light border-bottom border-3 p-3 border-light d-flex justify-content-between align-items-center mt-4"
style="border-radius: 10px; box-shadow: 1px 1px 1px 1px #ddd;"><i class="fa-solid fs-4 fa-star star"
    style="opacity: 0.4;"></i>
<p class="text-center fs-5 m-auto p-2" lang="ar">${input.value}</p><i class="fa-solid fs-4 fa-trash-can basket"
    style="opacity: 0.4;"></i><i class="fa-solid fs-4 ps-3 text-warning fa-face-angry angry"></i>
</div>`;

container.innerHTML += task;
input.value="";//بنفصي الخانة اللي بنكتب فيها بعد ما طبعنا 
});

// container.addEventListener("click", (eo)=>{//ده معناه لو ضغط باي مكان بداخلها ينفذ
//     if(eo.target.className == "fa-solid fs-4 fa-trash-can basket"){//لو ضغط على العنصر اللي بيحتوي على الكلاس ده ينفذ
//         eo.target.parentElement.remove();
//     }
//     else if(eo.target.className =="fa-solid fs-4 ps-3 text-warning fa-face-angry angry"){
//         const heart =`<i class="fa-solid fs-4 ps-3 fa-heart text-danger heart"></i>`;
//         eo.target.parentElement.getElementsByTagName("p")[0].classList.add("text-decoration-line-through");//هنا ماينفعش نغير في خصائص الزرار اللي بنضغط عليه الا لما ننفذ الكود ده الاول لانه الزرار هيختفي 
//         eo.target.classList.add("d-none");//هنا الزرار هيختفي 

//         eo.target.parentElement.innerHTML += heart;
      
//     }
//     else if(eo.target.className =="fa-solid fs-4 ps-3 fa-heart text-danger heart"){
//         eo.target.parentElement.getElementsByTagName("p")[0].classList.remove("text-decoration-line-through");//هنا ماينفعش نغير في خصائص الزرار اللي بنضغط عليه الا لما ننفذ الكود ده الاول لانه الزرار هيختفي 
//         eo.target.parentElement.getElementsByClassName("angry")[0].classList.remove("d-none");
//         eo.target.parentElement.getElementsByClassName("angry")[0].classList.add("d-block");
//         eo.target.remove();

//     }
//     else if(eo.target.className == "fa-solid fs-4 fa-star star"){
//         eo.target.classList.add("text-warning");
//         eo.target.style.opacity="1";
//         // eo.target.parentElement.parentElement.prepend(eo.target.parentElement);
//         container.prepend(eo.target.parentElement);

//     }
//      else if(eo.target.className == "fa-solid fs-4 fa-star star text-warning"){//استخدمت الكود ده عشان الكود بتاع كونتينز مش بينفذ الامر ده لانه نفس الزرار مش اختيار تاني 
//         console.log("fgfg");
//         eo.target.classList.remove("text-warning");
//         eo.target.style.opacity="0.4";
//     }
//     console.log("fdvfdfvfv")

// });
///////////////////////////////////////////////////////////////////////////////another solution

container.addEventListener("click", (eo)=>{//ده معناه لو ضغط باي مكان بداخلها ينفذ
    switch (eo.target.className)
    {
case "fa-solid fs-4 fa-trash-can basket" :
    eo.target.parentElement.remove();
    break;
case  "fa-solid fs-4 ps-3 text-warning fa-face-angry angry":
   var heart =`<i class="fa-solid fs-4 ps-3 fa-heart text-danger heart"></i>`;
    eo.target.parentElement.getElementsByTagName("p")[0].classList.add("text-decoration-line-through");//هنا ماينفعش نغير في خصائص الزرار اللي بنضغط عليه الا لما ننفذ الكود ده الاول لانه الزرار هيختفي 
    // eo.target.classList.remove("d-block");
    eo.target.classList.add("d-none");//هنا الزرار هيختفي 

    eo.target.parentElement.innerHTML += heart;
   break;
// case  "fa-solid fs-4 ps-3 text-warning fa-face-angry angry d-block"://عشان لما ضيفنا القلب اطينا الغضبان بلوك فلما نستدعسه تاني لازم نكتب البلوك
//     var heart =`<i class="fa-solid fs-4 ps-3 fa-heart text-danger heart"></i>`;
//      eo.target.parentElement.getElementsByTagName("p")[0].classList.add("text-decoration-line-through");//هنا ماينفعش نغير في خصائص الزرار اللي بنضغط عليه الا لما ننفذ الكود ده الاول لانه الزرار هيختفي 
//      eo.target.classList.remove("d-block");
//      eo.target.classList.add("d-none");//هنا الزرار هيختفي 
 
//      eo.target.parentElement.innerHTML += heart;
//     break;
// case    "fa-solid fs-4 ps-3 fa-heart text-danger heart":
//    eo.target.parentElement.getElementsByTagName("p")[0].classList.remove("text-decoration-line-through");//هنا ماينفعش نغير في خصائص الزرار اللي بنضغط عليه الا لما ننفذ الكود ده الاول لانه الزرار هيختفي 
//     eo.target.parentElement.getElementsByClassName("angry")[0].classList.remove("d-none");
//     eo.target.parentElement.getElementsByClassName("angry")[0].classList.add("d-block");
//     eo.target.remove();
//     break;
///////////////////////////////////////////////////////////////////another code

case  "fa-solid fs-4 ps-3 text-warning fa-face-angry angry"://عشان لما ضيفنا القلب اطينا الغضبان بلوك فلما نستدعسه تاني لازم نكتب البلوك
    var heart =`<i class="fa-solid fs-4 ps-3 fa-heart text-danger heart"></i>`;
     eo.target.parentElement.getElementsByTagName("p")[0].classList.add("text-decoration-line-through");//هنا ماينفعش نغير في خصائص الزرار اللي بنضغط عليه الا لما ننفذ الكود ده الاول لانه الزرار هيختفي 
     eo.target.classList.add("d-none");//هنا الزرار هيختفي 
 
     eo.target.parentElement.innerHTML += heart;
    break;
case    "fa-solid fs-4 ps-3 fa-heart text-danger heart":
   eo.target.parentElement.getElementsByTagName("p")[0].classList.remove("text-decoration-line-through");//هنا ماينفعش نغير في خصائص الزرار اللي بنضغط عليه الا لما ننفذ الكود ده الاول لانه الزرار هيختفي 
    var angry =`<i class="fa-solid fs-4 ps-3 text-warning fa-face-angry angry"></i>`;
        eo.target.classList.add("d-none");

    eo.target.parentElement.innerHTML += angry;


    break;

case   "fa-solid fs-4 fa-star star":
   eo.target.classList.add("text-warning");
    eo.target.style.opacity="1";
    // eo.target.parentElement.parentElement.prepend(eo.target.parentElement);
    container.prepend(eo.target.parentElement);
    break;
case    "fa-solid fs-4 fa-star star text-warning":

    eo.target.classList.remove("text-warning");
    eo.target.style.opacity="0.4";
    break;
default:
    break;
    }
    
})