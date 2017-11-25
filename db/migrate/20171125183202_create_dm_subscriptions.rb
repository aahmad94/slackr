class CreateDmSubscriptions < ActiveRecord::Migration[5.1]
  def change
    create_table :dm_subscriptions do |t|
      t.integer :user_id, null: false
      t.integer :dm_id, null: false

      t.timestamps
    end

    add_index :dm_subscriptions, :dm_id
    add_index :dm_subscriptions, :user_id
    add_index :dm_subscriptions, [:user_id, :dm_id], unique: true
  end
end
