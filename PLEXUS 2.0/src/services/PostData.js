export function PostData(type, userData) {
  let BaseUrl = "https://plexus-2.herokuapp.com/registration/login/";
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
        // console.log(responseJson);
      })
      .catch((error) => {
        reject(error);
        console.log("error");
      });
  });
}
