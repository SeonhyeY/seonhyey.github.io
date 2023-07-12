'use strict';

new TypeIt('.home__title--strong', {
  loop: true,
  speed: 70,
}) // Junior Developer
  .move(-9)
  .type(' Front-End ') // Junior Front-End Developer
  .pause(1000)
  .delete(10)
  .type('Software ')
  .move(null, { to: 'END' })
  .pause(1000)
  .go();
