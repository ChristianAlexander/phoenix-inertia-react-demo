defmodule DemoApp.ShoppingFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `DemoApp.Shopping` context.
  """

  @doc """
  Generate a grocery.
  """
  def grocery_fixture(attrs \\ %{}) do
    {:ok, grocery} =
      attrs
      |> Enum.into(%{
        name: "some name",
        quantity: 42
      })
      |> DemoApp.Shopping.create_grocery()

    grocery
  end
end
