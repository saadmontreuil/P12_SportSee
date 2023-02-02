export default class UserInfosModel {
  constructor(data) {
    this.id = data.id;
    this.firstName = data.userInfos.firstName;
    this.lastName = data.userInfos.lastName;
    this.age = data.userInfos.age;
    this.todayScore = data.todayScore;
    this.calorie = data.keyData.calorieCount;
    this.protein = data.keyData.proteinCount;
    this.carbohydrate = data.keyData.carbohydrateCount;
    this.lipid = data.keyData.lipidCount;
  }
}
