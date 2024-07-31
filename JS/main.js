//AJAX  "Asynchronous JavaScript And XML."

// var Httprequest= new XMLHttpRequest();
// var Movies=[];
// Httprequest.open("GET","https://api.themoviedb.org/3/trending/movie/week?api_key=0db84d1ec1a837590b28ff0829694543")  //(to request data from a web server)
// Httprequest.send();
// // console.log(Httprequest.response)


// var Box=''

// Httprequest.addEventListener('readystatechange',function(){
// if(Httprequest.readyState ==4 && Httprequest.status ==200){
//     // console.log(Httprequest.response)
//     Movies=JSON.parse(Httprequest.response).results; 
//     console.log(Movies)
//     GetData();
// }
// }
// )

// function GetData(){
// for(var i=0;i<Movies.length;i++){
//     Box+=`<div class="col-md-4 p-4">
//                 <div class="Movie ">
//                     <img src="https://image.tmdb.org/t/p/w500/${Movies[i].poster_path}" class="w-100" alt="">
//                     <h2 class="text-center p-3">${Movies[i].original_title}</h2>
//                     <h4 class="fw-light">${Movies[i].overview}</h4>
//                 </div>
//             </div>`;
    
// }
// document.getElementById('MovieData').innerHTML=Box
// }

// #CallBack functions
// function GetMovies(CallBack){
//     var Httprequest= new XMLHttpRequest();
// var Movies=[];
// Httprequest.open("GET","https://api.themoviedb.org/3/trending/movie/week?api_key=0db84d1ec1a837590b28ff0829694543")  //(to request data from a web server)
// Httprequest.send();
// // console.log(Httprequest.response)


// var Box=''

// Httprequest.addEventListener('readystatechange',function(){
// if(Httprequest.readyState ==4 && Httprequest.status ==200){
//     // console.log(Httprequest.response)
//     Movies=JSON.parse(Httprequest.response).results; 
//     CallBack();
//     console.log("Movies,",Movies)
//     // GetData();
// }
// }
// )

// // function GetData(){
// // for(var i=0;i<Movies.length;i++){
// //     Box+=`<div class="col-md-4 p-4">
// //                 <div class="Movie ">
// //                     <img src="https://image.tmdb.org/t/p/w500/${Movies[i].poster_path}" class="w-100" alt="">
// //                     <h2 class="text-center p-3">${Movies[i].original_title}</h2>
// //                     <h4 class="fw-light">${Movies[i].overview}</h4>
// //                 </div>
// //             </div>`;
    
// // }
// // document.getElementById('MovieData').innerHTML=Box
// // }

// }
// function GetPeople(CallBack){
//     var Httprequest= new XMLHttpRequest();
// var People=[];
// Httprequest.open("GET","https://api.themoviedb.org/3/trending/person/week?api_key=0db84d1ec1a837590b28ff0829694543")  //(to request data from a web server)
// Httprequest.send();
// // console.log(Httprequest.response)


// var Box=''

// Httprequest.addEventListener('readystatechange',function(){
// if(Httprequest.readyState ==4 && Httprequest.status ==200){
//     // console.log(Httprequest.response)
//     People=JSON.parse(Httprequest.response).results; 
//     console.log("People,",People)
//     CallBack();
//     // GetData();
// }
// }
// )

// // function GetData(){
// // for(var i=0;i<People.length;i++){
// //     Box+=`<div class="col-md-4 p-4">
// //                 <div class="Movie ">
// //                     <img src="https://image.tmdb.org/t/p/w500/${People[i].profile_path}" class="w-100" alt="">
// //                     <h2 class="text-center p-3">${People[i].original_name}</h2>
// //                     <h4 class="fw-light text-center">${People[i].known_for_department}</h4>
// //                 </div>
// //             </div>`;
    
// // }
// // document.getElementById('MovieData').innerHTML=Box
// // }

// }
// function endeverythig(){
//     console.log("End")
// }

// GetMovies(function(){
//     GetPeople(endeverythig)
// });


