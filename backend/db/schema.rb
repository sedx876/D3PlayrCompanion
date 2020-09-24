ActiveRecord::Schema.define(version: 2020_09_24_102326) do

  create_table "characters", force: :cascade do |t|
    t.string "title"
    t.string "character_klass"
    t.string "helm"
    t.string "shoulders"
    t.string "gloves"
    t.string "chest_armor"
    t.string "belt"
    t.string "pants"
    t.string "boots"
    t.string "bracers"
    t.string "amulet"
    t.string "ring_1"
    t.string "ring_2"
    t.string "weapon"
    t.string "offhand"
    t.text "gem_notes"
    t.text "kanais_cube"
    t.text "active_skills"
    t.text "passive_skills"
    t.text "general_build_notes"
    t.integer "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "items", force: :cascade do |t|
    t.string "name"
    t.string "notes"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "item_id"
  end

end
