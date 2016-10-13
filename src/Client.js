function getPerson(email, cb) {
  return fetch(`api/person?email=${email}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  }).then(checkStatus)
    .then(parseJSON)
    .then(cb)
    .catch(function(error) {
      // console.error('EFX - Request failed: ', error);
      // cb(-1); // for prod

      // for frontend dev
      cb({
        name: 'Aysar K',
        currentPosition: 'Software Engineer',
        email: 'ak@akpro.net',
      });
    });
}

function newSmartSentences(input, cb) {
  return fetch(`api/smartsentences`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: input
  }).then(checkStatus)
    .then(parseJSON)
    .then(cb)
    .catch(function(error) {
      cb(-1);
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

const Client = { getPerson, newSmartSentences };
export default Client;
