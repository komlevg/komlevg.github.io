const greatbooks = [
    "Things Fall Apart by Chinua Achebe (1958, Nigeria, English)",
    "Fairy Tales by Hans Christian Andersen (1835–37, Denmark, Danish)",
    "The Divine Comedy by Dante Alighieri (1308–21, Italy, Italian)",
    "Epic of Gilgamesh by Unknown (18th–17th century BCE, Sumer/Akkadian Empire, Akkadian)",
    "Book of Job by Unknown (7th–4th century BCE, Achaemenid Empire, Biblical Hebrew)",
    "One Thousand and One Nights by Various (700–1500, Iraq/Iran/India/Syria/Egypt/Tajikistan, Arabic)",
    "Njál's Saga by Unknown, possibly Sæmundr fróði (13th century, Iceland, Old Norse)",
    "Pride and Prejudice by Jane Austen (1813, United Kingdom, English)",
    "Le Père Goriot by Honoré de Balzac (1835, France, French)",
    "Trilogy: Molloy, Malone Dies, The Unnamable by Samuel Beckett (1951–53, Republic of Ireland, French/English)",
    "The Decameron by Giovanni Boccaccio (1349–53, Italy, Italian)",
    "Ficciones by Jorge Luis Borges (1944–86, Argentina, Spanish)",
    "Wuthering Heights by Emily Brontë (1847, United Kingdom, English)",
    "The Stranger by Albert Camus (1942, Algeria, French Empire, French)",
    "Poems by Paul Celan (1952, Romania/USSR/France, German)",
    "Journey to the End of the Night by Louis-Ferdinand Céline (1932, France, French)",
    "Don Quixote by Miguel de Cervantes (1605–1615, Spain, Spanish)",
    "The Canterbury Tales by Geoffrey Chaucer (1380s–1400, England, English)",
    "Stories by Anton Chekhov (1886, Russia, Russian)",
    "Nostromo by Joseph Conrad (1904, United Kingdom, English)",
    "Great Expectations by Charles Dickens (1861, United Kingdom, English)",
    "Jacques the Fatalist by Denis Diderot (1796, France, French)",
    "Berlin Alexanderplatz by Alfred Döblin (1929, Germany, German)",
    "Crime and Punishment by Fyodor Dostoevsky (1866, Russia, Russian)",
    "The Idiot by Fyodor Dostoevsky (1869, Russia, Russian)",
    "Demons by Fyodor Dostoevsky (1872, Russia, Russian)",
    "The Brothers Karamazov by Fyodor Dostoevsky (1880, Russia, Russian)",
    "Middlemarch by George Eliot (1871, United Kingdom, English)",
    "Invisible Man by Ralph Ellison (1952, United States, English)",
    "Medea by Euripides (431 BCE, Greece, Ancient Greek)",
    "Absalom, Absalom! by William Faulkner (1936, United States, English)",
    "The Sound and the Fury by William Faulkner (1929, United States, English)",
    "Madame Bovary by Gustave Flaubert (1857, France, French)",
    "Sentimental Education by Gustave Flaubert (1869, France, French)",
    "Gypsy Ballads by Federico García Lorca (1928, Spain, Spanish)",
    "One Hundred Years of Solitude by Gabriel García Márquez (1967, Colombia, Spanish)",
    "Love in the Time of Cholera by Gabriel García Márquez (1985, Colombia, Spanish)",
    "Faust by Johann Wolfgang von Goethe (1832, Saxe-Weimar, German)",
    "Dead Souls by Nikolai Gogol (1842, Russia, Russian)",
    "The Tin Drum by Günter Grass (1959, Germany, German)",
    "The Devil to Pay in the Backlands by João Guimarães Rosa (1956, Brazil, Portuguese)",
    "Hunger by Knut Hamsun (1890, Norway, Norwegian)",
    "The Old Man and the Sea by Ernest Hemingway (1952, United States, English)",
    "Iliad by Homer (760–710 BCE, Greece, Ancient Greek)",
    "Odyssey by Homer (8th century BCE, Greece, Ancient Greek)",
    "A Doll's House by Henrik Ibsen (1879, Norway, Norwegian)",
    "Ulysses by James Joyce (1922, Irish Free State, English)",
    "Stories by Franz Kafka (1924, Czechoslovakia, German)",
    "The Trial by Franz Kafka (1925, Czechoslovakia, German)",
    "The Castle by Franz Kafka (1926, Czechoslovakia, German)",
    "Shakuntala by Kālidāsa (1st century BCE–4th century CE, India, Sanskrit)",
    "The Sound of the Mountain by Yasunari Kawabata (1954, Japan, Japanese)",
    "Zorba the Greek by Nikos Kazantzakis (1946, Greece, Greek)",
    "Sons and Lovers by D. H. Lawrence (1913, United Kingdom, English)",
    "Independent People by Halldór Laxness (1934–35, Iceland, Icelandic)",
    "Complete Poems by Giacomo Leopardi (1818–1835, Italy, Italian)",
    "The Golden Notebook by Doris Lessing (1962, United Kingdom, English)",
    "Pippi Longstocking by Astrid Lindgren (1945, Sweden, Swedish)",
    "Diary of a Madman and Other Stories by Lu Xun (1918, China, Chinese)",
    "Children of Gebelawi by Naguib Mahfouz (1959, Egypt, Arabic)",
    "Buddenbrooks by Thomas Mann (1901, Germany, German)",
    "The Magic Mountain by Thomas Mann (1924, Germany, German)",
    "Moby-Dick by Herman Melville (1851, United States, English)",
    "Essays by Michel de Montaigne (1595, France, French)",
    "History by Elsa Morante (1974, Italy, Italian)",
    "Beloved by Toni Morrison (1987, United States, English)",
    "The Tale of Genji by Murasaki Shikibu (1000–12, Japan, Japanese)",
    "The Man Without Qualities by Robert Musil (1930–32, Austria, German)",
    "Lolita by Vladimir Nabokov (1955, Russia/United States, English)",
    "Nineteen Eighty-Four by George Orwell (1949, United Kingdom, English)",
    "Metamorphoses by Ovid (1st century CE, Roman Empire, Classical Latin)",
    "The Book of Disquiet by Fernando Pessoa (1928, Portugal, Portuguese)",
    "Tales by Edgar Allan Poe (1832–49, United States, English)",
    "In Search of Lost Time by Marcel Proust (1913–27, France, French)",
    "Gargantua and Pantagruel by François Rabelais (1532–34, France, French)",
    "Pedro Páramo by Juan Rulfo (1955, Mexico, Spanish)",
    "Masnavi by Rumi (1258–73, Sultanate of Rum/Persia, Persian)",
    "Midnight's Children by Salman Rushdie (1981, United Kingdom/India, English)",
    "Bostan by Saadi (1257, Persia, Persian)",
    "Season of Migration to the North by Tayeb Salih (1966, Sudan, Arabic)",
    "Blindness by José Saramago (1995, Portugal, Portuguese)",
    "Hamlet by William Shakespeare (1603, England, English)",
    "King Lear by William Shakespeare (1608, England, English)",
    "Othello by William Shakespeare (1609, England, English)",
    "Oedipus the King by Sophocles (430 BCE, Greece, Ancient Greek)",
    "The Red and the Black by Stendhal (1830, France, French)",
    "Tristram Shandy by Laurence Sterne (1760, Ireland, English)",
    "Confessions of Zeno by Italo Svevo (1923, Italy, Italian)",
    "Gulliver's Travels by Jonathan Swift (1726, Ireland, English)",
    "War and Peace by Leo Tolstoy (1865–69, Russia, Russian)",
    "Anna Karenina by Leo Tolstoy (1877, Russia, Russian)",
    "The Death of Ivan Ilyich and Other Stories by Leo Tolstoy (1886, Russia, Russian)",
    "Adventures of Huckleberry Finn by Mark Twain (1884, United States, English)",
    "Ramayana by Valmiki (5th–4th century BCE, India, Sanskrit)",
    "Aeneid by Virgil (29–19 BCE, Roman Empire, Classical Latin)",
    "Mahabharata by Vyasa (9th–5th century BCE, India, Sanskrit)",
    "Leaves of Grass by Walt Whitman (1855, United States, English)",
    "Mrs Dalloway by Virginia Woolf (1925, United Kingdom, English)",
    "To the Lighthouse by Virginia Woolf (1927, United Kingdom, English)",
    "Memoirs of Hadrian by Marguerite Yourcenar (1951, France/Belgium, French)"
];


