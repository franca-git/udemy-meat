export interface RestaurantModel {

  id: string,
  name: string,
  category: string,
  deliveryEstimate: string,
  rating: number,
  imagePath: string

  // Exemplo de informações do backend
  // "id": "burger-house",
  // "name": "Burger House",
  // "category": "Hamburgers",
  // "deliveryEstimate": "100m",
  // "rating": 3.5,
  // "imagePath": "assets/img/restaurants/burgerhouse.png",
}
