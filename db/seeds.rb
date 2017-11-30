# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
User.create!(email: "guest@gmail.com", displayname: "guest", password: "password")
User.create!(email: "david@gmail.com", displayname: "david", password: "password")
User.create!(email: "bob@gmail.com", displayname: "bob", password: "password")


Channel.destroy_all
Channel.create!(channel_name: "General")
Channel.create!(channel_name: "App Academy")

ChannelSubscription.destroy_all
ChannelSubscription.create!([
  { user_id: 1, channel_id: 1 },
  { user_id: 2, channel_id: 1 },
  { user_id: 3, channel_id: 1 },
  { user_id: 1, channel_id: 2 },
  { user_id: 2, channel_id: 2 },
  { user_id: 3, channel_id: 2 },
  ])

Message.destroy_all
Message.create!([
  { user_id: 1, body: "Hello world!", interface_type: "Channel", interface_id: 1 },
  { user_id: 2, body: "Hi there", interface_type: "Channel", interface_id: 1 },
  { user_id: 3, body: "Wow...", interface_type: "Channel", interface_id: 1 },
  { user_id: 1, body: "¯\\\_(ツ)_/¯", interface_type: "Channel", interface_id: 2 },
  { user_id: 2, body: "¯\\\_(ツ)_/¯!", interface_type: "Channel", interface_id: 2 },
  { user_id: 3, body: "¯\\\_(ツ)_/¯!", interface_type: "Channel", interface_id: 2 }
  ])
