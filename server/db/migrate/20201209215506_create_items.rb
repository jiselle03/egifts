class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.string :name
      t.decimal :price
      t.boolean :availability
      t.text :description
      t.string :customization
      t.string :category
      t.references :store, null: false, foreign_key: true

      t.timestamps
    end
  end
end
