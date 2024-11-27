export const isValidObjectField = (obj: { [s: string]: string }) => {
  return Object.values(obj).every((value) => value.trim());
};

export const isValidEmail = (value: string) => {
  const regex =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(value);
};

export const updateError = (error: string, stateUpdater) => {
  stateUpdater(error);

  setTimeout(() => {
    stateUpdater("");
  }, 3000);
};
