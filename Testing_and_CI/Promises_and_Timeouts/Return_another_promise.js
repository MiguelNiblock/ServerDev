const timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve('Success!');
    }, 1000);
  });
  
  const anotherPromise = new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve('Another success!');
    }, 1000);
  });
  
  timeoutPromise
    .then(msg => {
      console.log(msg);
      return anotherPromise;
    })
    .then(promise => {
      console.log(promise);
    })
    .catch(err => {
      console.log(err);
    });
  