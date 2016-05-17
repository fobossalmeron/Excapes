---
layout: page
title: Jálate
permalink: jalate/
travelers:
  - title: "Juan"
    video: "https://www.youtube.com/embed/wJF5NXygL4k"
  - title: "Emma"
    video: "https://www.youtube.com/embed/wJF5NXygL4k"
  - title: "Sayra"
    video: "https://www.youtube.com/embed/wJF5NXygL4k"
  - title: "Fernanda"
    video: "https://www.youtube.com/embed/wJF5NXygL4k"
  - title: "Mercedes"
    video: "https://www.youtube.com/embed/wJF5NXygL4k"
  - title: "Andrea"
    video: "https://www.youtube.com/embed/wJF5NXygL4k"
travelerson: "false"
mainsponsor: sidebar-ad-reflekto.jpg
mainsponsorhorizontal: horizontal-ad-reflekto.jpg
mainsponsorlink: /patrocinadores/
secondarysponsor: sidebar-ad-mini-ojosdepapel.png
secondarysponsorhorizontal: horizontal-ad-mini-ojosdepapel.png
secondarysponsorlink: http://www.ojosdepapelvolando.com
---

<div class="main_video">
	<iframe src="https://www.youtube.com/embed/54Dz4FZV69U" frameborder="0" allowfullscreen></iframe>
</div>
 {% if page.travelerson == "true" %}
<ul class="capsulas">
		{% for traveler in page.travelers %}
	<li>
		<div class="cap_episode">
			<iframe src="{{ traveler.video }}" frameborder="0" allowfullscreen></iframe>
		</div>
		<h2>{{ traveler.title }}</h2>
	</li>
	{% endfor %}
</ul>
{% endif %}

<div class="about_info">
	Queremos invitarte a que agarres tu mochila y vengas a descubrir México con <b>E<span class="xtext">X</span>CAPES</b>. Si quieres participar graba un video contándonos cuál es tu e<span class="xtext">x</span>cusa para viajar.
	Grábate con cualquier cámara o con tu celular, dónde quieras, cómo quieras y <a href="mailto:quieroviajar@excapes.tv" target="_blank">manda tu video!</a> No importa de dónde seas sino tus ganas de viajar.
</div>

<div class="panel data_for_email">
	<h2>Si te quieres apuntar estos son los pasos a seguir:</h2>
	<ul>
		<li><b>Primer paso:</b> tener un chingo de ganas de viajar y aparecer en la serie.
		</li>
		<li><b>Segundo paso:</b> grabar un video de máximo 30 segundos y máximo 25 megas, contándonos cuál es tu excusa, y si te late puedes hacerlo acompañado de 1 o 2 amigos más.
		</li>
		<li><b>Tercer paso:</b> mándanos el video a <a href="mailto:quieroviajar@excapes.tv" target="_blank">quieroviajar@excapes.tv</a> con tus datos personales: nombre, edad y lugar de procedencia.
		</li>
	</ul>
	<p>
	Con base en los vídeos recibidos seleccionaremos a los tres participantes con la e<span class="xtext">x</span>cusa más original. Recuerda que al enviarlo aceptas nuestros <a href="{{ site.baseurl }}pdfs/terminosycondiciones.pdf">términos y condiciones</a>.<br><br>
	<b>No esperes más y envíanos tu video!!!</b>
	</p>
</div>

<div class="panel descarga_material">
	<a href="{{ site.baseurl }}descargables/Stencils_Excapes.pdf">
			<div class="descarga_boton">
			<p>Descarga stickers y stencils de la serie!</p>
			<div class="graphicseparator xbutton"></div>
			</div>
	</a>
</div>
