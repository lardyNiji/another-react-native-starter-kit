export default class DateUtils {

  static formatDate(dateString, shortYear) {
    const date = new Date(dateString);
    const day = (`0${date.getDate()}`).slice(-2);
    const month = (`0${date.getMonth() + 1}`).slice(-2);
    let year = `${date.getFullYear()}`;
    if (shortYear) {
      year = year.slice(-2);
    }
    return `${day}/${month}/${year}`;
  }

}
