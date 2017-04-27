app.factory('Blog', function () {

	var posts = {
		1: {
			'id': 1
			,'title': 'The Hazards of Sewage Backup'
			,'image': '/images/table/5.jpg'
			,'created': 'September 1, 2016'
			,'about': 'A sewage backup will commonly present a serious health hazard mainly caused by bacteria, viruses and parasites. Sewage backup is dangerous due to the many ways it transmits diseases and because it is sometimes hard to predict.'
			,'template': '/app/views/posts/1.html'
		}, 2: {
			'id': 2
			,'title': 'Los Angeles Drain Cleaning Services'
			,'image': '/images/table/4.jpg'
			,'created': 'September 1, 2016'
			,'about': 'Do you have a clogged sink and after all your efforts and money and the problem still persist then the best thing to do is to hire a drain cleanings services. As you know, this kind of services is intended for all kinds of water fixtures and sinks. It is also essential when the pipes get blocked with stuffs, which is common for kitchens and bathrooms.'
			,'template': '/app/views/posts/2.html'
		}, 3: {
			'id': 3
			,'title': 'Los Angeles Plumbing Services'
			,'image': '/images/table/1.jpg'
			,'created': 'September 1, 2016'
			,'about': 'In every house, it is expected to have some type of indoor plumbing from bathroom, shower room to the sink. This is the reason why plumbing installation is very imperative to make this possible. On the other hand, if you live in Los Angeles, it can be a challenge to find Los Angeles plumbers. When looking for plumbers, it would be best to choose the one that is skill, trustworthy and affordable. Since there are a lot of plumbers in Los Angeles, it is not easy to find the right one. Plumbing is a complicated task that is not an easy endeavor, so you need to look for the best one that offers good service.'
			,'template': '/app/views/posts/3.html'
		}
	}

	return new Promise(function (res, rej) {

		var data  = {
			posts: posts
		}

		res( data);
	});
});