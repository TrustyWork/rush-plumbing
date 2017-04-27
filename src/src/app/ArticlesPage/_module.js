angular.module('app.ArticlesPage', ['ngRoute'])
	.config(['$routeProvider', function ($routeProvider) {
		//Services ServicesNav & InformationsNav PIKE
		var ServicesNav = {
			"Drain Cleaning": "#!/Services/DrainCleaning"
			,"Emergency Plubming": "#!/Services/EmergencyPlubming"
			,"Sewer Services": "#!/Services/SewerServices"
			,"Trenchless Sewer": "#!/Services/TrenchlessSewer"
			,"Gass Shut off Valve": "#!/Services/GassShutoffValve"
			,"Faucets & Fixtures": "#!/Services/FaucetsFixtures"
			,"Water Heaters": "#!/Services/WaterHeaters"
		}

		var InformationsNav = {
			"Our Company": "#!/Informations/OurCompany"
			,"Careers": "#!/Informations/Careers"
			,"Certification": "#!/Informations/Certification"
			,"Blog": "#!/Blog"
			,"Reviews": "#!/Reviews"
			,"FAQ": "#!/Informations/FAQ"
			,"Contact us": "#!/ContactUs"
		}

		var categories = {
			Services: ServicesNav
			,Informations: InformationsNav
		}

		for (var category in categories) {

			var links = categories[category];
			for (var name in links) {
				name = name.replace(/(\s|&)+/g, ''); //remove spaces

				//http://stackoverflow.com/a/1026087
				var capitalizeFirstLetter = function (string) {
					return string.charAt(0).toUpperCase() + string.slice(1);
				}

				var link = '/' + capitalizeFirstLetter( category) + `/${name}`;
				var templateUrl = './app/views/' + category.toLowerCase() + `/${name}.html`;

				$routeProvider.when( link, {
					templateUrl: templateUrl
				});


			}
		}
	}]);