const movie_list = [
    "The Shawshank Redemption - 1994",
    "The Godfather - 1972",
    "The Dark Knight - 2008",
    "The Godfather Part II - 1974",
    "12 Angry Men - 1957",
    "The Lord of the Rings: The Return of the King - 2003",
    "Schindler's List - 1993",
    "Pulp Fiction - 1994",
    "The Lord of the Rings: The Fellowship of the Ring - 2001",
    "The Good, the Bad and the Ugly - 1966",
    "Forrest Gump - 1994",
    "The Lord of the Rings: The Two Towers - 2002",
    "Fight Club - 1999",
    "Inception - 2010",
    "Star Wars: Episode V - The Empire Strikes Back - 1980",
    "The Matrix - 1999",
    "Goodfellas - 1990",
    "One Flew Over the Cuckoo's Nest - 1975",
    "Interstellar - 2014",
    "Se7en - 1995",
    "It's a Wonderful Life - 1946",
    "Seven Samurai - 1954",
    "The Silence of the Lambs - 1991",
    "Saving Private Ryan - 1998",
    "City of God - 2002",
    "Life Is Beautiful - 1997",
    "The Green Mile - 1999",
    "Terminator 2: Judgment Day - 1991",
    "Star Wars: Episode IV - A New Hope - 1977",
    "Back to the Future - 1985",
    "Spirited Away - 2001",
    "The Pianist - 2002",
    "Parasite - 2019",
    "Psycho - 1960",
    "Gladiator - 2000",
    "The Lion King - 1994",
    "The Departed - 2006",
    "Spider-Man: Across the Spider-Verse - 2023",
    "Whiplash - 2014",
    "Grave of the Fireflies - 1988",
    "American History X - 1998",
    "Léon: The Professional - 1994",
    "The Prestige - 2006",
    "Harakiri - 1962",
    "Casablanca - 1942",
    "The Usual Suspects - 1995",
    "The Intouchables - 2011",
    "Dune: Part Two - 2024",
    "Cinema Paradiso - 1988",
    "Modern Times - 1936",
    "Alien - 1979",
    "Rear Window - 1954",
    "Once Upon a Time in the West - 1968",
    "Django Unchained - 2012",
    "City Lights - 1931",
    "Apocalypse Now - 1979",
    "Memento - 2000",
    "WALL·E - 2008",
    "Raiders of the Lost Ark - 1981",
    "12th Fail - 2023",
    "The Lives of Others - 2006",
    "Sunset Boulevard - 1950",
    "Avengers: Infinity War - 2018",
    "Paths of Glory - 1957",
    "Spider-Man: Into the Spider-Verse - 2018",
    "Witness for the Prosecution - 1957",
    "The Shining - 1980",
    "The Great Dictator - 1940",
    "Aliens - 1986",
    "Inglourious Basterds - 2009",
    "The Dark Knight Rises - 2012",
    "Coco - 2017",
    "Amadeus - 1984",
    "Toy Story - 1995",
    "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb - 1964",
    "Oldboy - 2003",
    "American Beauty - 1999",
    "Avengers: Endgame - 2019",
    "Das Boot - 1981",
    "Braveheart - 1995",
    "Good Will Hunting - 1997",
    "Princess Mononoke - 1997",
    "Your Name. - 2016",
    "Joker - 2019",
    "High and Low - 1963",
    "3 Idiots - 2009",
    "Once Upon a Time in America - 1984",
    "Singin' in the Rain - 1952",
    "Capernaum - 2018",
    "Come and See - 1985",
    "Requiem for a Dream - 2000",
    "Toy Story 3 - 2010"
];


