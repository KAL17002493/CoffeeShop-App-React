using System.ComponentModel.DataAnnotations;

namespace API_CoffeeShop.Models
{
    public class ProductModel
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(50)]
        public string Name { get; set; }

        public string Description { get; set; }

        [Required]
        public double Price { get; set; }

        public string Image { get; set; }
    }
}
