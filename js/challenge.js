function starting() {
    let intID
    startClock()
    
    let pause = document.getElementById('pause')
    let minus = document.getElementById('minus')
    let plus = document.getElementById('plus')
    let heart = document.getElementById('heart')
    
    // timer functions for starting and stoping the clock
    let timerOutput = document.getElementById('counter')

    function startClock(){
        if(!intID){
            intID = setInterval(addTime, 1000)
            document.getElementById('pause').innerText = 'pause'
        }
    }

    function stopClock(){
        clearInterval(intID)
        intID = null
        document.getElementById('pause').innerText = 'resume'
    }
    
    function checkClockState(){
        if(document.getElementById('pause').innerText === 'pause'){
            stopClock()
            minus.disabled = true
            plus.disabled = true
            heart.disabled = true
        }
        else if(document.getElementById('pause').innerText === 'resume'){
            startClock()
            minus.disabled = false
            plus.disabled = false
            heart.disabled = false
        }
    }

    // let intID
    // if(!intID){
        // intID = setInterval(addTime, 1000)
    // }

// event listners below
    pause.addEventListener('click', checkClockState)
    minus.addEventListener('click', subtractTime)
    plus.addEventListener('click', addTime)
    heart.addEventListener('click', likeHeart)

// funtions below
    function likeHeart(){
       let timerNum = timerOutput.innerHTML
       let likes = document.querySelector(".likes")
       let likeArray = [...likes.children]
    // Actual check if the list constains an item with the current timer number
    // uses .find() method to find the first list element with an ID === to the timer number
       let liElement = (likeArray.find((item) => {if (item.id === timerNum)
        {return item.id}
        else {return null}
       })) // If true then it increments that specific ammount of likes
       if (liElement) {
        let liSpan = document.getElementById(`s${timerNum}`)
        liElement.innerHTML = `${timerNum} has been liked <span id=s${timerNum}>${++liSpan.innerText}</span> times`
       } else { // If false it creates the like based on the timer number and adds the first like
       let newLi = document.createElement("li")
       newLi.innerHTML = `${timerNum} has been liked <span id=s${timerNum}>1</span> time`
       newLi.id = timerNum
       likes.appendChild(newLi)
        }}

    function addTime(){
        timerOutput.innerText++
    }

    function subtractTime() { // This will only decrease the timer if its above 0
        if(timerOutput.innerText > 0){
        timerOutput.innerText--
        }
    }
}
    // --timer function with a variable as the output
    // --HTML update for the number in the output variable
    // --Addition and subtractoin by 1 to the timer output variable
    // --like button to create a new list element with some interpolation text,
        // --the interpolation text likes the specific output variable
        // --this number also checks if that item is already created,
            // --if not created it creates
            // --if created increments the number of times its been liked
    // pause button that stops the the timer on the current number
        // this also disables/grays out all the other buttons
        // it also changes the text of the pause button to resume
    // restart button that sets the timer output variable back to 0
    // an ability to take the form and have it create an unordered list,
        // based on the text within the form

        // setTimeout
        // setInterval
        // clearInterval

// ----------------------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () =>{
    starting()
})