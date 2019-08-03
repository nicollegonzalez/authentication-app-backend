const express = require('express');
// const mongoose = require('mongoose'); // I don't need this...yet
const router  = express.Router();
const SurfBreak    = require('../models/SurfBreak');
const County = require('../models/County')
//
const axios = require('axios');
const bodyParser = require('body-parser').json();

// const uploadMagic = require('../config/cloundinary-setup'); // don't know yet, might need this later

// Developer get route for testing only brah
// GET route => to get all the surf spots in the choosen region
router.get('/developer', bodyParser, (req, res, next) => {
  SurfBreak.find()//.populate('forecast')
    .then((allTheSurfBreaks)=>{
      let allSpotIdsArr = [];
      allTheSurfBreaks.forEach((eachSurfBreak)=>{
        allSpotIdsArr.push(eachSurfBreak.spot_id);
      })
      console.log("the arra of the forecast id's =========== ", allSpotIdsArr);
      // allSpotIdsArr = [1,122,2];
      console.log("the arra of the forecast id's =========== ", allSpotIdsArr);
      // console.log("=>",allSpotIdsArr); //Good its working
      // console.log("The lenght=>",allSpotIdsArr.length); //Good its working
     
      let updatedForcastObj = {};
      let allGetForecastAxiosArr = [];
      // console.log("Hmmm",allGetForecastAxiosArr);

        allSpotIdsArr.forEach((eachSpotId)=>{
          let urlStr = `http://api.spitcast.com/api/spot/forecast/${eachSpotId}/`
          // console.log("STRING:",urlStr);
          allGetForecastAxiosArr.push(axios.get(urlStr));
          // console.log("YO",allGetForecastAxiosArr);
          // updatedForcastObj[eachSpotId] = forecast.data //Doing this later meow
        })



      //  let updatedForcastObj = getAndUpdateAllForecast();

    //    allSpotIdsArr.forEach((eachSpotId)=>{
    //      console.log("=>",eachSpotId);//Works

    // ``
    //     axios.get(`http://api.spitcast.com/api/spot/forecast/${eachSpotId}/`)
    //     .then((anUpdatedSpotForecast)=>{
    //       updatedForcastObj[eachSpotId] = anUpdatedSpotForecast.data;
    //       console.log("&&&&",updatedForcastObj)


    //       let theSpotUpdatedForecast = updatedForcastObj[eachSpotId];
    //       console.log("SOMETHIG",theSpotUpdatedForecast);
    //     })
    //     .catch((err)=>{
    //       console.log(err);
    //     })        
      
    //   })

      // console.log("I AM IN BETWEEN MY FOREACH MEOW",updatedForcastObj,"null right");


      axios.all(allGetForecastAxiosArr)
      .then((theArr)=>{

        // This is where I need to redefine my obj:
        theArr.forEach((eachUpdatedSpotForcastArr)=>{
          let theSpotId = eachUpdatedSpotForcastArr.data[0].spot_id;
          let theUpdatedSpotForecast = eachUpdatedSpotForcastArr.data
          updatedForcastObj[theSpotId] = theUpdatedSpotForecast;
        })

        //This is were I update each of my surfbreak forcast for the day
        allSpotIdsArr.forEach((eachSpotId)=>{
          // let theSpotUpdatedForecast = updatedForcastObj[eachSpotId];
          //   console.log("SOMETHIG",theSpotUpdatedForecast);//

          let aNewForecastArr = updatedForcastObj[eachSpotId];
          // console.log("bahbahabhabahbahabahbahab",aNewForecastArr); //Cool this is finally being passed as something besides undefined

          // axios.patch(`/forecast-update/:${eachSpotId}`,{forecast: aNewVariableArr})
          // .then((res)=>{
          //   // let theSpotId = eachSpotId;    
          //   // console.log("HEY SUP",JSON.stringify(res));
          //   let theSpotId = eachSpotId;
          //   console.log("Hey SUP",theSpotId)
          // })
          // .catch((err)=>{
          //   console.log("YO error",err);
          // })

            SurfBreak.findOneAndUpdate({spot_id: eachSpotId},{forecast: aNewForecastArr})
            .then(()=>{
              console.log("HOLY MOLLEY IT UPDATED CORRECTLY")
            })
            .catch((err)=>{
              console.log("NOPE TRY AGAIN",err);
            })

        })

        res.json(updatedForcastObj);

      })
      .catch((err)=>{
        console.log(err)
      })





        // //The stuff goes here
        // allSpotIdsArr.forEach((eachSpotId)=>{
        //   console.log(anArr.data);
        //   // let theSpotUpdatedForecast = updatedForcastObj[eachSpotId];
        //   //   console.log("SOMETHIG",theSpotUpdatedForecast);//
  
        //   // axios.patch(`/forecast-update/:${eachSpotId}`,updatedForcastObj)
        //   // .then((res)=>{
        //   //   // let theSpotId = eachSpotId;    
        //   //   console.log("HEY SUP",JSON.stringify(res));
        //   // })
        //   // .catch((err)=>{
        //   //   console.log("YO error",err);
        //   // })
        // })
      })
      .catch((err)=>{
        console.log("Error message:",err);
      })

      // allSpotIdsArr.forEach((eachSpotId)=>{
      //   let theSpotUpdatedForecast = updatedForcastObj[eachSpotId];
      //     console.log("SOMETHIG",theSpotUpdatedForecast);//

      //   // axios.patch(`/forecast-update/:${eachSpotId}`,updatedForcastObj)
      //   // .then((res)=>{
      //   //   // let theSpotId = eachSpotId;    
      //   //   console.log("HEY SUP",JSON.stringify(res));
      //   // })
      //   // .catch((err)=>{
      //   //   console.log("YO error",err);
      //   // })
      // })


    // // CODE ACTUALLY WORK WEEEEEEE
    // axios.get('http://api.spitcast.com/api/spot/forecast/1/')
    // .then((forecast1)=>{
    //   let theID = 1;
    //   // let theIdtoStr = theID.toString(); //Don't need to make string
    //   // console.log(theIdtoStr);
    //   console.log("*=*=*",forecast1.data);
    //   updatedForcastObj[theID] = forecast1.data;
    //   console.log("=>=>=>=>",updatedForcastObj);
    //   res.json(updatedForcastObj) //.data b/c axios=>okay
    // })
    // .catch((err)=>{
    //   res.json(err)
    // })

    // console.log("_+_+_=>_+_+_+",updatedForcastObj,"Should be null");



    // res.json(updatedForcastObj)
  })
    // .catch((err)=>{
    //   res.json(err);
    // })




  //CODE ACTUALLY WORK WEEEEEEE
  // axios.get('http://api.spitcast.com/api/spot/forecast/1/')
  // .then((forecast1)=>{
  //   console.log(forecast1.data);
  //   res.json(forecast1.data) //.data b/c axios=>okay
  // })
  // .catch((err)=>{
  //   res.json(err)
  // })


