import { getStrengthPercent } from './meter';

it('Calculating the password strength in percent', () => {
  expect(typeof getStrengthPercent('abc')).toBe('number');
});
