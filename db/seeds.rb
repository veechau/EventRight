# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

require 'faker'

 demo_user = User.create({
  username: "Demo_User",
  first_name: "Jane",
  last_name: "Doe",
  password: "Password",
  avatar: "https://res.cloudinary.com/vechau/image/upload/c_fill,h_300,w_300/v1469345082/user_profile_whueuf.jpg",
  balance: 500,
  email: "demo_user@eventright.us",
  address: "123 Fake St, San Francisco, CA 94108"
});

10.times do
  User.create({
    username: Faker::Name.name,
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    password: "Password",
    avatar: "https://res.cloudinary.com/vechau/image/upload/c_scale,h_300/v1468016827/user-icon-big_f66luo.png",
    balance: rand(1000),
    email: "demo_user@eventright.us",
    address: "123 Fake St, San Francisco, CA 94108"
    })
end

Category.create({
  title: "Pop",
  description: "Pop music is a genre of popular music that originated in its modern form in the Western world during the 1950s and 1960s, deriving from rock and roll. The terms \"popular music\" and \"pop music\" are often used interchangeably, although the former describes all music that is popular (and can include any style).",
  image: "https://res.cloudinary.com/vechau/image/upload/v1467837112/Genres/Category-Pop_u6ujjs.bmp"
  })

Category.create({
  title: "Alternative",
  description: "Latin music encompasses hundreds of styles and rhythms including mainstream genres such as Salsa, Tango, Merengue and Brazilian music, as well as traditional rhythms like Andean music, Puerto Rican Bomba, Cuban Son and Musica Llanera.",
  image: "https://res.cloudinary.com/vechau/image/upload/v1467840235/Genres/Category-Alternative_kradzo.bmp"
  })

Category.create({
  title: "Rock",
  description: "Musically, rock has centered on the electric guitar, usually as part of a rock group with electric bass guitar and drums. Typically, rock is song-based music usually with a 4/4 time signature using a verse-chorus form, but the genre has become extremely diverse.",
  image: "https://res.cloudinary.com/vechau/image/upload/v1467840416/Genres/Category-Rock_dfrnym.bmp"
  })

Category.create({
  title: "Country",
  description: "Country music is a genre of American popular music that originated in Southern United States in the 1920s. It takes its roots from the southeastern genre of American folk music and Western music. Blues modes have been used extensively throughout its recorded history.",
  image: "https://res.cloudinary.com/vechau/image/upload/v1467836496/Genres/Category-Country_ctrme0.bmp"
  })

Category.create({
  title: "EDM",
  description: "Electronic dance music (also known as EDM) was adopted by the American music industry and music press as a buzzword to describe the increasingly commercial US electronic dance music scene. EDM is a broad range of percussive electronic music genres",
  image: "https://res.cloudinary.com/vechau/image/upload/v1467837652/Genres/Category-EDM_wfri2r.bmp"
  })

Category.create({
  title: "R&B/Hip-Hop",
  description: "A very popular and wide-ranging style of music that emerged from traditional blues in the 1940s. R&B can be characterized by its use of blues chords played over a strong and consistent backbeat and by its emphasis on composition rather than the improvisation common in traditional blues. Hip hop, rap, soul, and disco are all categories of R&B and R&B also formed the foundation of rock and roll",
  image: "https://res.cloudinary.com/vechau/image/upload/v1467836498/Genres/Category-HipHop_btl1tg.bmp"
  })

Category.create({
  title: "Indie",
  description: "The music indie pop is a subgenre of alternative rock or indie rock that originated in the United Kingdom in the late 1970s. The style is inspired by punk's DIY ethic and related ideologies, and it generated a thriving fanzine, label, and club and gig circuit.",
  image: "https://res.cloudinary.com/vechau/image/upload/v1467837110/Genres/Category-Indie_fjsjxz.bmp"
})

Category.create({
  title: "Latin",
  description: "Latin music (Musica latina in Spanish and Portuguese) is a musical category encompassing music from any Spanish-speaking area from around the world mainly from Latin America and Spain. Most definitions of Latin music includes any Portuguese-language music from Brazil and sometimes Portugal as well.",
  image: "https://res.cloudinary.com/vechau/image/upload/v1467840726/Genres/Category-Latin_wpldsf.bmp"
  })


