# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

 demo_user = User.create({
                        username: "Demo_User",
                        first_name: "Jane",
                        last_name: "Doe",
                        password: "Password",
                        avatar: "http://res.cloudinary.com/vechau/image/upload/v1467219915/hipsterlogogenerator_1467219708604_ylgi5g.png",
                        balance: 500
                      });
