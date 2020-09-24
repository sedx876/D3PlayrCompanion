class DropItemIdFromUsers < ActiveRecord::Migration[6.0]
  def change
    remove_column :users, :item_id
  end
end