Gathering.create({
  artist: "Luke Bryan",
  location: "2001 Gayley Rd, Berkeley, CA 94720",
  start_date: Faker::Date.between(2.days.ago, Date.today),
  end_date: Faker::Date.between(300.days.from_now, 1.year.from_now),
  description: "Born Thomas Luther Bryan in Leesburg, Georgia, on July 17, 1976, Luke Bryan grew up the youngest son of a farmer. Always interested in music, Bryan was raised on his parents' record collection, which included such country artists as George Strait, Conway Twitty and Merle Haggard.",
  image: "https://res.cloudinary.com/vechau/image/upload/c_scale,h_300/v1467984773/LukeBryan_cv9upb.jpg",
  tix_price: 45,
  funds: (45 * 90),
  goal: (45 * 100),
  status: "ongoing",
  organizer_id: rand(User.all.count) + 1,
  category_id: 4,
  place_name: "The Greek Theatre",
  lat: 37.873908,
  lng: -122.253835
})

Gathering.create({
  artist: "Carrie Underwood",
  location: "99 Grove St, San Francisco, CA 94102",
  start_date: Faker::Date.between(2.days.ago, Date.today),
  end_date: Faker::Date.between(300.days.from_now, 1.year.from_now),
  description: "Singer, actress and activist Carrie Marie Underwood was born on March 10, 1983, in Muskogee, Oklahoma. Since winning the famed musical talent show American Idol in 2005, Underwood has emerged as one of the most popular female performers in country music today. She was born and raised on a farm. 'I had a very happy childhood full of the wonderful simple things that children love to do,'' Underwood stated on her website. 'Growing up in the country, I enjoyed things like playing on dirt roads, climbing trees, catching little woodland creatures and, of course, singing.' She went on to win multiple Grammy and Academy of Country Music Awards.",
  image: "https://res.cloudinary.com/vechau/image/upload/c_scale,h_300/v1467984773/CarrieUnderwood_viev6m.jpg",
  tix_price: 50,
  funds: 14300,
  goal: 20000,
  status: "ongoing",
  organizer_id: rand(User.all.count) + 1,
  category_id: 4,
  place_name: "Bill Graham Civic Auditorium",
  lat: 37.7780125,
  lng: -122.48767
})

Gathering.create({
  artist: "Georgia Florida Line",
  location: "1111 California St, San Francisco, CA 94108",
  start_date: Faker::Date.between(2.days.ago, Date.today),
  end_date: Faker::Date.between(300.days.from_now, 1.year.from_now),
  description: "Florida Georgia Line is an American country music duo consisting of vocalists Brian Kelley (from Ormond Beach, Florida) and Tyler Hubbard (from Monroe, Georgia). They have achieved major success since their inception and are one of the most successful country music acts of the 2010s.",
  image: "https://res.cloudinary.com/vechau/image/upload/c_scale,h_300/v1467984773/GFL_h8agtj.jpg",
  tix_price: 60,
  funds: (2400),
  goal: (3600),
  status: "ongoing",
  organizer_id: rand(User.all.count) + 1,
  category_id: 4,
  place_name: "The Masonic",
  lat: 37.7911585,
  lng: -122.4831498
})

Gathering.create({
  artist: "Taylor Swift",
  location: "1 Amphitheatre Pkwy, Mountain View, CA 94043",
  start_date: Faker::Date.between(2.days.ago, Date.today),
  end_date: Faker::Date.between(300.days.from_now, 1.year.from_now),
  description: "Taylor Alison Swift (born December 13, 1989) is an American singer-songwriter. Raised in Wyomissing, Pennsylvania, she moved to Nashville, Tennessee, at the age of 14 to pursue a career in country music. She signed with the independent label Big Machine Records and became the youngest songwriter ever signed by the Sony/ATV Music publishing house. The release of Swift's eponymous debut album in 2006 marked the start of her career as a country music singer. Her third single, 'Our Song', made her the youngest person to single-handedly write and perform a number-one song on the Hot Country Songs chart.",
  image: "https://res.cloudinary.com/vechau/image/upload/c_scale,h_300/v1467987038/Artists/taylorswift.jpg",
  tix_price: 100,
  funds: 14300,
  goal: 20000,
  status: "ongoing",
  organizer_id: rand(User.all.count) + 1,
  category_id: 1,
  place_name: "Shoreline Amphitheatre",
  lat: 37.4267782,
  lng: -122.0829164
})

