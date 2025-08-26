using Microsoft.EntityFrameworkCore;
using Ace_Restaruant.Models; // Ensure you have the correct namespace for your models

namespace Ace_Restaruant.DB
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
            
        }
        // DbSet properties for your entities go here, e.g.:
        public DbSet<AceRestaurant> AceRestaurants { get; set; }
    }

}