// Promise
// function GetMovies(){
//     return new Promise(function(CallBack){
//         var Httprequest= new XMLHttpRequest();
//         var Movies=[];
//         Httprequest.open("GET","https://api.themoviedb.org/3/trending/movie/week?api_key=0db84d1ec1a837590b28ff0829694543")  //(to request data from a web server)
//         Httprequest.send();
//         // console.log(Httprequest.response)
        
        
//         var Box=''
        
//         Httprequest.addEventListener('readystatechange',function(){
//         if(Httprequest.readyState ==4 && Httprequest.status ==200){
//             // console.log(Httprequest.response)
//             Movies=JSON.parse(Httprequest.response).results; 
//             CallBack();
//             console.log("Movies,",Movies)
//             // GetData();
//         }
//         }
//         )
        
//         // function GetData(){
//         // for(var i=0;i<Movies.length;i++){
//         //     Box+=`<div class="col-md-4 p-4">
//         //                 <div class="Movie ">
//         //                     <img src="https://image.tmdb.org/t/p/w500/${Movies[i].poster_path}" class="w-100" alt="">
//         //                     <h2 class="text-center p-3">${Movies[i].original_title}</h2>
//         //                     <h4 class="fw-light">${Movies[i].overview}</h4>
//         //                 </div>
//         //             </div>`;
            
//         // }
//         // document.getElementById('MovieData').innerHTML=Box
//         // }
        
//     })

// }
// function GetPeople(CallBack){
//     return new Promise(function(CallBack){
//         var Httprequest= new XMLHttpRequest();
//         var People=[];
//         Httprequest.open("GET","https://api.themoviedb.org/3/trending/person/week?api_key=0db84d1ec1a837590b28ff0829694543")  //(to request data from a web server)
//         Httprequest.send();
//         // console.log(Httprequest.response)
        
        
//         var Box=''
        
//         Httprequest.addEventListener('readystatechange',function(){
//         if(Httprequest.readyState ==4 && Httprequest.status ==200){
//             // console.log(Httprequest.response)
//             People=JSON.parse(Httprequest.response).results; 
//             console.log("People,",People)
//             CallBack();
//             // GetData();
//         }
//         }
//         )
        
//         // function GetData(){
//         // for(var i=0;i<People.length;i++){
//         //     Box+=`<div class="col-md-4 p-4">
//         //                 <div class="Movie ">
//         //                     <img src="https://image.tmdb.org/t/p/w500/${People[i].profile_path}" class="w-100" alt="">
//         //                     <h2 class="text-center p-3">${People[i].original_name}</h2>
//         //                     <h4 class="fw-light text-center">${People[i].known_for_department}</h4>
//         //                 </div>
//         //             </div>`;
            
//         // }
//         // document.getElementById('MovieData').innerHTML=Box
//         // }
//     })
   

// }
// function endeverythig(){
//     console.log("End")
// }

// GetPeople().then(function(){
//     GetMovies(endeverythig)
// })


//ASYNC AWAIT
// function GetMovies(){
//     return new Promise(function(CallBack){
//         var Httprequest= new XMLHttpRequest();
//         var Movies=[];
//         Httprequest.open("GET","https://api.themoviedb.org/3/trending/movie/week?api_key=0db84d1ec1a837590b28ff0829694543")  //(to request data from a web server)
//         Httprequest.send();
//         // console.log(Httprequest.response)
        
        
//         var Box=''
        
//         Httprequest.addEventListener('readystatechange',function(){
//         if(Httprequest.readyState ==4 && Httprequest.status ==200){
//             // console.log(Httprequest.response)
//             Movies=JSON.parse(Httprequest.response).results; 
//             CallBack();
//             console.log("Movies,",Movies)
//             // GetData();
//         }
//         }
//         )
        
