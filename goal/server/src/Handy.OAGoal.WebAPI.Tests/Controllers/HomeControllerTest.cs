using System.Web.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Handy.OAGoal.WebAPI;
using Handy.OAGoal.WebAPI.Controllers;

namespace Handy.OAGoal.WebAPI.Tests.Controllers
{
    [TestClass]
    public class HomeControllerTest
    {
        [TestMethod]
        public void Index()
        {
            // Arrange
            HomeController controller = new HomeController();

            // Act
            ViewResult result = controller.Index() as ViewResult;

            // Assert
            Assert.IsNotNull(result);
            Assert.AreEqual("Home Page", result.ViewBag.Title);
        }
    }
}
