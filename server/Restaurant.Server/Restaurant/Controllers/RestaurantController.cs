using Microsoft.AspNetCore.Mvc;

namespace Restaurant.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RestaurantController : Controller
    {
       [HttpGet]
       public IActionResult Get()
        {
            return Ok("Hello: test,test");
        }
    }
}
