using Restaurant.Data;
using System.Threading.Tasks;

namespace Restaurant.Seeding.Contracts
{
    public interface ISeeder
    {
        Task SeedAsync(RestaurantDbContext dbContext);
    }
}
