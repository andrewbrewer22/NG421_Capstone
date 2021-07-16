using capstone.Data;
using capstone.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace capstone.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CarsController : ControllerBase
    {
        private ApplicationDbContext _context;

        public CarsController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Car> Get()
        {
            return _context.Cars;
        }

        [HttpPost]
        public void Post([FromBody] Car model)
        {
            _context.Cars.Add(model);
            _context.SaveChanges();
        }
    }
}
