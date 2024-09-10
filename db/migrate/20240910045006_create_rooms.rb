class CreateRooms < ActiveRecord::Migration[7.2]
  def change
    unless table_exists?(:rooms)
      create_table :rooms do |t|
        t.string :name

        t.timestamps
      end
      # add_index :rooms, :name, unique: true
    end
  end
end
