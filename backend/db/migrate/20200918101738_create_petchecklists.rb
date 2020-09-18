class CreatePetchecklists < ActiveRecord::Migration[6.0]
  def change
    create_table :petchecklists do |t|
      t.string "name"
      t.boolean "done"
      t.integer "user_id"
      t.timestamps
    end
  end
end
