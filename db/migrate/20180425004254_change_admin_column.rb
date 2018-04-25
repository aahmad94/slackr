class ChangeAdminColumn < ActiveRecord::Migration[5.1]
  def change
    change_column :channel_subscriptions, :admin, :boolean, :default => false
  end
end
