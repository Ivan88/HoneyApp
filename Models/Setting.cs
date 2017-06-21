using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models
{
    public class Setting
    {
		public int Id { get; set; }
		public string Name { get; set; }
		public string Description { get; set; }
		public int Availability { get; set; }
    }
}
