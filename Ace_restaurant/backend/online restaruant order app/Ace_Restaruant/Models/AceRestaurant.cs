using System.ComponentModel.DataAnnotations;

namespace Ace_Restaruant.Models
{
    public class AceRestaurant
    {
        [key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }=null!; // Non-nullable with default value

        public string? CuisineType { get; set; }
        [Required]
        public Double? price { get; set; }
        public string? Description { get; set; }
        public DateTime OutTime { get; set; }
        [Required]
        public bool IsAvailable { get; set; }
        // Additional properties can be added as needed
    }
}
