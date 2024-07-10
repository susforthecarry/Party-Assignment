/// <reference types="../@types/jquery" />




// this for singer action 


$('#sing1').on('click',function(){
    $('.sec2 #p1').slideToggle('p')
})
$('#sing2').on('click',function(){
    $('.sec2 #p2').slideToggle('p')
})
$('#sing3').on('click',function(){
    $('.sec2 #p3').slideToggle('p')
})
$('#sing4').on('click',function(){
    $('.sec2 #p4').slideToggle('p')
})


// this for open menu 

$('#Header i').on('click',function(){
    $('nav .icon').removeClass('d-none')


})

$('.icon i').on('click',function(){
    $('nav .icon').addClass('d-none')

})
$('.openB').on('click',function(){
    $('nav .icon').addClass('d-none')

})
$(' .openB').on('click',function(){
    $('nav .icon').removeClass  ('d-none')

})






// this for countdown Event


// function makeTimer() {

// 		let old = getDate('25/10/2023')
//         let newDate= Date.now();
//         let diff = old - newDate;
//         var days = Math.floor(diff / (1000 * 60 * 60 * 24));
//         var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
//         var seconds = Math.floor((diff % (1000 * 60)) / 1000);
//         $('#Days').append(days);
//         $('#Hours').append(hours);
//         $('#Minutes').append(minutes);
//         $('#Seconds').append(seconds);


// 	}
let countDown =  new Date('July 21, 2020 23:00:00').getTime();
let counter = setInterval(()=>{
    // this for date for now 
    let dateNow = new Date().getTime();
    let diff = countDown - dateNow;
    // this for days and hours and min and sec 
    let days = Math.floor(dateNow/1000/60/60/24);
    let hours = Math.floor(dateNow/1000/60/60);
    let minutes = Math.floor(dateNow/1000/60);
    let secs = Math.floor(dateNow/1000);
    // this for display
    $('#Days').html(days);
    $('#Hours').html(hours);
    $('#min').html(minutes);
    $('#sec').html(secs);
  





},1000)





    


    // this for number of messages counter  




    $('textarea').on('keydown',function(e){
       
            if(e.code == 'Backspace'){

                let x = parseInt($('p span').text(), 10);
                let y = x+1;
                $('p span').text(y);

                if(y>100){
                    let y = 100;
                    $('p span').text(y);

                }
    
            }
            else{
                let x = parseInt($('p span').text(), 10);
                let y = x-1;
                $('p span').text(y);


            }
            
       
        
        
    })
    

