const circles = document.querySelectorAll('.circle');
const body = document.querySelector('body');

circles.forEach((button) => {
        button.addEventListener('click', (e) => {
            if (e.target.id === 'grey'){
                body.style.backgroundColor = e.target.id;
            }
            if (e.target.id === 'white'){
                body.style.backgroundColor = e.target.id;
            }
            if (e.target.id === 'blue'){ 
                body.style.backgroundColor = e.target.id;
            }
            if (e.target.id === 'yellow'){
                body.style.backgroundColor = e.target.id;
            }
        }
        )
    }
)
