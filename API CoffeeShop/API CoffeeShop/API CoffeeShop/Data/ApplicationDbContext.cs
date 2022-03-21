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
            //constructor that allows us to use the database
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
            {

            }
        }
    }
