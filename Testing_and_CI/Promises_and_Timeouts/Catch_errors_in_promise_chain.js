const timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(function () {
      reject('Failure!');
    }, 1000);
  });
  
  timeoutPromise
    .then(msg => {
      console.log(msg);
      return 'Value from first .then()';
    })
    .then(result => {
      console.log(result);
    })
    .catch(err => {
      console.log(err);
    });
  