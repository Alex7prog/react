export const getAge = birthDate => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  let age = currentYear - birthDate.getFullYear();

  if (age <= 0) {
    return 0;
  }

  const birthDateCurrentYear = new Date(birthDate).setFullYear(currentYear);

  if (birthDateCurrentYear > currentDate) {
    age -= 1;
  }

  return age;
};
