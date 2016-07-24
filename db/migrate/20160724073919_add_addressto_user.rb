class AddAddresstoUser < ActiveRecord::Migration
  def change
    add_column :users, :address, :string, null: false
    add_column :users, :email, :string, null: false
  end
end
