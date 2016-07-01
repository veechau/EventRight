# @categories.each do |category|
#   json.partial! 'category', category: category
# end


json.array! @categories, :title, :description, :image
