export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({ stause: 200, body: 'success' }))
    .catch(() => Error())
    .finally(() => console.log('Got a response from the API'));
}