const bestGamesByGenre = {
  action: [
    "The Last of Us Part II (2020)",
    "Red Dead Redemption 2 (2018)",
    "God of War (2018)",
    "Elden Ring (2022)",
    "Marvel's Spider-Man (2018)"
  ],
  rpg: [
    "The Witcher 3: Wild Hunt (2015)",
    "Cyberpunk 2077 (2020)",
    "Elden Ring (2022)",
    "Persona 5 Royal (2016/2020)",
    "Divinity: Original Sin 2 (2017)"
  ],
  shooter: [
    "DOOM Eternal (2020)",
    "Overwatch (2016)",
    "Destiny 2 (2017)",
    "Call of Duty: Modern Warfare (2019)",
    "Titanfall 2 (2016)"
  ],
  strategy: [
    "XCOM 2 (2016)",
    "Civilization VI (2016)",
    "Crusader Kings III (2020)",
    "Starcraft II: Legacy of the Void (2015)",
    "Total War: Three Kingdoms (2019)"
  ],
  adventure: [
    "The Legend of Zelda: Breath of the Wild (2017)",
    "Firewatch (2016)",
    "Life is Strange (2015)",
    "Outer Wilds (2019)",
    "Disco Elysium (2019)"
  ],
  horror: [
    "Resident Evil 2 Remake (2019)",
    "The Evil Within 2 (2017)",
    "Dead Space Remake (2023)",
    "Alien: Isolation (2014)",
    "Amnesia: The Dark Descent (2010)"
  ],
  racing: [
    "Forza Horizon 5 (2021)",
    "Gran Turismo 7 (2022)",
    "Mario Kart 8 Deluxe (2017)",
    "F1 2021 (2021)",
    "Dirt Rally 2.0 (2019)"
  ],
  simulation: [
    "The Sims 4 (2014)",
    "Microsoft Flight Simulator (2020)",
    "Cities: Skylines (2015)",
    "Planet Zoo (2019)",
    "Factorio (2020)"
  ],
  multiplayer: [
    "Fortnite (2017)",
    "Apex Legends (2019)",
    "Among Us (2018/2020)",
    "Valorant (2020)",
    "Minecraft (2011)"
  ],
  platformer: [
    "Celeste (2018)",
    "Hollow Knight (2017)",
    "Ori and the Will of the Wisps (2020)",
    "Little Nightmares II (2021)",
    "Rayman Legends (2013)"
  ]
};

const cuisine_list = [
    "Italy",
    "France",
    "Japan",
    "China",
    "India",
    "Mexico",
    "Thailand",
    "Spain",
    "Greece",
    "Turkey",
    "Lebanon",
    "Peru",
    "Vietnam",
    "Korea",
    "Morocco",
    "USA",
    "Russia",
    "Brazil",
    "Portugal",
    "Scandinavia"
];

const dish_list = [
    "Italy - Pizza",
    "Italy - Pasta Carbonara",
    "Italy - Tiramisu",
    "France - Croissant",
    "France - Coq au Vin",
    "France - Crème Brûlée",
    "Japan - Sushi",
    "Japan - Ramen",
    "Japan - Tempura",
    "China - Peking Duck",
    "China - Dim Sum",
    "China - Kung Pao Chicken",
    "India - Butter Chicken",
    "India - Biryani",
    "India - Samosa",
    "Mexico - Tacos",
    "Mexico - Guacamole",
    "Mexico - Churros",
    "Thailand - Pad Thai",
    "Thailand - Tom Yum Soup",
    "Thailand - Green Curry",
    "Spain - Paella",
    "Spain - Gazpacho",
    "Spain - Churros",
    "Greece - Moussaka",
    "Greece - Souvlaki",
    "Greece - Baklava",
    "Turkey - Kebabs",
    "Turkey - Baklava",
    "Turkey - Meze",
    "Lebanon - Hummus",
    "Lebanon - Falafel",
    "Lebanon - Shawarma",
    "Peru - Ceviche",
    "Peru - Lomo Saltado",
    "Peru - Aji de Gallina",
    "Vietnam - Pho",
    "Vietnam - Banh Mi",
    "Vietnam - Spring Rolls",
    "Korea - Kimchi",
    "Korea - Bibimbap",
    "Korea - Tteokbokki",
    "Morocco - Tagine",
    "Morocco - Couscous",
    "Morocco - Pastilla",
    "USA - Hamburger",
    "USA - BBQ Ribs",
    "USA - Apple Pie",
    "Russia - Borscht",
    "Russia - Pelmeni",
    "Russia - Blini",
    "Brazil - Feijoada",
    "Brazil - Pão de Queijo",
    "Brazil - Brigadeiro",
    "Portugal - Bacalhau",
    "Portugal - Pastel de Nata",
    "Portugal - Francesinha",
    "Scandinavia - Gravlax",
    "Scandinavia - Smørrebrød",
    "Scandinavia - Meatballs"
];

const springList = [
  "Japan (Cherry blossom season and mild weather)",
  "South Korea (Spring festivals and blooming cherry trees)",
  "Netherlands (Tulip fields and Keukenhof Gardens in full bloom)",
  "France (Spring landscapes and fewer tourists in cities)",
  "Italy (Mild temperatures and colorful countryside)",
  "Spain (Warm but not too hot — ideal for exploring)",
  "Portugal (Blooming landscapes and coastal charm)",
  "Greece (Start of the tourist season without crowds)",
  "Morocco (Comfortable weather before summer heat)",
  "Turkey (Tulip season in Istanbul and ideal sightseeing conditions)",
  "Jordan (Mild weather and wildflower bloom in the desert)",
  "Israel (Perfect for outdoor exploration and festivals)",
  "China (Spring blossoms and pleasant weather across major regions)",
  "Vietnam (Ideal time in the north and central regions)",
  "Taiwan (Cherry blossoms and mountain hikes)",
  "USA (Washington, D.C. cherry blossoms and national parks awakening)",
  "Canada (Warming up with fewer crowds — especially in Vancouver and Victoria)",
  "Mexico (Dry season continues with vibrant culture and warm beaches)",
  "Cuba (Sunny and dry — perfect for city and coast)",
  "Egypt (Still comfortable before intense summer heat)",
  "Uzbekistan (Ideal time to explore Silk Road cities without extreme temperatures)",
  "Georgia (Blooming countryside and wine region awakening)",
  "Armenia (Mountains and valleys come alive with color)",
  "Croatia (Quiet Adriatic coast and pleasant spring air)",
  "Slovenia (Fresh alpine air and green valleys)",
  "Austria (Flowering meadows and ideal for spring hikes)",
  "Germany (Flower festivals and awakening city life)",
  "Hungary (Budapest in bloom and pleasant Danube walks)",
  "Czech Republic (Sunny Prague and fewer crowds)",
  "Switzerland (Snow-capped mountains meet blooming valleys)"
];