Gathering.create({
  artist: "Chainsmokers",
  location: "982 Market St, San Francisco, CA 94102",
  start_date: Faker::Date.between(2.days.ago, Date.today),
  end_date: Faker::Date.between(300.days.from_now, 1.year.from_now),
  description: "The Chainsmokers were formed as an EDM DJ duo in 2012 under the management of Adam Alpert in New York City. They started out by making remixes of indie bands. In 2012, they collaborated with Indian actress and recording artist Priyanka Chopra on the single \"Erase\" which was followed by \"The Rookie\" in early 2013. Their single \"#Selfie\", released for free in December 2013, was picked up by Dim Mak Records who re-released it in January 2014 and eventually streamed it to Republic Records On August 5, 2014, The Chainsmokers released \"Kanye\" featuring sirenXX, the follow up to \"#Selfie\". On March 3, 2015, they released \"Let You Go\", featuring Great Good Fine Ok.",
  image: "https://res.cloudinary.com/vechau/image/upload/c_scale,h_300/v1467987039/Artists/Chainsmokers.jpg",
  tix_price: 70,
  funds: (70 * 202),
  goal: (70 * 250),
  status: "ongoing",
  organizer_id: rand(User.all.count) + 1,
  category_id: 5,
  place_name: "The Warfield",
  lat: 37.7824468,
  lng: -122.3947093
})

Gathering.create({
  artist: "Kanye West",
  location: "1 Amphitheatre Pkwy, Mountain View, CA 94043",
  start_date: Faker::Date.between(2.days.ago, Date.today),
  end_date: Faker::Date.between(300.days.from_now, 1.year.from_now),
  description: "In the span of three short years, Kanye West went from hip-hop beatmaker to worldwide hitmaker, as his stellar production work for Jay-Z led to a major-label recording contract and, ultimately, a wildly successful solo career. West paired his beats with tongue-twisting raps and a self-assured, flamboyant personality. His dapper fashion sense set him apart from many of his rap peers, and his confidence often came across as boastful or even egotistical, albeit amusingly so. This flamboyance, of course, made for good press, something that West enjoyed in spades during his sudden rise to celebrity status. He was a media darling, appearing and performing at countless awards shows (and winning at them, too), delivering theatrical videos to MTV, and mouthing off about whatever happened to cross his mind.",
  image: "https://res.cloudinary.com/vechau/image/upload/v1467987036/Artists/kanyewest.jpg",
  tix_price: 50,
  funds: 14300,
  goal: 20000,
  status: "ongoing",
  organizer_id: rand(User.all.count) + 1,
  category_id: 6,
  place_name: "Shoreline Amphitheatre",
  lat: 37.4267782,
  lng: -122.0829164
})

Gathering.create({
  artist: "Drake",
  location: "1 Amphitheatre Pkwy, Mountain View, CA 94043",
  start_date: Faker::Date.between(2.days.ago, Date.today),
  end_date: Faker::Date.between(300.days.from_now, 1.year.from_now),
  description: "Drake was a cross-platform cultural phenomenon in the 2010s. The songwriter, producer, rapper, and singer sustained a high-level commercial presence shortly after he turned to rapping in 2006, whether on his own chart-topping releases or through a long string of guest appearances on hits by the likes of Lil Wayne, Rihanna, and A$AP Rocky. Each one of the former child actor's first four proper albums, as well as a 2015 mixtape, topped the album charts in his native Canada and in the U.S. Though he caroused with his most hedonistic contemporaries, Drake was frequently praised for his sensitive, introspective approach to rap and R&B.",
  image: "https://res.cloudinary.com/vechau/image/upload/c_scale,h_300/v1467987040/Artists/drake.jpg",
  tix_price: 150,
  funds: (150 * 90),
  goal: (150 * 100),
  status: "ongoing",
  organizer_id: rand(User.all.count) + 1,
  category_id: 6,
  place_name: "Shoreline Amphitheatre",
  lat: 37.4267782,
  lng: -122.0829164
})

