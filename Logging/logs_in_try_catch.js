function myFunction (){
  // do some stuff
  try {
   // do something that might trigger an error
   console.log('SUCCESS: `myFunction` did what it\'s supposed to.');
  }
  // but if something goes wrong....
  catch(e) {
    // ... log the error
    console.error('FAILURE: `myFunction` failed.', e.stack);

  }
  // do some other stuff
}