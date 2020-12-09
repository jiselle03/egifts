class Item < ApplicationRecord
  belongs_to :store

  has_many :buyers, through: :transactions, source: :user
end
