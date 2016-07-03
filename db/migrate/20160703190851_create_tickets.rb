class CreateTickets < ActiveRecord::Migration
  def change
    create_table :tickets do |t|
      t.integer :attendee_id, null: false
      t.integer :gathering_id, null: false
      t.timestamps null: false
    end
    add_index :tickets, :attendee_id
    add_index :tickets, :gathering_id
  end
end
