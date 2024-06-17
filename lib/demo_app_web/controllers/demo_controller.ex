defmodule DemoAppWeb.DemoController do
  use DemoAppWeb, :controller

  def index(conn, _params) do
    conn
    |> assign_prop(:place, "World")
    |> assign_prop(
      :facts,
      inertia_lazy(fn ->
        [
          %{"key" => "Mass", "value" => "5.972 × 10^24 kg"},
          %{"key" => "Radius", "value" => "6,371 km"}
        ]
      end)
    )
    |> render_inertia("DemoPageOne")
  end
end
