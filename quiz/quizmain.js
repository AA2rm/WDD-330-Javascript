alert('Welcome to Quiz Ninja!');

// View Object
const view = {
    score: document.querySelector('#score strong'),//access the element and & assign a var
    question: document.getElementById('question'),
    result: document.getElementById('result'),
    info: document.getElementById('info'),
    render(target,content,attributes) {//update the content of the element/s to display, update,content, & HTML attributes
        for(const key in attributes) {
            target.setAttribute(key, attributes[key]);//loop through the attributes & update the values & HTML
        }
        target.innerHTML = content;
    }
};

//Use methods to update the HTML
ask(name); {
    if(this.questions.length > 0) {
    this.question = this.questions.pop();
    const question = `What is ${this.question.name}'s real name?`;
    view.render(view.question,question);
    }
    else {
    this.gameOver();
    }
}
check(response); { 
    const answer = this.question.realName;
    if(response === answer){
    view.render(view.result,'Correct!',{'class':'correct'});
    alert('Correct!');
    this.score++;
    view.render(view.score,this.score);
    } else {
    view.render(view.result,`Wrong! The correct answer was ${answer}`,{'class':'wrong'});
    alert(`Wrong! The correct answer was ${answer}`);
    }
}

view.show(view.start);
start(quiz){
    this.score = 0;
    this.questions = [...quiz];
    this.ask();
}

show(element){
    element.style.display = 'block';
}
hide(element){
    element.style.display = 'none';
}
gameOver(); {
    view.render(view.info,`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
}

show(element) {
    element.style.display = 'block';
}

hide(element) {
    element.style.display = 'none';
}
start: document.getElementById('start'),


//Add an event listener to the button
view.start.addEventListener('click', () => game.start(quiz), false);

//Reference the form
response: document.querySelector('#response')