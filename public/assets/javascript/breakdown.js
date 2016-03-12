var checkPower = function(deck) {
	//console.log(deck);
	//console.log(deck.deckList);

	//card compare list with stats
	var cardPowerList = {
		//white cards
		//------------ ------------ ------------
		"Isolation Zone": 711,
		"Relief Captain": 633,
		"Immolating Glare": 573,
		"Allied Reinforcements": 549,
		"Steppe Glider": 531,
		"Expedition Raptor": 504,
		"Ondu War Cleric": 495,
		"Kor Sky Climber": 426,
		"Spawnbinder Mage": 390,
		"Kor Scythemaster": 387,
		"Shoulder to Shoulder": 375,
		"Make a Stand": 339,
		"Wall of Resurgence": 339,
		"Makindi Aeronaut":  267,
		"Searing Light":  246,
		"Affa Protector": 183,
		"Mighty Leap": 171,
		"Dazzling Reflection": 117,
		"Stoneforge Acolyte": 48,
		"Iona's Blessing": 48,
		//blue cards
		//------------ ------------ ------------
		"Cyclone Sire": 639,
		"Roiling Waters": 618,
		"Blinding Drone": 546,
		"Jwar Isle Avenger": 519,
		"Thought Harvester": 465,
		"Prophet of Distortion": 456,
		"Containment Membrane": 447,
		"Gravity Negator": 438,
		"Sweep Away": 420,
		"Cultivator Drone": 411,
		"Grip of the Roil": 282,
		"Umara Entangler": 246,
		"Unity of Purpose": 237,
		"Slip Through Space": 222,
		"Void Shatter": 177,
		"Comparative Analysis": 171,
		"Ancient Crab": 159,
		"Negate": 117,
		"Abstruse Interference": 72,
		"Gift of Tusks": 60,
		//black cards
		//------------ ------------ ------------
		"Oblivion Strike": 714,
		"Grasp of Darkness": 684,
		"Malakir Soothsayer": 603,
		"Essence Depleter": 585,
		"Havoc Sower": 543,
		"Vampire Envoy": 543,
		"Kozilek's Translator": 447,
		"Kozilek's Shrieker": 381,
		"Tar Snare": 375,
		"Slaughter Drone": 360,
		"Zulaport Chainmage": 300,
		"Flaying Tendrils": 294,
		"Visions of Brutality": 279,
		"Unnatural Endurance": 270,
		"Null Caller": 264,
		"Sky Scourer": 243,
		"Witness the End": 174,
		"Reaver Drone": 153,
		"Corpse Churn": 60,
		"Untamed Hunger": 60,
		//red cards
		//------------ ------------ ------------
		"Embodiment of Fury": 690,
		"Boulder Salvo": 684,
		"Devour in Flames": 672,
		"Press into Service": 552,
		"Zada's Commando": 531,
		"Immobilizer Eldrazi": 513,
		"Reality Hemorrhage": 489,
		"Maw of Kozilek": 441,
		"Goblin Freerunner": 396,
		"Reckless Bushwhacker": 381,
		"Akoum Flameseeker": 378,
		"Cinder Hellion": 345,
		"Brute Strength": 264,
		"Eldrazi Aggressor": 264,
		"Expedite": 195,
		"Kazuul's Toll Collector": 180,
		"Sparkmage's Gambit": 132,
		"Pyromancer's Assault": 90,
		"Tears of Valakut": 87,
		"Consuming Sinkhole": 48,
		//green cards
		//------------ ------------ ------------
		"Nissa's Judgment": 714,
		"Seed Guardian": 639,
		"Scion Summoner": 576,
		"Saddleback Lagac": 570,
		"Tajuru Pathwarden": 525,
		"Embodiment of Insight": 516,
		"Birthing Hulk": 471,
		"Baloth Pup": 465,
		"Stalking Drone": 456,
		"Netcaster Spider": 405,
		"Lead by Example": 405,
		"Pulse of Murasa": 257,
		"Loam Larva": 258,
		"Vines of the Recluse": 252,
		"Canopy Gorger": 219,
		"Harvester Troll": 177,
		"Elemental Uprising": 159,
		"Ruin in Their Wake": 142,
		"Natural State": 84,
		"Bonds of Mortality": 42,
		//mulit-color cards
		//------------ ------------ ------------
		"Baloth Null": 558,
		"Cliffhaven Vampire": 537,
		"Reflector Mage": 519,
		"Relentless Hunter": 477,
		"Joraga Auxiliary": 474,
		"Flayer Drone": 468,
		"Mindmelter": 444,
		"Void Grafter": 414,
		"Weapons Trainer": 402,
		"Stormchaser Mage": 357,
		//colorless cards
		//------------ ------------ ------------
		"Hedron Crawler": 519,
		"Spatial Contortion": 507,
		"Seer's Lantern": 483,
		"Warden of Geometries": 456,
		"Kozilek's Pathfinder": 405,
		"Bone Saw": 396,
		"Strider Harness": 384,
		"Walker of the Wastes": 363,
		"Chitinous Cloak": 351,
		"Warping Wail": 321,


		"lastCard": 1
	};

	var power = 0;
	var cardsCount = 0;

	for (var c = 0; c < deck.deckList.length; c++) {
		//console.log(deck.deckList[c]);

		for (var prop in cardPowerList) {
		  //console.log("obj." + prop + " = " + cardPowerList[prop]);

		  //check if cards match up
		  if ( String(prop) == String(deck.deckList[c]) ) {
		  	power = power + parseInt(cardPowerList[prop]);
		  	//console.log(cardPowerList[prop]);
		  	cardsCount++;
		  };
		};

	};

	//normalize power level
	if (deck.deckList.length > cardsCount) {
		var dif = deck.deckList.length - cardsCount;
		power = power + (dif * 35);
	};

	//display power level
	console.log("----------");
	console.log(deck.creator+ ": " +deck.deckName)
	console.log( "Deck Raw power level score:", power );
	//console.log( sortedCards );
};

//calc the raw power level of a deck from mongodb
var read = function function_name () {
    // jQuery AJAX call for mtg cards JSON
    $.getJSON('/readDeck', function(data) {
        deckData = data;
        //console.log(cardData, "gotem new card data");
    }).done(function() {
        //console.log(deckData)

        //check the power of decks
        for (var d = 0; d < deckData.length; d++) {
        	//checkPower(deckData[1]);
        	checkPower(deckData[d]);
        };

    });
};