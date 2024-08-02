const currentYear = () => {
  const today = new Date();
  return today.getFullYear();
};

const yearsSinceIBecameADesigner = () => {
  const startDate = new Date("2011-09-01");
  const currentDate = new Date();
  const timeDiff = Math.abs(currentDate - startDate);
  const yearsPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));
  return yearsPassed;
};

export { currentYear, yearsSinceIBecameADesigner };
