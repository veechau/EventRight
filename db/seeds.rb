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
  avatar: "http://holder.ninja/150x150,,8bd,fff.svg",
  balance: 500
});

10.times do
  User.create({
    username: Faker::Name.name,
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    password: "Password",
    avatar: "http://holder.ninja/150x150,,8bd,fff.svg",
    balance: rand(1000)
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
  image: "http://res.cloudinary.com/vechau/image/upload/v1467840235/Genres/Category-Alternative_kradzo.bmp"
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

10.times do
  Gathering.create({
    artist: Faker::Hipster.word,
    location: Faker::Address.street_address + ", " + Faker::Address.city + ", " + Faker::Address.state_abbr + ", " + Faker::Address.country,
    start_date: Faker::Date.between(2.days.ago, Date.today),
    end_date: Faker::Date.between(2.days.from_now, 1.year.from_now),
    description: Faker::Hacker.say_something_smart,
    image: "http://holder.ninja/300x300,,8bd,fff.svg",
    tix_price: rand(100),
    funds: rand(500...100000),
    goal: rand(500...100000),
    status: ["ongoing", "completed", "incomplete"].sample,
    organizer_id: rand(User.all.count) + 1,
    category_id: rand(Category.all.count) + 1
  })
end


Gathering.create({
  artist: "Luke Bryan",
  location: "2001 Gayley Rd, Berkeley, CA 94720",
  start_date: Faker::Date.between(2.days.ago, Date.today),
  end_date: Faker::Date.between(300.days.from_now, 1.year.from_now),
  description: "Born Thomas Luther Bryan in Leesburg, Georgia, on July 17, 1976, Luke Bryan grew up the youngest son of a farmer. Always interested in music, Bryan was raised on his parents' record collection, which included such country artists as George Strait, Conway Twitty and Merle Haggard.",
  image: "https://res.cloudinary.com/vechau/image/upload/c_scale,h_300/v1467984773/LukeBryan_cv9upb.jpg",
  tix_price: 45,
  funds: (45 * 90),
  goal: (45 * 300),
  status: "ongoing",
  organizer_id: rand(User.all.count) + 1,
  category_id: 4
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
  goal: 40000,
  status: "ongoing",
  organizer_id: rand(User.all.count) + 1,
  category_id: 4
})

Gathering.create({
  artist: "Georgia Florida Line",
  location: "1111 California St, San Francisco, CA 94108",
  start_date: Faker::Date.between(2.days.ago, Date.today),
  end_date: Faker::Date.between(300.days.from_now, 1.year.from_now),
  description: "Florida Georgia Line is an American country music duo consisting of vocalists Brian Kelley (from Ormond Beach, Florida) and Tyler Hubbard (from Monroe, Georgia). They have achieved major success since their inception and are one of the most successful country music acts of the 2010s.",
  image: "https://res.cloudinary.com/vechau/image/upload/c_scale,h_300/v1467984773/GFL_h8agtj.jpg",
  tix_price: 60,
  funds: (60 * 40),
  goal: (600),
  status: "ongoing",
  organizer_id: rand(User.all.count) + 1,
  category_id: 4
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
  goal: 40000,
  status: "ongoing",
  organizer_id: rand(User.all.count) + 1,
  category_id: 1
})

Gathering.create({
  artist: "Chainsmokers",
  location: "982 Market St, San Francisco, CA 94102",
  start_date: Faker::Date.between(2.days.ago, Date.today),
  end_date: Faker::Date.between(300.days.from_now, 1.year.from_now),
  description: "The Chainsmokers were formed as an EDM DJ duo in 2012 under the management of Adam Alpert in New York City. They started out by making remixes of indie bands. In 2012, they collaborated with Indian actress and recording artist Priyanka Chopra on the single \"Erase\" which was followed by \"The Rookie\" in early 2013. Their single \"#Selfie\", released for free in December 2013, was picked up by Dim Mak Records who re-released it in January 2014 and eventually streamed it to Republic Records On August 5, 2014, The Chainsmokers released \"Kanye\" featuring sirenXX, the follow up to \"#Selfie\". On March 3, 2015, they released \"Let You Go\", featuring Great Good Fine Ok.

  They signed with their manager Adam Alpert's joint venture label with Sony Music Entertainment, Disruptor Records, in April 2015. On October 23, 2015, The Chainsmokers released their first EP titled Bouquet, featuring \"New York City\", \"Until You Were Gone\", \"Waterbed\", \"Good Intentions\", and \"Roses\". Their followup single \"Don't Let Me Down\" was released on February 5, 2016, featuring the singer Daya. On April 1, 2016, they released a new single, \"Inside Out\", featuring Swedish singer Charlee.",
  image: "https://res.cloudinary.com/vechau/image/upload/c_scale,h_300/v1467987039/Artists/Chainsmokers.jpg",
  tix_price: 70,
  funds: (70 * 202),
  goal: (70 * 350),
  status: "ongoing",
  organizer_id: rand(User.all.count) + 1,
  category_id: 5
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
  goal: 40000,
  status: "ongoing",
  organizer_id: rand(User.all.count) + 1,
  category_id: 4
})

Gathering.create({
  artist: "Drake",
  location: "1 Amphitheatre Pkwy, Mountain View, CA 94043",
  start_date: Faker::Date.between(2.days.ago, Date.today),
  end_date: Faker::Date.between(300.days.from_now, 1.year.from_now),
  description: "Drake was a cross-platform cultural phenomenon in the 2010s. The songwriter, producer, rapper, and singer sustained a high-level commercial presence shortly after he turned to rapping in 2006, whether on his own chart-topping releases or through a long string of guest appearances on hits by the likes of Lil Wayne, Rihanna, and A$AP Rocky. Each one of the former child actor's first four proper albums, as well as a 2015 mixtape, topped the album charts in his native Canada and in the U.S. Though he caroused with his most hedonistic contemporaries, Drake was frequently praised for his sensitive, introspective approach to rap and R&B.",
  image: "https://res.cloudinary.com/vechau/image/upload/c_scale,h_300/v1467987040/Artists/drake.jpg",
  tix_price: 150,
  funds: (150 * 190),
  goal: (150 * 500),
  status: "ongoing",
  organizer_id: rand(User.all.count) + 1,
  category_id: 6
})

Gathering.create({
  artist: "ACDC",
  location: "1 Amphitheatre Pkwy, Mountain View, CA 94043",
  start_date: Faker::Date.between(2.days.ago, Date.today),
  end_date: Faker::Date.between(300.days.from_now, 1.year.from_now),
  description: "",
  image: "https://res.cloudinary.com/vechau/image/upload/c_scale,h_300/v1467987036/Artists/ACDC.jpg",
  tix_price: 150,
  funds: (150 * 140),
  goal: (150 * 400),
  status: "ongoing",
  organizer_id: rand(User.all.count) + 1,
  category_id: 3
})

Gathering.create({
  artist: "Carlos Santana",
  location: "1111 California St, San Francisco, CA 94108",
  start_date: Faker::Date.between(2.days.ago, Date.today),
  end_date: Faker::Date.between(300.days.from_now, 1.year.from_now),
  description: "",
  image: "https://res.cloudinary.com/vechau/image/upload/c_scale,h_300/v1467987039/Artists/carlossantana.jpg",
  tix_price: 50,
  funds: (50 * 190),
  goal: (50 * 400),
  status: "ongoing",
  organizer_id: rand(User.all.count) + 1,
  category_id: 8
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
  goal: (100 * 450),
  status: "ongoing",
  organizer_id: rand(User.all.count) + 1,
  category_id: 6
})

Gathering.create({
  artist: "Enrique Iglesias",
  location: "1 Amphitheatre Pkwy, Mountain View, CA 94043",
  start_date: Faker::Date.between(2.days.ago, Date.today),
  end_date: Faker::Date.between(300.days.from_now, 1.year.from_now),
  description: "Enrique Miguel Iglesias Preysler, known professionally as Enrique Iglesias, is a Spanish singer, songwriter, record producer and actor. He is widely regarded as the King of Latin Pop.",
  image: "https://res.cloudinary.com/vechau/image/upload/v1467987044/Artists/EnriqueIglesias.psd",
  tix_price: 50,
  funds: (50 * 190),
  goal: (50 * 400),
  status: "ongoing",
  organizer_id: rand(User.all.count) + 1,
  category_id: 8
})

Gathering.create({
  artist: "Deadmau5",
  location: "1807 Telegraph Ave, Oakland, CA 94612",
  start_date: Faker::Date.between(2.days.ago, Date.today),
  end_date: Faker::Date.between(300.days.from_now, 1.year.from_now),
  description: "Born Joel Zimmerman on January 5, 1981, masked EDM hitmaker and celebrity DJ Deadmau5 rose to prominence when his track \"Faxing Berlin\" found its way onto the playlist of legendary DJ/producer Pete Tong's radio show. Deadmau5 soon became an important figure in the world of progressive house music, with his songs appearing on more than 15 compilations (including In Search of Sunrise, Vol. 6: Ibiza). ",
  image: "https://res.cloudinary.com/vechau/image/upload/v1467987157/Artists/deadmau5.jpg",
  tix_price: 60,
  funds: (60 * 190),
  goal: (60 * 400),
  status: "ongoing",
  organizer_id: rand(User.all.count) + 1,
  category_id: 5
})

Gathering.create({
  artist: "Justin Timberlake",
  location: "1 Amphitheatre Pkwy, Mountain View, CA 94043",
  start_date: Faker::Date.between(2.days.ago, Date.today),
  end_date: Faker::Date.between(300.days.from_now, 1.year.from_now),
  description: "",
  image: "https://res.cloudinary.com/vechau/image/upload/c_scale,h_300/v1467987036/Artists/JT.jpg",
  tix_price: 60,
  funds: (60 * 190),
  goal: (60 * 400),
  status: "ongoing",
  organizer_id: rand(User.all.count) + 1,
  category_id: 1
})

Gathering.create({
  artist: "Haim",
  location: "1 Amphitheatre Pkwy, Mountain View, CA 94043",
  start_date: Faker::Date.between(2.days.ago, Date.today),
  end_date: Faker::Date.between(300.days.from_now, 1.year.from_now),
  description: "Haim is an American pop rock band from Los Angeles. The band consists of sisters Este, Danielle and Alana Haim, and drummer Dash Hutton. The group's pop sound on their studio work stands in contrast to the more rock-based music of their live shows.",
  image: "http://res.cloudinary.com/vechau/image/upload/c_scale,h_300/v1467987036/Artists/haim.jpg",
  tix_price: 50,
  funds: (50 * 190),
  goal: (50 * 400),
  status: "ongoing",
  organizer_id: rand(User.all.count) + 1,
  category_id: 7
})

Gathering.create({
  artist: "Foo Fighters",
  location: "1807 Telegraph Ave, Oakland, CA 94612",
  start_date: Faker::Date.between(2.days.ago, Date.today),
  end_date: Faker::Date.between(300.days.from_now, 1.year.from_now),
  description: "Foo Fighters is an American rock band, formed in Seattle in 1994. It was founded by Nirvana drummer Dave Grohl as a one-man project following the death of Kurt Cobain and the resulting dissolution of his previous band.",
  image: "https://res.cloudinary.com/vechau/image/upload/c_scale,h_300/v1467995464/Artists/foofighters.jpg",
  tix_price: 50,
  funds: (50 * 190),
  goal: (50 * 400),
  status: "ongoing",
  organizer_id: rand(User.all.count) + 1,
  category_id: 5
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
  goal: (50 * 400),
  status: "ongoing",
  organizer_id: rand(User.all.count) + 1,
  category_id: 5
})

5.times do
  Ticket.create({
    attendee_id: rand(User.all.count) + 1,
    gathering_id: rand(Gathering.all.count) + 1
    })
end

5.times do
  Bookmark.create({
    user_id: rand(User.all.count) + 1,
    gathering_id: rand(Gathering.all.count) + 1
    })
end

6.times do
  Ticket.create({
    attendee_id: 1,
    gathering_id: rand(Gathering.all.count) + 1
    })
end

6.times do
  Bookmark.create({
    user_id: 1,
    gathering_id: rand(Gathering.all.count) + 1
    })
end
