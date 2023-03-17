import dayjs from "dayjs";

export default function calculateBirthdays(dateOfBirth) {
  const dates = [];
  dateOfBirth = new Date(dateOfBirth);
  const dayInSeconds = 1000 * 60 * 60 * 24;
  const totalDays = Math.floor(dateOfBirth / dayInSeconds);
  const today = new Date();
  const todayInNum = Math.floor(today / dayInSeconds);
  const daysDiff = todayInNum - totalDays;
  let numBeforeBday = Math.floor(daysDiff / 52) + 1; //how old is the dog before the next birthday + 1 so we dont show the current day as birthday
  // Math.floor(daysDiff / 52) === 0 ? 0 :Math.floor(daysDiff / 52) + 1;
  let isLeapYear = false;
  if (today.getFullYear() % 4 === 0) {
    isLeapYear = true;
  } else {
    isLeapYear = false;
  }

  let dogRealBday = new Date();

  let i = 0;

  // Generate array with birthdays
  while (i < 7) {
    //7 birthdays
    if (isLeapYear) {
      dogRealBday = new Date(
        dogRealBday.setTime(
          dateOfBirth.getTime() + numBeforeBday * (366 / 7) * 86400000
        ) //one more day
      );
    } else {
      dogRealBday = new Date(
        dogRealBday.setTime(
          dateOfBirth.getTime() + numBeforeBday * (365 / 7) * 86400000
        )
      );
    }
    let dateformated = dayjs(dogRealBday).format("dddd, D MMMM YYYY");
    dates.push({ date: dateformated, age: numBeforeBday + 1 });
    numBeforeBday++; //i should return this  next to dates date[dd/mm/yy][numBeforeBday]
    i++;
  }
  return dates;
}
