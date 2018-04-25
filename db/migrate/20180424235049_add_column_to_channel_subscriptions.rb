class AddColumnToChannelSubscriptions < ActiveRecord::Migration[5.1]
  def change
    add_column :channel_subscriptions, :admin, :boolean
  end
end
