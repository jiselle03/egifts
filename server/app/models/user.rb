class User < ApplicationRecord
    has_many :stores, dependent: :destroy
    has_many :transactions, dependent: :destroy
    has_many :purchased_items, through: :transactions, source: :item

    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :email, presence: true, uniqueness: true,
    format: /\A([\w+\-]\.?)+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i
    
    has_secure_password
end
