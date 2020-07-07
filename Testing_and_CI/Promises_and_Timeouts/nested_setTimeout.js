console.log('Before calling setTimeout');

setTimeout(function() {
  console.log('Inside first setTimeout');
  setTimeout(function() {
    console.log('Inside second setTimeout');
    setTimeout(function() {
      console.log('Inside third setTimeout');
    }, 1000);
  }, 1000);
}, 1000);

console.log('After calling setTimeout');
