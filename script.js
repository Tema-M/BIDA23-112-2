document .getElementById( 'feedbackform')addEventListener('submit',function(event){
    event.preventDefault();//Prevent the form from submitting in the traditional way

    //Display the thank you message

    document.getElementById('thankyoumessage')
    .classList.remove('hidden');
    //optionally,clear the form fields

    document. getElementById('feedbackform').requestFullscreen();
});