Gathering.create({
  artist: "ACDC",
  location: "1 Amphitheatre Pkwy, Mountain View, CA 94043",
  start_date: Faker::Date.between(2.days.ago, Date.today),
  end_date: Faker::Date.between(300.days.from_now, 1.year.from_now),
  description: "Brothers Malcolm, Angus, and George Young were born in Glasgow, Scotland, and moved to Sydney with most of their family in 1963. George was the first to learn to play the guitar. He became a member of the Easybeats, one of Australia's most successful bands of the 1960s.",
  image: "https://res.cloudinary.com/vechau/image/upload/c_scale,h_300/v1467987036/Artists/ACDC.jpg",
  tix_price: 150,
  funds: (150 * 140),
  goal: (150 * 200),
  status: "ongoing",
  organizer_id: rand(User.all.count) + 1,
  category_id: 3,
  place_name: "Shoreline Amphitheatre",
  lat: 37.4267782,
  lng: -122.0829164
})

Gathering.create({
  artist: "Carlos Santana",
  location: "1111 California St, San Francisco, CA 94108",
  start_date: Faker::Date.between(2.days.ago, Date.today),
  end_date: Faker::Date.between(300.days.from_now, 1.year.from_now),
  description: "Born on July 20, 1947, in Autlán de Navarro, Mexico, Carlos Santana moved to San Francisco in the early 1960s, where he formed the Santana Blues Band in 1966. The band, later simply known as Santana, signed a contract with Columbia Records, with Carlos becoming the consistent front man.
",
  image: "https://res.cloudinary.com/vechau/image/upload/c_scale,h_300/v1467987039/Artists/carlossantana.jpg",
  tix_price: 50,
  funds: (50 * 190),
  goal: (50 * 200),
  status: "ongoing",
  organizer_id: rand(User.all.count) + 1,
  category_id: 8,
  place_name: "The Masonic",
  lat: 37.7911585,
  lng: -122.4831498
})

Gathering.create({
  artist: "Beyonce",
  location: "525 W Santa Clara St, San Jose, CA 95113",
  start_date: Faker::Date.between(2.days.ago, Date.today),
  end_date: Faker::Date.between(300.days.from_now, 1.year.from_now),
  description: "One of the most recognizable figures in contemporary music, Beyoncé rose to fame as the central member of pop-R&B group Destiny's Child before embarking on a multi-platinum, record-breaking solo career in 2001. Booming record sales, Grammy awards, movie roles, and marriage to rapper/CEO Jay-Z combined to heighten her profile in the 2000s. Billboard named her female artist of the decade, while the RIAA acknowledged that, through 64 gold and platinum certifications, she was the decade's top-selling artist. Once she released her fifth solo album in 2013, it was evident that the singer, songwriter, and dancer wasn't merely an entertainer but a progressive artist as well.",
  image: "https://res.cloudinary.com/vechau/image/upload/c_scale,h_300/v1467987042/Artists/beyonce.jpg",
  tix_price: 100,
  funds: (100 * 190),
  goal: (100 * 200),
  status: "ongoing",
  organizer_id: rand(User.all.count) + 1,
  category_id: 6,
  place_name: "SAP Center",
  lat: 37.3327498,
  lng: -121.9034312
})

Gathering.create({
  artist: "Enrique Iglesias",
  location: "1 Amphitheatre Pkwy, Mountain View, CA 94043",
  start_date: Faker::Date.between(2.days.ago, Date.today),
  end_date: Faker::Date.between(300.days.from_now, 1.year.from_now),
  description: "Enrique Miguel Iglesias Preysler, known professionally as Enrique Iglesias, is a Spanish singer, songwriter, record producer and actor. He is widely regarded as the King of Latin Pop.",
  image: "https://res.cloudinary.com/vechau/image/upload/c_scale,h_300/v1467998550/Artists/EnriqueIglesias.jpg",
  tix_price: 50,
  funds: (50 * 190),
  goal: (50 * 250),
  status: "ongoing",
  organizer_id: rand(User.all.count) + 1,
  category_id: 8,
  place_name: "Shoreline Amphitheatre",
  lat: 37.4267782,
  lng: -122.0829164
})

