function videoTemplate(options){
	return `
		<p class="mediaTitle">${options.title}</p>
		<iframe src="${options.url}"
		      width="100%"
		      height="315"
		      frameborder="0"
		      webkitallowfullscreen
		      mozallowfullscreen
		      allowfullscreen>
		</iframe>`;
}

function soundcloudTemplate(options){
	return `
		<p class="mediaTitle">${options.title}</p>
		<iframe width="100%"
		      height="300"
		      scrolling="no"
		      frameborder="no"
		      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${options.id}&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true">
		</iframe>`;
}

function showPlayer(options) {
	var content = {
		video: videoTemplate,
		soundcloud: soundcloudTemplate
	}

	var media = content[options.type](options);

	$('.player').addClass('open');
	$('.player').addClass('loading');
	$('.player .media').html(media);

	$('.player .media iframe').load(function () {
		$('.player').removeClass('loading');
	});
}

function closePlayer() {
	$('.player').removeClass('open');
	$('.player .media').empty();
}
