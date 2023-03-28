let item = document.querySelectorAll(".all__list li");

function removeItem(event){
    item.forEach(li=>{     
            li.classList.remove("active");       
    });

   document.getElementById(event).classList.add("active")
}

let nums = document.querySelectorAll(".nums .num");
let section = document.querySelector(".number");
let started = false;

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop- 300) {
    if (!started) {
      nums.forEach((number) => startCount(number));
    }
    started = true;
  }
};

function startCount(el) {
  let show = el.dataset.show;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == show) {
      clearInterval(count);
    }
    console.log(count)
  }, 4000 / show);
}

 let faq = document.querySelectorAll(".faq__link")
        function myFunction(event,e) {
            event.preventDefault()
            let current;
            faq.forEach(li=>{     
                if(!li.classList.contains("hidden")){
                    current = li.id
                }
                li.classList.remove("hidden");       
        });
       if(e===current){
        document.getElementById(e).classList.remove("hidden");
        return ;
       }
            
       document.getElementById(e).classList.add("hidden");
       console.log(current)
       console.log(e)
        }
       