if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').then(function(registeration)
    {
        console.log('Registered');
    })
    .catch(function(error){
        console.log('Failed Reg',error);
    });
}