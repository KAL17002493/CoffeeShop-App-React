using API_CoffeeShop.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using API_CoffeeShop.Models;

namespace API_CoffeeShop.Data
{
        public class ApplicationDbContext : IdentityDbContext<IdentityUser>
        {
            public DbSet<UserModel> Users { get; set; }
            public DbSet<ProductModel> Products { get; set; }
            public DbSet<BookTableModel> BookTable { get; set; }
            //constructor that allows us to use the database
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
            {

            }
            //constructor that allows us to use the database
        public DbSet<API_CoffeeShop.Models.BookTableModel> BookTableModel { get; set; }
            //constructor that allows us to use the database
        public DbSet<API_CoffeeShop.Models.OnlineOrderModel> OnlineOrderModel { get; set; }
        }
    }
