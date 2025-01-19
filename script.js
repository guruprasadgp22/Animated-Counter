const counters = document.querySelectorAll(".counter");
const animationSpeed = 500;

const updateCounter = (counter) => {
    const targetCount = +counter.getAttribute("data-target");
    let currentCount = +counter.innerText;
    const animationStep = targetCount / animationSpeed;
    if(currentCount < targetCount) {
        counter.innerText = currentCount + animationStep;setTimeout(()=>{
            setTimeout(()=>{
                updateCounter(counter);
            })
        },1);
    } else {
        counter.innerText = targetCount;
    }
}

counters.forEach((counter) => {
    updateCounter(counter);
});