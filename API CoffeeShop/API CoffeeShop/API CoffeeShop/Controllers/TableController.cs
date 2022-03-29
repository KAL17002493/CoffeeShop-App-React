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
    [Route("api/table")]
    [ApiController]
    public class TableController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public TableController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Table
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TableModel>>> GetBookTable()
        {
            return await _context.BookTable.ToListAsync();
        }

        // GET: api/Table/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TableModel>> GetTableModel(int id)
        {
            var tableModel = await _context.BookTable.FindAsync(id);

            if (tableModel == null)
            {
                return NotFound();
            }

            return tableModel;
        }

        // PUT: api/Table/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTableModel(int id, TableModel tableModel)
        {
            if (id != tableModel.Id)
            {
                return BadRequest();
            }

            _context.Entry(tableModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TableModelExists(id))
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

        // POST: api/Table
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TableModel>> PostTableModel(TableModel tableModel)
        {
            tableModel.IsAvailible = true;
            _context.BookTable.Add(tableModel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTableModel", new { id = tableModel.Id }, tableModel);
        }

        // DELETE: api/Table/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTableModel(int id)
        {
            var tableModel = await _context.BookTable.FindAsync(id);
            if (tableModel == null)
            {
                return NotFound();
            }

            _context.BookTable.Remove(tableModel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TableModelExists(int id)
        {
            return _context.BookTable.Any(e => e.Id == id);
        }
    }
}
