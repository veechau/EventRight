class RemoveDefaultFromColumns < ActiveRecord::Migration
  def change
    change_column_default(:gatherings, :place_name, nil)
    change_column_default(:gatherings, :lat, nil)
    change_column_default(:gatherings, :lng, nil)
  end
end
