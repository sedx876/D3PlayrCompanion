class RemoveUserIdFromPetChecklists < ActiveRecord::Migration[6.0]
  def change
    remove_column :petchecklists, :user_id
  end
end
