class StoreSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :phone, :address, :city, :province, :country, :postal_code, :category

  has_many :items

  class ItemSerializer < ActiveModel::Serializer
    attributes :id, :name, :price, :availability, :description, :customization, :category
  end
end
