export function PostData(type, userData) {
  let BaseUrl = "https://plexus-2.herokuapp.com/api/register/login/";
  return new Promise((resolve, reject) => {
    // BaseUrl + type
    fetch(BaseUrl, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: new Headers({
        accept: "application/json",
        "content-type": "application/json",
      }),
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
