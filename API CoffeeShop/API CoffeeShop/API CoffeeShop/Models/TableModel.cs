using System.ComponentModel.DataAnnotations;

namespace API_CoffeeShop.Models
{
    public class TableModel
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public int Numer { get; set; }

        [Required]
        public bool IsAvailible { get; set; }
    }
}
