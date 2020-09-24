class AddItemIdToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :item_id, :integer
  end
end