const summerList = [
  "Iceland (Midnight sun, green landscapes, and accessible highlands)",
  "Norway (Fjords, long daylight hours, and pleasant weather)",
  "Canada (Warm weather, national parks, and festivals)",
  "Switzerland (Hiking in the Alps and crystal-clear lakes)",
  "Sweden (Midsummer celebrations and beautiful nature)",
  "Finland (Lakes, forests, and 24-hour daylight in the north)",
  "Scotland (Long days, mild temperatures, and green highlands)",
  "Ireland (Lush landscapes and vibrant cultural festivals)",
  "Italy (Coastal beauty, summer festivals, and historic cities)",
  "France (Provence lavender fields and southern beaches)",
  "Spain (Lively coastal towns and summer fiestas)",
  "Greece (Sunny islands, beach life, and clear waters)",
  "Portugal (Surfing, seafood, and sunny coastal towns)",
  "Croatia (Adriatic coast, sailing, and island hopping)",
  "Montenegro (Beautiful beaches and less crowded than neighbors)",
  "Slovenia (Lake Bled, hiking, and mild alpine climate)",
  "Austria (Mountain lakes, hiking trails, and classical music festivals)",
  "Germany (Beer gardens, castles, and outdoor events)",
  "Czech Republic (Sunny Prague, castles, and open-air concerts)",
  "Netherlands (Canal tours, cycling, and summer festivals)",
  "Denmark (Copenhagen life, beaches, and hygge in the sun)",
  "Estonia (Medieval towns, nature, and long summer days)",
  "Japan (Mountain hiking, festivals, and vibrant nature)",
  "South Korea (Beaches, island trips, and cultural festivals)",
  "USA (National parks, road trips, and summer events)",
  "Canada (Again for west coast road trips and nature in full bloom)",
  "Peru (Dry season in the Andes, ideal for Machu Picchu trekking)",
  "Tanzania (Great Migration season in Serengeti)",
  "Kenya (Prime wildlife viewing and clear skies)",
  "Indonesia (Dry season in Bali and other islands)"
];

const autumnList = [
  "Japan (Spectacular autumn foliage and pleasant temperatures)",
  "South Korea (Vibrant fall colors and cultural festivals)",
  "Canada (Stunning foliage, especially in Quebec and Ontario)",
  "USA (New England fall colors and harvest festivals)",
  "Germany (Oktoberfest and golden forests in Bavaria)",
  "Austria (Alpine hikes and colorful valleys)",
  "Switzerland (Fall hikes, fewer tourists, and wine season)",
  "France (Grape harvest in wine regions and mild weather)",
  "Italy (Truffle season, vineyard tours, and fewer crowds)",
  "Spain (Comfortable temperatures and autumn festivals)",
  "Portugal (Wine harvest and warm, quiet beaches)",
  "Greece (Mild weather and less crowded historical sites)",
  "Turkey (Ideal weather for exploring Istanbul and Cappadocia)",
  "Morocco (Cooler desert temperatures and cultural events)",
  "China (Golden foliage and clear skies in regions like Beijing and Guilin)",
  "Vietnam (Dry season starts in the north, perfect for trekking)",
  "Nepal (Best trekking season with clear mountain views)",
  "Bhutan (Crisp air, clear skies, and colorful festivals)",
  "Jordan (Comfortable climate for exploring Petra and Wadi Rum)",
  "Iran (Pleasant weather and beautiful autumn landscapes)",
  "Croatia (Less crowded coast and national parks in fall colors)",
  "Slovenia (Charming autumn forests and harvest season)",
  "Hungary (Budapest in golden light and wine country tours)",
  "Czech Republic (Cozy autumn vibes in Prague and countryside)",
  "Poland (Golden forests and cultural events in cities)",
  "Georgia (Wine harvest season and scenic Caucasus mountains)",
  "Armenia (Beautiful fall landscapes and fewer tourists)",
  "Romania (Forests in peak color and atmospheric castles)",
  "New Zealand (Spring begins in the Southern Hemisphere — blooming nature)",
  "Australia (Great weather in southern regions like Melbourne and Adelaide)"
];

const winterList = [
  "Japan (Powder snow in Hokkaido and hot spring experiences)",
  "Switzerland (World-class skiing and cozy alpine villages)",
  "Austria (Ski resorts and classical winter charm)",
  "France (Alps skiing and winter markets in Alsace)",
  "Norway (Northern Lights and winter adventures)",
  "Sweden (Dog sledding and Icehotel in Lapland)",
  "Finland (Santa Claus Village and snowy wilderness)",
  "Iceland (Northern Lights and dramatic winter landscapes)",
  "Canada (Skiing in the Rockies and winter festivals)",
  "USA (Colorado, Utah, and winter city breaks like NYC)",
  "Germany (Magical Christmas markets and snowy Bavarian towns)",
  "Czech Republic (Romantic snowy Prague and festive mood)",
  "Italy (Dolomites skiing and fewer crowds in cities)",
  "Spain (Mild southern winters and fewer tourists)",
  "Portugal (Sunny, cool days in Lisbon and Algarve)",
  "Morocco (Pleasant winter temperatures and desert tours)",
  "Egypt (Cooler weather ideal for sightseeing and Nile cruises)",
  "Jordan (Comfortable climate for Petra and desert trekking)",
  "UAE (Warm weather, luxury resorts, and festivals)",
  "Oman (Perfect time for desert and mountain adventures)",
  "Thailand (Dry season begins, ideal for beaches and islands)",
  "Vietnam (Dry and mild in the south and central regions)",
  "Cambodia (Cooler season for temples and cultural sites)",
  "India (Best time for Rajasthan, Goa, and Kerala)",
  "Sri Lanka (Dry season in the southwest — beaches and nature)",
  "Maldives (Peak season for diving and tropical relaxation)",
  "Philippines (Dry season perfect for island hopping)",
  "Australia (Summer in the southern hemisphere — beaches and cities)",
  "New Zealand (Summer season with lush nature and outdoor activities)",
  "South Africa (Sunny Cape Town, vineyards, and safaris)"
];


