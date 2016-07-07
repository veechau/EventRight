class AddUniquenessConstraintToBookmarks < ActiveRecord::Migration
  def change
    add_index :bookmarks, [:user_id, :gathering_id], :unique => true
  end
end
