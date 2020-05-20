export function PostData(type, userData) {
  let BaseUrl =
    "https://cors-anywhere.herokuapp.com/https://ncs-plexus.herokuapp.com/api/register/login/";
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
