class ChangeDirectmessageNamePresence < ActiveRecord::Migration[5.1]
  def change
    change_column :directmessages, :directmessage_name, :string, :null => true 
  end
end
