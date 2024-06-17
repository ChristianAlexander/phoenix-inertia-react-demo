defmodule DemoApp.Repo.Migrations.CreateGroceries do
  use Ecto.Migration

  def change do
    create table(:groceries) do
      add :name, :text
      add :quantity, :integer

      timestamps(type: :utc_datetime)
    end
  end
end
