const textArea = document.getElementById('bilal-text-area');
let htmlEl = '';

function nl2br(text) {
	return text.split("\n").join("<br><hr>");
}

function generateContent(data, i) {
	const salam = `Salam ${(data.id == 13) ? i - 1 : i} ${(data.id > 10) ? '(Witir)' : ''} ${(data.id == 13) ? '- malam 15+' : ''}`;
	
	return `
<div class="row justify-content-center mt-3 item-text-row">
	<div class="col-md-10">
		<section class="item-text-header ${ (data.id == 13) ? 'inverse' : '' }">
			<p class="text-number m-0">${ i + 1 }</p>
			<small class="text-salam">${salam}</small>
		</section>
		<article class="item-text-content">${nl2br(data.arabic)}</article>
	</div>
</div>
	`;
}

bilalText.forEach((item, i) => {
	htmlEl += generateContent(item, i);
});

textArea.innerHTML = htmlEl;
