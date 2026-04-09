export const generatePassword = () => {
  const letter = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const specialCharacter = "~!@#$%^&*()_+=-/?<>.";
  let password = "";

  const lenLetter = charset.length;
  const lenSpecialCharacter = specialCharacter.length;

  for (let index = 0; index < 4; index++) {
    password += `${charset[Math.floor(Math.random() * lenLetter)]}${Math.floor(Math.random() * 10)}${specialCharacter[Math.floor(Math.random() * lenSpecialCharacter)]}`;
  }

  return password;
};
