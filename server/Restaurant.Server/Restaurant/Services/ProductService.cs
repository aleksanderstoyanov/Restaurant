using Restaurant.Data;
using Restaurant.Data.Models;
using Restaurant.Services.Contracts;
using System.Collections.Generic;
using System.Linq;

namespace Restaurant.Services
{
    public class ProductService : IProductService
    {
        private readonly RestaurantDbContext dbContext;

        public ProductService(RestaurantDbContext dbContext)
        {
            this.dbContext = dbContext;
        }
        public IEnumerable<Product> GetProducts()
        {
            return this.dbContext.Products.ToList();
        }
    }
}
