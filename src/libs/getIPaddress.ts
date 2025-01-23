async function getClientIP() {
   try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      return data.ip;
   } catch (error) {
      console.error("Failed to retrieve client IP:", error);
      return null;
   }
}