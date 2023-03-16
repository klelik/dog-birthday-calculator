import dayjs from 'dayjs';

export default function calculateBirthdays(dateOfBirth) {
  const dates = [];
  dateOfBirth = new Date(dateOfBirth);
  const dayInSeconds = 1000 * 60 * 60 * 24;
  const totalDays = Math.floor(dateOfBirth / dayInSeconds);
  const today = new Date();
  const todayInNum = Math.floor(today / dayInSeconds);

  const daysDiff = todayInNum - totalDays;
  let numBeforeBday = Math.floor(daysDiff / 52) + 1;

  let isLeapYear = false;
  if (today.getFullYear() % 4 === 0) {
    isLeapYear = true;
  } else {
    isLeapYear = false;
  }

  let dogRealBday = new Date();

  let i = 0;

  // Generate array with birthdays
  while (i < 7) {   //7 birthdays
    if (isLeapYear) {
      dogRealBday = new Date(
        dogRealBday.setTime(dateOfBirth.getTime() + numBeforeBday * (366 / 7) * 86400000) //one more day
      );
    } else {
      dogRealBday = new Date(
        dogRealBday.setTime(dateOfBirth.getTime() + numBeforeBday * (365 / 7) * 86400000)
      );
    }
    let dateformated = dayjs(dogRealBday).format('dddd, D MMMM YYYY');
    // let dogAge = calculateDogAge(dogRealBday); // Calculate the dog's age in "dog years"
    // console.log(dogAge);
    dates.push(dateformated);
    // dates.push({ date: dateformated, age: dogAge });
    numBeforeBday++;
    i++;


  }
  return dates;
}

// function calculateDogAge(birthDate) {
//   const diffInMs = Date.now() - birthDate.getTime();
//   const ageInHumanYears = new Date(diffInMs).getFullYear() - 1970;

//   if (ageInHumanYears <= 2) {
//     return ageInHumanYears * 10.5;
//   } else {
//     return 21 + (ageInHumanYears - 2) * 4;
//   }
// }

// they're aging 5 dog-years per calendar year.
