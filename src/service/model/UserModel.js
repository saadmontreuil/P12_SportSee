export default class UserModel {
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
      2: 'énergie',
      3: 'endurance',
      4: 'force',
      5: 'vitesse',
      6: 'intensité',
    };
    this.data = data.data ? data.data.map((item) => ({
      value: item.value,
      kind: kinds[item.kind],
    })).reverse() : [];
  }
}
