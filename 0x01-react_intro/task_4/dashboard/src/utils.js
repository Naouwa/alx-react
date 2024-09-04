// Function to get the current year
export const getFullYear = () =>  new Date().getFullYear();

// Function to get footer text based on isIndex
export function getFooterCopy(isIndex) {
  return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
}

export const getLatestNotification = () => {
  return "<strong>Urgent requirement</strong> - complete by EOD";
};
