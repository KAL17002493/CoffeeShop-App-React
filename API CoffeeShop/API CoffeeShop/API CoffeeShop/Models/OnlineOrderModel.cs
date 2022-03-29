using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace API_CoffeeShop.Models
{
    public class OnlineOrderModel
    {
        [Key]
        [Required]
        public int Id { get; set; }

        //------
        public string UserId { get; set; }

        [ForeignKey("UserId")]
        public UserModel? User { get; set; }

        //------
        public int ProductId { get; set; }

        [ForeignKey("ProductId")]
        public ProductModel? Product { get; set; }

        //------



    }
}