const bestAlbums = [
  "Lauryn Hill – The Miseducation of Lauryn Hill (1998)",
  "Michael Jackson – Thriller (1982)",
  "The Beatles – Abbey Road (1969)",
  "Prince – Purple Rain (1984)",
  "Frank Ocean – Blonde (2016)",
  "Stevie Wonder – Songs in the Key of Life (1976)",
  "Kendrick Lamar – good kid, m.A.A.d city (2012)",
  "Amy Winehouse – Back to Black (2006)",
  "Nirvana – Nevermind (1991)",
  "Beyoncé – Lemonade (2016)",
  "Fleetwood Mac – Rumours (1977)",
  "Radiohead – OK Computer (1997)",
  "Jay-Z – The Blueprint (2001)",
  "Bob Dylan – Highway 61 Revisited (1965)",
  "Adele – 21 (2011)",
  "Joni Mitchell – Blue (1971)",
  "Marvin Gaye – What's Going On (1971)",
  "Taylor Swift – 1989 (Taylor’s Version) (2023)",
  "Dr. Dre – The Chronic (1992)",
  "The Beach Boys – Pet Sounds (1966)",
  "The Beatles – Revolver (1966)",
  "Billie Eilish – WHEN WE ALL FALL ASLEEP, WHERE DO WE GO? (2019)",
  "A Tribe Called Quest – The Low End Theory (1991)",
  "Pink Floyd – The Dark Side of the Moon (1973)",
  "Led Zeppelin – Led Zeppelin II (1969)",
  "Kanye West – My Beautiful Dark Twisted Fantasy (2010)",
  "Miles Davis – Kind of Blue (1959)",
  "David Bowie – The Rise and Fall of Ziggy Stardust (1972)",
  "Daft Punk – Discovery (2001)",
  "Bruce Springsteen – Born to Run (1975)",
  "Eagles – Hotel California (1976)",
  "Travis Scott – ASTROWORLD (2018)",
  "Rage Against the Machine – Rage Against the Machine (1992)",
  "Lorde – Pure Heroine (2013)",
  "Usher – Confessions (2004)",
  "Burial – Untrue (2007)",
  "Solange – A Seat at the Table (2016)",
  "Tyler, The Creator – Flower Boy (2017)",
  "George Michael – Listen Without Prejudice Vol. 1 (1990)",
  "AC/DC – Back in Black (1980)",
  "Lady Gaga – The Fame Monster (2009)",
  "Nina Simone – I Put a Spell on You (1965)",
  "Massive Attack – Blue Lines (1991)",
  "Mary J. Blige – My Life (1994)",
  "Kacey Musgraves – Golden Hour (2018)",
  "Snoop Dogg – Doggystyle (1993)",
  "Patti Smith – Horses (1975)",
  "50 Cent – Get Rich or Die Tryin' (2003)",
  "Neil Young – After the Gold Rush (1970)",
  "Eminem – The Marshall Mathers LP (2000)",
  "Lana Del Rey – Norman F*****g Rockwell! (2019)",
  "Elton John – Goodbye Yellow Brick Road (1973)",
  "Madonna – Like a Prayer (1989)",
  "Bad Bunny – Un Verano Sin Ti (2022)",
  "Missy Elliott – Supa Dupa Fly (1997)",
  "Nine Inch Nails – The Downward Spiral (1994)",
  "Steely Dan – Aja (1977)",
  "SZA – SOS (2022)",
  "Kraftwerk – Trans-Europe Express (1977)",
  "N.W.A – Straight Outta Compton (1988)",
  "Metallica – Master of Puppets (1986)",
  "The Strokes – Is This It (2001)",
  "Portishead – Dummy (1994)",
  "The Smiths – The Queen Is Dead (1986)",
  "De La Soul – 3 Feet High and Rising (1989)",
  "Erykah Badu – Baduizm (1997)",
  "The Jimi Hendrix Experience – Are You Experienced (1967)",
  "2Pac – All Eyez on Me (1996)",
  "Sade – Love Deluxe (1992)",
  "The Velvet Underground & Nico – The Velvet Underground & Nico (1967)",
  "Arctic Monkeys – AM (2013)",
  "Oasis – (What's the Story) Morning Glory? (1995)",
  "D'Angelo – Voodoo (2000)",
  "The Cure – Disintegration (1989)",
  "Rihanna – ANTI (2016)",
  "John Coltrane – A Love Supreme (1965)",
  "The Rolling Stones – Exile on Main St. (1972)",
  "Guns N' Roses – Appetite for Destruction (1987)",
  "Prince – Sign o' the Times (1987)",
  "Kate Bush – Hounds of Love (1985)",
  "U2 – The Joshua Tree (1987)",
  "Beastie Boys – Paul's Boutique (1989)",
  "Drake – Take Care (2011)",
  "Bob Marley & The Wailers – Exodus (1977)",
  "Björk – Homogenic (1997)",
  "Stevie Wonder – Innervisions (1973)",
  "Talking Heads – Remain in Light (1980)",
  "Janet Jackson – Control (1986)",
  "Outkast – Aquemini (1998)",
  "Aretha Franklin – I Never Loved a Man the Way I Love You (1967)",
  "Nas – Illmatic (1994)",
  "Carole King – Tapestry (1971)",
  "Wu-Tang Clan – Enter the Wu-Tang (36 Chambers) (1993)",
  "Beyoncé – BEYONCÉ (2013)",
  "The Clash – London Calling (1979)",
  "Public Enemy – It Takes a Nation of Millions to Hold Us Back (1988)",
  "Radiohead – Kid A (2000)",
  "The Notorious B.I.G. – Ready to Die (1994)",
  "Alanis Morissette – Jagged Little Pill (1995)"
];



