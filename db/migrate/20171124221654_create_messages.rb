class CreateMessages < ActiveRecord::Migration[5.1]
  def change
    create_table :messages do |t|
      t.integer :user_id, null: false, index: true 
      t.string :body, null: false
      t.references :interface, polymorphic: true, index: true

      t.timestamps
    end
  end
end
