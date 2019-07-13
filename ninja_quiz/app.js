const correctAnswers = ['B','B','A','B']; //ordered radioBtn Values
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');


form.addEventListener('submit', e => {
    e.preventDefault(); //prevent page refresh

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    //matching correct answers
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]) {
            score+=25;
        }
    });

    //showing result on page
    scrollTo(0,0); //a window object
    
    result.classList.remove('d-none');

    let count = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${count}%`;
        if(count === score) {
            clearInterval(timer);
        } else {
            count++;
        }
    }, 10);
});

   
