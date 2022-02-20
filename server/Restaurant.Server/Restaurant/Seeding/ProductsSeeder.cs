using Restaurant.Data;
using Restaurant.Data.Models;
using Restaurant.Seeding.Contracts;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Restaurant.Seeding
{
    public class ProductsSeeder : ISeeder
    {
        public async Task SeedAsync(RestaurantDbContext dbContext)
        {
            if (dbContext.Products.Any())
            {
                return;
            }

            var products = new List<Product>()
            {
                new Product(){ Name="Pasta",Price=15.00m,Image="strozzapreti_4.jpg"},
                new Product(){ Name="Pork",Price=25.00m,Image="chicken-pork.jpg"},
                new Product(){ Name="Cheese Cake",Price=25.00m,Image="cheesecake-pastry-cafe-switzerland-dessert-delicious-pie-bake-plate.jpg"},
            };

            dbContext.AddRange(products);

            await dbContext.SaveChangesAsync();

        }
    }
}
