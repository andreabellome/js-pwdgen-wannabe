
const name = prompt( 'Your name:', 'Andrea');
const surname = prompt( 'Your surname', 'Bellome' );
const color = prompt( 'Favourite color:', 'Nero' );
const number = 21.0;

document.getElementById('password').innerHTML = `${ name + surname + color + number }`;



