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
  image: "https://res.cloudinary.com/vechau/image/upload/v1467837112/Category-Pop_u6ujjs.bmp"
  })

Category.create({
  title: "Alternative",
  description: "Latin music encompasses hundreds of styles and rhythms including mainstream genres such as Salsa, Tango, Merengue and Brazilian music, as well as traditional rhythms like Andean music, Puerto Rican Bomba, Cuban Son and Musica Llanera.",
  image: "https://res.cloudinary.com/vechau/image/upload/v1467840235/Category-Alternative_kradzo.bmp"
  })

Category.create({
  title: "Rock",
  description: "Musically, rock has centered on the electric guitar, usually as part of a rock group with electric bass guitar and drums. Typically, rock is song-based music usually with a 4/4 time signature using a verse-chorus form, but the genre has become extremely diverse.",
  image: "https://res.cloudinary.com/vechau/image/upload/v1467840416/Category-Rock_dfrnym.bmp"
  })

Category.create({
title: "Country",
description: "Country music is a genre of American popular music that originated in Southern United States in the 1920s. It takes its roots from the southeastern genre of American folk music and Western music. Blues modes have been used extensively throughout its recorded history.",
image: "https://res.cloudinary.com/vechau/image/upload/v1467836496/Category-Country_ctrme0.bmp"
})

Category.create({
  title: "EDM",
  description: "Electronic dance music (also known as EDM) was adopted by the American music industry and music press as a buzzword to describe the increasingly commercial US electronic dance music scene. EDM is a broad range of percussive electronic music genres",
  image: "https://res.cloudinary.com/vechau/image/upload/v1467837652/Category-EDM_wfri2r.bmp"
  })

Category.create({
  title: "R&B/Hip-Hop",
  description: "A very popular and wide-ranging style of music that emerged from traditional blues in the 1940s. R&B can be characterized by its use of blues chords played over a strong and consistent backbeat and by its emphasis on composition rather than the improvisation common in traditional blues. Hip hop, rap, soul, and disco are all categories of R&B and R&B also formed the foundation of rock and roll",
  image: "https://res.cloudinary.com/vechau/image/upload/v1467836498/Category-HipHop_btl1tg.bmp"
  })

Category.create({
  title: "Indie",
  description: "The music indie pop is a subgenre of alternative rock or indie rock that originated in the United Kingdom in the late 1970s. The style is inspired by punk's DIY ethic and related ideologies, and it generated a thriving fanzine, label, and club and gig circuit.",
  image: "https://res.cloudinary.com/vechau/image/upload/v1467837110/Category-Indie_fjsjxz.bmp"
})

Category.create({
  title: "Latin",
  description: "Latin music (Musica latina in Spanish and Portuguese) is a musical category encompassing music from any Spanish-speaking area from around the world mainly from Latin America and Spain. Most definitions of Latin music includes any Portuguese-language music from Brazil and sometimes Portugal as well.",
  image: "https://res.cloudinary.com/vechau/image/upload/v1467840726/Category-Latin_wpldsf.bmp"
  })

16.times do
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

15.times do
  Ticket.create({
    attendee_id: rand(User.all.count) + 1,
    gathering_id: rand(Gathering.all.count) + 1
    })
end

15.times do
  Bookmark.create({
    user_id: rand(User.all.count) + 1,
    gathering_id: rand(Gathering.all.count) + 1
    })
end

10.times do
  Ticket.create({
    attendee_id: 1,
    gathering_id: rand(Gathering.all.count) + 1
    })
end

10.times do
  Bookmark.create({
    user_id: 1,
    gathering_id: rand(Gathering.all.count) + 1
    })
end
