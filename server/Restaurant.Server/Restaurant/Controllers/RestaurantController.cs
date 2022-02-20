using Microsoft.AspNetCore.Mvc;
using Restaurant.Data.Models;
using Restaurant.Services.Contracts;
using System.Collections.Generic;
using System.Linq;

namespace Restaurant.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RestaurantController : Controller
    {
        private readonly IProductService productService;

        public RestaurantController(IProductService productService)
        {
            this.productService = productService;
        }
        [HttpGet]
        public ActionResult<IEnumerable<Product>> GetProducts()
        {
            return this.productService.GetProducts().ToList();
        }
    }
}
