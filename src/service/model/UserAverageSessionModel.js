export default class UserAverageSessionModel {
  constructor(data) {
    this.userId = data.userId;
    this.sessions = data.sessions.map((session) => {
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
  }
}
