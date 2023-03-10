/**
 * Represents a user model.
 * @class
 * @default
 * @param {Object} data - The data used to create a new UserModel.
 * @param {number} data.id - The user's unique identifier.
 * @param {number} data.userId - The user's ID.
 * @param {string} data.userInfos.firstName - The user's first name.
 * @param {string} data.userInfos.lastName - The user's last name.
 * @param {number} data.userInfos.age - The user's age.
 * @param {number} data.todayScore - The user's score for the current day.
 * @param {number} data.score -  The user's score for the current day.
 * @param {number} data.keyData.calorieCount - The user's calorie count.
 * @param {number} data.keyData.proteinCount - The user's protein count.
 * @param {number} data.keyData.carbohydrateCount - The user's carbohydrate count.
 * @param {number} data.keyData.lipidCount - The user's lipid count.
 * @param {Object[]} data.sessions - The user's sessions.
 * @param {number} data.kind - The kind of session.
 * @param {Object[]} data.averageSessions - The user's average sessions.
 * @param {number} data.averageSessions[].day - The day of the week for the session.
 * @param {number} data.averageSessions[].value - The value for the session.
 * @param {Object[]} data.data - The user's data.
 * @param {number} data.data[].value - The value for the data.
 * @param {number} data.data[].kind - The kind of data.
 */

class UserModel {
  constructor(data) {
    this.id = data.id;
    this.userId = data.userId;
    this.firstName = data.userInfos.firstName;
    this.lastName = data.userInfos.lastName;
    this.age = data.userInfos.age;
    this.score = data.todayScore || data.score;
    this.calorie = data.keyData.calorieCount;
    this.protein = data.keyData.proteinCount;
    this.carbohydrate = data.keyData.carbohydrateCount;
    this.lipid = data.keyData.lipidCount;
    this.sessions = data.sessions;
    this.kind = data.kind;
    this.averageSessions = data.averageSessions.map((session) => {
      const Day = [
        'L',
        'M',
        'M',
        'J',
        'V',
        'S',
        'D',
      ];
      return { ...session, day: Day[session.day - 1] };
    });
    const kinds = {
      1: 'cardio',
      2: '??nergie',
      3: 'endurance',
      4: 'force',
      5: 'vitesse',
      6: 'intensit??',
    };
    this.data = data.data ? data.data.map((item) => ({
      value: item.value,
      kind: kinds[item.kind],
    })).reverse() : [];
  }
}

export default UserModel;
