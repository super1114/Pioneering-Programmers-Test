
import { style } from '@vanilla-extract/css';

export const layout = style({
  height: '100vh',
  display: 'grid',
  gridTemplateRows: 'auto 1fr'
});

export const content = style({
  display: 'grid',
  gridTemplateColumns: 'auto 1fr'
});
