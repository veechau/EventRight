class AddColumnsToGatherings < ActiveRecord::Migration
  def change
    add_column :gatherings, :place_name, :string, :default => "EventRight"
    change_column_null :gatherings, :place_name, false
    add_column :gatherings, :lat, :decimal, :precision => 15, :scale => 10, :default => 37.7329486
    add_column :gatherings, :lng, :decimal, :precision => 15, :scale => 10, :default => -122.5029659
  end
end
