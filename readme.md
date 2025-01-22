
1. User Collection
Stores information about users, including clients and admins.


{
  "_id": ObjectId("unique_user_id"),
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "hashed_password",
  "role": "user",  // Possible values: "user", "admin"
  "address": {
    "street": "123 Main St",
    "city": "Mumbai",
    "zip": "400001"
  },
  "phone": "9876543210",
  "createdAt": ISODate("2025-01-23T12:00:00Z"),
  "updatedAt": ISODate("2025-01-23T12:00:00Z")
}
2. Category Collection
Stores categories of items, like "Chai," "Snacks," etc.
{
  "_id": ObjectId("unique_category_id"),
  "name": "Chai",  // Category name
  "description": "Various types of chai available at our café.",
  "createdAt": ISODate("2025-01-23T12:00:00Z"),
  "updatedAt": ISODate("2025-01-23T12:00:00Z")
}
3. Product Collection
Stores product details under categories, including their price and availability.

{
  "_id": ObjectId("unique_product_id"),
  "name": "Adrak Chai",
  "categoryId": ObjectId("unique_category_id"),  // Reference to Category
  "description": "Ginger-flavored chai made with fresh ingredients.",
  "price": 20,  // Price in INR
  "stock": 100,  // Quantity available
  "image": "url_to_image",
  "createdAt": ISODate("2025-01-23T12:00:00Z"),
  "updatedAt": ISODate("2025-01-23T12:00:00Z")
}
4. Cart Collection
Stores the products added by a user to their cart.


{
  "_id": ObjectId("unique_cart_id"),
  "userId": ObjectId("unique_user_id"),  // Reference to User
  "items": [
    {
      "productId": ObjectId("unique_product_id"),  // Reference to Product
      "quantity": 2,
      "price": 20  // Price per item
    }
  ],
  "totalPrice": 40,  // Total price of items in the cart
  "createdAt": ISODate("2025-01-23T12:00:00Z"),
  "updatedAt": ISODate("2025-01-23T12:00:00Z")
}
5. Order Collection
Stores completed orders by users, including their status.


{
  "_id": ObjectId("unique_order_id"),
  "userId": ObjectId("unique_user_id"),  // Reference to User
  "items": [
    {
      "productId": ObjectId("unique_product_id"),  // Reference to Product
      "quantity": 2,
      "price": 20  // Price per item
    }
  ],
  "totalPrice": 40,  // Total price of the order
  "status": "Pending",  // Possible values: "Pending", "Confirmed", "Delivered"
  "createdAt": ISODate("2025-01-23T12:00:00Z"),
  "updatedAt": ISODate("2025-01-23T12:00:00Z")
}
6. Admin Logs Collection
Tracks admin actions for auditing purposes.


{
  "_id": ObjectId("unique_log_id"),
  "adminId": ObjectId("unique_user_id"),  // Reference to Admin User
  "action": "Added Product",  // Example actions: "Added Product", "Updated Product", "Deleted Product"
  "details": {
    "productId": ObjectId("unique_product_id"),  // Reference to Product (if applicable)
    "description": "Added Adrak Chai under the Chai category."
  },
  "createdAt": ISODate("2025-01-23T12:00:00Z")
}



Relationships
User ↔ Cart: A one-to-one relationship (one user has one active cart).
User ↔ Order: A one-to-many relationship (one user can place multiple orders).
Category ↔ Product: A one-to-many relationship (one category can have multiple products).
Product ↔ Cart/Order: A many-to-many relationship (a product can be in multiple carts/orders).
Admin ↔ Logs: A one-to-many relationship (one admin can create multiple logs).
Notes
Indexes should be created on fields like email, categoryId, userId, and productId for efficient querying.
Use bcrypt to hash user passwords.
Consider adding JWT or OAuth for user authentication.
Would you like me to create any specific queries or APIs for these models?







