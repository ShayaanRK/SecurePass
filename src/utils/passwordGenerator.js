export function generateMemorablePassword(length, simpleFlag) {
   let password = "";
   if(simpleFlag==true){
      if (length < 6 || length > 30) {
         throw new Error("Password length must be between 6 and 30 characters.");
      }
   
      const words = ["Tree", "River", "Ocean", "Cloud", "Storm", "Tiger", "Rocket", "Moon", "Planet", "Eagle"];
      const specialChars = "!@#$%^&*()_+-=";
      const numbers = "0123456789";
      const allChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=";
   
      // Pick first word (random selection)
      let word1 = words[Math.floor(Math.random() * words.length)];
   
      // Pick a special character
      let special1 = specialChars[Math.floor(Math.random() * specialChars.length)];
   
      // Pick second word
      let word2 = words[Math.floor(Math.random() * words.length)];
   
      // Pick another special character
      let special2 = specialChars[Math.floor(Math.random() * specialChars.length)];
   
      // Generate a random number (between 2-6 digits based on available space)
      let randomNumLength = Math.min(6, Math.max(2, length - (word1.length + word2.length + 2)));
      let randomNumber = "";
      for (let i = 0; i < randomNumLength; i++) {
         randomNumber += numbers[Math.floor(Math.random() * numbers.length)];
      }
   
      // Combine the core structure
      password = `${word1}${special1}${word2}${special2}${randomNumber}`;
   
      // Fill remaining space with random gibberish characters (if needed)
      while (password.length < length) {
         password += allChars[Math.floor(Math.random() * allChars.length)];
      }
   }
   else{
       const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
       for (let i = 0; i < length; i++) {
         const randomIndex = Math.floor(Math.random() * charset.length);
         password += charset[randomIndex];
       }
   }
   return password;
}
