import axios from 'axios';
import {
  USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSION, USER_PERFORMANCE,
} from '../mockData/data';
import UserInfosModel from './model/UserInfosModel';
import UserActivityModel from './model/UserActivityModel';
import UserAverageSessionModel from './model/UserAverageSessionModel';
import UserPerformanceModel from './model/UserPerformanceModel';

const isMockData = true;

const getUserInfos = async (userId) => {
  try {
    let userInfos;
    if (isMockData) {
      userInfos = USER_MAIN_DATA.find((user) => user?.id === userId);
      console.log(userInfos);
    } else {
      const response = await axios.get(`http://localhost:3000/user/${userId}`);
      userInfos = response.data.data;
      console.log(userInfos);
    }
    return new UserInfosModel(userInfos);
  } catch (error) {
    console.error(`Error while getting user infos: ${error}`);
    console.log(error);
  }
  return null;
};

const getUserActivity = async (userId) => {
  try {
    let userActivity;
    if (isMockData) {
      userActivity = USER_ACTIVITY.find((user) => user.userId === userId);
    } else {
      const response = await axios.get(`http://localhost:3000/user/${userId}/activity`);
      userActivity = response.data;
    }
    return new UserActivityModel(userActivity);
  } catch (error) {
    console.error(`Error while getting user activity: ${error}`);
  }
  return null;
};

const getUserAverageSession = async (userId) => {
  try {
    let userAverageSession;
    if (isMockData) {
      userAverageSession = USER_AVERAGE_SESSION.find((user) => user.userId === userId);
    } else {
      const response = await axios.get(`http://localhost:3000/user/${userId}/average-sessions`);
      userAverageSession = response.data;
    }
    return new UserAverageSessionModel(userAverageSession);
  } catch (error) {
    console.error(`Error while getting user average session: ${error}`);
  }
  return null;
};

const getUserPerformance = async (userId) => {
  try {
    let userPerformance;
    if (isMockData) {
      userPerformance = USER_PERFORMANCE.find((user) => user.userId === userId);
    } else {
      const response = await axios.get(`http://localhost:3000/user/${userId}/performance`);
      userPerformance = response.data;
    }
    return new UserPerformanceModel(userPerformance);
  } catch (error) {
    console.error(`Error while getting user performance: ${error}`);
  }
  return null;
};

export {
  getUserInfos,
  getUserActivity,
  getUserAverageSession,
  getUserPerformance,
};
