# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

PASSWORD = "supersecret"  

User.destroy_all()
Store.destroy_all()
Item.destroy_all()

super_user = User.create( 
    first_name: "Hermione",
    last_name: "Granger",
    email: "hermione@hogwarts.edu", 
    phone_number: "(123) 456-7890",
    password: PASSWORD,
    is_admin: true
)

10.times do 
    first_name = Faker::Name.first_name 
    last_name = Faker::Name.last_name 
    User.create( 
        first_name: first_name, 
        last_name: last_name,  
        email: "#{first_name.downcase}.#{last_name.downcase}@example.com", 
        phone_number: Faker::PhoneNumber.cell_phone,
        password: PASSWORD,
        is_admin: false
    )  
end 

users = User.all 

puts Cowsay.say("Generated #{User.count} users.", :tux)

Faker::Config.locale = 'en-CA'

categories = ["Entertainment", "Food & Drinks", "Health & Beauty"]
provinces = ["AB", "BC", "MB", "NB", "NS", "ON", "QC", "SK"]

10.times do 
    user = users.sample 
    s = Store.create( 
        name: Faker::Company.name,
        email: Faker::Internet.email,
        phone: Faker::PhoneNumber.cell_phone,
        address: Faker::Address.street_address,
        city: "#{Faker::Address.city_prefix} #{Faker::Address.city_suffix}",
        province: provinces[rand(0..7)],
        country: "Canada",
        postal_code: Faker::Address.zip_code,
        category: categories[rand(0..2)],
        user_id: user.id
    )  
    if s.valid?
        s.items = rand(0..5).times.map do
            Item.new(
                name: Faker::Commerce.product_name,
                price: Faker::Commerce.price,
                availability: Faker::Boolean.boolean(true_ratio: 0.7),
                description: Faker::Lorem.paragraph(sentence_count: 2),
                customization: "N/A",
                category: s.category
            )
        end
    end
end 

puts Cowsay.say("Generated #{Store.count} stores.", :dragon)
puts Cowsay.say("Generated #{Item.count} items.", :frogs)
