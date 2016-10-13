function getPerson(query, cb) {
  return fetch(`api/person?email=${query}`, {
    accept: 'application/json',
  }).then(checkStatus)
    .then(parseJSON)
    .then(cb)
    .catch(function(error) {
      console.error('EFX - Request failed: ', error);
      // cb(-1); // for prod

      // for frontend dev
      cb({
        name: 'Aysar K',
        position: 'Software Engineer',
        email: 'ak@akpro.net',
      });
    });
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.error(error);
    throw error;
  }
}

function parseJSON(response) {
  return response.json();
}

const Client = { getPerson };
export default Client;
