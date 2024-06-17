defmodule DemoAppWeb.DemoController do
  use DemoAppWeb, :controller

  def index(conn, _params) do
    conn
    |> assign_prop(:place, "World")
    |> render_inertia("DemoPageOne")
  end
end
