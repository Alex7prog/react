import React from 'react';

const getAge = birthDate => {
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

const Greeting = props => {
  return (
    <div className="greeting">
      {`My name is ${props.user.firstName} ${props.user.lastName}. I'm 
      ${getAge(props.user.birthDate)} years old`}
    </div>
  );
};

//

export default Greeting;
