class AddUniquenessConstraintToTickets < ActiveRecord::Migration
  def change
    add_index :tickets, [:attendee_id, :gathering_id], :unique => true
  end
end