const serialList = [
    { title: "Во все тяжкие", year: "2008–2013" },
    { title: "Планета Земля 2", year: "2016" },
    { title: "BBC: Планета Земля", year: "2006" },
    { title: "Братья по оружию", year: "2001" },
    { title: "Чернобыль", year: "2019" },
    { title: "Прослушка", year: "2002–2008" },
    { title: "Аватар: Легенда об Аанге", year: "2005–2008" },
    { title: "Голубая планета 2", year: "2017" },
    { title: "Сопрано", year: "1999–2007" },
    { title: "Космос: Пространство и время", year: "2014" },
    { title: "Космос", year: "1980" },
    { title: "Наша планета", year: "2019–2023" },
    { title: "Игра престолов", year: "2011–2019" },
    { title: "Блуи", year: "2018–" },
    { title: "Мир в войне", year: "1973–1974" },
    { title: "Стальной алхимик: Братство", year: "2009–2010" },
    { title: "BBC: Жизнь", year: "2009" },
    { title: "Рик и Морти", year: "2013–" },
    { title: "Последний танец", year: "2020" },
    { title: "Сумеречная зона", year: "1959–1964" },
    { title: "Вьетнам", year: "2017" },
    { title: "Атака титанов", year: "2013–2023" },
    { title: "Шерлок", year: "2010–2017" },
    { title: "Бэтмен", year: "1992–1995" },
    { title: "Аркейн", year: "2021–2024" },
    { title: "Лучше звоните Солу", year: "2015–2022" },
    { title: "Офис", year: "2005–2013" },
    { title: "BBC: Голубая планета", year: "2001" },
    { title: "Ферма Кларксона", year: "2021–" },
    { title: "Жульничество 1992: История Харшада Мехты", year: "2020" },
    { title: "BBC: Планета людей", year: "2011" },
    { title: "BBC: Замерзшая планета", year: "2011–2012" },
    { title: "Охотник х Охотник", year: "2011–2014" },
    { title: "Светлячок", year: "2002–2003" },
    { title: "Дуракам везет", year: "1981–2003" },
    { title: "Гражданская война", year: "1990" },
    { title: "Тетрадь смерти", year: "2006–2007" },
    { title: "Гравити Фолз", year: "2012–2016" },
    { title: "Сайнфелд", year: "1989–1998" },
    { title: "Декалог", year: "1989–1990" },
    { title: "The Beatles: Get Back", year: "2021" },
    { title: "Gibi", year: "2021–" },
    { title: "Настоящий детектив", year: "2014–" },
    { title: "Ковбой Бибоп", year: "1998–1999" },
    { title: "Фарго", year: "2014–2024" },
    { title: "Нэйтан спешит на выручку", year: "2013–2017" },
    { title: "Личность", year: "2018–" },
    { title: "Апокалипсис: Вторая мировая война", year: "2009" },
    { title: "Таскмастер", year: "2015–" },
    { title: "Африка", year: "2013" },
    { title: "Провожающая в последний путь Фрирен", year: "2023–" },
    { title: "Когда они нас увидят", year: "2019" },
    { title: "Друзья", year: "1994–2004" },
    { title: "События Прошедшей Недели С Джоном Оливером", year: "2014–" },
    { title: "В Филадельфии всегда солнечно", year: "2005–" },
    { title: "Наследники", year: "2018–2023" },
    { title: "TVF Pitchers", year: "2015–2022" },
    { title: "Западное крыло", year: "1999–2006" },
    { title: "Ван-Пис", year: "1999–" },
    { title: "Умерь свой энтузиазм", year: "2000–2024" },
    { title: "Монти Пайтон: Летающий цирк", year: "1969–1974" },
    { title: "Подводная лодка", year: "1985" },
    { title: "Избранные", year: "2017–" },
    { title: "Конь БоДжек", year: "2014–2020" },
    { title: "Отель «Фолти Тауэрс»", year: "1975–1979" },
    { title: "Лейла и Меджнун", year: "2011–2023" },
    { title: "Панчаят", year: "2020–" },
    { title: "Драконий жемчуг Зет", year: "1996–2003" },
    { title: "Чeрная гадюка 4", year: "1989" },
    { title: "Гордость и предубеждение", year: "1995" },
    { title: "Хулиганы и ботаны", year: "1999–2000" },
    { title: "Твин Пикс", year: "1990–1991" },
    { title: "Блич: Тысячелетняя кровавая война", year: "2022–" },
    { title: "Драконий жемчуг Зет", year: "1989–1996" },
    { title: "Шоу Шаппелла", year: "2003–2006" },
    { title: "Нарко", year: "2015–2017" },
    { title: "Копилка", year: "2019–" },
    { title: "Сага о Винланде", year: "2019–2023" },
    { title: "Я, Клавдий", year: "1976" },
    { title: "Фабрика гениев", year: "2019–2021" },
    { title: "Южный парк", year: "1997–" },
    { title: "Чёрное зеркало", year: "2011–" },
    { title: "По ту сторону изгороди", year: "2014" },
    { title: "Тед Лассо", year: "2020–" },
    { title: "Вернуться в 1988", year: "2015–2016" },
    { title: "Острые козырьки", year: "2013–2022" },
    { title: "Клиент всегда мертв", year: "2001–2005" },
    { title: "Врата Штейна", year: "2011–2015" },
    { title: "Люди Икс '97", year: "2024–" },
    { title: "Рим", year: "2005–2007" },
    { title: "Тюрьма «ОZ»", year: "1997–2003" },
    { title: "Мой аджосси", year: "2018" },
    { title: "Разделение", year: "2022–" },
    { title: "Берсерк", year: "1997–1998" },
    { title: "Тьма", year: "2017–2020" },
    { title: "Дрянь", year: "2016–2019" },
    { title: "Щит", year: "2002–2008" },
    { title: "Аббатство Даунтон", year: "2010–2015" },
    { title: "Одни из нас", year: "2023–" },
    { title: "Гранд тур", year: "2016–2024" },
    { title: "Звездный крейсер Галактика", year: "2004–2009" },
    { title: "Безумцы", year: "2007–2015" },
    { title: "Голубоглазый самурай", year: "2023–" },
    { title: "Симпсоны", year: "1989–" },
    { title: "Пип шоу", year: "2003–2015" },
    { title: "Звездный путь: Следующее поколение", year: "1987–1994" },
    { title: "Неуязвимый", year: "2021–" },
    { title: "Доктор Хаус", year: "2004–2012" },
    { title: "Наруто: Ураганные хроники", year: "2007–2017" },
    { title: "Монстр", year: "2004–2005" },
    { title: "Задержка в развитии", year: "2003–2019" },
    { title: "Ванпанчмен", year: "2015–" },
    { title: "Лига справедливости: Без границ", year: "2004–2006" },
    { title: "Приключения Шерлока Холмса", year: "1984–1985" },
    { title: "Пацаны", year: "2019–" },
    { title: "Огни ночной пятницы", year: "2006–2011" },
    { title: "Махабхарата", year: "1988–1990" },
    { title: "По долгу службы", year: "2012–2021" },
    { title: "Удивительная миссис Мэйзел", year: "2017–2023" },
    { title: "Очень странные дела", year: "2016–2025" },
    { title: "Топ Гир", year: "2002–2022" },
    { title: "Гуща событий", year: "2005–2012" },
    { title: "1883: A Yellowstone Origin Story", year: "2021–2022" },
    { title: "Полезные советы от Джона Уилсона", year: "2020–2023" },
    { title: "Это мы", year: "2016–2022" },
    { title: "Бехзат: Серийные преступления в Анкаре", year: "2010–2019" },
    { title: "Отец Тед", year: "1995–1998" },
    { title: "Сарабхай против Сарабхай", year: "2004–2017" },
    { title: "Кандидаты", year: "2021–" },
    { title: "Мандалорец", year: "2019–" },
    { title: "Код Гиас: Bосставший Лелуш", year: "2006–2008" },
    { title: "Парки и зоны отдыха", year: "2009–2015" },
    { title: "Секретные материалы", year: "1993–2018" },
    { title: "Карточный домик", year: "2013–2018" },
    { title: "Атланта", year: "2016–2022" },
    { title: "Время приключений", year: "2010–2018" },
    { title: "Рамаяна", year: "1987–1988" },
    { title: "Дэдвуд", year: "2004–2006" },
    { title: "Декстер", year: "2006–2013" },
    { title: "Корона", year: "2016–2023" },
    { title: "Это грех", year: "2021" },
    { title: "Решала", year: "2018–2021" },
    { title: "Сорвиголова", year: "2015–2018" },
    { title: "Мост", year: "2011–2018" },
    { title: "Первобытный", year: "2019–" },
    { title: "Чeрная гадюка 2", year: "1986" },
    { title: "Сёгун", year: "2024–2026" },
    { title: "Одинокий голубь", year: "1989" },
    { title: "Пингвин", year: "2024" },
    { title: "Пуаро Агаты Кристи", year: "1989–2013" },
    { title: "Охотник за разумом", year: "2017–2019" },
    { title: "Мистер Бин", year: "1990–1995" },
    { title: "Первый шаг", year: "2000–2002" },
    { title: "Возвращение Шерлока Холмса", year: "1986–1988" },
    { title: "Тайны миллиардера", year: "2015–2024" },
    { title: "Предложение", year: "2022" },
    { title: "Аварийная посадка любви", year: "2019–2020" },
    { title: "Волейбол!!", year: "2014–2020" },
    { title: "Царство падальщиков", year: "2023" },
    { title: "Гоморра", year: "2014–2021" },
    { title: "Да, господин министр", year: "1980–1984" },
    { title: "Поза", year: "2018–2021" },
    { title: "Чeрная гадюка 3", year: "1987" },
    { title: "Важнейшие события Второй мировой войны в цвете", year: "2019" },
    { title: "Энн", year: "2017–2019" },
    { title: "Больница Питт", year: "2025–" },
    { title: "Таинственный театр 3000 года", year: "1988–1999" },
    { title: "Служба новостей", year: "2012–2014" },
    { title: "Арчер", year: "2009–2023" },
    { title: "Бюро легенд", year: "2015–2020" },
    { title: "Ломка", year: "2021" },
    { title: "Подпольная империя", year: "2010–2014" },
    { title: "Сорвиголова: Рожденный заново", year: "2025–" },
    { title: "Чaво с восьмого", year: "1972–1983" },
    { title: "Критикал рол", year: "2015–" },
    { title: "Yeh Meri Family", year: "2018–" },
    { title: "Убойный отдел", year: "1993–1999" },
    { title: "Юная Лига Справедливости", year: "2010–2022" },
    { title: "КьюАй. Весьма интересно", year: "2003–" },
    { title: "Истребитель демонов : Kimetsu no Yaiba", year: "2019–" },
    { title: "Правосудие", year: "2010–2015" },
    { title: "Шоу Багса Банни", year: "1960–1975" },
    { title: "Семьянин", year: "2019–" },
    { title: "Чем мы занимаемся в тени", year: "2019–2024" },
    { title: "Драконий жемчуг", year: "1986–1989" },
    { title: "Призраки дома на холме", year: "2018" },
    { title: "Лига справедливости", year: "2001–2004" },
    { title: "Звёздный крейсер Галактика", year: "2003" },
    { title: "Драконий жемчуг", year: "1995–2003" },
    { title: "Братья Bентура", year: "2003–2018" },
    { title: "Индевор", year: "2012–2023" },
    { title: "Да, господин Премьер-министр", year: "1986–1987" },
    { title: "Самурай Чамплу", year: "2004–2005" },
    { title: "Летучие Конкорды", year: "2007–2009" },
    { title: "Rocket Boys", year: "2022–" },
    { title: "Ход королевы", year: "2020" },
    { title: "Компьютерщики", year: "2006–2013" },
    { title: "Любовь на шестерых", year: "2000–2004" },
    { title: "Тени над Балканами", year: "2017–2020" },
    { title: "Создавая Убийцу", year: "2015–2018" },
    { title: "Медведь", year: "2022–" },
    { title: "Мистер Робот", year: "2015–2019" },
    { title: "Эзель", year: "2009–2011" },
    { title: "Я - Алан Партридж", year: "1997–2002" },
    { title: "Йеллоустоун", year: "2018–2024" },
    { title: "Искатели сокровищ", year: "2014–2022" },
    { title: "Самурай Джек", year: "2001–2017" },
    { title: "Невозможные шутники", year: "2011–" },
    { title: "Счастливая долина", year: "2014–2023" },
    { title: "Долбанутые", year: "1999–2001" },
    { title: "Магическая битва", year: "2020–" },
    { title: "Долгий путь вокруг Земли", year: "2004–2010" },
    { title: "Обычное шоу", year: "2010–2017" },
    { title: "Спартак: Кровь и песок", year: "2010–2013" },
    { title: "Так чья сейчас реплика?", year: "1998–2007" },
    { title: "Шоу Эрика Андре", year: "2012–" },
    { title: "Девчонки из Дерри", year: "2018–2022" },
    { title: "Твин Пикс", year: "2017" },
    { title: "Сыны анархии", year: "2008–2014" },
    { title: "Моб Психо 100", year: "2016–2022" },
    { title: "Луи", year: "2010–2015" },
    { title: "Discovery: Сквозь пространство и время с Морганом Фрименом", year: "2010–2017" },
    { title: "Офис", year: "2001–2003" },
    { title: "Евангелион", year: "1995–1996" },
    { title: "Парни из Трейлерпарка", year: "2001–2018" },
    { title: "Алхимия душ", year: "2022–2023" },
    { title: "Спартак: Боги арены", year: "2011" },
    { title: "Шиттс Крик", year: "2015–2020" },
    { title: "Моя гениальная подруга", year: "2018–2024" },
    { title: "Заднепроходнее отверстие", year: "1997–2001" },
    { title: "Кремниевая долина", year: "2014–2019" },
    { title: "Стыд", year: "2015–2017" },
    { title: "Бесстыжие", year: "2011–2021" },
    { title: "Бродяга Кэнсин: Воспоминания", year: "1999" },
    { title: "Формула 1: Гонять, чтобы выживать", year: "2019–" },
    { title: "Стальной алхимик", year: "2003–2004" },
    { title: "Футурама", year: "1999–" },
    { title: "Пространство", year: "2015–2022" },
    { title: "Север и Юг", year: "2004" },
    { title: "Ганнибал", year: "2013–2015" },
    { title: "О всех созданиях - больших и малых", year: "2020–" },
    { title: "Доктор Кто", year: "2005–2022" },
    { title: "Европейская сторона", year: "2004–2009" },
    { title: "Необычный адвокат", year: "2022" },
    { title: "Тени", year: "2014–2019" },
    { title: "Уэнтуорт", year: "2013–2021" },
    { title: "С Земли на Луну", year: "1998" },
    { title: "Война Фойла", year: "2002–2015" },
    { title: "Гинтама", year: "2005–2021" },
    { title: "Леттеркенни", year: "2016–2023" }
];

