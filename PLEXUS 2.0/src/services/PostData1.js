export function PostData1(type, userData) {
  let BaseUrl = "https://ncs-plexus.herokuapp.com/api/register/player_register";
  return new Promise((resolve, reject) => {
    // BaseUrl + type
    fetch(BaseUrl, {
      method: "POST",
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        resolve(responseJson);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
