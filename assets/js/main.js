function videoTemplate(options) {
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

function soundcloudTemplate(options) {
    return `
		<p class="mediaTitle">${options.title}</p>
		<iframe width="100%"
		      height="300"
		      scrolling="no"
		      frameborder="no"
		      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${options.id}&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true">
		</iframe>`;
}

function createDetails(options) {
    return `
		<p class="text">${options.details}</p>
		<span class="context">${options.context}</span>
		<span class="date">${options.date}</span>
		<p class="who">
			<span class>${options.who}</span>
			<span>
				<a class="link" href="${options.backlink}">
					${options.wholink}
				</a>
			</span>
		</p>`;
}

function showPlayer(options) {
    var content = {
        video: videoTemplate,
        soundcloud: soundcloudTemplate
    }

    var media = content[options.type](options);
    var details = createDetails(options);

    $('.player').addClass('open');
    $('.player').addClass('loading');
    $('.player .media').html(media);

    $('.player .media iframe').load(function() {
        $('.player').removeClass('loading');
    });

    $('.player .details').html(details);
}

function closePlayer() {
    $('.player').removeClass('open');
    $('.player .media').empty();
    $('.player .details').empty();
}
