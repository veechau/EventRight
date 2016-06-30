class CreateGatherings < ActiveRecord::Migration
  def change
    create_table :gatherings do |t|

      t.timestamps null: false
    end
  end
end
