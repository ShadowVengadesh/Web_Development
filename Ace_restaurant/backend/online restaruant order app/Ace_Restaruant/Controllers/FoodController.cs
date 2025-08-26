using Ace_Restaruant.DB;
using Ace_Restaruant.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Ace_Restaruant.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FoodController : ControllerBase
    {
        public readonly ApplicationDbContext _Db;
        public FoodController(ApplicationDbContext db)
        {
            _Db = db;
        }
        [HttpPost]
        [Route("Item created")]
        public IActionResult CreateFoodItem([FromBody] AceRestaurant foodItem)
        {
            if (foodItem == null)
            {
                return BadRequest("Food item cannot be null");
            }
            _Db.Add(foodItem);
            _Db.SaveChanges();
            return Ok(foodItem);
        }
        [HttpGet]
        [Route("Get all food items")]
        public IActionResult GetAllFoodItems()
        {
            var foodItems = _Db.AceRestaurants.ToList();
            if (foodItems == null || !foodItems.Any())
            {
                return NotFound("No food items found");
            }
            return Ok(foodItems);
        }
    }
}
