document.querySelector('.green-button').addEventListener('click', () => {
  alert('Bawal eh b*ld to😆');
});

// Fix feedback-button reference (update class or id accordingly)
document.querySelector('.feedback-button')?.addEventListener('click', () => {
  alert('Ilagay mo dito ang gusto mo HAHAHA!');
});

// Update orange-button event listener
document.querySelector('#orange-song-lyrics').addEventListener('click', () => {
  alert('ahhgg,, ahhhh, aaaa, ahhhhhgggg, ehmm,aahhhh, haaamm, ahhhka.');
});

// Fix brown button functionality
document.querySelector('#brown-song-lyrics').addEventListener('click', () => {
  alert('Bulong');
});
