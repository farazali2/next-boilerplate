const passwordRegex = [
  '(?=.*[A-Z].*[A-Z])',
  '(?=.*[0-9].*[0-9])',
  '(?=.*[a-z].*[a-z].*[a-z])',
  '.{8}',
];

export const getStrengthPercent = (password: string): number => {
  let strength = 1;
  passwordRegex.map((item) => {
    const rex = new RegExp(item);
    if (rex.test(password)) strength++;
  });
  return (strength / passwordRegex.length) * 100;
};
