const mongoose    = require('mongoose');
const County      = require('../models/County');
const SurfBreak   = require('../models/SurfBreak');


// const dbName = 'authentication-app-backend';
// mongoose.connect(`mongodb://localhost/${dbName}`);
mongoose
  .connect('mongodb://localhost/authentication-app-backend', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });


const counties = [
  {
    name: "Marin",
    surfBreakIDs: ["110","112"] //This is redundent we can look to see if spot_ID is in this array and if not push the ID into the apporpriate county. But don't need to work on this yet. For maintanance purpose this would be ideal.
  },
  {
    name: "San Francisco", 
    surfBreakIDs: ["113","649","648","697","114","117"]
  },
  {
    name: "San Mateo",
    surfBreakIDs: ["120","121","122","123","126"]
  },
  {
    name: "Santa Cruz",
    surfBreakIDs: ["3","2","1","147","149","593","129","600","128","133","133","132","131","130","6","146","145","10","144","141","9","8","7","138","137","5","4","148","150"]
  },
  {
    name: "Monterey",
    surfBreakIDs:["161","154","152"]
  },
  {
    name: "San Luis Obispo", 
    surfBreakIDs:["163","162"]
  },
  {
    name: "Santa Barbara",
    surfBreakIDs: ["185","620","182","181","179","177","198"]
  },
  {
    name: "Ventura",
    surfBreakIDs: ["197","195","194","193","191","190","189"]
  },
  {
    name: "Los Angeles",
    surfBreakIDs: ["387","724","204","207","202","203","638","206","637","205","388","635","402","201","200","732","633"]
  },
  {
    name: "Orange County",
    surfBreakIDs: ["221","217","609","623","208","222","602","603","304","220","605","606","219","607","608","561","214","213","745","212","211","391","644","645","645","392","209","625","239","614"]
  },
  {
    name: "San Diego",
    surfBreakIDs: ["238","594","237","597","236","400","235","747","401","234","233","232","749","231","751","230","754","229","228","756","227","398","399","226","397","762","225","224","223"]
  }
]

// County.create(counties)
// .then(()=>{
//   console.log('yay created a created county')
// })
// .catch((err)=>{
//   console.log('noooo something went wrong creating a county',err)
// })


