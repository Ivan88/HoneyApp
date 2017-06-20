using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HoneyApp.Models
{
	public class Setting
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public int Availability { get; set; }
		public string Description { get; set; }
	}
}