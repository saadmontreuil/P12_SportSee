import axios from 'axios';
import {
  USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE,
} from '../mockData/data';
import UserModel from './model/UserModel';

const isMockData = true;
const getUser = async (userId) => {
  try {
    let userData;
    if (isMockData) {
      userData = USER_MAIN_DATA.find((user) => user?.id === userId);
      userData.sessions = USER_ACTIVITY.find((user) => user.userId === userId)?.sessions || [];
      // eslint-disable-next-line max-len
      userData.averageSessions = USER_AVERAGE_SESSIONS.find((user) => user.userId === userId)?.sessions || [];
      userData.kind = USER_PERFORMANCE.find((user) => user.userId === userId)?.kind || [];
      userData.data = USER_PERFORMANCE.find((user) => user.userId === userId)?.data || [];
    } else {
      const response = await axios.get(`http://localhost:3000/user/${userId}`);
      const responseActivity = await axios.get(`http://localhost:3000/user/${userId}/activity`);
      const responseAverageSessions = await axios.get(`http://localhost:3000/user/${userId}/average-sessions`);
      const responsePerformance = await axios.get(`http://localhost:3000/user/${userId}/performance`);
      userData = response.data.data;
      userData.sessions = responseActivity.data.data.sessions;
      userData.averageSessions = responseAverageSessions.data.data.sessions;
      userData.kind = responsePerformance.data.data.kind;
      userData.data = responsePerformance.data.data.data;
    }
    return new UserModel(userData);
  } catch (error) {
    console.error(`Error while getting user data: ${error}`);
  }
  return null;
};

export {
  // eslint-disable-next-line import/prefer-default-export
  getUser,
};