const boardGamesList = [
    // Классические и вечные
    "Chess",
    "Backgammon",
    "Go",
    "Scrabble",

    // Семейные и для вечеринок
    "Carcassonne",
    "Catan",
    "Ticket to Ride",
    "Dixit",
    "Alias",
    "Imaginarium",

    // Стратегии и евроигры
    "Terra Mystica",
    "Swinus",
    "7 Wonders",
    "Everdell",
    "War of the Ring",

    // Кооперативные игры
    "Pandemic",
    "Arkham Horror",
    "Gloomhaven",

    // Для вечеринок и больших компаний
    "Mafia",
    "Codenames",
    "EkiVoki",
    "Jenga",
    "Monopoly",

    // Для любителей экшена и дуэлей
    "Blood Rage",
    "Nemesis",
    "Undervault",

    // Лёгкие и быстрые игры
    "Kingdomino",
    "Splendor",
    "Patchwork",
    "Set"
];

function generateBoardGame() {
    const randomIndex = Math.floor(Math.random() * boardGamesList.length);
    const boardGame = boardGamesList[randomIndex];
    document.getElementById('randomgame').innerText = boardGame;
}

function generatebestAlbums() {
    const randomIndex = Math.floor(Math.random() * bestAlbums.length);
    const bestAlbum = bestAlbums[randomIndex];
    document.getElementById('randommusic').innerText = bestAlbum;
}

