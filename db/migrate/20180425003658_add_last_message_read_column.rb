class AddLastMessageReadColumn < ActiveRecord::Migration[5.1]
  def change
    add_column :channel_subscriptions, :last_read_message_id, :integer, :default => 0
    add_column :dm_subscriptions, :last_read_message_id, :integer, :default => 0
  end
end
