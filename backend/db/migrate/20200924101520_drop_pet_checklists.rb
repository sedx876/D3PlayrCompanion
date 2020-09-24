class DropPetChecklists < ActiveRecord::Migration[6.0]
  def change
    drop_table :petchecklists 
  end
end
