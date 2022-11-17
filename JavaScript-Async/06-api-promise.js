// Promise constructor
function timeout(delayMs, val) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(val);
    }, delayMs);
  });
}

function timeoutError(delayMs, message) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error(message));
    }, delayMs);
  });
}

// setTimeout(() => {
//   console.log('1s');
// }, 1000);
timeout(1000, "ABC").then((val) => {
  console.log("1s", val);
});

// const val = await timeout(1000, "ABC");

class UserService {
  findAll() {
    // return new Promise((resolve, reject) => {
    //   resolve([{id: 1, username: 'Toto'}])
    // });
    return Promise.resolve([{ id: 1, username: "Toto" }]);
    // voir aussi Promise.reject(new Error('Erreur'));
  }
}

const service = new UserService();
service
  .findAll()
  .then((users) => {
    console.log(users);
  })
  .catch((err) => {
    // reject
  });

// si on démarre 2 opérations en même temps on ne peut pas savoir
// lorsqu'elle reviennent (la plupart du temps, sauf avec setTimeout et un nombre fixe)
timeout(Math.random() * 1000, "Random 1").then((val) => {
  console.log(val);
});

timeout(Math.random() * 1000, "Random 2").then((val) => {
  console.log(val);
});

// Promise.all
// combine plusieurs promesses en une qui est résolue lorsque l'ensemble est résolu
// ou échoue dès que l'une est rejeté
Promise.all([
  timeout(Math.random() * 1000, "Random 1"),
  timeout(Math.random() * 1000, "Random 2"),
  timeout(Math.random() * 1000, "Random 3"),
]).then((values) => {
  console.log("toutes les promesses ont été résolues", values);
  // values est un tableau avec les valeurs résolues dans l'ordre de création
  // (et pas dans l'ordre de résolution)
});

// Promise.allSettled
// Promise.all échoue dès qu'une promesse qui le compose échoue
// avec allSettled, on récupère tous les résultats qu'ils ait échoué ou non
Promise.allSettled([
  timeout(1000, "Value 1"),
  timeoutError(500, "Error 2"),
  timeout(200, "Value 3"),
]).then((values) => {
  console.log("toutes les promesses ont été résolues ou rejetées", values);
  // values est un tableau avec les valeurs résolues dans l'ordre de création
  // (et pas dans l'ordre de résolution)
});

// Promise.race
Promise.race([
  timeout(1000, "Value 1"),
  timeoutError(500, "Error 2"),
  timeout(200, "Value 3"),
]).then((val) => {
  console.log("la première qui est résolue ou une erreur", val);
});

// Promise.any
Promise.any([
  timeout(1000, "Value 1"),
  timeoutError(100, "Error 2"),
  timeoutError(200, "Error 3"),
]).then((val) => {
  console.log("la première qui n'est pas une erreur", val);
});
