#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API_CoffeeShop.Data;
using API_CoffeeShop.Models;

namespace API_CoffeeShop.Controllers
{
    [Route("api/orders")]
    [ApiController]
    public class OnlineOrderController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public OnlineOrderController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/OnlineOrder
        [HttpGet]
        public async Task<ActionResult<IEnumerable<OnlineOrderModel>>> GetOnlineOrderModel()
        {
            return await _context.OnlineOrderModel.ToListAsync();
        }

        // GET: api/OnlineOrder/5
        [HttpGet("{id}")]
        public async Task<ActionResult<OnlineOrderModel>> GetOnlineOrderModel(int id)
        {
            var onlineOrderModel = await _context.OnlineOrderModel.FindAsync(id);

            if (onlineOrderModel == null)
            {
                return NotFound();
            }

            return onlineOrderModel;
        }

        // PUT: api/OnlineOrder/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOnlineOrderModel(int id, OnlineOrderModel onlineOrderModel)
        {
            if (id != onlineOrderModel.Id)
            {
                return BadRequest();
            }

            _context.Entry(onlineOrderModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OnlineOrderModelExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/OnlineOrder
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<OnlineOrderModel>> PostOnlineOrderModel(OnlineOrderModel onlineOrderModel)
        {
            _context.OnlineOrderModel.Add(onlineOrderModel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetOnlineOrderModel", new { id = onlineOrderModel.Id }, onlineOrderModel);
        }

        // DELETE: api/OnlineOrder/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOnlineOrderModel(int id)
        {
            var onlineOrderModel = await _context.OnlineOrderModel.FindAsync(id);
            if (onlineOrderModel == null)
            {
                return NotFound();
            }

            _context.OnlineOrderModel.Remove(onlineOrderModel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool OnlineOrderModelExists(int id)
        {
            return _context.OnlineOrderModel.Any(e => e.Id == id);
        }
    }
}