const surfBreaks = [
  {
  county_name: "Marin",
  latitude: 37.90346451242883,
  longitude: -122.6815204402253,
  spot_id: 110,
  spot_name: "Bolinas",
  forecast: []
  },
  {
  county_name: "Marin",
  latitude: 37.83130487999694,
  longitude: -122.5397845322041,
  spot_id: 112,
  spot_name: "Fort Cronkhite",
  forecast: []
  },
  {
  county_name: "San Francisco",
  latitude: 37.8112808634946,
  longitude: -122.4762562938768,
  spot_id: 113,
  spot_name: "Fort Point",
  forecast: []
  },
  {
  county_name: "San Francisco",
  latitude: 37.78773976851884,
  longitude: -122.4928411936139,
  spot_id: 649,
  spot_name: "Eagles Point",
  forecast: []
  },
  {
  county_name: "San Francisco",
  latitude: 37.7880313594865,
  longitude: -122.4944290343175,
  spot_id: 648,
  spot_name: "Deadmans",
  forecast: []
  },
  {
  county_name: "San Francisco",
  latitude: 37.77748633115122,
  longitude: -122.5158257105333,
  spot_id: 697,
  spot_name: "Ocean Beach - Kellys Cove",
  forecast: []
  },
  {
  county_name: "San Francisco",
  latitude: 37.76825651179624,
  longitude: -122.5134765883138,
  spot_id: 114,
  spot_name: "Ocean Beach - VFW",
  forecast: []
  },
  {
  county_name: "San Francisco",
  latitude: 37.75462259230174,
  longitude: -122.5111052256233,
  spot_id: 117,
  spot_name: "Ocean Beach - Noriega",
  forecast: []
  },
  {
  county_name: "San Mateo",
  latitude: 37.59907859206418,
  longitude: -122.5030853194715,
  spot_id: 120,
  spot_name: "Linda Mar",
  forecast: []
  },
  {
  county_name: "San Mateo",
  latitude: 37.55160926013969,
  longitude: -122.5146397085612,
  spot_id: 121,
  spot_name: "Montara",
  forecast: []
  },
  {
  county_name: "San Mateo",
  latitude: 37.49165636548885,
  longitude: -122.5022524228539,
  spot_id: 122,
  spot_name: "Mavericks",
  forecast: []
  },
  {
  county_name: "San Mateo",
  latitude: 37.50069427235728,
  longitude: -122.4716653656277,
  spot_id: 123,
  spot_name: "Princeton Jetty",
  forecast: []
  },
  {
  county_name: "San Mateo",
  latitude: 37.29934492669435,
  longitude: -122.410118588468,
  spot_id: 126,
  spot_name: "Pomponio State Beach",
  forecast: []
  },
  {
  county_name: "San Mateo",
  latitude: 37.11763256378267,
  longitude: -122.3144829358251,
  spot_id: 118,
  spot_name: "Ano Nuevo",
  forecast: []
  },
  {
  county_name: "Santa Cruz",
  latitude: 37.10437578582472,
  longitude: -122.2896309983957,
  spot_id: 593,
  spot_name: "County Line",
  forecast: []
  },
  {
  county_name: "Santa Cruz",
  latitude: 37.09662226732163,
  longitude: -122.2808743245171,
  spot_id: 129,
  spot_name: "Waddell Creek",
  forecast: []
  },
  {
  county_name: "Santa Cruz",
  latitude: 37.08835713180076,
  longitude: -122.2765857573174,
  spot_id: 600,
  spot_name: "Waddell Reefs",
  forecast: []
  },
  {
  county_name: "Santa Cruz",
  latitude: 37.04167059497804,
  longitude: -122.2336727663274,
  spot_id: 128,
  spot_name: "Scotts Creek",
  forecast: []
  },
  {
  county_name: "Santa Cruz",
  latitude: 37.02135015084279,
  longitude: -122.216233598759,
  spot_id: 133,
  spot_name: "Davenport Landing",
  forecast: []
  },
  {
  county_name: "Santa Cruz",
  latitude: 36.98080544945326,
  longitude: -122.1553115289464,
  spot_id: 132,
  spot_name: "Laguna Creek",
  forecast: []
  },
  {
  county_name: "Santa Cruz",
  latitude: 36.9631290582128,
  longitude: -122.1268789119596,
  spot_id: 131,
  spot_name: "Four Mile",
  forecast: []
  },
  {
  county_name: "Santa Cruz",
  latitude: 36.96111361813115,
  longitude: -122.1185289127844,
  spot_id: 130,
  spot_name: "Three Mile",
  forecast: []
  },
  {
  county_name: "Santa Cruz",
  latitude: 36.94880399279453,
  longitude: -122.0610985303145,
  spot_id: 6,
  spot_name: "Natural Bridges",
  forecast: []
  },
  {
  county_name: "Santa Cruz",
  latitude: 36.9488870532301,
  longitude: -122.0510013993108,
  spot_id: 146,
  spot_name: "Stockton Avenue",
  forecast: []
  },
  {
  county_name: "Santa Cruz",
  latitude: 36.94901894269358,
  longitude: -122.0476440741294,
  spot_id: 145,
  spot_name: "Swift Street",
  forecast: []
  },
  {
  county_name: "Santa Cruz",
  latitude: 36.94971531741057,
  longitude: -122.0454552095049,
  spot_id: 10,
  spot_name: "Getchell",
  forecast: []
  },
  {
  county_name: "Santa Cruz",
  latitude: 36.95148941660567,
  longitude: -122.0420138483801,
  spot_id: 144,
  spot_name: "Mitchells Cove",
  forecast: []
  },
  {
  county_name: "Santa Cruz",
  latitude: 36.95109229195622,
  longitude: -122.0259610960292,
  spot_id: 2,
  spot_name: "Steamer Lane",
  forecast: []
  },
  {
  county_name: "Santa Cruz",
  latitude: 36.95808081143832,
  longitude: -122.024563155438,
  spot_id: 3,
  spot_name: "Cowells",
  forecast: []
  },
  {
  county_name: "Santa Cruz",
  latitude: 36.96168086357659,
  longitude: -122.0009638553883,
  spot_id: 141,
  spot_name: "Murph Bar",
  forecast: []
  },
  {
  county_name: "Santa Cruz",
  latitude: 36.95867710542517,
  longitude: -121.9933217873383,
  spot_id: 9,
  spot_name: "Blacks",
  forecast: []
  },
  {
  county_name: "Santa Cruz",
  latitude: 36.95961188669104,
  longitude: -121.9888602809464,
  spot_id: 8,
  spot_name: "Santa Marias",
  forecast: []
  },
  {
  county_name: "Santa Cruz",
  latitude: 36.95675246771928,
  longitude: -121.981436679289,
  spot_id: 7,
  spot_name: "26th Avenue",
  forecast: []
  },
  {
  county_name: "Santa Cruz",
  latitude: 36.95363973377391,
  longitude: -121.9771177941946,
  spot_id: 138,
  spot_name: "Little Windansea",
  forecast: []
  },
  {
  county_name: "Santa Cruz",
  latitude: 36.95375503691886,
  longitude: -121.9747670315677,
  spot_id: 137,
  spot_name: "Rockview",
  forecast: []
  },
  {
  county_name: "Santa Cruz",
  latitude: 36.95322492615838,
  longitude: -121.9728250343757,
  spot_id: 5,
  spot_name: "Sewer Peak",
  forecast: []
  },
  {
  county_name: "Santa Cruz",
  latitude: 36.95408762204531,
  longitude: -121.9716900628907,
  spot_id: 1,
  spot_name: "Pleasure Point",
  forecast: []
  },
  {
  county_name: "Santa Cruz",
  latitude: 36.95739375025615,
  longitude: -121.9690033240836,
  spot_id: 4,
  spot_name: "38th Avenue",
  forecast: []
  },
  {
  county_name: "Santa Cruz",
  latitude: 36.95911112063955,
  longitude: -121.9652116182096,
  spot_id: 147,
  spot_name: "The Hook",
  forecast: []
  },
  {
  county_name: "Santa Cruz",
  latitude: 36.96077320823937,
  longitude: -121.9625490088431,
  spot_id: 148,
  spot_name: "Sharks Cove",
  forecast: []
  },
  {
  county_name: "Santa Cruz",
  latitude: 36.97123470573281,
  longitude: -121.9491667605599,
  spot_id: 149,
  spot_name: "Capitola Jetties",
  forecast: []
  },
  {
  county_name: "Santa Cruz",
  latitude: 36.93120019321253,
  longitude: -121.8641499350201,
  spot_id: 150,
  spot_name: "Manresa",
  forecast: []
  },
  {
  county_name: "Monterey",
  latitude: 36.80999206452437,
  longitude: -121.7907983616766,
  spot_id: 161,
  spot_name: "Moss Landing State Beach",
  forecast: []
  },
  {
  county_name: "Monterey",
  latitude: 36.54856155311237,
  longitude: -121.9298336429776,
  spot_id: 154,
  spot_name: "Carmel Beach",
  forecast: []
  },
  {
  county_name: "Monterey",
  latitude: 35.9235264509848,
  longitude: -121.4699661759945,
  spot_id: 152,
  spot_name: "Sand Dollar",
  forecast: []
  },
  {
  county_name: "San Luis Obispo",
  latitude: 35.37338529142052,
  longitude: -120.8671142375541,
  spot_id: 163,
  spot_name: "Morro Rock",
  forecast: []
  },
  {
  county_name: "San Luis Obispo",
  latitude: 35.1381862847044,
  longitude: -120.6449984438748,
  spot_id: 162,
  spot_name: "Pismo Beach Pier",
  forecast: []
  },
  {
  county_name: "Santa Barbara",
  latitude: 34.51018425498963,
  longitude: -120.5029053172048,
  spot_id: 185,
  spot_name: "Jalama",
  forecast: []
  },
  {
  county_name: "Santa Barbara",
  latitude: 34.46072785902711,
  longitude: -120.0733136585041,
  spot_id: 620,
  spot_name: "Refugio",
  forecast: []
  },
  {
  county_name: "Santa Barbara",
  latitude: 34.40907914092691,
  longitude: -119.8821432693011,
  spot_id: 182,
  spot_name: "Sands",
  forecast: []
  },
  {
  county_name: "Santa Barbara",
  latitude: 34.4060390017938,
  longitude: -119.8777636727983,
  spot_id: 181,
  spot_name: "Devereux",
  forecast: []
  },
  {
  county_name: "Santa Barbara",
  latitude: 34.40487888923785,
  longitude: -119.8425963704844,
  spot_id: 179,
  spot_name: "Campus Point",
  forecast: []
  },
  {
  county_name: "Santa Barbara",
  latitude: 34.39796888078584,
  longitude: -119.7020898699724,
  spot_id: 177,
  spot_name: "Leadbetter",
  forecast: []
  },
  {
  county_name: "Santa Barbara",
  latitude: 34.37256542974805,
  longitude: -119.4779929046033,
  spot_id: 198,
  spot_name: "Rincon",
  forecast: []
  },
  {
  county_name: "Ventura",
  latitude: 34.37310576910677,
  longitude: -119.4599428547951,
  spot_id: 197,
  spot_name: "La Conchita",
  forecast: []
  },
  {
  county_name: "Ventura",
  latitude: 34.33708440569973,
  longitude: -119.4117541976936,
  spot_id: 195,
  spot_name: "Hobsons",
  forecast: []
  },
  {
  county_name: "Ventura",
  latitude: 34.32873002597324,
  longitude: -119.3994946387295,
  spot_id: 194,
  spot_name: "Faria",
  forecast: []
  },
  {
  county_name: "Ventura",
  latitude: 34.31917670993862,
  longitude: -119.3773753582565,
  spot_id: 193,
  spot_name: "Mondos",
  forecast: []
  },
  {
  county_name: "Ventura",
  latitude: 34.29233748749491,
  longitude: -119.3398784210307,
  spot_id: 191,
  spot_name: "Emma Wood",
  forecast: []
  },
  {
  county_name: "Ventura",
  latitude: 34.27306986930488,
  longitude: -119.3001508388765,
  spot_id: 190,
  spot_name: "C Street",
  forecast: []
  },
  {
  county_name: "Ventura",
  latitude: 34.24406108836918,
  longitude: -119.2691704464693,
  spot_id: 189,
  spot_name: "South Jetty",
  forecast: []
  },
  {
  county_name: "Los Angeles",
  latitude: 34.05206067247789,
  longitude: -118.9640255003194,
  spot_id: 207,
  spot_name: "County Line",
  forecast: []
  },
  {
  county_name: "Los Angeles",
  latitude: 34.04349045348215,
  longitude: -118.9343235963207,
  spot_id: 638,
  spot_name: "Leo Carrillo",
  forecast: []
  },
  {
  county_name: "Los Angeles",
  latitude: 34.01902597455428,
  longitude: -118.8303773801784,
  spot_id: 206,
  spot_name: "Zuma Beach",
  forecast: []
  },
  {
  county_name: "Los Angeles",
  latitude: 34.00111336043925,
  longitude: -118.8083780106363,
  spot_id: 637,
  spot_name: "Point Dume",
  forecast: []
  },
  {
  county_name: "Los Angeles",
  latitude: 34.03302182979562,
  longitude: -118.6778152767141,
  spot_id: 205,
  spot_name: "Malibu",
  forecast: []
  },
  {
  county_name: "Los Angeles",
  latitude: 34.03721938742399,
  longitude: -118.5832137275658,
  spot_id: 388,
  spot_name: "Topanga",
  forecast: []
  },
  {
  county_name: "Los Angeles",
  latitude: 34.03936412938852,
  longitude: -118.5756079633999,
  spot_id: 635,
  spot_name: "Chart House",
  forecast: []
  },
  {
  county_name: "Los Angeles",
  latitude: 34.03709471468836,
  longitude: -118.5551262771518,
  spot_id: 387,
  spot_name: "Sunset",
  forecast: []
  },
  {
  county_name: "Los Angeles",
  latitude: 34.00764971040174,
  longitude: -118.498652238675,
  spot_id: 724,
  spot_name: "Santa Monica Municipal Pier",
  forecast: []
  },
  {
  county_name: "Los Angeles",
  latitude: 33.98316127078371,
  longitude: -118.4742634651619,
  spot_id: 204,
  spot_name: "Venice",
  forecast: []
  },
  {
  county_name: "Los Angeles",
  latitude: 33.89974270434262,
  longitude: -118.4220839567824,
  spot_id: 402,
  spot_name: "El Porto",
  forecast: []
  },
  {
  county_name: "Los Angeles",
  latitude: 33.88386643743257,
  longitude: -118.4138307775285,
  spot_id: 203,
  spot_name: "Manhattan Beach",
  forecast: []
  },
  {
  county_name: "Los Angeles",
  latitude: 33.86160652911514,
  longitude: -118.4034127774129,
  spot_id: 202,
  spot_name: "Hermosa",
  forecast: []
  },
  {
  county_name: "Los Angeles",
  latitude: 33.84917891453757,
  longitude: -118.4019851018966,
  spot_id: 201,
  spot_name: "Redondo Breakwater",
  forecast: []
  },
  {
  county_name: "Los Angeles",
  latitude: 33.83200873689634,
  longitude: -118.3919152431706,
  spot_id: 732,
  spot_name: "Topaz Street",
  forecast: []
  },
  {
  county_name: "Los Angeles",
  latitude: 33.81111239543542,
  longitude: -118.39290949975,
  spot_id: 200,
  spot_name: "Torrance Beach",
  forecast: []
  },
  {
  county_name: "Los Angeles",
  latitude: 33.7928292845627,
  longitude: -118.4078221407595,
  spot_id: 633,
  spot_name: "Palos Verdes Cove",
  forecast: []
  },
  {
  county_name: "Orange County",
  latitude: 33.73771902859338,
  longitude: -118.1078747535007,
  spot_id: 222,
  spot_name: "Seal Beach Pier",
  forecast: []
  },
  {
  county_name: "Orange County",
  latitude: 33.72848580464282,
  longitude: -118.0908085660303,
  spot_id: 602,
  spot_name: "Surfside Jetty",
  forecast: []
  },
  {
  county_name: "Orange County",
  latitude: 33.72315771853458,
  longitude: -118.0802261736895,
  spot_id: 603,
  spot_name: "Anderson St",
  forecast: []
  },
  {
  county_name: "Orange County",
  latitude: 33.68539215930445,
  longitude: -118.0403658241339,
  spot_id: 604,
  spot_name: "Bolsa Chica",
  forecast: []
  },
  {
  county_name: "Orange County",
  latitude: 33.66615620581521,
  longitude: -118.01901000164,
  spot_id: 220,
  spot_name: "Goldenwest",
  forecast: []
  },
  {
  county_name: "Orange County",
  latitude: 33.66394528126585,
  longitude: -118.0140490339561,
  spot_id: 605,
  spot_name: "17th Street",
  forecast: []
  },
  {
  county_name: "Orange County",
  latitude: 33.65521398159275,
  longitude: -118.0050433408805,
  spot_id: 221,
  spot_name: "Huntington Pier",
  forecast: []
  },
  {
  county_name: "Orange County",
  latitude: 33.64851655408741,
  longitude: -117.9932214212635,
  spot_id: 643,
  spot_name: "Huntington Beach",
  forecast: []
  },
  {
  county_name: "Orange County",
  latitude: 33.62806652764193,
  longitude: -117.9591291105893,
  spot_id: 606,
  spot_name: "Santa Ana River Jetties",
  forecast: []
  },
  {
  county_name: "Orange County",
  latitude: 33.62290558073348,
  longitude: -117.9487673760861,
  spot_id: 219,
  spot_name: "56th Street",
  forecast: []
  },
  {
  county_name: "Orange County",
  latitude: 33.61722759248739,
  longitude: -117.9388114221126,
  spot_id: 607,
  spot_name: "40th Street",
  forecast: []
  },
  {
  county_name: "Orange County",
  latitude: 33.61531903458457,
  longitude: -117.9369576533262,
  spot_id: 608,
  spot_name: "36th Street",
  forecast: []
  },
  {
  county_name: "Orange County",
  latitude: 33.61095831182542,
  longitude: -117.933626701894,
  spot_id: 651,
  spot_name: "Blackies",
  forecast: []
  },
  {
  county_name: "Orange County",
  latitude: 33.60664692004247,
  longitude: -117.9307384511544,
  spot_id: 609,
  spot_name: "Newport Pier",
  forecast: []
  },
  {
  county_name: "Orange County",
  latitude: 33.59338993866989,
  longitude: -117.8823429704075,
  spot_id: 217,
  spot_name: "The Wedge",
  forecast: []
  },
  {
  county_name: "Orange County",
  latitude: 33.47466504514782,
  longitude: -117.7233023880989,
  spot_id: 214,
  spot_name: "Salt Creek",
  forecast: []
  },
  {
  county_name: "Orange County",
  latitude: 33.46033085820538,
  longitude: -117.6886485710755,
  spot_id: 213,
  spot_name: "Doheny",
  forecast: []
  },
  {
  county_name: "Orange County",
  latitude: 33.42713486226824,
  longitude: -117.6289762885628,
  spot_id: 745,
  spot_name: "204s",
  forecast: []
  },
  {
  county_name: "Orange County",
  latitude: 33.41973194288649,
  longitude: -117.6212676741133,
  spot_id: 212,
  spot_name: "San Clemente Pier",
  forecast: []
  },
  {
  county_name: "Orange County",
  latitude: 33.41596558240347,
  longitude: -117.618142936175,
  spot_id: 211,
  spot_name: "T Street",
  forecast: []
  },
  {
  county_name: "Orange County",
  latitude: 33.41064330626746,
  longitude: -117.6130013911603,
  spot_id: 391,
  spot_name: "Lasuen",
  forecast: []
  },
  {
  county_name: "Orange County",
  latitude: 33.40698370572502,
  longitude: -117.6096503058218,
  spot_id: 644,
  spot_name: "Riviera",
  forecast: []
  },
  {
  county_name: "Orange County",
  latitude: 33.40480836264544,
  longitude: -117.6073102678367,
  spot_id: 645,
  spot_name: "Calafia",
  forecast: []
  },
  {
  county_name: "Orange County",
  latitude: 33.40297996814307,
  longitude: -117.6061996160215,
  spot_id: 392,
  spot_name: "State Beach",
  forecast: []
  },
  {
  county_name: "Orange County",
  latitude: 33.39061299257676,
  longitude: -117.5987721491924,
  spot_id: 209,
  spot_name: "Cottons Point",
  forecast: []
  },
  {
  county_name: "Orange County",
  latitude: 33.3844763013776,
  longitude: -117.5944511240262,
  spot_id: 623,
  spot_name: "Upper Trestles",
  forecast: []
  },
  {
  county_name: "Orange County",
  latitude: 33.38211695507326,
  longitude: -117.5888397460814,
  spot_id: 208,
  spot_name: "Lower Trestles",
  forecast: []
  },
  {
  county_name: "Orange County",
  latitude: 33.38011455475179,
  longitude: -117.5790343398904,
  spot_id: 625,
  spot_name: "Church",
  forecast: []
  },
  {
  county_name: "Orange County",
  latitude: 33.37360546620393,
  longitude: -117.5691291993784,
  spot_id: 239,
  spot_name: "San Onofre",
  forecast: []
  },
  {
  county_name: "Orange County",
  latitude: 33.36170650862447,
  longitude: -117.5449775514087,
  spot_id: 614,
  spot_name: "Trails",
  forecast: []
  },
  {
  county_name: "San Diego",
  latitude: 33.20422852759,
  longitude: -117.3959770213895,
  spot_id: 238,
  spot_name: "Oceanside Harbor",
  forecast: []
  },
  {
  county_name: "San Diego",
  latitude: 33.19338704616089,
  longitude: -117.3871878580306,
  spot_id: 594,
  spot_name: "Oceanside Pier",
  forecast: []
  },
  {
  county_name: "San Diego",
  latitude: 33.14732039517696,
  longitude: -117.3467966641187,
  spot_id: 237,
  spot_name: "Tamarack",
  forecast: []
  },
  {
  county_name: "San Diego",
  latitude: 33.1287625038052,
  longitude: -117.3361948822189,
  spot_id: 597,
  spot_name: "Terra Mar",
  forecast: []
  },
  {
  county_name: "San Diego",
  latitude: 33.08703466528135,
  longitude: -117.314238172042,
  spot_id: 236,
  spot_name: "Ponto",
  forecast: []
  },
  {
  county_name: "San Diego",
  latitude: 33.07548446739567,
  longitude: -117.310721142163,
  spot_id: 400,
  spot_name: "Grandview",
  forecast: []
  },
  {
  county_name: "San Diego",
  latitude: 33.06357021203468,
  longitude: -117.3055500790094,
  spot_id: 235,
  spot_name: "Beacons",
  forecast: []
  },
  {
  county_name: "San Diego",
  latitude: 33.0477231488252,
  longitude: -117.2992460678035,
  spot_id: 747,
  spot_name: "Moonlight Beach",
  forecast: []
  },
  {
  county_name: "San Diego",
  latitude: 33.04544227410393,
  longitude: -117.2982038691907,
  spot_id: 401,
  spot_name: "D Street",
  forecast: []
  },
  {
  county_name: "San Diego",
  latitude: 33.03442293101347,
  longitude: -117.2957502535422,
  spot_id: 234,
  spot_name: "Swamis",
  forecast: []
  },
  {
  county_name: "San Diego",
  latitude: 33.02560677714643,
  longitude: -117.2880169584566,
  spot_id: 233,
  spot_name: "Pipes",
  forecast: []
  },
  {
  county_name: "San Diego",
  latitude: 33.01541991675105,
  longitude: -117.283273919829,
  spot_id: 232,
  spot_name: "Cardiff Reef",
  forecast: []
  },
  {
  county_name: "San Diego",
  latitude: 33.00603328137771,
  longitude: -117.2793974249951,
  spot_id: 749,
  spot_name: "Georges",
  forecast: []
  },
  {
  county_name: "San Diego",
  latitude: 33.00033702988816,
  longitude: -117.2796420074124,
  spot_id: 231,
  spot_name: "Seaside Reef",
  forecast: []
  },
  {
  county_name: "San Diego",
  latitude: 32.97479804874148,
  longitude: -117.2721052291127,
  spot_id: 751,
  spot_name: "Del Mar Rivermouth",
  forecast: []
  },
  {
  county_name: "San Diego",
  latitude: 32.95866232586716,
  longitude: -117.2691753574579,
  spot_id: 230,
  spot_name: "15th Street - Del Mar",
  forecast: []
  },
  {
  county_name: "San Diego",
  latitude: 32.93310208353217,
  longitude: -117.2617407404518,
  spot_id: 754,
  spot_name: "Torrey Pines State Beach",
  forecast: []
  },
  {
  county_name: "San Diego",
  latitude: 32.88872776198521,
  longitude: -117.2574779327986,
  spot_id: 229,
  spot_name: "Blacks Beach",
  forecast: []
  },
  {
  county_name: "San Diego",
  latitude: 32.8665985093327,
  longitude: -117.2562736520856,
  spot_id: 228,
  spot_name: "Scripps Pier",
  forecast: []
  },
  {
  county_name: "San Diego",
  latitude: 32.83879292191246,
  longitude: -117.2825528890551,
  spot_id: 756,
  spot_name: "Horseshoe",
  forecast: []
  },
  {
  county_name: "San Diego",
  latitude: 32.82966532137208,
  longitude: -117.2820435395789,
  spot_id: 227,
  spot_name: "Windansea",
  forecast: []
  },
  {
  county_name: "San Diego",
  latitude: 32.81342404990851,
  longitude: -117.2738442945035,
  spot_id: 398,
  spot_name: "Bird Rock",
  forecast: []
  },
  {
  county_name: "San Diego",
  latitude: 32.80694591751527,
  longitude: -117.2659989723968,
  spot_id: 399,
  spot_name: "Tourmaline",
  forecast: []
  },
  {
  county_name: "San Diego",
  latitude: 32.79702950543552,
  longitude: -117.2596029503458,
  spot_id: 226,
  spot_name: "Pacific Beach",
  forecast: []
  },
  {
  county_name: "San Diego",
  latitude: 32.77792900748604,
  longitude: -117.2543264821912,
  spot_id: 397,
  spot_name: "Mission Beach",
  forecast: []
  },
  {
  county_name: "San Diego",
  latitude: 32.75532220479215,
  longitude: -117.2556990676614,
  spot_id: 762,
  spot_name: "Ocean Beach Jetty",
  forecast: []
  },
  {
  county_name: "San Diego",
  latitude: 32.74915185196409,
  longitude: -117.2553418849109,
  spot_id: 225,
  spot_name: "Ocean Beach Pier",
  forecast: []
  },
  {
  county_name: "San Diego",
  latitude: 32.71899890471818,
  longitude: -117.2571632713268,
  spot_id: 224,
  spot_name: "Sunset Cliffs",
  forecast: []
  },
  // Error here
  // {
  // county_name: "San Diego",
  // latitude: 32.68246240029379,
  // longitude: -117.1855218469544,
  // spot_id: 598,
  // spot_name: "Coronado",
  // forecast: []
  // },
  {
  county_name: "San Diego",
  latitude: 32.577928810608,
  longitude: -117.1346007967761,
  spot_id: 223,
  spot_name: "Imperial Beach",
  forecast: []
  }
  ]

  // SurfBreak.create(surfBreaks)
  // .then(()=>{
  //   console.log('yay created a surfbreak')
  // })
  // .catch((err)=>{
  //   console.log('noooo something went wrong creating a surfbreak',err)
  // })


