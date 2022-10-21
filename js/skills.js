
window.onscroll = function() {myFunction()};

function myFunction(){
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700){
        var progressBars = document.querySelectorAll(".progress-done");

        for(var i=0; i<progressBars.length; i++){
    
        progressBars.forEach(progressBar => {
            setTimeout(() =>{
            progressBar.style.opacity = 1;
            progressBar.style.width = progressBar.getAttribute('data-done') + '%';
            }, 500);
        })
        }
    }else{
        var bt = document.querySelector("#about");

        bt.addEventListener("click", function(){
            var progressBars = document.querySelectorAll(".progress-done");

            for(var i=0; i<progressBars.length; i++){
                progressBars.forEach(progressBar => {
                    setTimeout(() =>{
                    progressBar.style.opacity = 1;
                    progressBar.style.width = progressBar.getAttribute('data-done') + '%';
                    }, 500);
                })
            }
        });
    }
}

// Bouton up


$(window).scroll(function () {
    if ($(this).scrollTop() > 200 ) { 
        $('#scrollUp').css('right','10px');
    } else { 
        $('#scrollUp').removeAttr( 'style' );
    }
});