//promis all give array of what you want

// Region get route
// GET route => to get all the surf spots in the choosen region
router.get('/region/:region', (req, res, next) => {
  let theCountyName = req.params.region;

  // County.findOne({name: theQueryCounty})
  // .then((retrivedCounty)=>{
  // retrivedCounty.surfBreakIDs <=> Array
  //  retrivedCounty.surfBreakIDs.forEach((eachCountyCode))
  // make an axios api call>....MAGIC HERE
  // })
  
  County.find({name: theCountyName})
  .then((theCounty)=>{
    // console.log("Hellooooo",theCounty);
    let surfBreakIDsArr = [];
    surfBreakIDsArr = theCounty[0].surfBreakIDs;
    // console.log("IDs",surfBreakIDsArr);


    SurfBreak.find()//.populate('forecast')
    .then((allTheSurfBreaks)=>{
      // console.log("Hello again:",theCounty);

      let allRegionalSurfBreaks = allTheSurfBreaks;

      // console.log('-=-=-=-=', allRegionalSurfBreaks)

 
      allRegionalSurfBreaks = allRegionalSurfBreaks.filter((eachSurfBreak)=>{
          return surfBreakIDsArr.includes(eachSurfBreak.spot_id)
        })

      
   

  

      
      console.log("+-+-+-+-+-+-+-",allRegionalSurfBreaks);

  
      res.json({theCounty: theCounty})
    })
    .catch((err)=>{
      console.log("-=-=-=-=-=",err)
      res.json(err);
    })
  })
});
// IDK if the route above actually works 
// but this is what stackover flow said to do.... 




