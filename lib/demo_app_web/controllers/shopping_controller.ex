defmodule DemoAppWeb.ShoppingController do
  use DemoAppWeb, :controller
  alias DemoApp.Shopping

  def new(conn, _params) do
    conn
    |> render_inertia("NewGrocery")
  end

  def create(conn, params) do
    case Shopping.create_grocery(params) do
      {:ok, _grocery} ->
        conn
        |> redirect(to: ~p"/groceries")

      {:error, %Ecto.Changeset{} = changeset} ->
        conn
        |> assign_errors(changeset)
        |> render_inertia("NewGrocery")
    end
  end

  def index(conn, _params) do
    groceries = Shopping.list_groceries()

    conn
    |> assign_prop(:groceries, groceries)
    |> render_inertia("ListGroceries")
  end
end
