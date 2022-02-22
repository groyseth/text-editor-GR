// const butInstall = document.getElementById('buttonInstall');

// // Logic for installing the PWA
// // TODO: Add an event handler to the `beforeinstallprompt` event
// window.addEventListener('beforeinstallprompt', (event) => {
//   try{
// window.deferredPrompt = event;
// butInstall.classList.toggle('hidden', false);
//   }catch(err){
//     console.log(err);
//   }
// });

// // TODO: Implement a click event handler on the `butInstall` element
// butInstall.addEventListener('click', async () => {
// try{
//     const promptEvent = window.deferredPrompt;

//     if (!promptEvent) {
//      return;
//     }
  
//     promptEvent.prompt();
    
//     window.deferredPrompt = null;
    
//     butInstall.classList.toggle('hidden', true);
//   }catch(err){
//     console.log(err);
//   }
//   });

// // TODO: Add an handler for the `appinstalled` event
// window.addEventListener('appinstalled', (event) => {window.deferredPrompt = null;});
const butInstall = document.getElementById("buttonInstall");
console.log(butInstall);
window.addEventListener('beforeinstallprompt', (event) => {

    // Store the triggered events
    window.deferredPrompt = event;

    // Remove the hidden class from the button.
    butInstall.classList.toggle('hidden', false);
  });

butInstall.addEventListener('click', async () => {
  
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
   return;
  }

  // Show prompt
  promptEvent.prompt();
  
  // Reset the deferred prompt variable, it can only be used once.
  window.deferredPrompt = null;
  
  butInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
  // Clear prompt
  window.deferredPrompt = null;
}); 
