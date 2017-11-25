class CreateDirectmessages < ActiveRecord::Migration[5.1]
  def change
    create_table :directmessages do |t|
      t.string :directmessage_name, null: false
      t.timestamps
    end
  end
end
