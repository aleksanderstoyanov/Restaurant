using Restaurant.Data.Models;
using System.Collections.Generic;

namespace Restaurant.Services.Contracts
{
    public interface IProductService
    {
        public IEnumerable<Product> GetProducts();
    }
}
