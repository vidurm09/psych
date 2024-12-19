const psychEpisodes = [
    { season: 1, episodes: 15 },
    { season: 2, episodes: 16 },
    { season: 3, episodes: 16 },
    { season: 4, episodes: 16 },
    { season: 5, episodes: 16 },
    { season: 6, episodes: 16 },
    { season: 7, episodes: 16 },
    { season: 8, episodes: 10 },
  ]
  
  const psychEpisodeDetails = [
    [
      "Pilot",
      "Spellingg Bee",
      "Speak Now or Forever Hold Your Piece",
      "Woman Seeking Dead Husband: Smokers Okay, No Pets",
      "9 Lives",
      "Weekend Warriors",
      "Who Ya Gonna Call?",
      "From the Earth to the Starbucks",
      "He Loves Me, He Loves Me Not, He Loves Me, Oops He's Dead",
      "Poker? I Barely Know Her",
      "Scary Sherry: Bianca's Toast",
      "He Loves Me, He Loves Me Not, He Loves Me, Oops He's Dead",
      "Cloudy... With a Chance of Murder",
      "Game, Set... Muuurder?",
    ],
  ]
  
  const psychWithFullDetails =
    // [5] Citation for Season 1
    [
      [
        {
          title: "Pilot",
          description:
            'Shawn Spencer pretends to be psychic to avoid being arrested and ends up solving a kidnapping case with his best friend, Burton "Gus" Guster.',
        },
        {
          title: "Spellingg Bee",
          description:
            "Shawn and Gus investigate the death of a spelling bee contestant, with Shawn going undercover as a participant.",
        },
        {
          title: "Speak Now or Forever Hold Your Piece",
          description:
            "Shawn and Gus go undercover at a wedding to solve a murder, with Gus posing as a wedding singer.",
        },
        {
          title: "Woman Seeking Dead Husband: Smokers Okay, No Pets",
          description:
            "Shawn and Gus investigate a woman's claim that her husband faked his own death, leading them to a web of deceit.",
        },
        {
          title: "9 Lives",
          description:
            "Shawn and Gus investigate a series of attacks on a woman who believes she has nine lives, encountering a range of eccentric suspects.",
        },
        {
          title: "Weekend Warriors",
          description:
            "Shawn and Gus participate in a Civil War reenactment where a murder takes place, with Shawn's knowledge of history proving useful.",
        },
        {
          title: "Who Ya Gonna Call?",
          description:
            "Shawn and Gus investigate a haunting while Lassiter and Juliet work on the murder of a doctor, leading to a crossover of their cases.",
        },
        {
          title: "Shawn vs. the Red Phantom",
          description:
            "The disappearance of a teenager leads Shawn and Gus to a comic book convention, where they encounter a rivalry between comic book creators.",
        },
        {
          title: "Forget Me Not",
          description:
            "Shawn helps a former police captain with amnesia find a murderer, relying on his sharp memory to piece together clues.",
        },
        {
          title: "From the Earth to Starbucks",
          description:
            "Shawn helps Lassiter solve a crime, unbeknownst to him, to boost Lassiter's confidence after a series of unsolved cases.",
        },
        {
          title: "He Loves Me, He Loves Me Not, He Loves Me, Oops He's Dead",
          description:
            "Shawn and Gus investigate a series of murders involving naked men found in a field, with Gus going on a date with a potential suspect.",
        },
        {
          title: "Cloudy... With a Chance of Murder",
          description:
            "Shawn and Gus consult on a murder case, working to prove the client's innocence and uncovering a conspiracy in the process.",
        },
        {
          title: "Game, Set... Muuurder?",
          description:
            "Shawn investigates the case of a missing tennis player, delving into the competitive world of professional tennis.",
        },
        {
          title: "Poker? I Barely Know Her",
          description:
            "Shawn and Gus go undercover in a high-stakes poker game to solve a murder, with Shawn showcasing his bluffing skills.",
        },
        {
          title: "Scary Sherry: Bianca's Toast",
          description:
            "Shawn and Gus investigate a haunting at a sorority house, encountering spooky occurrences and uncovering secrets among the sorority sisters.",
        },
      ],
      // [6] Citation for Season 2
      [
        {
          title: "American Duos",
          description:
            "Shawn and Gus are hired to protect a reality-show judge who has escaped a series of attempts on his life, with Gina Gershon guest starring as  Emilina Saffron[4].",
        },
        {
          title: "65 Million Years Off",
          description:
            "Shawn investigates a murder and claims a T-Rex killed the victim, leading to skepticism from Lassiter and Juliet.",
        },
        {
          title: "Psy vs. Psy",
          description:
            "Shawn goes up against a federal psychic, competing to solve a case and prove his abilities.",
        },
        {
          title: "Zero to Murder in Sixty Seconds",
          description:
            "A case involving a chop shop owner has Shawn having second thoughts about his fake psychic career, questioning the ethics of his deception.",
        },
        {
          title: "And Down the Stretch Comes Murder",
          description:
            "Shawn and Gus investigate why a jockey's horses keep losing, uncovering a dangerous rivalry in the horse racing world.",
        },
        {
          title: "Meat Is Murder, But Murder Is Also Murder",
          description:
            "Shawn and Gus investigate a murder at a vegan restaurant, navigating the world of animal rights activism and culinary secrets.",
        },
        {
          title: "If You're So Smart, Then Why Are You Dead?",
          description:
            "Shawn and Gus investigate a murder at a college where a professor recreates famous murders, putting their own lives at risk.",
        },
        {
          title: "Rob-a-Bye Baby",
          description:
            "Shawn and Gus investigate the kidnapping of a baby from a wealthy family, dealing with a distraught mother and a high-pressure situation.",
        },
        {
          title: "Bounty Hunters!",
          description:
            "Shawn and Gus become bounty hunters to find a bail jumper, encountering a variety of colorful characters and dangerous situations.",
        },
        {
          title: "Gus's Dad May Have Killed an Old Guy",
          description:
            "Gus's dad becomes a suspect in a murder case, forcing Shawn and Gus to clear his name and uncover the real killer.",
        },
        {
          title: "There's Something About Mira",
          description:
            "Shawn falls for a woman who may be involved in a crime, putting his feelings and his detective work in conflict.",
        },
        {
          title: "The Old and the Restless",
          description:
            "Shawn and Gus investigate a murder at a retirement home, encountering a cast of elderly suspects with surprising secrets.",
        },
        {
          title: "Lights, Camera... Homicidio",
          description:
            "Shawn and Gus investigate a murder on the set of a Spanish soap opera, navigating the dramatic world of telenovelas.",
        },
        {
          title: "Black and Tan: A Crime of Fashion",
          description:
            "Shawn and Gus investigate a murder at a fashion show, encountering fierce models and cutthroat designers.",
        },
        {
          title: "Shawn (and Gus) of the Dead",
          description:
            "Shawn and Gus investigate a murder at a historical reenactment, with Shawn's knowledge of the past aiding their investigation.",
        },
      ],
      // [7] Citation for Season 3
      [
        {
          title: "Ghosts",
          description:
            "Shawn investigates a haunting for the vice president of Gus's pharmaceutical company, leading to unexpected consequences for Gus's career.",
        },
        {
          title: "Murder?... Anyone?... Anyone?... Bueller?",
          description:
            "Shawn believes a murder has taken place at his high school reunion, navigating past grudges and uncovering hidden truths.",
        },
        {
          title: "Daredevils!",
          description:
            "Shawn and Gus investigate sabotage attempts on an aging daredevil, entering the world of extreme stunts and risk-taking.",
        },
        {
          title: "The Greatest Adventure in the History of Basic Cable",
          description:
            "Shawn's Uncle Jack leads a hunt for pirate treasure, with Shawn and Gus joining the adventure and encountering danger along the way.",
        },
        {
          title: "Disco Didn't Die. It Was Murdered!",
          description:
            "Shawn investigates the release of Henry's biggest arrest from jail, leading to a confrontation with a criminal from the past.",
        },
        {
          title: "There Might Be Blood",
          description:
            "Shawn and Gus investigate a murder at a psychic convention, encountering a group of fraudulent psychics and a genuine mystery.",
        },
        {
          title: "Talk Derby to Me",
          description:
            "Shawn and Gus investigate a murder at a roller derby, entering the fast-paced and competitive world of roller derby athletes.",
        },
        {
          title: "Gus Walks into a Bank",
          description:
            "Gus gets caught in a bank robbery, forcing Shawn to use his skills to help him and the other hostages.",
        },
        {
          title: "Christmas Joy",
          description:
            "Shawn and Gus investigate a string of toy store robberies during the Christmas season, bringing holiday cheer to their detective work.",
        },
        {
          title: "Six Feet Under the Sea",
          description:
            "Shawn and Gus investigate a murder at an aquarium, encountering marine life and uncovering secrets among the aquarium staff.",
        },
        {
          title: "Lassie Did a Bad, Bad Thing",
          description:
            "Lassiter becomes the prime suspect in a murder case, forcing Shawn and Gus to clear his name and find the real killer.",
        },
        {
          title: "Earth, Wind and... Wait for It...",
          description:
            "Shawn and Gus investigate a murder at a college where a professor is researching weather phenomena, encountering scientific mysteries and academic rivalries.",
        },
        {
          title: "Any Given Friday Night at 10PM, 9PM Central",
          description:
            "Shawn and Gus investigate a murder at a high school football game, delving into the world of high school sports and teenage drama.",
        },
        {
          title: "Truer Lies",
          description:
            "Shawn and Gus investigate a murder at a spy convention, encountering espionage, gadgets, and international intrigue.",
        },
        {
          title: "Tuesday the 17th",
          description:
            "Shawn and Gus investigate a series of murders at a summer camp, facing eerie occurrences and a possible masked killer.",
        },
        {
          title: "An Evening with Mr. Yang",
          description:
            "Shawn faces off against a serial killer who plays cat-and-mouse games with his victims, putting his detective skills to the ultimate test.",
        },
      ],
      // [8] Citation for Season 4
      [
        {
          title: "Extradition: British Columbia",
          description:
            "Shawn and Gus encounter an art thief while on vacation in Vancouver, leading to a pursuit across the Canadian border.",
        },
        {
          title: "He Dead",
          description:
            "Shawn and Gus investigate the death of a pilot and his wealthy family, uncovering secrets and lies among the privileged.",
        },
        {
          title: "High Noon-ish",
          description:
            "Shawn investigates the possible closing of Lassiter's favorite childhood hangout, uncovering a conspiracy and a connection to Lassiter's past.",
        },
        {
          title: "The Devil Is in the Details... And the Upstairs Bedroom",
          description:
            "Shawn and Gus investigate the suicide of a student at a Catholic university, encountering religious beliefs and supernatural possibilities.",
        },
        {
          title: "Shawn Gets the Yips",
          description:
            "Shawn and Gus investigate a drug lord targeting people involved in a case they weren't assigned to, facing danger and putting their lives on the line.",
        },
        {
          title: "Bollywood Homicide",
          description:
            "Shawn and Gus investigate a murder in the Bollywood filmmaking community, immersing themselves in the world of Indian cinema and dance.",
        },
        {
          title: "High Top Fade-Out",
          description:
            "Shawn and Gus investigate the murder of a member of their favorite childhood boy band, revisiting their past and uncovering secrets among the band members.",
        },
        {
          title: "Let's Get Hairy",
          description:
            "Shawn and Gus investigate a series of murders at a Bigfoot-themed tourist attraction, encountering believers and skeptics in the search for a killer.",
        },
        {
          title: "Shawn Takes a Shot in the Dark",
          description:
            "Shawn is kidnapped and must use his skills to escape, relying on his wits and resourcefulness to survive.",
        },
        {
          title: "You Can't Handle This Episode",
          description:
            "Shawn and Gus investigate a murder at a military academy, navigating the strict rules and uncovering secrets within the academy walls.",
        },
        {
          title: "Thrill Seekers and Hell-Raisers",
          description:
            "Shawn and Gus investigate a murder at a theme park, encountering thrilling rides and dangerous secrets behind the scenes.",
        },
        {
          title: "A Very Juliet Episode",
          description:
            "Juliet goes undercover as a high school student to investigate a drug ring, facing the challenges of teenage life and undercover work.",
        },
        {
          title: "Death Is in the Air",
          description:
            "Shawn and Gus investigate a murder at a pharmaceutical company, uncovering corporate espionage and dangerous experiments.",
        },
        {
          title: "Think Tank",
          description:
            "Shawn consults for a group of geniuses trying to solve a murder, matching wits with brilliant minds and navigating complex puzzles.",
        },
        {
          title: "The Head, the Tail, the Whole Damn Episode",
          description:
            "Shawn and Gus investigate a murder at a taxidermy competition, encountering unusual hobbies and uncovering secrets among the competitors.",
        },
        {
          title: "Mr. Yin Presents...",
          description:
            "Mr. Yin returns with a new apprentice, and Shawn must stop them, facing a dangerous adversary and a challenging case.",
        },
      ],
      // [9] Citation for Season 5
      [
        {
          title: "Romeo and Juliet and Juliet",
          description:
            "Shawn and Gus find themselves caught between two rival Chinese Triad families, navigating cultural differences and dangerous situations.",
        },
        {
          title: "Feet Don't Kill Me Now",
          description:
            "Gus and Lassiter team up to investigate a murder in their tap class, showcasing their dancing skills and detective work.",
        },
        {
          title: "Not Even Close... Encounters",
          description:
            "Shawn and Gus investigate a possible alien abduction, encountering UFO enthusiasts and exploring extraterrestrial possibilities.",
        },
        {
          title: "Chivalry Is Not Dead... But Someone Is",
          description:
            "Shawn and Gus investigate the murder of a wealthy widow's young date, uncovering secrets and lies among the social elite.",
        },
        {
          title: "Shawn and Gus in Drag (Racing)",
          description:
            "Shawn and Gus go undercover in the world of drag racing, encountering fast cars and fierce competition.",
        },
        {
          title: "Viagra Falls",
          description:
            "Shawn and Gus investigate a murder at a retirement community, encountering a cast of elderly characters with surprising secrets.",
        },
        {
          title: "Ferry Tale",
          description:
            "Shawn and Gus investigate a murder on a ferry, navigating a confined space and a limited number of suspects.",
        },
        {
          title: "Shawn 2.0",
          description:
            "Shawn creates a crime-solving computer program, putting his technological skills to the test and encountering unexpected consequences.",
        },
        {
          title: "One, Maybe Two, Ways Out",
          description:
            "Shawn and Gus investigate a murder at a prison, navigating the dangerous world of inmates and correctional officers.",
        },
        {
          title: "Extradition II: The Actual Extradition Part",
          description:
            "Despereaux returns, and Shawn must help bring him to justice, facing a cunning adversary and a challenging case.",
        },
        {
          title: "In Plain Fright",
          description:
            "Shawn and Gus investigate a haunting at a haunted house attraction, encountering spooky scares and uncovering secrets behind the scenes.",
        },
        {
          title: "Dual Spires",
          description:
            "Shawn and Gus investigate a murder in a town that resembles Twin Peaks, encountering quirky characters and a mysterious atmosphere.",
        },
        {
          title: "We'd Like to Thank the Academy",
          description:
            "Shawn and Gus investigate a murder at a performing arts academy, navigating the world of aspiring actors and dancers.",
        },
        {
          title: "The Polarizing Express",
          description:
            "Shawn and Gus investigate a murder on a holiday-themed train, bringing their detective work to a festive setting.",
        },
        {
          title: "Yang 3 in 2D",
          description:
            "Mr. Yin returns, and Shawn must save Juliet, facing a dangerous adversary and a race against time.",
        },
      ],
      // [10] Citation for Season 6
      [
        {
          title: "Shawn Rescues Darth Vader",
          description:
            "Shawn and Gus help a young client retrieve a stolen Star Wars action figure, encountering passionate collectors and valuable memorabilia.",
        },
        {
          title: "Last Night Gus",
          description:
            "Shawn, Gus, Lassiter, and Woody wake up with no memory of the previous night and must piece together the events that led to a murder, leading to humorous and chaotic situations.",
        },
        {
          title: "This Episode Sucks",
          description:
            "Shawn and Gus investigate a string of murders that appear to be committed by a vampire, encountering folklore and superstition.",
        },
        {
          title: "The Amazing Psych-Man & Tap Man, Issue No. 2",
          description:
            "Shawn and Gus try to capture a masked vigilante known as the Mantis, facing a mysterious figure and questioning their own heroism.",
        },
        {
          title: "Shawn and the Real Girl",
          description:
            "Shawn goes undercover on a reality dating show to investigate a murder, navigating the world of reality TV and romantic competition.",
        },
        {
          title: "Let's Doo-Wop It Again",
          description:
            "Shawn and Gus investigate a murder at a doo-wop concert, revisiting musical history and uncovering secrets among the performers.",
        },
        {
          title: "Autopsy Turvy",
          description:
            "Shawn and Gus investigate a murder at a morgue, encountering forensic science and uncovering secrets among the medical examiners.",
        },
        {
          title: "True Grits",
          description:
            "Shawn and Gus travel to the South to investigate a murder, encountering Southern hospitality and a different way of life.",
        },
        {
          title: "Heeeeere's Lassie",
          description:
            "Lassiter suffers from amnesia and believes he is a famous detective from the 1950s, leading to humorous and unexpected behavior.",
        },
        {
          title: "Neil Simon's Lover's Retreat",
          description:
            "Shawn and Gus attend a couples retreat to investigate a murder, navigating relationship dynamics and uncovering secrets among the couples.",
        },
        {
          title:
            "Indiana Shawn and the Temple of the Kinda Crappy, Rusty Old Dagger",
          description:
            "Shawn and Gus embark on an Indiana Jones-style adventure to find a valuable artifact, encountering ancient mysteries and dangerous traps.",
        },
        {
          title: "The Tao of Gus",
          description:
            "Gus seeks enlightenment at a spiritual retreat while Shawn investigates a murder, leading to contrasting approaches to problem-solving.",
        },
        {
          title: "See You Next Wednesday",
          description:
            "Shawn and Gus investigate a series of strange occurrences connected to a horror movie, encountering eerie events and cinematic references.",
        },
        {
          title: "Santabarbaratown",
          description:
            "Shawn and Gus investigate a murder with connections to Chief Vick's past, uncovering secrets and a complex web of relationships.",
        },
        {
          title: "Santabarbaratown 2",
          description:
            "Shawn seeks revenge on the man who shot his father, leading to a dangerous confrontation and a test of his detective skills.",
        },
      ],
      // [11] Citation for Season 7
      [
        {
          title: "Santabarbaratown 2",
          description:
            "Shawn continues his pursuit of the man who shot his father, facing obstacles and putting his own life in danger.",
        },
        {
          title: "Juliet Takes a Luvvah",
          description:
            "Juliet goes undercover at a dating service to catch a killer, navigating the world of online dating and facing dangerous encounters.",
        },
        {
          title: "Lassie Jerky",
          description:
            "Shawn and Gus investigate a possible Bigfoot sighting, encountering wilderness mysteries and eccentric characters.",
        },
        {
          title: "No Country for Two Old Men",
          description:
            "Juliet's stepfather is involved in a dangerous situation, forcing Shawn and Gus to help him and protect Juliet.",
        },
        {
          title: "100 Clues",
          description:
            "Shawn and Gus investigate a murder at a Clue-themed dinner party, encountering a cast of suspicious characters and a classic game setting.",
        },
        {
          title: "Dead Air",
          description:
            "Shawn and Gus investigate a murder at a radio station, navigating the world of broadcasting and uncovering secrets among the radio personalities.",
        },
        {
          title: "The Acid Test",
          description:
            "Shawn and Gus investigate a murder at a college reunion, revisiting their past and encountering old classmates with hidden agendas.",
        },
        {
          title: "Nip and Tuck",
          description:
            "Shawn and Gus investigate a murder at a plastic surgery clinic, encountering beauty standards and uncovering secrets among the patients and staff.",
        },
        {
          title: "Juliet Wears the Pantsuit",
          description:
            "Juliet runs for police chief, facing political challenges and proving her leadership abilities.",
        },
        {
          title: "Right Turn or Left for Dead",
          description:
            "The episode explores alternate realities where Shawn made different choices in his life, showcasing different paths and outcomes.",
        },
        {
          title: "Psych: The Musical",
          description:
            "Shawn and Gus investigate a murder at a theater with musical numbers throughout the episode, showcasing their singing and dancing talents.",
        },
        {
          title: "Office Space",
          description:
            "Shawn and Gus investigate a murder at an office building, navigating corporate culture and uncovering secrets among the employees.",
        },
        {
          title: "No Trout About It",
          description:
            "Shawn and Gus investigate a murder at a fishing competition, encountering fishing enthusiasts and uncovering rivalries among the competitors.",
        },
      ],
      // [12] Citation for Season 8
      [
        {
          title:
            "Lock, Stock, Some Smoking Barrels and Burton Guster's Goblet of Fire",
          description:
            "Shawn and Gus travel to England to help Interpol, encountering British culture and a new set of challenges.",
        },
        {
          title: "S.E.I.Z.E. the Day",
          description:
            "Shawn and Gus help Lassiter take down a dangerous criminal, facing a high-stakes situation and putting their lives on the line.",
        },
        {
          title: "Remake A.K.A. Cloudy... With a Chance of Improvement",
          description:
            'A remake of the season one episode "Cloudy... with a Chance of Murder," revisiting a familiar case with a new perspective.',
        },
        {
          title: "Someone's Got a Woody",
          description:
            "Woody is taken hostage, forcing Shawn and Gus to use their skills to rescue him and apprehend the perpetrator.",
        },
        {
          title: "Cog Blocked",
          description:
            "Gus investigates the murder of a man whose life mirrored his own, facing personal connections and uncovering surprising truths.",
        },
        {
          title: "1967: A Psych Odyssey",
          description:
            "Shawn and Gus investigate a cold case from 1967, delving into the past and encountering historical figures and events.",
        },
        {
          title: "Shawn and Gus Truck Things Up",
          description:
            "Shawn and Gus investigate the murder of a food truck owner, navigating the culinary world and uncovering secrets among the food truck community.",
        },
        {
          title: "A Touch of Sweevil",
          description:
            "Shawn and Gus investigate a murder at a paranormal convention, encountering supernatural beliefs and uncovering a real-life mystery.",
        },
        {
          title: "A Nightmare on State Street",
          description:
            "Shawn has a nightmarish experience at a dream therapy clinic, facing his fears and uncovering a disturbing truth.",
        },
        {
          title: "The Break-Up",
          description:
            "Shawn and Gus handle one last case before Shawn moves to San Francisco, bringing closure to their partnership and their time in Santa Barbara.",
        },
      ],
    ]
  
  function getRandomEpisode() {
    // 1. Select a random season
    const randomSeasonIndex = Math.floor(Math.random() * psychWithFullDetails.length)
    const season = randomSeasonIndex + 1
  
    // 2. Select a random episode from that season
    const randomEpisodeIndex = Math.floor(Math.random() * psychWithFullDetails[randomSeasonIndex].length)
    const randomEpisode = randomEpisodeIndex + 1
  
    const episodeInfo = psychWithFullDetails[randomSeasonIndex][randomEpisodeIndex];
  
    // 3. Display the result
    const episodeDisplay = document.getElementById("episodeInfo")
    episodeDisplay.innerHTML = `
      <h2>Season ${season}, Episode ${randomEpisode}</h2>
      <h3>${episodeInfo.title}</h3> 
      <p>${episodeInfo.description}</p>
        `;
  }