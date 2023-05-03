const birthDate = new Date(prompt('Please enter your birth date in the format MM/DD/YYYY:'));
const currentDate = new Date();

const years = currentDate.getFullYear() - birthDate.getFullYear();
const months = currentDate.getMonth() - birthDate.getMonth() + 1;
const days = currentDate.getDate() - birthDate.getDate();

alert(`Your current age is ${years} years, ${months} months, and ${days} days.`);
