<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>http://www.blueb.co.kr</title>
<link rel="stylesheet" type="text/css" href="/data/201010/IJ12875323685154/style.css" />
<script type="text/javascript" src="/data/201010/IJ12875323685154/packed.js"></script>
</head>
<body>
<div id="wrapper">
	<div>
		<div class="sliderbutton"><img src="/data/201010/IJ12875323685154/left.gif" width="32" height="38" alt="Previous" onclick="slideshow.move(-1)" /></div>
		<div id="slider">
			<ul>
				<li id="content">
					<h1>TinySlider - Simple JavaScript Slideshow</h1>
					<p>This super lightweight (1.5 KB) sliding JavaScript slideshow script can easily be customized to integrate with any website through CSS. You can add any content to it, not just images, and it gracefully degrades without JavaScript support. The script supports automatic rotation with the option to auto-resume, an active class on a navigation list if applicable, and a direction toggle (vertical or horizontal).</p>
				</li>
				<li><img src="/data/201010/IJ12875323685154/sea-turtle.jpg" width="500" height="300" alt="Sea turtle" /></li>
				<li><img src="/data/201010/IJ12875323685154/coral-reef.jpg" width="500" height="300" alt="Coral Reef" /></li>
				<li><img src="/data/201010/IJ12875323685154/blue-fish.jpg" width="500" height="300" alt="Blue Fish" /></li>
			</ul>
		</div>
		<div class="sliderbutton"><img src="/data/201010/IJ12875323685154/right.gif" width="32" height="38" alt="Next" onclick="slideshow.move(1)" /></div>
	</div>
	<ul id="pagination" class="pagination">
		<li onclick="slideshow.pos(0)">1</li>
		<li onclick="slideshow.pos(1)">2</li>
		<li onclick="slideshow.pos(2)">3</li>
		<li onclick="slideshow.pos(3)">4</li>
	</ul>
</div>
<script type="text/javascript">
var slideshow=new TINY.slider.slide('slideshow',{
	id:'slider',
	auto:3,
	resume:true,
	vertical:false,
	navid:'pagination',
	activeclass:'current',
	position:0
});
</script>
</body>
</html>