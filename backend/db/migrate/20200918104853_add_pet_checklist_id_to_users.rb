class AddPetChecklistIdToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :petchecklist_id, :integer
  end
end
