const books = [
	{
		author: 'David Eddings',
		tags: ['Fiction', 'Belgariad'],
		description: '<p><strong>Pawn of Prophecy:</strong> The Pawn of Prophecy is a fantasy book written by David Eddings and published by Grim Oak Press. It is the first book in the Belgariad series, which contains a total of five main books with additional companion volumes.<br> Book Description from publisher: Long ago, so the Storyteller claimed, the evil god Torak sought dominion and drove men and gods to war. But Belgrath the Sorcerer led men to reclaim the Orb that protected the West. So long as it lay at Riva, the prophecy went, men would be safe. That was only a  story, and Garion did not believe in magic dooms, even though the man without a shadow had haunted him for years. Brought up on a quiet farm by his Aunt Pol, how could he know that the Apostate planned to wake dread Torak, or that he would be led on a quest of unparalleled magic and danger by those he loved, but did not truly know.<br> For yet a little while, his dreams of innocence remained safe, untroubled by knowledge of his strange heritage. For a little while... thus begins The Belgariad, an epic fantasy of immense scope set against a history of 7,000 years. It tells of the struggles between ancient gods and mighty Kings, and of men in strange lands facing fated events, all bound by a prophecy that must be fulfilled.<br><br></p>',
		cover: './images/Book_Photos/rsz_belgariad_pawnofprophecy_grimoakpress.jpg',
		title: 'Pawn of Prophecy'
	},
	{
		author: 'David Eddings',
		tags: ['Fiction', 'Belgariad'],
		description: '<p><strong>Queen of Sorcery:</strong> Legends tell of the evil god Torak coveting the power of the Orb of Aldur, until he was defeated in a final battle. Prophecy also speaks of a time when he will again awaken to seek dominance over all the world. Now the Orb has been stolen by a priest of Torak, and that time is at hand. Belgarath the Sorcerer and his daughter, Polgara the arch-Sorceress, are on the trail of the Orb, seeking to regain it before the final disaster. With them goes Garion, a simple farm boy only months before, but now the focus of the struggle. He had never believed in sorcery, wanting no part of it. Yet with every league they travel, the power is growing within him, forcing him into acts of wizardry that he can not accept. His fate is inextricably woven into the fabric of an unfolding prophecy for glory or doom. <br><br></p>',
		cover: './images/belgariad_QueenofSorcery_GrimOakPress.webp',
		title: 'Queen of Sorcery'
	},
	{
		author: 'David Eddings',
		tags: ['Fiction', 'Belgariad'],
		description: "<p><strong>Magician's Gambit:</strong> Ce'Nedra, Imperial Princess of Tolnedra, is confused. Everyone knows the tales of the Orb protecting the West from the evil god Torak are just silly legends. But here she is, forced to join a dangerous quest to recover that stolen Orb. No one believes in sorcery, but Garion's aunt and grandfather seem to be the fabled sorcerers Polgara and Belgarath, who would have to be thousands of years old. Even young Garion is learning to do sorcery. He's just a farm boy, totally unsuitable for an Imperial Princess. Yet for some reason, she has the urge to teach him, brush back his tangled hair, and comfort him. But he is going to a strange tower in the center of all he believes evil, to face some horrible, powerful magician, and she can't be there to watch over him. She may never see him again! Thus continues The Belgariad, an epic prophecy still unfolding. <br><br></p>",
		cover: './images/belgariad_MagiciansGambit_GrimOakPress.jfif',
		title: "Magician's Gambit"
	},
	{
		author: 'David Eddings',
		tags: ['Fiction', 'Belgariad'],
		description: "<p><strong>Castle of Wizardry:</strong> It all began with the theft of the Orb that protected the West from the evil God Torak. Before that, Garion had been a simple farm boy. Afterward, he discovered he's a sorcerer. Now, at last, the Orb has been regained and the quest nears its end. Of course, the questors must still escape from a crumbling enemy fortress, flee across a desert filled with Murgo soldiers, and avoid the Grolim Hierarchs seeking to destroy them with dark magic. After that, Garion feels assured his part will be finished. But the prophecy still holds several surprises for Garion, and for the Imperial Princess Ce'Nedra. <br><br></p>",
		cover: './images/belgariad_CastleofWizardry_GrimOakPress.jfif',
		title: "Castle of Wizardry"
	},
	{
		author: 'David Eddings',
		tags: ['Fiction', 'Belgariad'],
		description: "<p><strong>Queen of Sorcery:</strong> The quest was over. The Orb of Aldur was restored. And once again, with the crowning of Garion, there was a descendant of Riva Iron-grip to rule as Overlord of the West. And yet the prophecy was unfulfilled. In the east, the evil god Torak was about to awaken and seek dominion. Somehow, Garion had to face the god, to kill or be killed. On the outcome of that dread duel rested the destiny of the world. Now, accompanied by his grandfather, the ancient sorcerer Belgarath, Garion heads toward the City of Endless Night, where Torak awaits him. To the south, his young fiancée, the Imperial Princess Ce'Nedra, leads the armies of the West in a desperate effort to divert the forces of Torak's horde away from the man she loved. The prophecy drives Garion on, but it gives no answer to the question that haunts him. How does a man kill an immortal god? He must answer that question in this resolution of the epic war between men, kings and gods that has spanned 7,000 years. <br><br></p>",
		cover: './images/belgariad_EnchantersEndgame_GrimOakPress.webp',
		title: "Enchanter's Endgame"
	},
    {
		author: 'Brandon Mull',
		tags: ['Fiction', 'Fablehaven'],
		description: '<p><strong>Fablehaven:</strong> Fablehaven is a fantasy book written by Brandon Mull and published by Simon and Schuster. Fablehaven is the first book in the five volume Fablehaven series.<br> Book Description from publisher: For centuries mystical creatures of all description were gathered into a hidden refuge called Fablehaven to prevent their extinction. The sanctuary survives today as one of the last strongholds of true magic. Enchanting? Absolutely. Exciting? You bet. Safe? Well, actually, quite the opposite.<br> Kendra and her brother, Seth, have no idea that their grandfather is the current caretaker of Fablehaven. Inside the gated woods, ancient laws keep relative order among greedy trolls, mischievous satyrs, plotting witches, spiteful imps, and jealous fairies. However, when the rules get broken—Seth is a bit too curious and reckless for his own good—powerful forces of evil are unleashed, and Kendra and her brother face the greatest challenge of their lives. To save their family, Fablehaven, and perhaps even the world, Kendra and Seth must find the courage to do what they fear most.</p>',
		cover: './images/Book_Photos/rsz_fablehaven_simonandschuster.jpg',
		title: 'Fablehaven'
	},
	{
		author: 'Brandon Mull',
		tags: ['Fiction', 'Fablehaven'],
		description: '<p><strong>Rise of the Evening Star:</strong> At the end of the school year, Kendra and her brother Seth find themselves racing back to Fablehaven, a refuge for mythical and magical creatures. Grandpa Sorenson, the caretaker, invites three specialists -- a potion master, a magical relics collector, and a mystical creature trapper -- to help protect the property from the Society of the Evening Star, an ancient organization determined to infiltrate the preserve and steal a hidden artifact of great power. Time is running out. The Evening Star is storming the gates. If the artifact falls into the wrong hands, it could mean the downfall of other preserves and possibly the world. Will Kendra learn to use her fairy gifts in time? Will Seth stay out of trouble?</p>',
		cover: './images/Fablehaven_RiseoftheEveningStar_SimonandSchuster.jpg',
		title: 'Rise of the Evening Star'
	},
	{
		author: 'Brandon Mull',
		tags: ['Fiction', 'Fablehaven'],
		description: '<p><strong>Grip of the Shadow Plague:</strong> Danger lurks everywhere at Fablehaven, where someone has released a plague that transforms beings of light into creatures of darkness. In dire need of help, the Sorensons question where to turn, now that long trusted allies have been revealed as potential foes. Kendra embarks on a special mission that only she can attempt because of her new abilities as fairykind, while Seth stays behind and discovers an incredible new talent of his own. The siblings are put to the test as the threat grows both abroad and home at the Fablehaven preserve, and Brandon Mull spins his richest and most thrilling fantasy tale yet in this third title of the popular fantasy series.</p>',
		cover: './images/Fablehaven_GripoftheShadowPlague_SimonandSchuster.jpg',
		title: 'Grip of the Shadow Plague'
	},
	{
		author: 'Brandon Mull',
		tags: ['Fiction', 'Fablehaven'],
		description: '<p><strong>Secrets of the Shadow Sanctuary:</strong> Danger lurks everywhere at Fablehaven, where someone has released a plague that transforms beings of light into creatures of darkness. In dire need of help, the Sorensons question where to turn, now that long trusted allies have been revealed as potential foes. Kendra embarks on a special mission that only she can attempt because of her new abilities as fairykind, while Seth stays behind and discovers an incredible new talent of his own. The siblings are put to the test as the threat grows both abroad and home at the Fablehaven preserve, and Brandon Mull spins his richest and most thrilling fantasy tale yet in this third title of the popular fantasy series.</p>',
		cover: './images/Fablehaven_SecretsoftheDragonSanctuary_SimonandSchuster.jpg',
		title: 'Secrets of the Dragon Sanctuary'
	},
	{
		author: 'Brandon Mull',
		tags: ['Fiction', 'Fablehaven'],
		description: '<p><strong>Keys to the Demon Prison:</strong> Since ancient times, the great demon prison Zzyzx has protected the world from the most dangerous servants of darkness, including Gorgrog, the Demon King. After centuries of plotting, the Sphinx is on the verge of recovering the five artifacts necessary to open the legendary prison. Facing the potential of a world-ending calamity, all friends of light must unite in a final effort to thwart the Sphinx s designs and find a safe home for the five artifacts. To this end, Kendra, Seth, and the Knights of the Dawn will venture far beyond the walls of Fablehaven to strange and exotic magical preserves across the globe, where the end of every quest becomes the beginning of another. In this explosive series finale, allegiances will be confirmed and secrets revealed as the forces of light and darkness collide in a desperate struggle to control the keys to the demon prison.</p>',
		cover: './images/Fablehaven_KeysoftheDemonPrison_SimonandSchuster.jpg',
		title: 'Keys of the Demon Prison'
	},
    {
		author: 'J.R.R. Tolkien',
		tags: ['Fiction', 'The Lord of the Rings'],
		description: '<p><strong>The Fellowship of the Ring:</strong> The Fellowship of the Ring was written by J.R.R. Tolkien and originally published by Allen & Unwin Book Publishers in 1954. This book is still a classic read along with the following two books in this three book series.<br> Book Description by publisher: One Ring to rule them all, One Ring to find them, One Ring to bring them all and in darkness bind them.<br> In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell into the hands of Bilbo Baggins, as told in The Hobbit. In a sleepy village in the Shire, young Frodo Baggins finds himself faced with an immense task, as his elderly cousin Bilbo entrusts the Ring to his care. Frodo must leave his home and make a perilous journey across Middle-earth to the Cracks of Doom, there to destroy the Ring and foil the Dark Lord in his evil purpose.<br><br></p>',
		cover: './images/Book_Photos/rsz_thefellowshipofthering_harpercollins.jpg',
		title: 'The Fellowship of the Ring'
	},
	{
		author: 'J.R.R. Tolkien',
		tags: ['Fiction', 'The Lord of the Rings'],
		description: '<p><strong>The Two Towers:</strong> One Ring to rule them all, One Ring to find them, One Ring to bring them all and in the darkness bind them.<br> Frodo and his Companions of the Ring have been beset by danger during their quest to prevent the Ruling Ring from falling into the hands of the Dark Lord by destroying it in the Cracks of Doom. They have lost the wizard, Gandalf, in a battle in the Mines of Moria. And Boromir, seduced by the power of the Ring, tried to seize it by force. While Frodo and Sam made their escape, the rest of the company was attacked by Orcs. Now they continue the journey alone down the great River Anduin—alone, that is, save for the mysterious creeping figure that follows wherever they go.<br><br></p>',
		cover: './images/TheTwoTowers_HarperCollins.png',
		title: 'The Two Towers'
	},
	{
		author: 'J.R.R. Tolkien',
		tags: ['Fiction', 'The Lord of the Rings'],
		description: '<p><strong>The Return of the King:</strong> The Companions of the Ring have become involved in separate adventures as the quest continues. Aragorn, revealed as the hidden heir of the ancient Kings of the West, joined with the Riders of Rohan against the forces of Isengard, and took part in the desperate victory of the Hornburg. Merry and Pippin, captured by Orcs, escaped into Fangorn Forest and there encountered the Ents.<br>	Gandalf returned, miraculously, and defeated the evil wizard, Saruman. Meanwhile, Sam and Frodo progressed towards Mordor to destroy the Ring, accompanied by Gollum, still obsessed by his “precious.” After a battle with the giant spider, Shelob, Sam left his master for dead; but Frodo is still alive—in the hands of the Orcs. And all the time the armies of the Dark Lord are massing.<br><br></p>',
		cover: './images/TheReturnOfTheKing_HarperCollins.jfif',
		title: 'The Return of the King'
	},
    {
        author: 'Stephen Covey',
		tags: ['Non-Fiction'],
		description: "<p>The 7 Habits of Highly Effective People: The 7 Habits of Highly Effective People was written by Stephen R. Covey and is published by Simon and Schuster. Book Description by publisher: The 7 Habits have become famous and are integrated into everyday thinking by millions and millions of people. Why? Because they work! With Sean Covey's added takeaways on how the habits can be used in our modern age, the wisdom of the 7 Habits will be refreshed for a new generation of leaders.<br><br> They include:</p> <ul><li>Habit 1: Be Proactive</li><li>Habit 2: Begin with the End in Mind</li><li>Habit 3: Put First Things First</li><li>Habit 4: Think Win/Win</li><li>Habit 5: Seek First to Understand, Then to Be Understood</li><li>Habit 6: Synergize</li><li>Habit 7: Sharpen the Saw</li></ul>",
		cover: './images/Book_Photos/rsz_the7habitsofhighlyeffectivepeople_simonandschuster.jpg',
		title: '7 Habits of Highly Effective People'
    },
    {
        author: 'The Church of Jesus Christ of Latter-Day Saints',
		tags: ['Non-Fiction'],
		description: "<p>The Book of Mormon: The Book of Mormon is an ancient record of the original inhabitant of the Americas published by the Church of Jesus Christ of Latter-Day Saints. It spans over a thousand years of history that includes both personal accounts and the events of entire peoples.<br> The primary purpose of the Book of Mormon is the testify of Jesus Christ. It is to serve as a companion volume to the Bible and serves to clarify the teachings of ancient prophets. The book was written by many ancient prophets by the spirit of prophecy and revelation. Their words, written on gold plates, were quoted and abridged by a prophet-historian named Mormon. The record gives an account of two great civilizations. One came from Jerusalem in 600 B.C. and afterward separated into two nations, known as the Nephites and the Lamanites. The other came much earlier when the Lord confounded the tongues at the Tower of Babel. This group is known as the Jaredites. After thousands of years, all were destroyed except the Lamanites, and they are among the ancestors of the American Indians.</p>",
		cover: './images/TheBookOfMormon_LDS.jpg',
		title: 'The Book of Mormon'
    }];
    

export default books