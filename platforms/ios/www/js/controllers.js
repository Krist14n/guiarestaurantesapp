angular.module('starter.controllers', ['ngCordova'])

var app = angular.module('starter.controllers', ['ngCordova'])

app.run(function($cordovaSplashscreen) {
  setTimeout(function() {
    $cordovaSplashscreen.hide()
  }, 5000)
})

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})


  //Restaurant List

.controller('RestaurantsCtrl', function($scope){
  $scope.restaurants = [
  {
    "id": "1",
    "name": "Adonis",
    "title": "Cocina arabe.",
    "review": "Amplio feudo de atmósfera adulta y familiar. Un clásico en su género. Servicio, consistencia y calidez que se logra gracias a su dueño, el querido Rafat Hibrahim. Pida al centro para compartir, acompañando su comida con el tradicional Arak. Cuenta con tienda gourmet y comida para llevar.",
    "mrecommend": [
      "Kibbe (cualquier presentación).",
      "Corazón de carnero.",
      "Pastel de nata."
    ],
    "calification":[
      "8.7",
      "7.2",
      "8.5"
    ],
    "ideal": [
      "Cenas con show de danza árabe (viernes y sábado).",
      "Comidas de oficina (lunes a viernes); familias (sábado y domingo)."
    ],
    "address": [
      {
        "branch": "Hegel 205. Polanco.",
        "tel": [
          "5531 8081",
          "5531 6940"
        ],
        "parking": "null"
      }
    ],
    "cook": "arab",
    "zone": [
      "polanco"
    ],
    "plancat": [
      "livemusic",
      "business"
    ],
    "plan": [
      "TG",
      "PL"
    ],
    "img": "adonis",
    "cost": "560",
    "map": {
      "latitud": "19.4291754",
      "longitud": "-99.1880118",
      "link": "https://www.google.com.mx/maps/place/Hegel+205,+Polanco,+Miguel+Hidalgo,+11550+Cd+de+M%C3%A9xico,+D.F./@19.4291754,-99.1880118,17z/data=!3m1!4b1!4m2!3m1!1s0x85d1ff5517a8ee37:0xe46cb6b187fd8b28"
    }
  },
  {
    "id": "2",
    "name": "Agua y Sal",
    "title": "Pescados y mariscos.",
    "review": "En el corredor hotelero de Polanco. Amplio y fresco; ecléctica mezcla vintage y contemporánea. Aquí los ceviches mandan. Calidad en materias primas; platillos bien logrados, sencillos y sin pretensiones. Buen costo tomando en cuenta la zona. Gran colección de mezcales.",
    "mrecommend": [
      "Degustación de ceviches.",
      "Tacos de camarón.",
      "Esquites con camarones.",
      "Atún en salsa de higos."
    ],
    "calification":[
      "7.7",
      "7.8",
      "7.7"
    ],
    "ideal": [
      "Comidas de ejecutivos.",
      "Grupos de amigos para botanear y tomar unos drinks."
    ],
    "address": [
      {
        "branch": "Campos Elíseos 199. Polanco Chapultepec.",
        "tel": [
          "5282 2746",
          "5280 9520"
        ],
        "parking": "Valet parking"
      }
      
    ],
    "cook": "seafood",
    "zone": [
      "polanco"
    ],
    "plancat": [
      "business",
      "takecup"
    ],
    "plan": [
      "null"
    ],
    "img": "aguaysal",
    "cost": "490",
    "map": {
      "latitud": "19.427995",
      "longitud": "-99.1928284",
      "link": "https://www.google.com.mx/maps/place/Campos+El%C3%ADseos+199,+Polanco,+Miguel+Hidalgo,+11550+Cd+de+M%C3%A9xico,+D.F./@19.427995,-99.1928284,17z/data=!3m1!4b1!4m2!3m1!1s0x85d201ff0708bef3:0xe7c2f9353be66f29"
    }
  },
  {
    "id": "3",
    "name": "Al Andalus",
    "title": "Cocina árabe.",
    "review": "De lo que vale la pena en el Centro Histórico. Su creador, Mohamed Mazeh, ahora a cargo del comedor del Centro Libanés, continúa dando de comer sumamente rico. Fresco y constante sazón tanto en platillos árabes como internacionales. Vinos libaneses. Nueva sucursal al sur de la ciudad.",
    "mrecommend": [
      "Pescado con tahine.",
      "Shahuarmas (taco típico).",
      "Pastel de dátil."
    ],
    "calification":[
      "8.8",
      "7.4",
      "8.5"
    ],
    "ideal": [
      "Desayunar (diariamente).",
      "Buffet internacional (primer miércoles y segundo domingo de cada mes).",
      "Comer en terraza (música de piano miércoles a domingo en Centro Libanés).",
      "Parrilladas y banquetes a domicilio (muy recomendables)."
    ],
    "address": [
      {
        "branch": "Mesones 171. Centro.",
        "tel": [
          "5522 2562",
          "5522 2528"
        ],
        "parking": "Valet parking y estacionamiento."
      },
      {
        "branch": "Hermes 67 (Centro Libanés). Crédito Constructor.",
        "tel": [
          "5228 9933. Ext. 3503 y 3505."
        ],
        "parking": "Valet parking y estacionamiento."
      },
      {
        "branch": "Av. Glaciar 500. Olivar de los Padres.",
        "tel": [
          "1718 0586"
        ],
        "parking": "Valet parking y estacionamiento."
      }     
      
    ],
    "cook": "arab",
    "zone": [
      "centro",
      "napoles",
      "sur"
    ],
    "plancat": [
      "breakfast",
      "livemusic",
      "terrace"
    ],
    "plan": [
      "B"
    ],
    "img": "alandalus",
    "cost": "560",
    "map": {
      "latitud": "19.427768",
      "longitud": "-99.129241",
      "link": "https://www.google.com.mx/maps/place/Al-Andalus/@19.427768,-99.129241,17z/data=!4m3!3m2!1s0x85d1fecc00482431:0x67558e46a46213b!4b1"
    }
  },
  {
    "id": "4",
    "name": "Alaia",
    "title": "Cocina vasco francesa",
    "review": "Continúa en la lista de los favoritos entre adultos gourmet del sur de esta ciudad. Serio, constante y sobrio. Aquí se va a comer. Recetas de origen con toques contemporáneos mexicanos del Chef propietario Alberto Ituarte. Opiniones encontradas en cuanto a precios. Carta amplia de vinos.",
    "mrecommend": [
      "Tacos de pato.",
      "Huachinango Getaria (must).",
      "Laminado de queso manchego e higo."
    ],
    "calification":[
      "8.8",
      "7.0",
      "8.5"
    ],
    "ideal": [
      "Adultos de paladar exigente.",
      "Familias con niños (fines de semana).",
      "Puro y digestivo en terraza de lujo.",
      "Catering y banquetes."
    ],
    "address": [
      {
        "branch": "Río Magdalena 80. Tizapán San Ángel.",
        "tel": [
          "5616 6336"
        ],
        "parking": "Valet parking."
      }
    ],
    "cook": "vasfran",
    "zone": [
      "sur"
    ],
    "plancat": [
      "wine",
      "fam",
      "business",
      "ter"
    ],
    "plan": [
      "B"
    ],
    "img": "alaia",
    "cost": "690",
    "map": {
      "latitud": "19.3383229",
      "longitud": "-99.1946774",
      "link": "https://www.google.com.mx/maps/place/Eje+10+Sur+(R%C3%ADo+Magdalena)+80,+San+Angel,+%C3%81lvaro+Obreg%C3%B3n,+01000+Cd+de+M%C3%A9xico,+D.F./@19.3383229,-99.1946774,17z/data=!3m1!4b1!4m2!3m1!1s0x85d20000e6000ae9:0xa466d515a4b89eeb"
    }
  },
  {
    "id": "5",
    "name": "Alfredo di Roma",
    "title": "Cocina italiana.",
    "review": "Serio y clásico feudo italiano, de amplios y cómodos espacios, famoso por su Fetuccini Alfredo. Ambiente de empresarios y adultos gourmet que aprecian calidad en materias primas y detalles en servicio. Excelente cava. Precios justificables.",
    "mrecommend": [
      "Prosciutto con melón.",
      "Fetuccini Alfredo.",
      "Pescado a la sal."
    ],
    "calification":[
      "8.3",
      "7.4",
      "8.5"
    ],
    "ideal": [
      "Comidas de negocios o entre amigos que disfrutan de larga sobremesa.",
      "Cenas en pareja.",
      "Familias en fin de semana (área infantil)."
    ],
    "address": [
      {
        "branch": "Campos Elíseos 218 (Hotel Presidente InterContinental). Polanco.",
        "tel": [
          "5327 7776"
        ],
        "parking": "null"
      } 
    ],
    "cook": "ita",
    "zone": [
      "polanco"
    ],
    "plancat": [
      "wine",
      "business"
    ],
    "plan": [
      "null"
    ],
    "img": "alfredodiroma",
    "cost": "700",
    "map": {
      "latitud": "19.4275249",
      "longitud": "-99.193337",
      "link": "https://www.google.com.mx/maps/place/Campos+El%C3%ADseos+218,+Polanco,+Miguel+Hidalgo,+11550+Cd+de+M%C3%A9xico,+D.F./@19.4275249,-99.193337,17z/data=!3m1!4b1!4m2!3m1!1s0x85d201ff033f4663:0xe6e92b06b8531c54"
    }
  },
  {
    "id": "6",
    "name": "Anatol",
    "title": "Cocina internacional.",
    "review": "Cálido espacio, sofisticado pero casual, en la transitada zona de Polanquito. Ambiente relajado y cosmopolita de amantes de la buena mesa. Cocina respetuosa de los sabores a cargo de Justin Ermin, con ingredientes mexicanos y de temporada. Buen servicio. Must: Hamburguesa Anatol.",
    "mrecommend": [
      "Clam chowder.",
      "Sopa de frijol con foie gras ahumado.",
      "Hamachi Japón.",
      "Ensalada de la casa."
    ],
    "calification":[
      "8.3",
      "7.1",
      "8.3"
    ],
    "ideal": [
      "Comidas de negocios y cenas en pareja.",
      "Brunch dominical.",
      "Eventos en petit comité."
    ],
    "address": [
      {
        "branch": "Masaryk 390 (Hotel Las Alcobas). Polanco.",
        "tel": [
          "3300 3950"
        ],
        "parking": "Valet parking."
      }
    ],
    "cook": "int",
    "zone": [
      "polanco"
    ],
    "plancat": [
      "brunch",
      "business",
      "desserts",
      "romantic",
      "takecup"
    ],
    "plan": [
      "null"
    ],
    "img": "anatol",
    "cost": "540",
    "map": {
      "latitud": "19.4316922",
      "longitud": "-99.1979752",
      "link": "https://www.google.com.mx/maps/place/Presidente+Masaryk+390,+Polanco,+Miguel+Hidalgo,+11560+Cd+de+M%C3%A9xico,+D.F./@19.4316922,-99.1979752,17z/data=!3m1!4b1!4m2!3m1!1s0x85d202025e393477:0xc0e06a80c7facee7"
    }
  },
  {
    "id": "7",
    "name": "Angelopolitano",
    "title": "Cocina poblana contemporánea.",
    "review": "Sencillo, pero con estilo. Ambiente de adultos jóvenes bohemios. Opiniones encontradas entre mis mystery fooders: algunos aplauden el toque personalizado del Chef Gerardo Quezadas; otros lo consideran pretencioso y falto de consistencia. El must: moles y mezcales. Buen costo-beneficio. Miscelánea gourmet artesanal (mermeladas, salsas, licores, rompopes).",
    "mrecommend": [
      "Cazuelas de entrada.",
      "Chalupas.",
      "Champandongo.",
      "Pepián verde."
    ],
    "calification":[
      "7.4",
      "7.5",
      "7.2"
    ],
    "ideal": [
      "Degustar platillos poblanos sin salir de la ciudad.",
      "Disfrutar cemitas acompañadas de mezcal."
    ],
    "address": [
      {
        "branch": "Puebla 371. Roma Norte.",
        "tel": [
          "6391 2121",
          "6391 2020"
        ],
        "parking": "Valet parking."
      }
    ],
    "cook": "mexican",
    "zone": [
      "roma"
    ],
    "plancat": [
      "null"
    ],
    "plan": [
      "TG"
    ],
    "img": "angelopolitano",
    "cost": "520",
    "map": {
      "latitud": "19.4204123",
      "longitud": "-99.1731719",
      "link": "https://www.google.com.mx/maps/place/Puebla+371,+Roma+Norte,+Cuauht%C3%A9moc,+06700+Cd+de+M%C3%A9xico,+D.F./@19.4204123,-99.1731719,17z/data=!3m1!4b1!4m2!3m1!1s0x85d1ff48b29e49d5:0x3df0e07672dbc11a"
    }
  },
  {
    "id": "8",
    "name": "Argentalia",
    "title": "Cocina ítalo argentina.",
    "review": "Relajado y casual, aunque algo desangelado. Acomodado en el gusto de los comensales de esta zona escasa de restaurantes por su justa relación precio-calidad y servicio atento. Buenas pizzas a la leña. Pastas caseras. Carta de vinos muy comercial.",
    "mrecommend": [
      "Provolone a la parrilla.",
      "Fettuccine Conca D’oro.",
      "Bife de chorizo."
    ],
    "calification":[
      "7.6",
      "7.2",
      "7.5"
    ],
    "ideal": [
      "Comidas de negocios y gente que trabaja por la zona (entre semana).",
      "Familias (fines de semana).",
      "Fumadores (terraza).",
      "Eventos privados."
    ],
    "address": [
      {
        "branch": "Jiménez Cantú 113 J. Loma de Valle Escondido. Atizapán.",
        "tel": [
          "5308 4500"
        ],
        "parking": "Estacionamiento."
      }
    ],
    "cook": "argentina",
    "zone": [
      "satelite"
    ],
    "plancat": [
      "business"
    ],
    "plan": [
      "null"
    ],
    "img": "argentalia",
    "cost": "530",
    "map": {
      "latitud": "19.5273552",
      "longitud": "-99.2630341",
      "link": "https://www.google.com.mx/maps/place/V%C3%ADa+Doctor+Jorge+Jim%C3%A9nez+Cant%C3%BA+113,+Nuevo+Madin,+52989+Cd+L%C3%B3pez+Mateos,+MEX/@19.5273552,-99.2630341,17z/data=!3m1!4b1!4m2!3m1!1s0x85d21cb15c260df7:0x4ab3378f6523c28f"
    }
  },
  {
    "id": "9",
    "name": "Arturo's",
    "title": "Cocina francesa tradicional.",
    "review": "A mi gusto de lo mejor en la Condesa en cuanto a comida. Atmósfera adulta gourmet, política, empresarial. Profesionalismo, experiencia y dedicación son constantes del concurrido feudo de Arturo Cervantes. Buenos vinos franceses a precios muy accesibles. Servicio conocedor.",
    "mrecommend": [
      "Patata rellena de caracoles.",
      "Filete de salmón con salsa de cangrejo y tuétano.",
      "Costillitas de cordero con ratatouille.",
      "Strudel de manzana."
    ],
    "calification":[
      "9.1",
      "8.5",
      "8.8"
    ],
    "ideal": [
      "Familias en fin de semana.",
      "Cenas con música de piano (jueves y viernes).",
      "Terraza poco agradable, pero pasa."
    ],
    "address": [
      {
        "branch": "Cuernavaca 68. Condesa.",
        "tel": [
          "5553 0403",
          "5286 4771"
        ],
        "parking": "null"
      }
    ],
    "cook": "french",
    "zone": [
      "roma"
    ],
    "plancat": [
      "music"
    ],
    "plan": [
      "null"
    ],
    "img": "arturos",
    "cost": "670",
    "map": {
      "latitud": "19.4139272",
      "longitud": "-99.1753161",
      "link": "https://www.google.com.mx/maps/place/Calle+Cuernavaca+68,+Condesa,+Cuauht%C3%A9moc,+06140+Cd+de+M%C3%A9xico,+D.F./@19.4139272,-99.1753161,17z/data=!3m1!4b1!4m2!3m1!1s0x85d1ff4479f82bbd:0x53b87da2e660e9c4"
    }
  },
  {
    "id": "10",
    "name": "Astrid & Gastón",
    "title": "Cocina peruana.",
    "review": "Gastón Acurio se mantiene como el mejor exponente de la gastronomía peruana en México. El pan es uno de sus mejores secretos. Ambiente acogedor, buen servicio y buena música son parte de la experiencia. Surtida cava a precios razonables. Pida Pisco Sour como aperitivo, imperdible.",
    "mrecommend": [
      "Camarones crujientes.",
      "Chaufa Mar y Tierra.",
      "Cochinillo.",
      "Suspiro limeño; Picarones (dulce tradicional)."
    ],
    "calification":[
      "8.5",
      "7.2",
      "8.5"
    ],
    "ideal": [
      "Ocasiones románticas.",
      "Sibaritas con alto presupuesto.",
      "Negocios o señoras en grupo.",
      "Terraza con chimenea."
    ],
    "address": [
      {
        "branch": "Tennyson 117. Polanco.",
        "tel": [
          "5282 2666",
          "5282 2481"
        ],
        "parking": "null"
      }
    ],
    "cook": "peruana",
    "zone": [
      "polanco"
    ],
    "plancat": [
      "business",
      "romantic",
      "desserts"
    ],
    "plan": [
      "null"
    ],
    "img": "astridgaston",
    "cost": "770",
    "map": {
      "latitud": "19.4318372",
      "longitud": "-99.1949638",
      "link": "https://www.google.com.mx/maps/place/Tennyson+117,+Polanco,+Miguel+Hidalgo,+11550+Cd+de+M%C3%A9xico,+D.F./@19.4318372,-99.1949638,17z/data=!3m1!4b1!4m2!3m1!1s0x85d202018cc8a373:0x6d6ecbbe1b7cecd8"
    }
  },
  {
    "id": "11",
    "name": "Atalaya",
    "title": "Cocina internacional con acento mexicano y español.",
    "review": "Recién remodelado. La mejor opción en esa zona. Comida española sencilla y casera pero con calidad y sazón de mayora. Eficiente y personalizado servicio a cargo de su propietario Rodrigo González. Pregunte por los especiales de temporada. Renovada cava y espacio delicatesen.",
    "mrecommend": [
      "Paella; Fideua.",
      "Riñones al Jerez.",
      "Lechón al horno."
    ],
    "calification":[
      "8.7",
      "7.7",
      "8.8"
    ],
    "ideal": [
      "Desayunos.",
      "Comidas de negocios entre semana; familias fines de semana (actividades infantiles).",
      "Cenas en pareja o grupos de amigos (lleve su vino predilecto, descorche gratis jueves a sábado)."
    ],
    "address": [
      {
        "branch": "Prol. Bosques de Reforma 1813 (Centro Comercial Pabellón Bosques). Bosques de las Lomas.",
        "tel": [
          "5259 3636",
          "5259 2428",
          "5259 2423"
        ],
        "parking": "null"
      }
    ],
    "cook": "int",
    "zone": [
      "santafe"
    ],
    "plancat": [
      "breakfast",
      "fam"
    ],
    "plan": [
      "null"
    ],
    "img": "atalaya",
    "cost": "650",
    "map": {
      "latitud": "19.3828545",
      "longitud": "-99.2680836",
      "link": "https://www.google.com.mx/maps/place/Av+Bosque+de+Reforma+1813,+Pabell%C3%B3n+Bosques,+Lomas+del+Chamizal,+Cuajimalpa+de+Morelos,+05100+Cd+de+M%C3%A9xico,+D.F./@19.3828545,-99.2680836,17z/data=!3m1!4b1!4m2!3m1!1s0x85d2012665b97c5d:0x233d4137db7b3dde"
    }
  },
  {
    "id": "12",
    "name": "Au Pied de Cochon",
    "title": "Cocina francesa auténtica.",
    "review": "Glamoroso, sofisticado, seguro, confortable, limpio y con servicio 24 horas al día. Por mucho, Polanco sigue siendo el must; Santa Fe se siente aburrido y la comida no acaba de satisfacer expectativas. Festivales gastronómicos; amplísima carta de vinos.",
    "mrecommend": [
      "Sopa de cebolla.",
      "Cazuela de mejillones.",
      "Costillas de cordero."
    ],
    "calification":[
      "8.3",
      "8.0",
      "8.4"
    ],
    "ideal": [
      "Cenar después de algún concierto o espectáculo por la zona.",
      "Familias en fin de semana (área y menú infantil).",
      "Eventos privados."
    ],
    "address": [
      {
        "branch": "Campos Elíseos 218 (Hotel Presidente InterContinental). Polanco",
        "tel": [
          "5327 7756"
        ],
        "parking": "null"
      },
      {
        "branch": "Juan Salvador Agraz 97 (Hotel Presidente InterContinental). Santa Fe.",
        "tel": [
          "1105 0180"
        ],
        "parking": "null"
      }
    ],
    "cook": "french",
    "zone": [
      "polanco",
      "santafe"
    ],
    "plancat": [
      "wine",
      "sleepless",
      "fam",
      "business",
      "romantic",
      "ter",
      "takecup"
    ],
    "plan": [
      "null"
    ],
    "img": "aupied",
    "cost": "690",
    "map": {
      "latitud": "19.4275249",
      "longitud": "-99.193337",
      "link": "https://www.google.com.mx/maps/place/Campos+El%C3%ADseos+218,+Polanco,+Miguel+Hidalgo,+11550+Cd+de+M%C3%A9xico,+D.F./@19.4275249,-99.193337,17z/data=!3m1!4b1!4m2!3m1!1s0x85d201ff033f4663:0xe6e92b06b8531c54"
    }
  },
  {
    "id": "13",
    "name": "Azul Histórico",
    "title": "Cocina mexicana.",
    "review": "Exitoso, fresco y ambientado comedero dentro de ex palacio colonial. Las quejas sobre servicio ocasionalmente prepotente no impiden que sea una gran alternativa en el Centro Histórico para disfrutar la sazón del Chef Ricardo Muñoz Zurita, “su majestad”, así como las especialidades de sus feudos predecesores. Imperdibles: moles y festivales gastronómicos. Muy buen costo beneficio. Reconocimiento de Higiene MB.",
    "mrecommend": [
      "Salpicón de venado.",
      "Tamal de frijol.",
      "Buñuelos de pato en mole negro ¡must!.",
      "Chocolate de agua; Pastel de mamey."
    ],
    "calification":[
      "9.0",
      "8.7",
      "8.7"
    ],
    "ideal": [
      "Desayunar, comer y cenar (Condesa y Centro).",
      "Desayunar y comer (C.U.).",
      "Tarde de drinks (mezcales y vinos mexicanos)."
    ],
    "address": [
      {
        "branch": "Azul Histórico: Isabel La Católica 30. Centro.",
        "tel": [
          "5510 1316",
          "5521 3295"
        ],
        "parking": "Valet parking."
      },
      {
        "branch": "Azul Condesa: Nuevo León 68. Condesa.",
        "tel": [
          "5286 6380",
          "5286 6228"
        ],
        "parking": "null"
      },
      {
        "branch": "Azul y Oro: Centro Cultural Universitario y Torre de Ingeniería. Ciudad Universitaria.",
        "tel": [
          "5622 7135",
          "5623 3500"
        ],
        "parking": "null"
      }
    ],
    "cook": "mexican",
    "zone": [
      "centro",
      "roma",
      "sur"
    ],
    "plancat": [
      "cool",
      "brunch",
      "romantic",
      "ter"
    ],
    "plan": [
      "null"
    ],
    "img": "azulhistorico",
    "cost": "490",
    "map": {
      "latitud": "19.4329887",
      "longitud": "-99.1363409",
      "link": "https://www.google.com.mx/maps/place/Isabel+la+Cat%C3%B3lica+30,+Centro,+Cuauht%C3%A9moc,+06000+Cd+de+M%C3%A9xico,+D.F./@19.4329887,-99.1363409,17z/data=!3m1!4b1!4m2!3m1!1s0x85d1fed2ceedef6b:0x6fe0a98811fffad0"
    }
  },
  {
    "id": "14",
    "name": "Bakea",
    "title": "Cocina vasco-francesa.",
    "review": "De mis 5 favoritos en el D.F. Eficiente servicio, irreprochable calidad de insumos, cocina franca y sin rodeos magistralmente ejecutada por el Chef Vicente Echegaray (dedicado 100% a su negocio), que satisfacen expectativas de clientes conocedores. Tienda gourmet y banquetes Bakea a domicilio.",
    "mrecommend": [
      "Pescado del día en mantequilla negra.",
      "Short rib de res horneado.",
      "Rocas de chocolate y avellana."
    ],
    "calification":[
      "9.3",
      "7.7",
      "8.8"
    ],
    "ideal": [
      "Comer o cenar con calma. (NO LLEVAR niños pequeños).",
      "Celebrar acontecimientos románticos o formales.",
      "Fumadores (pequeña terraza)."
    ],
    "address": [
      {
        "branch": "Sierra Ventana 700-B. Lomas de Chapultepec.",
        "tel": [
          "5520 7472",
          "5520 6954"
        ],
        "parking": "null"
      }
    ],
    "cook": "vasfran",
    "zone": [
      "lomas"
    ],
    "plancat": [
      "sleepless",
      "wine",
      "business",
      "romantic"
    ],
    "plan": [
      "B",
      "TG",
      "PL"
    ],
    "img": "bakea",
    "cost": "870",
    "map": {
      "latitud": "19.4161283",
      "longitud": "-99.226102",
      "link": "https://www.google.com.mx/maps/place/Calle+Sierra+Ventana+700,+Lomas+de+Chapultepec,+Lomas+Barrilaco,+11000+Miguel+Hidalgo,+D.F./@19.4161283,-99.226102,17z/data=!3m1!4b1!4m2!3m1!1s0x85d2019b2633e75b:0x5476fcf56ded884"
    }
  },
  {
    "id": "15",
    "name": "Bellaria",
    "title": "Cocina italiana.",
    "review": "Pequeño y sobrio. Fina calidez, buena cocina, precios accesibles y amable servicio. La pasta y los calamares a la parrilla destacan, por mucho, entre todos los restaurantes italianos de esta competida ciudad. Terraza de Santa Fe un must. Reconocimiento de Higiene MB.",
    "mrecommend": [
      "Rigatoni con alcachofas.",
      "Pizza burrata.",
      "Pescado a la sal; Calamares a la plancha.",
      "Filete de res al balsámico."
    ],
    "calification":[
      "8.3",
      "8.3",
      "8.4"
    ],
    "ideal": [
      "Grupos pequeños de adultos contemporáneos.",
      "Plan romántico."
    ],
    "address": [
      {
        "branch": "Masaryk 514. Polanco.",
        "tel": [
          "5282 0413",
          "5282 0414"
        ],
        "parking": "null"
      },
      {
        "branch": "Juan Salvador Agraz 37 (Edificio Escape). Santa Fe.",
        "tel": [
          "2591 0521"
        ],
        "parking": "null"
      }
    ],
    "cook": "ita",
    "zone": [
      "polanco",
      "santafe"
    ],
    "plancat": [
      "fam",
      "pizza",
      "romantic"
    ],
    "plan": [
      "null"
    ],
    "img": "bellaria",
    "cost": "620",
    "map": {
      "latitud": "19.4322359",
      "longitud": "-99.2035793",
      "link": "https://www.google.com.mx/maps/place/Presidente+Masaryk+514,+Polanco,+Miguel+Hidalgo,+11550+Cd+de+M%C3%A9xico,+D.F./@19.4322359,-99.2035793,17z/data=!3m1!4b1!4m2!3m1!1s0x85d2021d07acf0ff:0x86dcaf50c728419"
    }
  },
  {
    "id": "16",
    "name": "Belmondo",
    "title": "Sándwiches gourmet.",
    "review": "Pequeña deli urban trendy, con cierto aire vintage. Atmósfera de adultos contemporáneos. Sencillo menú sin pretensiones, donde las estrellas son los sándwiches y las ensaladas. Variada y bien presentada coctelería. Buena relación precio-calidad. Servicio a domicilio.",
    "mrecommend": [
      "Tostadas de pato.",
      "Sándwich Reuben.",
      "Pastel de zanahoria."
    ],
    "calification":[
      "7.5",
      "7.7",
      "7.0"
    ],
    "ideal": [
      "Comidas en pequeños grupos de amigos; cenas en pareja.",
      "Desayunos (sábado y domingo).",
      "Tomar unos drinks en ambiente bohemian chic."
    ],
    "address": [
      {
        "branch": "Tabasco 109. Roma.",
        "tel": [
          "6273 2079"
        ],
        "parking": "null"
      }
    ],
    "cook": "sandwich",
    "zone": [
      "roma"
    ],
    "plancat": [
      "null"
    ],
    "plan": [
      "SD",
      "PL"
    ],
    "img": "belmondo",
    "cost": "380",
    "map": {
      "latitud": "19.4196728",
      "longitud": "-99.1578015",
      "link": "https://www.google.com.mx/maps/place/Tabasco+109,+Col+Roma,+Cuauht%C3%A9moc,+06700+Cuauht%C3%A9moc,+D.F./@19.4196728,-99.1578015,17z/data=!3m1!4b1!4m2!3m1!1s0x85d1ff3aa34a4f4f:0xcd783e7910be0a83"
    }
  },
  {
    "id": "17",
    "name": "Biko",
    "title": "Cocina de autor con influencia vasca.",
    "review": "Polémico feudo de sencilla decoración, fino minimalismo. A pesar de descender en la lista de los 50 Best, nadie le quita a Mikel Alonso la audacia y creatividad que lo han colocado como insignia de la cocina evolutiva. Precios altos. Atinada selección de vinos. Capacitado servicio.",
    "mrecommend": [
      "Menú degustación con maridaje."
    ],
    "calification":[
      "9.0",
      "8.0",
      "8.8"
    ],
    "ideal": [
      "Una experiencia gourmet.",
      "Acontecimientos especiales en Casa Biko.",
      "Cenar con calma en parejas de adultos contemporáneos."
    ],
    "address": [
      {
        "branch": "Masaryk 407 (Plaza Zentro). Polanco.",
        "tel": [
          "5282 2064"
        ],
        "parking": "null"
      }
    ],
    "cook": "null",
    "zone": [
      "polanco"
    ],
    "plancat": [
      "chic",
      "wine",
      "business",
      "desserts",
      "romantic"
    ],
    "plan": [
      "null"
    ],
    "img": "biko",
    "cost": "1200",
    "map": {
      "latitud": "19.4321212",
      "longitud": "-99.1987203",
      "link": "https://www.google.com.mx/maps/place/Presidente+Masaryk+407,+ZENTRO+LA+PLAZA,+Polanco,+Miguel+Hidalgo,+11550+Cd+de+M%C3%A9xico,+D.F./@19.4321212,-99.1987203,17z/data=!3m1!4b1!4m2!3m1!1s0x85d20202f1810a39:0xbc98d05cac0b6863"
    }
  },
  {
    "id": "18",
    "name": "Bistrot Bèc",
    "title": "Cocina francesa e internacional.",
    "review": "Pequeño y acogedor. Ambientado y divertido place to be en Polanquito que ha mejorado notablemente su cocina. Atmósfera trendy y relajada; terraza para ver y ser visto. El platillo estrella: estofado de res bourguignon.",
    "mrecommend": [
      "Sopa de cebolla.",
      "Espárragos a la parrilla.",
      "Pulpo caponata.",
      "Hamburguesa de res Bèc (must)."
    ],
    "calification":[
      "7.7",
      "9.0",
      "8.0"
    ],
    "ideal": [
      "Cenar o tomar un drink en ambiente de gente nice.",
      "Amantes del vino.",
      "Familias en fin de semana (menú infantil)."
    ],
    "address": [
      {
        "branch": "Virgilio 8. Polanco.",
        "tel": [
          "5280 9043"
        ],
        "parking": "Valet parking."
      }
    ],
    "cook": "french",
    "zone": [
      "polanco"
    ],
    "plancat": [
      "wine",
      "fam",
      "takecup"
    ],
    "plan": [
      "null"
    ],
    "img": "bistrotbec",
    "cost": "660",
    "map": {
      "latitud": "19.4305866",
      "longitud": "-99.197319",
      "link": "https://www.google.com.mx/maps/place/Virgilio+8,+Polanco,+Miguel+Hidalgo,+11550+Miguel+Hidalgo,+D.F./@19.4305866,-99.197319,17z/data=!3m1!4b1!4m2!3m1!1s0x85d20202712f6913:0x516702cbd1625b3"
    }
  },
  {
    "id": "19",
    "name": "Bistrot Charlotte",
    "title": "Cocina mediterránea.",
    "review": "Pequeño feudo 100% casero. Un clásico de Polanco. Seria y honesta cocina mediterránea con influencia francesa; personalmente atendido por Charlotte Williamson, su propietaria. Ambiente de adulto gourmet que aprecia la sazón de los platillos. Servicio amable y paciente. Abierto solamente para comidas domingo a viernes; sábado cerrado.",
    "mrecommend": [
      "Albóndigas griegas.",
      "Escargots.",
      "Risotto con camarones.",
      "Banoffee."
    ],
    "calification":[
      "8.3",
      "7.0",
      "8.0"
    ],
    "ideal": [
      "Ejecutivos y vecinos de la zona.",
      "Acompañar la comida con vinos a buen precio."
    ],
    "address": [
      {
        "branch": "Lope de Vega 341. Polanco.",
        "tel": [
          "5250 4180"
        ],
        "parking": "null"
      }
    ],
    "cook": "mediterranea",
    "zone": [
      "polanco"
    ],
    "plancat": [
      "wine"
    ],
    "plan": [
      "null"
    ],
    "img": "bistrotcharlotte",
    "cost": "450",
    "map": {
      "latitud": "19.4318859",
      "longitud": "-99.1874214",
      "link": "https://www.google.com.mx/maps/place/Lope+de+Vega+341,+Polanco,+Miguel+Hidalgo,+11550+Cd+de+M%C3%A9xico,+MX/@19.4318859,-99.1874214,17z/data=!3m1!4b1!4m2!3m1!1s0x85d1f8aade9663ef:0xe1e8fec24b99d488"
    }

  },
  {
    "id": "20",
    "name": "Bonito Popfood",
    "title": "Cocina internacional contemporánea.",
    "review": "Cool, amplio y popular entre asiduos condeseros, dentro de espacio diseñado por Luis Barragán. Ambiente bohemio y empresarial. Algunas quejas sobre la falta de control de calidad en algunos platillos. Buen servicio. Interesante carta de cócteles.",
    "mrecommend": [
      "Ostiones Rockefeller.",
      "Pizza de brie con hongos.",
      "Hamburguesa de foie gras y kobe.",
      "Piña caramelizada."
    ],
    "calification":[
      "7.5",
      "8.5",
      "8.3"
    ],
    "ideal": [
      "Precopeo.",
      "Escuchar música en vivo.",
      "Fumadores (terraza)."
    ],
    "address": [
      {
        "branch": "Nuevo León 103. Condesa.",
        "tel": [
          "5286 6165",
          "5286 6169"
        ],
        "parking": "Valet parking."
      }
    ],
    "cook": "int",
    "zone": [
      "roma"
    ],
    "plancat": [
      "cool",
      "fam",
      "singles",
      "takecup"
    ],
    "plan": [
      "null"
    ],
    "img": "bonitopopfood",
    "cost": "550",
    "map": {
      "latitud": "19.4110197",
      "longitud": "-99.1727193",
      "link": "https://www.google.com.mx/maps/place/Nuevo+León+103,+Hipódromo+Condesa,+Cuauhtémoc,+06170+Cd+de+México,+D.F./@19.4110197,-99.1727193,17z/data=!3m1!4b1!4m2!3m1!1s0x85d1ff4179b0fe87:0x30e8aeb0b9bf005"
    }
  },
  {
    "id": "21",
    "name": "Bretón Rosticeros",
    "title": "Rosticería.",
    "review": "Original, pequeño y con clase; ambiente casual de adultos contemporáneos. Las estrellas son el horno rosticero y las especialidades estacionales preparadas en él. Hasta ahora mis mystery fooders coinciden: sazón consistente y bien lograda. Servicio jovial. Interesantes eventos gastronómicos. Carta de vinos a la altura. Lunes cerrado.",
    "mrecommend": [
      "Chuletón de puerco.",
      "Ramen de rostizados.",
      "Pollo orgánico en adobo caribeño.",
      "Porquetita pibil."
    ],
    "calification":[
      "8.5",
      "8.4",
      "8.0"
    ],
    "ideal": [
      "Comer o cenar en parejas o grupos pequeños de amigos.",
      "Fumadores (agradable terraza)."
    ],
    "address": [
      {
        "branch": "Zamora 33. Condesa.",
        "tel": [
          "5211 7196"
        ],
        "parking": "Valet parking."
      }
    ],
    "cook": "null",
    "zone": [
      "roma"
    ],
    "plancat": [
      "cool",
      "ter"
    ],
    "plan": [
      "null"
    ],
    "img": "breton",
    "cost": "520",
    "map": {
      "latitud": "19.4183551",
      "longitud": "-99.1770774",
      "link": "https://www.google.com.mx/maps/place/Zamora+33,+Condesa,+Cuauhtémoc,+06140+Cd+de+México,+D.F./@19.4183551,-99.1770774,17z/data=!3m1!4b1!4m2!3m1!1s0x85d1ff456efe04a9:0x5670d64916c50f7f"
    }
  },
  {
    "id": "22",
    "name": "Bros Oyster Bar",
    "title": "Pescados y mariscos.",
    "review": "Cálido, acogedor y sin pretensiones; clásico oyster bar predilecto de mis encuestados por su ambiente casual con clase. Este es el original; no tiene que ver con otros restaurantes del mismo nombre. Notable mejoría en comida y servicio. Buena carta de vinos a precios razonables.",
    "mrecommend": [
      "Cangrejo de nieve y almeja viva (must).",
      "Clam chowder.",
      "Prime rib."
    ],
    "calification":[
      "8.0",
      "8.1",
      "8.0"
    ],
    "ideal": [
      "Comidas y cenas entre amigos o parejas.",
      "Fumadores (terraza)."
    ],
    "address": [
      {
        "branch": "Lope de Vega 226. Polanco.",
        "tel": [
          "5250 1325"
        ],
        "parking": "Valet parking."
      }
    ],
    "cook": "seafood",
    "zone": [
      "polanco"
    ],
    "plancat": [
      "business"
    ],
    "plan": [
      "null"
    ],
    "img": "null",
    "cost": "770",
    "map": {
      "latitud": "19.4344901",
      "longitud": "-99.1871898",
      "link": "https://www.google.com.mx/maps/place/Lope+de+Vega+226,+Polanco,+Miguel+Hidalgo,+11550+Cd+de+México,+D.F./@19.4344901,-99.1871898,17z/data=!3m1!4b1!4m2!3m1!1s0x85d1f8aa4d3a2c8b:0xb4f6d942f175d271"
    }
  },
  {
    "id": "23",
    "name": "Cabanna",
    "title": "Pescados y mariscos.",
    "review": "Lo nuevo de Grupo Los Arcos. Estilo botanero-casual. Ambientación moderna, relajada e informal. Mariscos de calidad y campechano servicio. Sucursales en Culiacán y Tijuana. Próxima apertura en Santa Fe. Variada coctelería; pruebe el ron peppino.",
    "mrecommend": [
      "Tostada de atún sellado o en cubos.",
      "Kesitos Cabanna.",
      "Aguachile de camarón.",
      "Volcán de dulce de leche."
    ],
    "calification":[
      "No se califica por ser de reciente apertura."
    ],
    "ideal": [
      "Comidas de grupos de amigos y familias (menú infantil).",
      "Drinks entre cuates (DJ viernes y sábado desde las 8 p.m.).",
      "Fumadores (ambientada terraza)."
    ],
    "address": [
      {
        "branch": "Masaryk 134. Polanco.",
        "tel": [
          "5545 2226",
          "5545 2227"
        ],
        "parking": "Valet parking."
      }
    ],
    "cook": "seafood",
    "zone": [
      "polanco"
    ],
    "plancat": [
      "chic",
      "fam",
      "singles",
      "ter",
      "takecup"
    ],
    "plan": [
      "null"
    ],
    "img": "cabanna",
    "cost": "450",
    "map": {
      "latitud": "19.4316199",
      "longitud": "-99.1961153",
      "link": "https://www.google.com.mx/maps/place/Presidente+Masaryk+134,+Polanco,+Miguel+Hidalgo,+11550+Cd+de+México,+D.F./@19.4316199,-99.1961153,17z/data=!3m1!4b1!4m2!3m1!1s0x85d2020217c1a29f:0xca0a7103113985bc"
    }
  },
  {
    "id": "24",
    "name": "Cantina Guadiana 19",
    "title": "Cocina mexicana.",
    "review": "Cantina mexicana estilo contemporánea, dividida en bar y comedor, que se consolida en el gusto de los asiduos a la zona. Sabrosos platillos a cargo de los Chefs Mónica Beteta y Alejandro Montes con la calidad y sazón características de la casa. Servicio experimentado. Buen costo beneficio. Cerrado fines de semana. Reconocimiento de Higiene MB.",
    "mrecommend": [
      "Tacos de chicharrón prensado.",
      "Huachinango a la talla.",
      "Filete Don Pepe."
    ],
    "calification":[
      "No se califica porque el autor es socio fundador."
    ],
    "ideal": [
      "Ver eventos deportivos.",
      "Comidas de negocios; entre parejas y amigos.",
      "Tomar la copa por la tarde."
    ],
    "address": [
      {
        "branch": "Río Guadiana 19. Cuauhtémoc.",
        "tel": [
          "5535 0951",
          "5566 8995"
        ],
        "parking": "Valet parking."
      }
    ],
    "cook": "mexican",
    "zone": [
      "reforma"
    ],
    "plancat": [
      "business",
      "takecup"
    ],
    "plan": [
      "null"
    ],
    "img": "cantinaguadiana",
    "cost": "490",
    "map": {
      "latitud": "19.4306589",
      "longitud": "-99.1627261",
      "link": "https://www.google.com.mx/maps/place/R%C3%ADo+Guadiana+19,+Centro,+Cuauhtémoc,+06000+Cd+de+México,+D.F./@19.4306589,-99.1627261,17z/data=!3m1!4b1!4m2!3m1!1s0x85d1ff34a3abc7b1:0x98f5660dfacf99d5"
    }
  },
  {
    "id": "25",
    "name": "Cantinetta del Becco",
    "title": "Cocina italiana con acento mediterráneo.",
    "review": "De los feudos más concurridos en Park Plaza. Cómodo y moderno. Ambiente chic y cosmopolita. Cocina abierta, pasta hecha al momento. Pida mesa en la terraza. Muchos lo consideran muy caro. Capacitado servicio. El plus: catering a domicilio (Becco in Casa). Recién inauguraron tienda de vinos italianos de Italwines.",
    "mrecommend": [
      "Tagliolini al mascarpone.",
      "Risotto con trufa.",
      "Espaldilla de res al Barolo.",
      "Lingote de avellana."
    ],
    "calification":[
      "8.7",
      "8.5",
      "8.3"
    ],
    "ideal": [
      "Comidas formales (comedor) o en plan relax (terraza).",
      "Ver gente bonita.",
      "Eventos privados (desde 12 hasta 100 personas)."
    ],
    "address": [
      {
        "branch": "Javier Barros Sierra 540 (Park Plaza). Lomas de Santa Fe.",
        "tel": [
          "5292 6816",
          "5292 6817"
        ],
        "parking": "Valet parking."
      }
    ],
    "cook": "ita",
    "zone": [
      "santafe"
    ],
    "plancat": [
      "wine",
      "business",
      "ter",
      "takecup"
    ],
    "plan": [
      "B",
      "TG",
      "PL"
    ],
    "img": "cantinettadelbeco",
    "cost": "910",
    "map": {
      "latitud": "19.3653301",
      "longitud": "-99.2587238",
      "link": "https://www.google.com.mx/maps/place/Javier+Barros+Sierra+540,+Zedec+Santa+Fe,+Álvaro+Obregón,+01219+Cd+de+México,+D.F./@19.3653301,-99.2587238,17z/data=!3m1!4b1!4m2!3m1!1s0x85d200c2f8e7f861:0x2100c2f60b9cd72"
    }
  },
  {
    "id": "26",
    "name": "Carolo",
    "title": "Cocina mediterránea contemporánea.",
    "review": "Lugares muy bien puestos, relajados y modernos. Sabrosa cocina, fresca, con personalidad y honestidad. Servicio amable. Variada carta de vinos y coctelería. Tienda gourmet de altura; rica panadería (panques, must). Carolo 44, en Santa Fe, el mismo concepto pero con un twist más juvenil.",
    "mrecommend": [
      "Alcachofa al carbón.",
      "Salmón al horno.",
      "Hamburguesa 44.",
      "Risotto alcachofa."
    ],
    "calification":[
      "8.0",
      "8.2",
      "8.3"
    ],
    "ideal": [
      "Cócteles.",
      "Familias (desayunos hasta cenas, Bosques y Polanco).",
      "Comida, tarde de drinks, cena en parejas y grupos de amigos (agradables terrazas)."
    ],
    "address": [
      {
        "branch": "Secretaría de Marina 445. Lomas de Chamizal.",
        "tel": [
          "2591 8114",
          "2591 8115"
        ],
        "parking": "null"
      },
      {
        "branch": "Cervantes Saavedra 303 (Plaza Carso). Polanco.",
        "tel": [
          "4976 0134",
          "4976 0135"
        ],
        "parking": "null"
      },
      {
        "branch": "Vialidad de la Barranca 6 (Paseo Interlomas) Huixquilucan.",
        "tel": [
          "5290 8198",
          "2090 7215"
        ],
        "parking": "null"
      },
      {
        "branch": "C44 Juan Salvador Agraz 44. Santa Fe.",
        "tel": [
          "1664 6068",
          "1664 6069"
        ],
        "parking": "null"
      }
    ],
    "cook": "mediterranea",
    "zone": [
      "polanco",
      "interlomas",
      "santafe"
    ],
    "plancat": [
      "breakfast",
      "pizza",
      "desserts",
      "ter",
      "takecup"
    ],
    "plan": [
      "B",
      "TG",
      "PL"
    ],
    "img": "carolosantafe",
    "cost": "540",
    "map": {
      "latitud": "19.3862289",
      "longitud": "-99.2656935",
      "link": "https://www.google.com.mx/maps/place/Secretar%C3%ADa+de+Marina+445,+Lomas+de+Vista+Hermosa,+Cuajimalpa+de+Morelos,+05100+Cd+de+México,+D.F./@19.3862289,-99.2656935,17z/data=!3m1!4b1!4m2!3m1!1s0x85d20125c4c99e95:0xfe0c9ae98f65ef54"
    }
  },
  {
    "id": "27",
    "name": "Casa Anis",
    "title": "Cocina internacional.",
    "review": "Elegante decoración con influencia francesa. Para mis mystery fooders en ocasiones la cocina se tropieza. Salones privados. No deje de probar los ceviches. Amplísimo menú de vinos. Precios elevados. Pida su mesa en la terraza.",
    "mrecommend": [
      "Crab cakes.",
      "Sopa verde de almeja.",
      "New York caramelizado.",
      "Pastel de chocolate o coco."
    ],
    "calification":[
      "8.4",
      "8.0",
      "8.4"
    ],
    "ideal": [
      "Comidas de negocios y amigos.",
      "Cenas en parejas, aniversarios."
    ],
    "address": [
      {
        "branch": "Anatole France 70, piso 1. Polanco.",
        "tel": [
          "5280 1405",
          "5280 1406"
        ],
        "parking": "Valet parking."
      }
    ],
    "cook": "int",
    "zone": [
      "polanco"
    ],
    "plancat": [
      "chic",
      "romantic"
    ],
    "plan": [
      "null"
    ],
    "img": "null",
    "cost": "900",
    "map": {
      "latitud": "19.4303525",
      "longitud": "-99.1978662",
      "link": "https://www.google.com.mx/maps/place/Anatole+France+70,+Polanco,+Miguel+Hidalgo,+11550+Cd+de+México,+D.F./@19.4303525,-99.1978662,17z/data=!3m1!4b1!4m2!3m1!1s0x85d202027ed4b2b3:0xeb5b7e0fcbd8a1be"
    }
  },
  {
    "id": "28",
    "name": "Casa D'Italia",
    "title": "Cocina italiana.",
    "review": "Austero, algo ruidoso; favorito de asiduos a la Condesa. Auténtico sabor y sazón a cargo de su Chef propietario Luigi Cesarano. Pregunte por los especiales fuera del menú. Buenas alternativas en vinos. Opiniones encontradas sobre precio, servicio y calidad. Domingo cerrado. Reserve.",
    "mrecommend": [
      "Carpaccio de res.",
      "Minestrone.",
      "Spaghetti con almejas y alcachofas."
    ],
    "calification":[
      "7.7",
      "7.5",
      "7.8"
    ],
    "ideal": [
      "Cenas románticas muy casuales.",
      "Fumadores (terraza banquetera, sin chiste)."
    ],
    "address": [
      {
        "branch": "Agustín Melgar 6. Condesa.",
        "tel": [
          "5286 2021"
        ],
        "parking": "Valet parking."
      }
    ],
    "cook": "ita",
    "zone": [
      "roma"
    ],
    "plancat": [
      "pet",
      "romantic"
    ],
    "plan": [
      "null"
    ],
    "img": "casa de italia",
    "cost": "510",
    "map": {
      "latitud": "19.4180884",
      "longitud": "-99.1755078",
      "link": "https://www.google.com.mx/maps/place/Agust%C3%ADn+Melgar+6,+Condesa,+Cuauhtémoc,+06140+Cd+de+México,+D.F./@19.4180884,-99.1755078,17z/data=!3m1!4b1!4m2!3m1!1s0x85d1ff459865c877:0x91c2f942b734d306"
    }
  },
  {
    "id": "29",
    "name": "Casa Portuguesa",
    "title": "Cocina portuguesa.",
    "review": "Por fin lo remodelaron. Más que el ambiente, aquí manda la buena cocina de María Da Silva servida con talento, constancia y sazón. Todo un clásico. El plus: excelente panadería y comida para llevar. Lo malo: atropellado servicio y desquiciante valet parking. Buen costo-beneficio.",
    "mrecommend": [
      "Caldo verde.",
      "Bacalao en cualquier presentación, must.",
      "Arroces.",
      "Pastel de nata."
    ],
    "calification":[
      "8.5",
      "8.2",
      "7.3"
    ],
    "ideal": [
      "Desayunos (diariamente; de mis favoritos).",
      "Bohemios high class, familias y amigos.",
      "Fumadores (bonita terraza con vista al Parque Lincoln).",
      "Pedir para llevar."
    ],
    "address": [
      {
        "branch": "Emilio Castelar 111-A. Polanco.",
        "tel": [
          "5281 0075",
          "5280 6885"
        ],
        "parking": "Valet parking."
      }
    ],
    "cook": "portuguesa",
    "zone": [
      "polanco"
    ],
    "plancat": [
      "breakfast",
      "fam",
      "music",
      "desserts"
    ],
    "plan": [
      "PL"
    ],
    "img": "casa portuguesa",
    "cost": "550/280 (Desayuno)",
    "map": {
      "latitud": "19.4300231",
      "longitud": "-99.1974603",
      "link": "https://www.google.com.mx/maps/place/Emilio+Castelar+111,+Polanco,+Miguel+Hidalgo,+11550+Cd+de+México,+D.F./@19.4300231,-99.1974603,17z/data=!3m1!4b1!4m2!3m1!1s0x85d201f89d27c75b:0x8ce0059435e62d73"
    }
  } 
];
})



.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
