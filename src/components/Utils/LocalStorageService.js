const LOCAL_STORAGE_KEY = 'aggieStudy_userProgress';

export const saveUserProgress = (questionId, userAnswer) => {
  const existingData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '{}');
  existingData[questionId] = userAnswer;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(existingData));
};

export const getUserProgress = (questionId) => {
  const existingData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '{}');
  return existingData[questionId] || null;
};

export const clearUserProgress = () => {
  localStorage.removeItem(LOCAL_STORAGE_KEY);
};