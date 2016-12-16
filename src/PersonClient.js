function searchPersonByEmail(email, cb) {
  return fetch(`api/persons/search?email=${email}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  }).then(checkStatus)
    .then(parseJSON)
    .then(cb)
    .catch(function(error) {
      console.error('EFX - Request failed: ', error);
      cb(-1); // for prod

      // for frontend dev
      // cb({
      //   name: 'Aysar K',
      //   currentPosition: 'Software Engineer',
      //   email: 'ak@akpro.net',
      // });
    });
}

function getSignals(id, cb) {
  return fetch(`api/persons/${id}/signals`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(checkStatus)
    .then(parseJSON)
    .then(cb)
    .catch(function(error) {
      cb(-1);
    });
}

function getInsights(id, cb) {
  return fetch(`api/persons/${id}/insights`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
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

const PersonClient = { searchPersonByEmail, getSignals, getInsights };
export default PersonClient;