Gathering.create({
  artist: "Deadmau5",
  location: "1807 Telegraph Ave, Oakland, CA 94612",
  start_date: Faker::Date.between(2.days.ago, Date.today),
  end_date: Faker::Date.between(300.days.from_now, 1.year.from_now),
  description: "Born Joel Zimmerman on January 5, 1981, masked EDM hitmaker and celebrity DJ Deadmau5 rose to prominence when his track \"Faxing Berlin\" found its way onto the playlist of legendary DJ/producer Pete Tong's radio show. Deadmau5 soon became an important figure in the world of progressive house music, with his songs appearing on more than 15 compilations (including In Search of Sunrise, Vol. 6: Ibiza). ",
  image: "https://res.cloudinary.com/vechau/image/upload/e_grayscale/v1467987157/Artists/deadmau5.jpg",
  tix_price: 60,
  funds: (60 * 190),
  goal: (60 * 300),
  status: "ongoing",
  organizer_id: rand(User.all.count) + 1,
  category_id: 5,
  place_name: "The Fox Theatre",
  lat: 37.8082478,
  lng: -122.2535868
})

Gathering.create({
  artist: "Justin Timberlake",
  location: "1 Amphitheatre Pkwy, Mountain View, CA 94043",
  start_date: Faker::Date.between(2.days.ago, Date.today),
  end_date: Faker::Date.between(300.days.from_now, 1.year.from_now),
  description: "Justin Randall Timberlake (born January 31, 1981) is an American singer, songwriter, actor and record producer. Born and raised in Memphis, Tennessee, he appeared on the television shows Star Search and The All-New Mickey Mouse Club as a child. In the late 1990s, Timberlake rose to prominence as one of the two lead vocalists and youngest member of NSYNC, which eventually became one of the best-selling boy bands of all time. During the group's hiatus, Timberlake released his debut solo album, the R&B-focused Justified (2002), which included the successful singles 'Cry Me a River' and 'Rock Your Body', and earned his first two Grammy Awards.",
  image: "https://res.cloudinary.com/vechau/image/upload/c_scale,h_300/v1467987036/Artists/JT.jpg",
  tix_price: 60,
  funds: (60 * 190),
  goal: (60 * 240),
  status: "ongoing",
  organizer_id: rand(User.all.count) + 1,
  category_id: 1,
  place_name: "Shoreline Amphitheatre",
  lat: 37.4267782,
  lng: -122.0829164
})

Gathering.create({
  artist: "Haim",
  location: "1 Amphitheatre Pkwy, Mountain View, CA 94043",
  start_date: Faker::Date.between(2.days.ago, Date.today),
  end_date: Faker::Date.between(300.days.from_now, 1.year.from_now),
  description: "Haim is an American pop rock band from Los Angeles. The band consists of sisters Este, Danielle and Alana Haim, and drummer Dash Hutton. The group's pop sound on their studio work stands in contrast to the more rock-based music of their live shows.",
  image: "https://res.cloudinary.com/vechau/image/upload/c_scale,e_grayscale,h_300/v1467987036/Artists/haim.jpg",
  tix_price: 50,
  funds: (50 * 190),
  goal: (50 * 200),
  status: "ongoing",
  organizer_id: rand(User.all.count) + 1,
  category_id: 7,
  place_name: "Shoreline Amphitheatre",
  lat: 37.4267782,
  lng: -122.0829164
})

