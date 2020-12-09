class CreateStores < ActiveRecord::Migration[6.0]
  def change
    create_table :stores do |t|
      t.string :name
      t.string :email
      t.string :phone
      t.string :address
      t.string :city
      t.string :province
      t.string :country
      t.string :postal_code
      t.string :category

      t.timestamps
    end
  end
end
