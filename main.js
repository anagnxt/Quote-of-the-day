let random = Math.floor(Math.random()*9);  //from 0 to 9

const citates = [
    {text: '\"The purpose of our lives is to be happy.\"', author: 'Dalai Lama'},
    {text: '\"Life is what happens when you\'re busy making other plans.\"', author: 'John Lennon'},
    {text: '\"Get busy living or get busy dying.\"', author: 'Stephen King'},
    {text: '\"You only live once, but if you do it right, once is enough.\"', author: 'Mae West'},
    {text: '\"Many of lifes failures are people who did not realize how close they were to success when they gave up.\"', author: 'Thomas A. Edison'},
    {text: '\"If you want to live a happy life, tie it to a goal, not to people or things.\"', author: 'Albert Einstein'},
    {text: '\"Never let the fear of striking out keep you from playing the game.\"', author: 'Babe Ruth'},
    {text: '\"Money and success dont change people, they merely amplify what is already there.\"', author: 'Will Smith'},
    {text: '\2Don\'t settle for what life gives you, make life better and build something.\"', author: 'Ashton Kutcher'}
]

const btn = document.querySelector('button');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('ssuccess');

    let cit = document.querySelector('.citate');
 
    cit.innerText = citates[random].text;

    let aut = document.querySelector('.author');

    aut.innerText = citates[random].author;

});


