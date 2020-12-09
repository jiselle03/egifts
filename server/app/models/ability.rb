# frozen_string_literal: true

class Ability
  include CanCan::Ability

  def initialize(user)
    user ||= User.new

    alias_action :create, :read, :update, :destroy, to: :crud

    if user.is_admin?
      can :manage, :all
    end

    can(:crud, User) do |user|
      user == user 
    end

    can(:crud, Store) do |store|
      store.user == user 
    end

    can(:crud, Item) do |item|
      item.store.user == user 
    end

    can(:purchase, Item) do |item|
      user.persisted?
    end

    can(:destroy, Transaction) do |transaction|
      transaction.user = user
    end
  end
end