// router.get('/listing-views/details/:id', (req,res,next)=>{

//   let theId = req.params.id;
//   Listing.findById(theId).populate('author')
//   .then((oneSingleListing)=>{
//     // console.log(oneSingleListing);
//     // console.log(req.user);

//     if(req.user){
//       if(oneSingleListing.author._id.equals(req.user._id)){
//         // console.log("ownedddddd")
//         oneSingleListing.owned = true;
//         res.render('listing-views/listing-details', {theListing: 
//           oneSingleListing})
//       }
//     }
    
    


//     res.render('listing-views/listing-details', {theListing: 
//       oneSingleListing})
//   })
//   .catch((err)=>{
//     next(err);
//   })
// })







// router.get('/listings/add-new', (req, res, next)=>{

//   if(!req.user){
//       req.flash('error', 'You must be logged in to create a new listings')
//       res.redirect('/login')
//   }
//   else{
//     res.render('listing-views/add-listing')
//   }


// })



// router.post('/listings/create-new',
// uploadMagic.single('thePic'),
// (req, res, next)=>{
//   const {theTitle, theDescription, thePrice} = req.body;
//   const theAuthor  = req.user._id;
//   let theImg = "https://i.pinimg.com/236x/fc/7e/ce/fc7ece8e8ee1f5db97577a4622f33975--photo-icon-sad.jpg";
//   if(req.file !== undefined){
//     theImg = req.file.url;
//   }
  
//   console.log(theTitle);
//   console.log(theDescription);
//   console.log(theAuthor);


//   Listing.create({
//       title: theTitle,
//       image: theImg,
//       description: theDescription,
//       price: thePrice,
//       author: theAuthor
//   })
//   .then(()=>{
//       req.flash('error', 'listing successfully created')
//       res.redirect('/listings')

//   })
//   .catch((err)=>{
//       next(err)
//   })
// })



// router.post('/listings/delete/:idOfListing', (req, res, next)=>{
//   Listing.findByIdAndRemove(req.params.idOfListing)
//   .then(()=>{
//       req.flash('error', 'LISTING SUCCESSFULLY DELETED!')
//       res.redirect('/listings')
//   })
//   .catch((err)=>{
//       next(err)
//   })

// })

// /*Edit Listing*/
// router.get('/listings/edit/:id', (req, res, next)=>{
//   Listing.findById(req.params.id)
//   .then((theListing)=>{
//           res.render('listing-views/edit-listing', {listing: theListing})
//   })
//   .catch((err)=>{
//       next(err);
//   })
// })



// // if(req.file !== undefined){
// //   theImg = req.file.url;
// // }

// // const {theTitle, theDescription, thePrice} = req.body;
// //   let theImg = "https://i.pinimg.com/236x/fc/7e/ce/fc7ece8e8ee1f5db97577a4622f33975--photo-icon-sad.jpg";
// //   if(req.file !== undefined){
// //     theImg = req.file.url;
// //   }


// router.post('/listings/update/:listingID',uploadMagic.single('thePic'),(req, res, next)=>{
//   let theID = req.params.listingID;
//   if(req.file !== undefined){
//     theImg = req.file.url;
//   }





//   console.log('------',req.body);
//   console.log("******",req.file);
  
//   // console.log("*******",theID);
//   Listing.findByIdAndUpdate(theID, req.body, req.file)
//   .then((listing)=>{
//     console.log("It worked");
//     console.log(theID);
//       res.redirect('/listing-views/details/'+theID)
//   })
//   .catch((err)=>{
//     console.log("didnt work :(")
//       next(err);
//   })
// })








module.exports = router;
