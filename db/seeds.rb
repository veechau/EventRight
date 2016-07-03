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

10.times do
  Category.create({
    title: Faker::Commerce.department(2, true),
    description: Faker::Hipster.paragraphs,
    image: "http://res.cloudinary.com/vechau/image/upload/v1467336543/hipsterlogogenerator_1467179075788_bcicqj.png"
    })
end

15.times do
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
    organizer_id: rand(User.all.count),
    category_id: rand(Category.all.count)
  })
end
