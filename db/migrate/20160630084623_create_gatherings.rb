class CreateGatherings < ActiveRecord::Migration
  def change
    create_table :gatherings do |t|
      t.string :artist, null: false
      t.text :location, null: false
      t.datetime :start_date, null: false
      t.datetime :end_date, null: false
      t.text :description
      t.string :image
      t.float :tix_price, null: false
      t.float :funds, null: false
      t.float :goal, null: false
      t.string :status, null: false
      t.integer :organizer_id, null: false
      t.integer :category_id, null: false
      t.timestamps null: false
    end

    add_index :gatherings, :organizer_id
    add_index :gatherings, :category_id

  end

end
