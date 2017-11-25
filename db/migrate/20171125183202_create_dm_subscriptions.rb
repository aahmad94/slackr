class CreateDmSubscriptions < ActiveRecord::Migration[5.1]
  def change
    create_table :dm_subscriptions do |t|
      t.integer :user_id, null: false
      t.integer :directmessage_id, null: false

      t.timestamps
    end

    add_index :dm_subscriptions, :directmessage_id
    add_index :dm_subscriptions, :user_id
    add_index :dm_subscriptions, [:user_id, :directmessage_id], unique: true
  end
end