function generateSerial() {
    const randomIndex = Math.floor(Math.random() * serialList.length);
    const serial = serialList[randomIndex];

    const to_show = `
    ${serial.title}
    ${serial.year}
    `;

    document.getElementById('randommovie').innerText = to_show;
}


function generateCountryForSpring() {
    const randomIndex = Math.floor(Math.random() * springList.length);
    const countryForSpring = springList[randomIndex];
    document.getElementById('randomtravel').innerText = countryForSpring;
}

function generateCountryForSpring() {
    const randomIndex = Math.floor(Math.random() * springList.length);
    const countryForSpring = springList[randomIndex];
    document.getElementById('randomtravel').innerText = countryForSpring;
}

function generateCountryForSummer() {
    const randomIndex = Math.floor(Math.random() * summerList.length);
    const countryForSummer = summerList[randomIndex];
    document.getElementById('randomtravel').innerText = countryForSummer;
}

function generateCountryForAutumn() {
    const randomIndex = Math.floor(Math.random() * autumnList.length);
    const countryForAutumn = autumnList[randomIndex];
    document.getElementById('randomtravel').innerText = countryForAutumn;
}

function generateCountryForWinter() {
    const randomIndex = Math.floor(Math.random() * winterList.length);
    const countryForWinter = winterList[randomIndex];
    document.getElementById('randomtravel').innerText = countryForWinter;
}

function generateCountryForWinter() {
    const randomIndex = Math.floor(Math.random() * winterList.length);
    const countryForWinter = winterList[randomIndex];
    document.getElementById('randomtravel').innerText = countryForWinter;
}

function generateDish() {
    const randomIndex = Math.floor(Math.random() * dish_list.length);
    const dish = dish_list[randomIndex];
    document.getElementById('randomcuisine').innerText = dish;
}

function generateCuisine() {
    const randomIndex = Math.floor(Math.random() * cuisine_list.length);
    const cuisine = cuisine_list[randomIndex];
    document.getElementById('randomcuisine').innerText = cuisine;
}


function generateBook() {
    const randomIndex = Math.floor(Math.random() * greatbooks.length);
    const book = greatbooks[randomIndex];
    document.getElementById('randombook').innerText = book;
}


function generateMovie() {
    const randomIndex = Math.floor(Math.random() * movie_list.length);
    const movie = movie_list[randomIndex];
    document.getElementById('randommovie').innerText = movie;
}

function generatePCGame() {
    const genres = Object.keys(bestGamesByGenre); // Получаем все ключи (жанры)
    const randomGenre = genres[Math.floor(Math.random() * genres.length)]; // Случайный жанр
    const games = bestGamesByGenre[randomGenre]; // Игры из выбранного жанра
    const randomGame = games[Math.floor(Math.random() * games.length)]; // Случайная игра из жанра

    document.getElementById('randomgame').innerText = randomGame;
}

const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const randomBtn = document.getElementById('randomBtn');
const clearBtn = document.getElementById('clearBtn');
const todoList = document.getElementById('todoList');
const randomTodo = document.getElementById('randomTodo');

// Массив для хранения дел
const todos = [];

// Добавление дела в список
addBtn.addEventListener('click', () => {
    const todoText = todoInput.value.trim();
    if (todoText === '') {
        alert('enter an item!!!');
        return;
    }

    todos.push(todoText);

    // Обновляем отображение списка дел
    const li = document.createElement('li');
    li.textContent = todoText;
    todoList.appendChild(li);

    // Очищаем поле ввода
    todoInput.value = '';
});

// Выбор случайного дела
randomBtn.addEventListener('click', () => {
    if (todos.length === 0) {
        alert('the list is clear!');
        return;
    }

    const randomIndex = Math.floor(Math.random() * todos.length);
    const selectedTodo = todos[randomIndex];
    randomTodo.textContent = `Random item: ${selectedTodo}`;
});

// Очистка списка дел
clearBtn.addEventListener('click', () => {
    if (todos.length === 0) {
        alert('the list is already clear!!');
        return;
    }

    // Очищаем массив
    todos.length = 0;

    // Очищаем визуальное представление списка
    todoList.innerHTML = '';

    // Сбрасываем сообщение о случайном деле
    randomTodo.textContent = '';

    alert('the list was cleared!');
});


document.addEventListener("DOMContentLoaded", function() {
    const styles = ["shadow-dance-text", "melting-text"];
    const randomStyle = styles[Math.floor(Math.random() * styles.length)];
    document.getElementById("randomH1").classList.add(randomStyle);
});
