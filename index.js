

let getWeather = ()=>
     {
         let city= document.getElementById('city').value
         axios.get(`https://api.weatherapi.com/v1/current.json?key=b8fbf7f7a14a40daad2163422261804&q=${city}&aqi=yes`)
         
         
        //  .then(response => console.log("Data Agya hai ✅",response.data))

         .then(response =>
            {
                console.log("City:", response.data.location.name);
                console.log("Temp:", response.data.current.temp_c);
                console.log("Weather:", response.data.current.condition.text);
            })
         .catch(error => console.log("Program sahi nhe chala ❌",error))
         .finally(()=> console.log("Thank you for trying our program"))};

        


           











           // the best and shortest syntax
        //Syntax 2
//    .then(res=>{
//    console.log("data mil gaya",res)
// })
// .catch(err=>{
//    console.log("error agaya",err)
// })
// .finally(()=>{
//    console.log("request complete")
//     })

        // syntax 3
    // .then(function(DataResponse)
    //     {
    //         console.log("data mil gaya ",DataResponse);
    //     })

    //      .catch(function(DataError)
    //      {
    //         console.log("data nhe aya",DataError);
    //      })
         
    //     .finally(()=>
    //         {
    //             console.log("request completed");
    //         })

        // .then((response)=>
        // {
        //  console.log("Data Agya hai ✅",response);
        // })

        // .catch(function(error)
        // {
        //     console.log("Program sahi nhe chala ❌",error);
        // })
       
        // .finally(()=>
        //     {
        //         console.log("Program Ended");
        //     })
                  //fetch(`https://api.weatherapi.com/v1/current.json?key=b8fbf7f7a14a40daad2163422261804&q=${city}&aqi=yes`)

// let res = await fetch(url)
// let data = await res.json()
// console.log(data)