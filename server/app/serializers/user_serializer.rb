class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :phone_number

  has_many :transactions

  class TransactionSerializer < ActiveModel::Serializer
    attributes :id, :is_valid, :valid_from, :valid_until, :item
  end
end
