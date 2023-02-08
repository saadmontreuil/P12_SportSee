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
    this.data = data.data ? data.data.map((item) => ({
      value: item.value,
      kind: this.kind[item.kind],
    })) : [];
  }
}