//         // function GetData(){
//         // for(var i=0;i<Movies.length;i++){
//         //     Box+=`<div class="col-md-4 p-4">
//         //                 <div class="Movie ">
//         //                     <img src="https://image.tmdb.org/t/p/w500/${Movies[i].poster_path}" class="w-100" alt="">
//         //                     <h2 class="text-center p-3">${Movies[i].original_title}</h2>
//         //                     <h4 class="fw-light">${Movies[i].overview}</h4>
//         //                 </div>
//         //             </div>`;
            
//         // }
//         // document.getElementById('MovieData').innerHTML=Box
//         // }
        
//     })

// }
// function GetPeople(CallBack){
//     return new Promise(function(CallBack){
//         var Httprequest= new XMLHttpRequest();
//         var People=[];
//         Httprequest.open("GET","https://api.themoviedb.org/3/trending/person/week?api_key=0db84d1ec1a837590b28ff0829694543")  //(to request data from a web server)
//         Httprequest.send();
//         // console.log(Httprequest.response)
        
        
//         var Box=''
        
//         Httprequest.addEventListener('readystatechange',function(){
//         if(Httprequest.readyState ==4 && Httprequest.status ==200){
//             // console.log(Httprequest.response)
//             People=JSON.parse(Httprequest.response).results; 
//             console.log("People,",People)
//             CallBack();
//             // GetData();
//         }
//         }
//         )
        
//         // function GetData(){
//         // for(var i=0;i<People.length;i++){
//         //     Box+=`<div class="col-md-4 p-4">
//         //                 <div class="Movie ">
//         //                     <img src="https://image.tmdb.org/t/p/w500/${People[i].profile_path}" class="w-100" alt="">
//         //                     <h2 class="text-center p-3">${People[i].original_name}</h2>
//         //                     <h4 class="fw-light text-center">${People[i].known_for_department}</h4>
//         //                 </div>
//         //             </div>`;
            
//         // }
//         // document.getElementById('MovieData').innerHTML=Box
//         // }
//     })

// }
// function endeverythig(){
//     console.log("End")
// }


//  async function  GetDATAFromApis(){
//     await GetMovies();
//     await GetPeople();
//      endeverythig()
// }
// GetDATAFromApis()







//Final Code using Fetch +Async Await
async function GetMovies(){

        var Movies=[];
        var MoviesResults= await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=0db84d1ec1a837590b28ff0829694543")
         var Movies2 = await MoviesResults.json();
        console.log("Movies",Movies2.results)
        Movies=Movies2.results
        var Box=''
    
          GetMoviesData();

         function GetMoviesData(){
        for(var i=0;i<Movies.length;i++){
            Box+=`<div class="col-md-4 p-4">
                        <div class="Movie ">
                            <img src="https://image.tmdb.org/t/p/w500/${Movies[i].poster_path}" class="w-100" alt="">
                            <h2 class="text-center p-3">${Movies[i].original_title}</h2>
                            <h4 class="fw-light">${Movies[i].overview}</h4>
                        </div>
                    </div>`;
            
        }
        document.getElementById('MovieData').innerHTML=Box
        }
        

}
// async function GetPeople(){
//         var People=[];
//         var ResponseData= await fetch("https://api.themoviedb.org/3/trending/person/week?api_key=0db84d1ec1a837590b28ff0829694543")
//         var People= await ResponseData.json();
//         console.log("finalPeople",People.results)
//         // console.log(Httprequest.response)
        
        
//         var Box=''
        

        
//         function GetData(){
//         for(var i=0;i<People.length;i++){
//             Box+=`<div class="col-md-4 p-4">
//                         <div class="Movie ">
//                             <img src="https://image.tmdb.org/t/p/w500/${People[i].profile_path}" class="w-100" alt="">
//                             <h2 class="text-center p-3">${People[i].original_name}</h2>
//                             <h4 class="fw-light text-center">${People[i].known_for_department}</h4>
//                         </div>
//                     </div>`;
            
//         }
//         document.getElementById('MovieData').innerHTML=Box
//         }
//     }

function endeverythig(){
    console.log("End")
}


 async function  GetDATAFromApis(){
    await GetMovies();
    // await GetPeople();
     endeverythig()
}
GetDATAFromApis();


