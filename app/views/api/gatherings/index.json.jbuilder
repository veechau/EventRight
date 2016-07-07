# @gatherings.each do |gathering|
#   json.partial! 'gathering', gathering: gathering
# end


json.array! @gatherings, :id, :artist, :location, :start_date, :end_date, :description, :image, :tix_price, :funds, :goal, :status, :organizer_id, :category_id, :tickets, :bookmarks
