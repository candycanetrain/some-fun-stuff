class Toy < ActiveRecord::Base
  validates :name, uniqueness: { scope: [:toyable_type]}

  belongs_to :toyable, polymorphic: true

end
