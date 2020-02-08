export function sentRequest() {
  return fetch(
    "https://my-json-server.typicode.com/ilyalytvynov/ads-box-server/movies"
  )
    .then(response => {
      if (response.status >= 400) {
        console.error("error from fetch request");
        throw response;
      } else {
        return response.json();
      }
    })
    .then(response => {
      //   console.log("data from request:", response2);
      return response;
    })
    .catch(error => {
      console.log("error from catch", error);
    });
}
