'use strict';

new TypeIt('.home__title--strong', {
  loop: true,
  speed: 90,
}) // Junior Developer
  .move(-9)
  .type(' Front-End Developer') // Junior Front-End Developer
  .pause(1000)
  .delete(19)
  .type('Software Developer')
  .move(null, { to: 'END' })
  .pause(1000)
  .go();
