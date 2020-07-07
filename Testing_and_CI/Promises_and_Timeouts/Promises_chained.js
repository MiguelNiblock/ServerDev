const timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve('Success!');
    }, 1000);
  });
  
  timeoutPromise
    .then(msg => {
      console.log(msg);
    })
    .then(() => {
      console.log('Inside second .then()');
    });
  