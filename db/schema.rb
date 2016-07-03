# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160703190851) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.string   "title",       null: false
    t.text     "description", null: false
    t.string   "image",       null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "gatherings", force: :cascade do |t|
    t.string   "artist",       null: false
    t.text     "location",     null: false
    t.datetime "start_date",   null: false
    t.datetime "end_date",     null: false
    t.text     "description"
    t.string   "image"
    t.float    "tix_price",    null: false
    t.float    "funds",        null: false
    t.float    "goal",         null: false
    t.string   "status",       null: false
    t.integer  "organizer_id", null: false
    t.integer  "category_id",  null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "gatherings", ["category_id"], name: "index_gatherings_on_category_id", using: :btree
  add_index "gatherings", ["organizer_id"], name: "index_gatherings_on_organizer_id", using: :btree

  create_table "tickets", force: :cascade do |t|
    t.integer  "attendee_id",  null: false
    t.integer  "gathering_id", null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "tickets", ["attendee_id"], name: "index_tickets_on_attendee_id", using: :btree
  add_index "tickets", ["gathering_id"], name: "index_tickets_on_gathering_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",                      null: false
    t.string   "password_digest",               null: false
    t.string   "session_token",                 null: false
    t.datetime "created_at",                    null: false
    t.datetime "updated_at",                    null: false
    t.string   "first_name",                    null: false
    t.string   "last_name",                     null: false
    t.string   "avatar",                        null: false
    t.float    "balance",         default: 0.0, null: false
  end

  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
