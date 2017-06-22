
using System.Linq;
using System.Web.Http;
using XmlDataProvider;

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
