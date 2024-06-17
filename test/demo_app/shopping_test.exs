defmodule DemoApp.ShoppingTest do
  use DemoApp.DataCase

  alias DemoApp.Shopping

  describe "groceries" do
    alias DemoApp.Shopping.Grocery

    import DemoApp.ShoppingFixtures

    @invalid_attrs %{name: nil, quantity: nil}

    test "list_groceries/0 returns all groceries" do
      grocery = grocery_fixture()
      assert Shopping.list_groceries() == [grocery]
    end

    test "get_grocery!/1 returns the grocery with given id" do
      grocery = grocery_fixture()
      assert Shopping.get_grocery!(grocery.id) == grocery
    end

    test "create_grocery/1 with valid data creates a grocery" do
      valid_attrs = %{name: "some name", quantity: 42}

      assert {:ok, %Grocery{} = grocery} = Shopping.create_grocery(valid_attrs)
      assert grocery.name == "some name"
      assert grocery.quantity == 42
    end

    test "create_grocery/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Shopping.create_grocery(@invalid_attrs)
    end

    test "update_grocery/2 with valid data updates the grocery" do
      grocery = grocery_fixture()
      update_attrs = %{name: "some updated name", quantity: 43}

      assert {:ok, %Grocery{} = grocery} = Shopping.update_grocery(grocery, update_attrs)
      assert grocery.name == "some updated name"
      assert grocery.quantity == 43
    end

    test "update_grocery/2 with invalid data returns error changeset" do
      grocery = grocery_fixture()
      assert {:error, %Ecto.Changeset{}} = Shopping.update_grocery(grocery, @invalid_attrs)
      assert grocery == Shopping.get_grocery!(grocery.id)
    end

    test "delete_grocery/1 deletes the grocery" do
      grocery = grocery_fixture()
      assert {:ok, %Grocery{}} = Shopping.delete_grocery(grocery)
      assert_raise Ecto.NoResultsError, fn -> Shopping.get_grocery!(grocery.id) end
    end

    test "change_grocery/1 returns a grocery changeset" do
      grocery = grocery_fixture()
      assert %Ecto.Changeset{} = Shopping.change_grocery(grocery)
    end
  end
end