Gathering.create({
  artist: "Foo Fighters",
  location: "1807 Telegraph Ave, Oakland, CA 94612",
  start_date: Faker::Date.between(2.days.ago, Date.today),
  end_date: Faker::Date.between(300.days.from_now, 1.year.from_now),
  description: "Foo Fighters is an American rock band, formed in Seattle in 1994. It was founded by Nirvana drummer Dave Grohl as a one-man project following the death of Kurt Cobain and the resulting dissolution of his previous band.",
  image: "https://res.cloudinary.com/vechau/image/upload/e_grayscale/v1467995464/Artists/foofighters.jpg",
  tix_price: 50,
  funds: (50 * 190),
  goal: (50 * 300),
  status: "ongoing",
  organizer_id: rand(User.all.count) + 1,
  category_id: 2,
  place_name: "The Fox Theatre",
  lat: 37.8082478,
  lng: -122.2535868
})

Gathering.create({
  artist: "Radiohead",
  location: "2001 Gayley Rd, Berkeley, CA 94720",
  start_date: Faker::Date.between(2.days.ago, Date.today),
  end_date: Faker::Date.between(300.days.from_now, 1.year.from_now),
  description: "Radiohead are an English rock band from Abingdon, Oxfordshire, formed in 1985. The band consists of Thom Yorke, Jonny Greenwood, Ed O'Brien, Colin Greenwood, and Phil Selway.",
  image: "https://res.cloudinary.com/vechau/image/upload/c_scale,h_300/v1467995465/Artists/radiohead.jpg",
  tix_price: 50,
  funds: (50 * 190),
  goal: (50 * 250),
  status: "ongoing",
  organizer_id: rand(User.all.count) + 1,
  category_id: 2,
  place_name: "The Greek Theatre",
  lat: 37.873908,
  lng: -122.253835
})

Gathering.create({
  artist: "Tove Lo",
  location: "444 Jessie St, San Francisco, CA 94103",
  start_date: Faker::Date.between(2.days.ago, Date.today),
  end_date: Faker::Date.between(300.days.from_now, 1.year.from_now),
  description: "Swedish singer/songwriter Tove Lo was born Ebba Tove Elsa Nilsson on October 29, 1987 in a suburb of Stockholm. Beginning to write poetry and short stories at a young age, she went on to study at the famous Rytmus Musikergymnasiet -- a music-oriented high school comparable to the U.K.'s BRIT School -- where she met and befriended the future members of Icona Pop. After singing in the band Tremblebee, made up of students from the school, and a spell playing one-man-and-his-dog nightclub gigs as frontwoman of a math rock band, she decided to focus on her own songs, spending six months in her shed studio working on a demo. At a party celebrating Icona Pop's first record deal, she used the opportunity to foist her demo on a staff member at their label, leading to a publishing deal with Warner Chappell and a trip to L.A. to work with fellow Swede and pop songwriting/production supremo Max Martin.",
  image: "https://res.cloudinary.com/vechau/image/upload/c_scale,h_300/v1467987039/Artists/tovelo.jpg",
  tix_price: 30,
  funds: (30 * 13),
  goal: (30 * 20),
  status: "ongoing",
  organizer_id: rand(User.all.count) + 1,
  category_id: 1,
  place_name: "MEZZANINE",
  lat: 37.7825106,
  lng: -122.4781997
})

Gathering.create({
  artist: "Shakira",
  location: "1111 California St, San Francisco, CA 94108",
  start_date: Faker::Date.between(2.days.ago, Date.today),
  end_date: Faker::Date.between(300.days.from_now, 1.year.from_now),
  description: "After achieving superstardom throughout Latin America, Colombian-born Shakira became Latin pop's biggest female crossover artist since Jennifer Lopez. Noted for her aggressive, rock-influenced approach, Shakira maintained an extraordinary degree of creative control over her music, especially for a female artist; she wrote or co-wrote nearly all of her own material, and in the process gained a reputation as one of Latin music's most ambitiously poetic lyricists. When she released her first English material in late 2001, she became an instant pop sensation, thanks to her quirky poetic sense and a sexy video image built on her hip-shaking belly dance moves.",
  image: "https://res.cloudinary.com/vechau/image/upload/c_scale,h_300/v1468021199/shakira_mnvkwd.jpg",
  tix_price: 50,
  funds: (50 * 190),
  goal: (50 * 300),
  status: "ongoing",
  organizer_id: rand(User.all.count) + 1,
  category_id: 8,
  place_name: "The Masonic",
  lat: 37.7911585,
  lng: -122.4831498
})

