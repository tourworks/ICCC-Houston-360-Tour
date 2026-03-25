var APP_DATA = {
  "scenes": [
    {
      "id": "0-front-yard",
      "name": "Front Yard",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.017892834155821546,
          "pitch": 0.10658757558583076,
          "rotation": 0,
          "target": "1-front-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-front-entrance",
      "name": "Front Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1412323436740515,
          "pitch": 0.3979290011244281,
          "rotation": 0,
          "target": "0-front-yard"
        },
        {
          "yaw": 1.8249478695071968,
          "pitch": 0.1587096392615024,
          "rotation": 4.71238898038469,
          "target": "2-side-entrance"
        },
        {
          "yaw": -0.013369036486571062,
          "pitch": 0.14887917224774583,
          "rotation": 0,
          "target": "3-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-side-entrance",
      "name": "Side Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -1.576167662825359,
        "pitch": 0.08913027722250177,
        "fov": 1.5551665857883044
      },
      "linkHotspots": [
        {
          "yaw": -1.4907629452669475,
          "pitch": 0.1763137101697705,
          "rotation": 0,
          "target": "6-side-foyer"
        },
        {
          "yaw": -2.920540754327213,
          "pitch": 0.10153680102901497,
          "rotation": 1.5707963267948966,
          "target": "0-front-yard"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-foyer",
      "name": "Foyer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.032642056605771685,
          "pitch": 0.42136004609796096,
          "rotation": 0,
          "target": "4-foyerdining-room"
        },
        {
          "yaw": 0.8118893118154347,
          "pitch": 0.45077958347247815,
          "rotation": 7.853981633974483,
          "target": "5-foyerstairway"
        },
        {
          "yaw": 0.9770778399804669,
          "pitch": -0.014368747117361025,
          "rotation": 1.5707963267948966,
          "target": "2-side-entrance"
        },
        {
          "yaw": -3.138875195315279,
          "pitch": 0.3594190876269323,
          "rotation": 0,
          "target": "1-front-entrance"
        },
        {
          "yaw": -1.523049161888311,
          "pitch": 0.700687242113192,
          "rotation": 0,
          "target": "7-foyerliving-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-foyerdining-room",
      "name": "Foyer/Dining Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -0.40010849833453577,
        "pitch": -0.040331083656298006,
        "fov": 1.5551665857883044
      },
      "linkHotspots": [
        {
          "yaw": 0.011598327852123447,
          "pitch": 0.4815781249070259,
          "rotation": 3.141592653589793,
          "target": "13-dining-room"
        },
        {
          "yaw": 0.25790745995387,
          "pitch": -0.021083665350376535,
          "rotation": 1.5707963267948966,
          "target": "14-dining-roomkitchen"
        },
        {
          "yaw": -0.26310921269770304,
          "pitch": 0.1471366224401045,
          "rotation": 0.7853981633974483,
          "target": "12-dining-roomgallery"
        },
        {
          "yaw": -1.0910855366418613,
          "pitch": 0.2388066185955342,
          "rotation": 0,
          "target": "11-dining-roomparlor"
        },
        {
          "yaw": 3.100580778937733,
          "pitch": 0.5972195920768542,
          "rotation": 3.141592653589793,
          "target": "3-foyer"
        },
        {
          "yaw": 3.0989942713755614,
          "pitch": 0.13659964857846063,
          "rotation": 0,
          "target": "1-front-entrance"
        },
        {
          "yaw": -2.690893434025476,
          "pitch": 0.27179351831348164,
          "rotation": 1.5707963267948966,
          "target": "7-foyerliving-room"
        },
        {
          "yaw": 1.9444097127705584,
          "pitch": 0.5803873438496829,
          "rotation": 0.7853981633974483,
          "target": "5-foyerstairway"
        },
        {
          "yaw": 1.772678045148262,
          "pitch": 0.3116113610921989,
          "rotation": 3.141592653589793,
          "target": "6-side-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-foyerstairway",
      "name": "Foyer/Stairway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 2.312013942234655,
        "pitch": 0.0770027659982091,
        "fov": 1.5551665857883044
      },
      "linkHotspots": [
        {
          "yaw": 1.6431266766152088,
          "pitch": 0.6292391466606109,
          "rotation": 3.141592653589793,
          "target": "6-side-foyer"
        },
        {
          "yaw": 1.6584975849120704,
          "pitch": 0.15520133263999725,
          "rotation": 0,
          "target": "2-side-entrance"
        },
        {
          "yaw": 3.0699135188037374,
          "pitch": 0.21483333764507861,
          "rotation": 0,
          "target": "28-stairway"
        },
        {
          "yaw": -1.1605093982161385,
          "pitch": 0.5390564223216323,
          "rotation": 1.5707963267948966,
          "target": "4-foyerdining-room"
        },
        {
          "yaw": -2.1778903493542288,
          "pitch": 0.5358071811792264,
          "rotation": 3.141592653589793,
          "target": "3-foyer"
        },
        {
          "yaw": -2.016306583497723,
          "pitch": 0.3258006561277291,
          "rotation": 0.7853981633974483,
          "target": "7-foyerliving-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-side-foyer",
      "name": "Side Foyer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -1.588863367971598,
        "pitch": 0.3168502858293003,
        "fov": 1.5551665857883044
      },
      "linkHotspots": [
        {
          "yaw": -1.4354197646426492,
          "pitch": 0.6362538044601909,
          "rotation": 4.71238898038469,
          "target": "5-foyerstairway"
        },
        {
          "yaw": -1.3925698208327226,
          "pitch": 0.04316171336732033,
          "rotation": 7.853981633974483,
          "target": "4-foyerdining-room"
        },
        {
          "yaw": -1.6960322601339755,
          "pitch": 0.04515138094717308,
          "rotation": 4.71238898038469,
          "target": "3-foyer"
        },
        {
          "yaw": 1.669741383173304,
          "pitch": 0.37214322195806737,
          "rotation": 0,
          "target": "2-side-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-foyerliving-room",
      "name": "Foyer/Living Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -1.6984341151037938,
        "pitch": 0.10241346975753274,
        "fov": 1.5551665857883044
      },
      "linkHotspots": [
        {
          "yaw": -1.6091850589641012,
          "pitch": 0.44053440223597207,
          "rotation": 3.141592653589793,
          "target": "8-living-roomparlor"
        },
        {
          "yaw": -1.0316237349340671,
          "pitch": 0.07196463524958574,
          "rotation": 1.5707963267948966,
          "target": "9-parlorliving-room"
        },
        {
          "yaw": 1.9689096507547132,
          "pitch": 0.14880179236733682,
          "rotation": 1.5707963267948966,
          "target": "1-front-entrance"
        },
        {
          "yaw": 1.4096924397847008,
          "pitch": 0.5143465973145283,
          "rotation": 3.141592653589793,
          "target": "3-foyer"
        },
        {
          "yaw": 1.0942321369048145,
          "pitch": 0.2820492157182013,
          "rotation": 1.5707963267948966,
          "target": "5-foyerstairway"
        },
        {
          "yaw": 1.1621012262997397,
          "pitch": 0.03542489748318545,
          "rotation": 0.7853981633974483,
          "target": "6-side-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-living-roomparlor",
      "name": "Living Room/Parlor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -1.005132164311842,
        "pitch": 0.10532317767869337,
        "fov": 1.5551665857883044
      },
      "linkHotspots": [
        {
          "yaw": -0.3238941255917318,
          "pitch": 0.43053707859273516,
          "rotation": 0,
          "target": "9-parlorliving-room"
        },
        {
          "yaw": 1.5950797376836574,
          "pitch": 0.3646606614517296,
          "rotation": 3.141592653589793,
          "target": "7-foyerliving-room"
        },
        {
          "yaw": 1.6923082597655768,
          "pitch": 0.03311573467170703,
          "rotation": 7.853981633974483,
          "target": "1-front-entrance"
        },
        {
          "yaw": 1.5999015836051411,
          "pitch": 0.2176886585502409,
          "rotation": 9.42477796076938,
          "target": "3-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-parlorliving-room",
      "name": "Parlor/Living Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.004084998370924353,
          "pitch": 0.5164174641600052,
          "rotation": 3.141592653589793,
          "target": "10-parlor"
        },
        {
          "yaw": 0.7224764800409318,
          "pitch": 0.3203709076244472,
          "rotation": 1.5707963267948966,
          "target": "11-dining-roomparlor"
        },
        {
          "yaw": 3.0434028032614506,
          "pitch": 0.5093526394661918,
          "rotation": 3.141592653589793,
          "target": "8-living-roomparlor"
        },
        {
          "yaw": 2.082262849081566,
          "pitch": 0.24030551786149346,
          "rotation": 3.141592653589793,
          "target": "7-foyerliving-room"
        },
        {
          "yaw": 2.0788384476007398,
          "pitch": 0.03276972495322639,
          "rotation": 1.5707963267948966,
          "target": "1-front-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-parlor",
      "name": "Parlor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 2.379169385157157,
        "pitch": 0.18604625231048288,
        "fov": 1.5551665857883044
      },
      "linkHotspots": [
        {
          "yaw": 1.488928054934596,
          "pitch": 0.525036930140292,
          "rotation": 0,
          "target": "11-dining-roomparlor"
        },
        {
          "yaw": 3.1286947804218492,
          "pitch": 0.5614600948107533,
          "rotation": 0,
          "target": "9-parlorliving-room"
        },
        {
          "yaw": 3.08028381299558,
          "pitch": 0.28538898616908526,
          "rotation": 3.141592653589793,
          "target": "8-living-roomparlor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-dining-roomparlor",
      "name": "Dining Room/Parlor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -1.5587947302723677,
        "pitch": 0.2614576448163959,
        "fov": 1.5551665857883044
      },
      "linkHotspots": [
        {
          "yaw": -1.5141053678695986,
          "pitch": 0.6240488467541123,
          "rotation": 3.141592653589793,
          "target": "10-parlor"
        },
        {
          "yaw": -2.4066655380507864,
          "pitch": 0.43096199747162167,
          "rotation": 11.780972450961727,
          "target": "8-living-roomparlor"
        },
        {
          "yaw": 2.081311313342554,
          "pitch": 0.008498223263467608,
          "rotation": 1.5707963267948966,
          "target": "3-foyer"
        },
        {
          "yaw": 1.9600010863602328,
          "pitch": 0.2514359190886175,
          "rotation": 3.141592653589793,
          "target": "4-foyerdining-room"
        },
        {
          "yaw": 1.3073410039963296,
          "pitch": 0.02396916119760384,
          "rotation": 4.71238898038469,
          "target": "14-dining-roomkitchen"
        },
        {
          "yaw": 0.8440766359581939,
          "pitch": 0.30467713653467676,
          "rotation": 10.995574287564278,
          "target": "12-dining-roomgallery"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-dining-roomgallery",
      "name": "Dining Room/Gallery",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 3.137719130481022,
        "pitch": 0.18861291850328854,
        "fov": 1.5551665857883044
      },
      "linkHotspots": [
        {
          "yaw": 2.1701722096351546,
          "pitch": 0.5799190833679173,
          "rotation": 3.141592653589793,
          "target": "13-dining-room"
        },
        {
          "yaw": 2.7318057108513303,
          "pitch": 0.3183505347398139,
          "rotation": 3.141592653589793,
          "target": "4-foyerdining-room"
        },
        {
          "yaw": 2.8547090479005703,
          "pitch": 0.21909993200891975,
          "rotation": 1.5707963267948966,
          "target": "3-foyer"
        },
        {
          "yaw": 1.4105807596641746,
          "pitch": 0.09944984410563151,
          "rotation": 4.71238898038469,
          "target": "14-dining-roomkitchen"
        },
        {
          "yaw": -0.019405086432694674,
          "pitch": 0.41894671981958354,
          "rotation": 0,
          "target": "15-gallery"
        },
        {
          "yaw": 0.04735649104157069,
          "pitch": 0.1485134448166594,
          "rotation": 3.141592653589793,
          "target": "16-galleryrestroom"
        },
        {
          "yaw": -1.9774028871631266,
          "pitch": 0.41514906890438397,
          "rotation": 0.7853981633974483,
          "target": "11-dining-roomparlor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-dining-room",
      "name": "Dining Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -1.5709648780265084,
        "pitch": 0.2837507709293554,
        "fov": 1.5551665857883044
      },
      "linkHotspots": [
        {
          "yaw": -0.50021747640508,
          "pitch": 0.42781078976509157,
          "rotation": 0.7853981633974483,
          "target": "12-dining-roomgallery"
        },
        {
          "yaw": 3.1278213058991913,
          "pitch": 0.5296200759920069,
          "rotation": 3.141592653589793,
          "target": "4-foyerdining-room"
        },
        {
          "yaw": 3.1220865047988013,
          "pitch": 0.3362466282999641,
          "rotation": 3.141592653589793,
          "target": "3-foyer"
        },
        {
          "yaw": 3.1206071810537317,
          "pitch": 0.07559048772169064,
          "rotation": 0,
          "target": "1-front-entrance"
        },
        {
          "yaw": -2.9396115170453356,
          "pitch": 0.07861356760964,
          "rotation": 7.853981633974483,
          "target": "7-foyerliving-room"
        },
        {
          "yaw": 0.5542737928222632,
          "pitch": 0.10805824739835224,
          "rotation": 7.853981633974483,
          "target": "14-dining-roomkitchen"
        },
        {
          "yaw": -1.57337553127077,
          "pitch": 0.0015419291567315696,
          "rotation": 0,
          "target": "11-dining-roomparlor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-dining-roomkitchen",
      "name": "Dining Room/Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -0.7744852828797768,
        "pitch": 0.320041993279812,
        "fov": 1.5551665857883044
      },
      "linkHotspots": [
        {
          "yaw": -0.0291584277218071,
          "pitch": 0.30407895421960873,
          "rotation": 3.141592653589793,
          "target": "25-kitchen"
        },
        {
          "yaw": -1.4275141155539046,
          "pitch": 0.3625093917901978,
          "rotation": 1.5707963267948966,
          "target": "12-dining-roomgallery"
        },
        {
          "yaw": -1.8230469091686405,
          "pitch": 0.047733638086320695,
          "rotation": 0,
          "target": "4-foyerdining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-gallery",
      "name": "Gallery",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.04490514169304305,
          "pitch": 0.5478098435581948,
          "rotation": 3.141592653589793,
          "target": "15-gallery"
        },
        {
          "yaw": 0.10581422627695503,
          "pitch": 0.23331011137135427,
          "rotation": 0,
          "target": "16-galleryrestroom"
        },
        {
          "yaw": 3.121912900915383,
          "pitch": 0.6945913457629942,
          "rotation": 0,
          "target": "12-dining-roomgallery"
        },
        {
          "yaw": 2.8932417874654615,
          "pitch": 0.23717927152875262,
          "rotation": 3.141592653589793,
          "target": "4-foyerdining-room"
        },
        {
          "yaw": -2.5884372526933763,
          "pitch": 0.20790159639555128,
          "rotation": 1.5707963267948966,
          "target": "11-dining-roomparlor"
        },
        {
          "yaw": 2.492477935371242,
          "pitch": 0.1757176647160179,
          "rotation": 4.71238898038469,
          "target": "14-dining-roomkitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-galleryrestroom",
      "name": "Gallery/Restroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -0.8059496871729976,
        "pitch": 0.0833648107089271,
        "fov": 1.5551665857883044
      },
      "linkHotspots": [
        {
          "yaw": -0.06458849155985824,
          "pitch": 0.4387357943864618,
          "rotation": 3.141592653589793,
          "target": "17-restroom"
        },
        {
          "yaw": -0.053374709058232384,
          "pitch": 0.20597302930628203,
          "rotation": 0,
          "target": "18-reception-hallrestroom"
        },
        {
          "yaw": -2.8734374097551,
          "pitch": 0.5359797077973365,
          "rotation": 3.141592653589793,
          "target": "15-gallery"
        },
        {
          "yaw": -3.0523351196771316,
          "pitch": 0.2421306492227231,
          "rotation": 0,
          "target": "12-dining-roomgallery"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-restroom",
      "name": "Restroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.016338691799198557,
          "pitch": 0.48493408224603307,
          "rotation": 0,
          "target": "18-reception-hallrestroom"
        },
        {
          "yaw": -3.121508040560233,
          "pitch": 0.5604505537970503,
          "rotation": 0,
          "target": "16-galleryrestroom"
        },
        {
          "yaw": -3.031977231039871,
          "pitch": 0.2629426313920291,
          "rotation": 3.141592653589793,
          "target": "15-gallery"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-reception-hallrestroom",
      "name": "Reception Hall/Restroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.05509207746531253,
          "pitch": 0.3607779741639092,
          "rotation": 0,
          "target": "19-reception-hall"
        },
        {
          "yaw": 1.277277033140745,
          "pitch": 0.33843898772481573,
          "rotation": 0,
          "target": "21-kitchenreception-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-reception-hall",
      "name": "Reception Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.030628134176826194,
          "pitch": 0.21701595314277888,
          "rotation": 3.141592653589793,
          "target": "20-reception-hall"
        },
        {
          "yaw": 2.4476192968223387,
          "pitch": 0.22981097761248748,
          "rotation": 4.71238898038469,
          "target": "21-kitchenreception-hall"
        },
        {
          "yaw": 3.125213794262571,
          "pitch": 0.2316345613663966,
          "rotation": 0,
          "target": "18-reception-hallrestroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-reception-hall",
      "name": "Reception Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 3.098376906953252,
        "pitch": -0.18011007281388025,
        "fov": 1.5551665857883044
      },
      "linkHotspots": [
        {
          "yaw": 3.1146303993200597,
          "pitch": 0.47648027879963095,
          "rotation": 3.141592653589793,
          "target": "19-reception-hall"
        },
        {
          "yaw": 3.1210349261440324,
          "pitch": 0.14144419596400581,
          "rotation": 0,
          "target": "18-reception-hallrestroom"
        },
        {
          "yaw": 2.8005802519844076,
          "pitch": 0.1416430643623574,
          "rotation": 4.71238898038469,
          "target": "21-kitchenreception-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-kitchenreception-hall",
      "name": "Kitchen/Reception Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 2.323948087005764,
        "pitch": 0.03145247016204067,
        "fov": 1.5551665857883044
      },
      "linkHotspots": [
        {
          "yaw": 2.5026535327574315,
          "pitch": 0.48874694597541257,
          "rotation": 0.7853981633974483,
          "target": "22-kitchen-side"
        },
        {
          "yaw": -1.9853722787222008,
          "pitch": 0.2999494586406506,
          "rotation": 4.71238898038469,
          "target": "18-reception-hallrestroom"
        },
        {
          "yaw": -0.6817344577044899,
          "pitch": 0.27139219785624746,
          "rotation": 1.5707963267948966,
          "target": "19-reception-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-kitchen-side",
      "name": "Kitchen Side",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -3.1215596129136607,
        "pitch": 0.3567059524687757,
        "fov": 1.5551665857883044
      },
      "linkHotspots": [
        {
          "yaw": -3.130468168969415,
          "pitch": 0.4138193501516767,
          "rotation": 0,
          "target": "23-kitchenkitchen-side"
        },
        {
          "yaw": -0.6841076948157916,
          "pitch": 0.4016266021795616,
          "rotation": 5.497787143782138,
          "target": "21-kitchenreception-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-kitchenkitchen-side",
      "name": "Kitchen/Kitchen Side",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.6094033985997456,
        "pitch": 0.4048804216811739,
        "fov": 1.5551665857883044
      },
      "linkHotspots": [
        {
          "yaw": -1.9424661372427998,
          "pitch": 0.528823360249632,
          "rotation": 3.141592653589793,
          "target": "24-kitchen-fridge"
        },
        {
          "yaw": 3.082918699893586,
          "pitch": 0.3885129844175559,
          "rotation": 3.141592653589793,
          "target": "26-kitchen-stove"
        },
        {
          "yaw": -0.04643093639940332,
          "pitch": 0.3701042481112822,
          "rotation": 3.141592653589793,
          "target": "22-kitchen-side"
        },
        {
          "yaw": -0.1988663038220153,
          "pitch": 0.05427107477098403,
          "rotation": 4.71238898038469,
          "target": "21-kitchenreception-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-kitchen-fridge",
      "name": "Kitchen (fridge)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 2.555904975094414,
        "pitch": 0.32503588052332333,
        "fov": 1.5551665857883044
      },
      "linkHotspots": [
        {
          "yaw": 2.6109087292010207,
          "pitch": 0.3877396061252334,
          "rotation": 3.141592653589793,
          "target": "26-kitchen-stove"
        },
        {
          "yaw": 2.9385833517649314,
          "pitch": 0.06535752207192758,
          "rotation": 3.141592653589793,
          "target": "27-kitchen-sinks"
        },
        {
          "yaw": 0.8230496711582695,
          "pitch": 0.4658271879638338,
          "rotation": 4.71238898038469,
          "target": "23-kitchenkitchen-side"
        },
        {
          "yaw": -2.6302273682137063,
          "pitch": 0.3260283696991024,
          "rotation": 3.141592653589793,
          "target": "25-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 1.6024505103950446,
        "pitch": 0.4684709944872445,
        "fov": 1.5551665857883044
      },
      "linkHotspots": [
        {
          "yaw": 1.5153176540375997,
          "pitch": 0.3213161868407539,
          "rotation": 3.141592653589793,
          "target": "26-kitchen-stove"
        },
        {
          "yaw": 2.465318962237676,
          "pitch": 0.14426091946156916,
          "rotation": 9.42477796076938,
          "target": "27-kitchen-sinks"
        },
        {
          "yaw": 3.114404513137603,
          "pitch": 0.08857960639594964,
          "rotation": 7.853981633974483,
          "target": "14-dining-roomkitchen"
        },
        {
          "yaw": -0.03882621507873907,
          "pitch": 0.43328773122134834,
          "rotation": 3.141592653589793,
          "target": "24-kitchen-fridge"
        },
        {
          "yaw": 0.6275640820852608,
          "pitch": 0.052427858459926924,
          "rotation": 4.71238898038469,
          "target": "23-kitchenkitchen-side"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-kitchen-stove",
      "name": "Kitchen (stove)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -0.6205603115177603,
        "pitch": 0.29532164345785716,
        "fov": 1.5551665857883044
      },
      "linkHotspots": [
        {
          "yaw": -0.05160797178937848,
          "pitch": 0.28450632540161,
          "rotation": 0,
          "target": "23-kitchenkitchen-side"
        },
        {
          "yaw": -0.9041730162410904,
          "pitch": 0.11363424990332405,
          "rotation": 3.141592653589793,
          "target": "24-kitchen-fridge"
        },
        {
          "yaw": -1.7196392259937952,
          "pitch": 0.13836134964624236,
          "rotation": 3.141592653589793,
          "target": "25-kitchen"
        },
        {
          "yaw": -2.4970264156306747,
          "pitch": 0.059037804442656494,
          "rotation": 7.853981633974483,
          "target": "14-dining-roomkitchen"
        },
        {
          "yaw": -2.8827480634137483,
          "pitch": 0.17889418952260883,
          "rotation": 3.141592653589793,
          "target": "27-kitchen-sinks"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-kitchen-sinks",
      "name": "Kitchen (sinks)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.061893121252012406,
        "pitch": 0.27447424475246507,
        "fov": 1.5551665857883044
      },
      "linkHotspots": [
        {
          "yaw": 0.18911868038306778,
          "pitch": 0.3472986177810977,
          "rotation": 3.141592653589793,
          "target": "26-kitchen-stove"
        },
        {
          "yaw": 0.1277281171364386,
          "pitch": 0.1683021266342788,
          "rotation": 0,
          "target": "23-kitchenkitchen-side"
        },
        {
          "yaw": -0.4473601442611894,
          "pitch": 0.05889276581131675,
          "rotation": 3.141592653589793,
          "target": "24-kitchen-fridge"
        },
        {
          "yaw": -0.9060241715861963,
          "pitch": 0.15590410567352464,
          "rotation": 3.141592653589793,
          "target": "25-kitchen"
        },
        {
          "yaw": -1.8671796587851084,
          "pitch": 0.10794136700357804,
          "rotation": 4.71238898038469,
          "target": "14-dining-roomkitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-stairway",
      "name": "Stairway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -1.1084605118611428,
        "pitch": 0.4168058726209942,
        "fov": 1.5551665857883044
      },
      "linkHotspots": [
        {
          "yaw": -0.7676504518584792,
          "pitch": 0.5422741077252677,
          "rotation": 0.7853981633974483,
          "target": "4-foyerdining-room"
        },
        {
          "yaw": -0.05823860026341521,
          "pitch": 0.9757694652135367,
          "rotation": 3.141592653589793,
          "target": "5-foyerstairway"
        },
        {
          "yaw": 0.579290929624614,
          "pitch": 0.3330524553501135,
          "rotation": 7.853981633974483,
          "target": "2-side-entrance"
        },
        {
          "yaw": -1.700708608331162,
          "pitch": 0.20829493327614657,
          "rotation": 0,
          "target": "7-foyerliving-room"
        },
        {
          "yaw": 3.057933580593488,
          "pitch": -0.0006065454179520202,
          "rotation": 3.141592653589793,
          "target": "29-stairway-mid"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-stairway-mid",
      "name": "Stairway (mid)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -0.04569140258759319,
        "pitch": 0.42912273010339774,
        "fov": 1.5551665857883044
      },
      "linkHotspots": [
        {
          "yaw": -0.4553942570136069,
          "pitch": 0.8784237604772862,
          "rotation": 3.141592653589793,
          "target": "28-stairway"
        },
        {
          "yaw": 0.3313234777702423,
          "pitch": 0.2887047455943321,
          "rotation": 0,
          "target": "30-stairwayfloor-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-stairwayfloor-2",
      "name": "Stairway/Floor 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -0.6379191171709646,
        "pitch": 0.2127391702091046,
        "fov": 1.5551665857883044
      },
      "linkHotspots": [
        {
          "yaw": -0.2932101231459665,
          "pitch": 0.37348116969107714,
          "rotation": 3.141592653589793,
          "target": "31-floor-2"
        },
        {
          "yaw": 0.20811498130037442,
          "pitch": -0.07586296120760494,
          "rotation": 1.5707963267948966,
          "target": "32-hallwayclassroom1"
        },
        {
          "yaw": -0.7091639485228782,
          "pitch": -0.169361348943891,
          "rotation": 4.71238898038469,
          "target": "36-hallway"
        },
        {
          "yaw": -2.855205576401712,
          "pitch": 0.8680362502523877,
          "rotation": 3.141592653589793,
          "target": "29-stairway-mid"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-floor-2",
      "name": "Floor 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.3861473198439693,
        "pitch": 0.46394932719458026,
        "fov": 1.5551665857883044
      },
      "linkHotspots": [
        {
          "yaw": -1.4392985145320711,
          "pitch": 0.41650938780155755,
          "rotation": 0,
          "target": "36-hallway"
        },
        {
          "yaw": 1.6282850979644135,
          "pitch": 0.11975597629637491,
          "rotation": 4.71238898038469,
          "target": "32-hallwayclassroom1"
        },
        {
          "yaw": 3.043137772874436,
          "pitch": 0.7437180430565036,
          "rotation": 0,
          "target": "30-stairwayfloor-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "32-hallwayclassroom1",
      "name": "Hallway/Classroom1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -0.7051852014675948,
        "pitch": 0.13712568443152762,
        "fov": 1.5551665857883044
      },
      "linkHotspots": [
        {
          "yaw": -0.014539939496376775,
          "pitch": 0.5867604694370456,
          "rotation": 0,
          "target": "33-classroom1-door"
        },
        {
          "yaw": -1.626246690764301,
          "pitch": 0.6828049320306562,
          "rotation": 3.141592653589793,
          "target": "31-floor-2"
        },
        {
          "yaw": -1.5674457112703841,
          "pitch": 0.2578439023918371,
          "rotation": 0,
          "target": "36-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "33-classroom1-door",
      "name": "Classroom1 (door)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.8073826249435836,
        "pitch": 0.19706142807953597,
        "fov": 1.5551665857883044
      },
      "linkHotspots": [
        {
          "yaw": 1.4451532936569151,
          "pitch": 0.5402315176559522,
          "rotation": 3.141592653589793,
          "target": "34-classroom1-mid"
        },
        {
          "yaw": 0.5067578420664312,
          "pitch": 0.15128486567443744,
          "rotation": 3.141592653589793,
          "target": "35-classroom1-mid-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "34-classroom1-mid",
      "name": "Classroom1 (mid)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -0.538998944195189,
        "pitch": 0.34014797150640064,
        "fov": 1.5551665857883044
      },
      "linkHotspots": [
        {
          "yaw": -0.0928801155688781,
          "pitch": 0.20109384683367892,
          "rotation": 3.141592653589793,
          "target": "35-classroom1-mid-2"
        },
        {
          "yaw": -1.9101029371474958,
          "pitch": 0.51351708996377,
          "rotation": 9.42477796076938,
          "target": "33-classroom1-door"
        },
        {
          "yaw": -1.95481830923001,
          "pitch": 0.07835588915675373,
          "rotation": 4.71238898038469,
          "target": "32-hallwayclassroom1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "35-classroom1-mid-2",
      "name": "Classroom1 (mid-2)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.5965341648658367,
        "pitch": 0.25053527026915745,
        "fov": 1.5551665857883044
      },
      "linkHotspots": [
        {
          "yaw": -2.504674223947969,
          "pitch": 0.04689706215974354,
          "rotation": 4.71238898038469,
          "target": "32-hallwayclassroom1"
        },
        {
          "yaw": 3.122113234146923,
          "pitch": 0.2288618305632184,
          "rotation": 3.141592653589793,
          "target": "34-classroom1-mid"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "36-hallway",
      "name": "Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -1.5504950453189714,
        "pitch": 0.28209685266207174,
        "fov": 1.5551665857883044
      },
      "linkHotspots": [
        {
          "yaw": -1.567706564599515,
          "pitch": 0.4919873298743589,
          "rotation": 0,
          "target": "37-hallwayclassroom2-3"
        },
        {
          "yaw": 1.6210468658273873,
          "pitch": 0.3965402025808906,
          "rotation": 3.141592653589793,
          "target": "31-floor-2"
        },
        {
          "yaw": 1.5920114492491573,
          "pitch": -0.00029956745678916263,
          "rotation": 4.71238898038469,
          "target": "32-hallwayclassroom1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "37-hallwayclassroom2-3",
      "name": "Hallway/Classroom2-3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -0.9163735473453336,
        "pitch": 0.3554292605464937,
        "fov": 1.5551665857883044
      },
      "linkHotspots": [
        {
          "yaw": -0.04639978105264042,
          "pitch": 0.47817383759946175,
          "rotation": 3.141592653589793,
          "target": "38-classroom2"
        },
        {
          "yaw": -1.8069198355842815,
          "pitch": 0.8426040751907689,
          "rotation": 5.497787143782138,
          "target": "41-classroom3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "38-classroom2",
      "name": "Classroom2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -1.56396982219362,
        "pitch": 0.40221084357474624,
        "fov": 1.5551665857883044
      },
      "linkHotspots": [
        {
          "yaw": -1.5502473851068075,
          "pitch": 0.4715065329615591,
          "rotation": 3.141592653589793,
          "target": "39-classroom2-mid"
        },
        {
          "yaw": -1.498556128044017,
          "pitch": 0.05879751265478106,
          "rotation": 3.141592653589793,
          "target": "40-classroom2-window"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "39-classroom2-mid",
      "name": "Classroom2 (mid)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 3.0707296831922424,
        "pitch": 0.3814409913260519,
        "fov": 1.5551665857883044
      },
      "linkHotspots": [
        {
          "yaw": 2.320703293087636,
          "pitch": 0.3483176456247996,
          "rotation": 0,
          "target": "37-hallwayclassroom2-3"
        },
        {
          "yaw": 1.4905753433890396,
          "pitch": 0.25356832090192327,
          "rotation": 3.141592653589793,
          "target": "38-classroom2"
        },
        {
          "yaw": -1.6185684698576814,
          "pitch": 0.20832708047660375,
          "rotation": 3.141592653589793,
          "target": "40-classroom2-window"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "40-classroom2-window",
      "name": "Classroom2 (window)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 1.5254018866937988,
        "pitch": 0.6109454630360247,
        "fov": 1.5551665857883044
      },
      "linkHotspots": [
        {
          "yaw": 1.504263115106082,
          "pitch": 0.5232456225480071,
          "rotation": 3.141592653589793,
          "target": "39-classroom2-mid"
        },
        {
          "yaw": 1.4956590848183016,
          "pitch": 0.06563900973053194,
          "rotation": 3.141592653589793,
          "target": "38-classroom2"
        },
        {
          "yaw": 1.9340196539807248,
          "pitch": 0.06361241719324084,
          "rotation": 1.5707963267948966,
          "target": "37-hallwayclassroom2-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "41-classroom3",
      "name": "Classroom3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.171694630932137,
        "pitch": 0.36591520062876626,
        "fov": 1.5551665857883044
      },
      "linkHotspots": [
        {
          "yaw": -2.603139734763264,
          "pitch": 0.5247592102864136,
          "rotation": 3.141592653589793,
          "target": "42-classroom3-mid"
        },
        {
          "yaw": -2.7883160889748133,
          "pitch": 0.09945308198978609,
          "rotation": 3.141592653589793,
          "target": "43-classroom3-window"
        },
        {
          "yaw": -2.06112883667603,
          "pitch": 0.10194325165322127,
          "rotation": 3.141592653589793,
          "target": "44-classroom3-fireplace"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "42-classroom3-mid",
      "name": "Classroom3 (mid)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -1.4343947345038508,
        "pitch": 0.17613084195682482,
        "fov": 1.5551665857883044
      },
      "linkHotspots": [
        {
          "yaw": -1.4909259040571818,
          "pitch": 0.23289857097331712,
          "rotation": 3.141592653589793,
          "target": "44-classroom3-fireplace"
        },
        {
          "yaw": -2.8613640171490857,
          "pitch": 0.29068352589049695,
          "rotation": 3.141592653589793,
          "target": "43-classroom3-window"
        },
        {
          "yaw": 1.0197299836065117,
          "pitch": 0.43209260745178746,
          "rotation": 3.141592653589793,
          "target": "41-classroom3"
        },
        {
          "yaw": 1.063344439426423,
          "pitch": 0.15432948929671042,
          "rotation": 7.0685834705770345,
          "target": "37-hallwayclassroom2-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "43-classroom3-window",
      "name": "Classroom3 (window)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0.06668794607335471,
        "pitch": 0.27102070654478716,
        "fov": 1.5551665857883044
      },
      "linkHotspots": [
        {
          "yaw": 0.15912640846607928,
          "pitch": 0.49024736832016913,
          "rotation": 3.141592653589793,
          "target": "42-classroom3-mid"
        },
        {
          "yaw": 0.5809979629066948,
          "pitch": 0.29179927171622033,
          "rotation": 3.141592653589793,
          "target": "41-classroom3"
        },
        {
          "yaw": 0.623036623478626,
          "pitch": 0.04910224999068369,
          "rotation": 1.5707963267948966,
          "target": "37-hallwayclassroom2-3"
        },
        {
          "yaw": -0.8284161393497058,
          "pitch": 0.18579834112668436,
          "rotation": 3.141592653589793,
          "target": "44-classroom3-fireplace"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "44-classroom3-fireplace",
      "name": "Classroom3 (fireplace)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 1.5717109302976917,
        "pitch": 0.5148330032432291,
        "fov": 1.5551665857883044
      },
      "linkHotspots": [
        {
          "yaw": 1.5146601381890896,
          "pitch": 0.5386204550654305,
          "rotation": 3.141592653589793,
          "target": "42-classroom3-mid"
        },
        {
          "yaw": 2.6061659368443424,
          "pitch": 0.25648637178277767,
          "rotation": 3.141592653589793,
          "target": "43-classroom3-window"
        },
        {
          "yaw": 1.0763338087277479,
          "pitch": 0.08885190217946715,
          "rotation": 0,
          "target": "37-hallwayclassroom2-3"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
