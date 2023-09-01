import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';

export let fadeOut = trigger('fadeOut', [
  transition(':leave', [
    style({
      opacity: 0.5
    }),
    animate('1s ease-out', style({
      opacity: 0
    }))
  ]),
]);

export let fadeIn = trigger( 'fadeIn' , [
  transition(':enter' , [
    animate('1s ease-out' , keyframes([
      style({ transform : 'translateY(-50px)' ,  opacity: 0 }),
      style({ transform: 'translateY(0)', opacity: 1})
    ]) )
  ])
] )