Gathering.create({
  artist: "Foster the People",
  location: "119 Utah St, San Francisco, CA 94103",
  start_date: Faker::Date.between(2.days.ago, Date.today),
  end_date: Faker::Date.between(300.days.from_now, 1.year.from_now),
  description: "Formed in Los Angeles in 2009 by multi-instrumentalist singer/songwriter Mark Foster, indie rock trio Foster the People make melodic and atmospheric, dance-oriented pop. Foster initially began the project alone, but before long he added long-term friend Cubbie Fink on bass and drummer Mark Pontius to complete the lineup. The following year, their single \"Pumped Up Kicks\" was posted on their website, picking up considerable buzz online and significant airplay on KROQ, alongside packed performances at the Texas musical festival SXSW. This inevitably attracted the attention of major labels, and eventually the band signed to Columbia imprint Startime International. Early in 2011 they released a self-titled EP that featured \"Pumped Up Kicks,\" and with the major-label support, the song became a worldwide hit. ",
  image: "https://res.cloudinary.com/vechau/image/upload/c_scale,h_300/v1467987040/Artists/fosterthepeople.jpg",
  tix_price: 50,
  funds: (50 * 190),
  goal: (50 * 300),
  status: "ongoing",
  organizer_id: rand(User.all.count) + 1,
  category_id: 7,
  place_name: "Mighty",
  lat: 37.7605584,
  lng: -122.4173902
})

Gathering.create({
  artist: "Zedd",
  location: "1414 Harbour Way S, Richmond, CA 94804",
  start_date: Faker::Date.between(2.days.ago, Date.today),
  end_date: Faker::Date.between(300.days.from_now, 1.year.from_now),
  description: "Born Anton Zaslavski, German producer Zedd broke onto the European electronic scene in 2010 with a remix of Skrillex's \"Scary Monsters and Nice Sprites.\" Though known for his glitch, pulsing production, Zedd's musical journey began in the acoustic realm. Born into a musical family, the future producer cut his teeth on the piano at four years old and eventually moved on to drums and played in a rock band before being drawn into the digital world in 2009. Zedd built a name for himself with his remixes of artists like Lady Gaga, B.o.B, and Armand Van Helden while also releasing his own singles and EPs. In 2012, the young producer delivered his first full-length, the club-worthy Clarity, whose lead single, \"Spectrum,\" shot to the top of the U.S. dance chart. One of the follow-ups, \"Stay the Night,\" featuring Hayley Williams, reached number two on the British pop charts.",
  image: "https://res.cloudinary.com/vechau/image/upload/c_scale,h_300/v1468021984/zedd_xusn0s.jpg",
  tix_price: 70,
  funds: (70 * 190),
  goal: (70 * 220),
  status: "ongoing",
  organizer_id: rand(User.all.count) + 1,
  category_id: 5,
  place_name: "Craneway Pavilion",
  lat: 37.909595,
  lng: -122.358239
})

# Gathering.create({
#   artist: "",
#   location: "---",
#   start_date: Faker::Date.between(2.days.ago, Date.today),
#   end_date: Faker::Date.between(300.days.from_now, 1.year.from_now),
#   description: "---",
#   image: "---",
#   tix_price: 50,
#   funds: (50 * 190),
#   goal: (50 * 400),
#   status: "ongoing",
#   organizer_id: rand(User.all.count) + 1,
#   category_id: 2
# })

# 5.times do
#   Ticket.create({
#     attendee_id: rand(User.all.count) + 1,
#     gathering_id: rand(Gathering.all.count) + 1
#     })
# end
#
# 5.times do
#   Bookmark.create({
#     user_id: rand(User.all.count) + 1,
#     gathering_id: rand(Gathering.all.count) + 1
#     })
# end

3.times do
  Ticket.create({
    attendee_id: 1,
    gathering_id: rand(Gathering.all.count) + 1
    })
end

3.times do
  Bookmark.create({
    user_id: 1,
    gathering_id: rand(Gathering.all.count) + 1
    })
end
