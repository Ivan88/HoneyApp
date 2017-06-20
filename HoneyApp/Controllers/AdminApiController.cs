using HoneyApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace HoneyApp.Controllers
{
    public class AdminApiController : ApiController
    {
		public IHttpActionResult GetSettings()
		{
			var settings = Enumerable.Empty<Setting>();
			return Ok(settings);
		}
    }
}
