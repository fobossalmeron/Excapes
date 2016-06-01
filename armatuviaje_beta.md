---
layout: page
title: Arma tu viaje
permalink: beta/armatuviaje/
mainsponsor: sidebar-ad-reflekto.jpg
mainsponsorhorizontal: horizontal-ad-reflekto.jpg
mainsponsorlink: /patrocinadores/
secondarysponsor: sidebar-ad-mini-ojosdepapel.png
secondarysponsorhorizontal: horizontal-ad-mini-ojosdepapel.png
secondarysponsorlink: http://www.ojosdepapelvolando.com
---

<p style="float:left;">Échale un ojo a esta guía para que viajes por México como te dé la gana.</p>

{% for destination in site.destinations reversed %}
<div class="destination">
	<h1>{{ destination.title }}</h1>
	<h2>{{ destination.subtitle }}</h2>
	<div class="main_video">
	  <iframe src="{{ destination.video }}?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
	</div>

	<div class="remodal" data-remodal-id="modal{{ destination.title }}" data-remodal-action="confirm">
		<button data-remodal-action="close" class="remodal-close"></button>
		<iframe src="{{ destination.form }}" frameborder="0" marginheight="0" marginwidth="0">Cargando...</iframe>
	</div>

  <main class="destination_content">
    {% if destination.deals %}
		<h2 class="promociones_title">¡Ahórrate un varo!</h2>
		<p style="float:left;clear:both;">Promociones exclusivas para <b>E<span class="xtext">X</span>CAPES</b></p>
  	<ul class="deals_list">
		  {% for deal in destination.deals %}
					<li class="deal locacion_clickable deal_clickable{{deal_id}}">
            {% if deal.type == "plane" %}
            <img class="deal_icon" src="{{ site.baseurl }}images/promociones/plane.svg">
            <span class="deal_info">Vuelos</span>
            {% endif %}
						{% if deal.type == "restaurante" %}
            <img class="deal_icon" src="{{ site.baseurl }}images/promociones/restaurant.svg">
            <span class="deal_info">Restaurante</span>
            {% endif %}
            {% if deal.type == "hotel" %}
            <img class="deal_icon" src="{{ site.baseurl }}images/promociones/hotel.svg">
            <span class="deal_info">Hospedaje</span>
            {% endif %}
            {% if deal.type == "bus" %}
            <img class="deal_icon" src="{{ site.baseurl }}images/promociones/bus.svg">
            <span class="deal_info">Autobuses</span>
            {% endif %}
            <ul class="deal_hiddeninfo deals{{ deal_id }} superselectable">
  						{% for location in deal.locations %}
  						<li class="hiddenli">
                <h2>{{location.place}}</h2>
								<button class="closeme">{% include closeme.html %}</button>
								{% if location.web %}
								<a class="dealbrand" href="{{ location.web }}" target="_blank">
								{{ location.name }}
								</a>
								{% else %}
								<h3>{{ location.name }}</h3>
								{% endif %}
								<div class="infocontainer">
									{% if location.tel %}
									<a class="phonecontact redsvg" href="tel:{{location.tel}}">
										{% include icons/telephone.html %}
										{{ location.tel }}
									</a>
									{% endif %}
									{% if location.tel2 %}
									<a class="phonecontact redsvg" href="tel:{{ location.tel2 }}">
										{% include icons/telephone.html %}
										{{ location.tel2 }}
									</a>
									{% endif %}
									{% if location.whatsapp %}
									<a class="phonecontact redsvg" href="tel:{{ location.whatsapp }}">
								 		{% include icons/whatsapp.html %}
										{{ location.whatsapp }}
									</a>
									{% endif %}
									{% if location.mail %}
									<a class="dealicon dealmail redsvg" href="mailto:{{ location.mail }}" target="_blank">
										{% include icons/mail.html %}
									</a>
									{% endif %}
									{% if location.facebook %}
									<a class="dealicon dealfacebook redsvg" href="{{location.facebook}}" target="_blank">
										{% include icons/facebook.html %}
									</a>
									{% endif %}
									<p>{{location.info}}</p>
									{% if location.hascode %}
									<h2 class="calltoaction"><a data-remodal-target="modal{{ destination.title }}">Obtén tu código de promoción!</a></h2>
									{% endif %}
								</div>
              </li>
              {% endfor %}
            </ul>
					</li>
			{% endfor %}
		</ul>
    {% endif %}

		{% if destination.challenges %}
		<h2>¿Te avientas?</h2>
    <ul class="retos superselectable">
	    {% for challenge in destination.challenges %}
	  	<li class="locacion_clickable locacion_clickable{{challenge_id}}">
				{% if challenge.alterimg %}
				<div class="reto_image" style="background-image: url({{ site.baseurl }}images/retos/{{ challenge.alterimg }}.jpg)"></div>
				{% else %}
			 <div class="reto_image" style="background-image: url({{ site.baseurl }}images/retos/{{ challenge.name | replace:'í','i' }}.jpg)"></div>
			 {% endif %}
		  	<img class="reto_icon" src="{{ site.baseurl }}images/retos/{{ challenge.name | replace:'í','i' }}.svg">
		    <h2 class="challenge_title">{{challenge.name}}</h2>
				<button class="closeme whitepadding">{% include closeme.html %}</button>
		    <ul class="locaciones locaciones{{ challenge_id }}">
		    	{% for location in challenge.locations %}
		    	<li>
		    		<h3>{{ location.place }}</h3>
							{% if location.web %}
							<a href="{{ location.web }}" target="_blank">
							{{ location.name }}
							</a>
							{% else %}
							<h4>{{ location.name }}</h4>
							{% endif %}
							{% if location.tel %}
							<a class="phonecontact opacitysvg" href="tel:{{location.tel}}">
								{% include icons/telephone.html %}
								{{ location.tel }}
							</a>
							{% endif %}
							{% if location.tel2 %}
							<a class="phonecontact opacitysvg" href="tel:{{ location.tel2 }}">
								{% include icons/telephone.html %}
								{{ location.tel2 }}
							</a>
							{% endif %}
							{% if location.whatsapp %}
							<a class="phonecontact opacitysvg" href="tel:{{ location.whatsapp }}">
								{% include icons/whatsapp.html %}
								{{ location.whatsapp }}
							</a>
							{% endif %}
							{% if location.mail %}
							<a class="dealicon dealmail opacitysvg" href="mailto:{{ location.mail }}" target="_blank">
								<img src="{{ site.baseurl }}images/layout/contactored.svg">
							</a>
							{% endif %}
							{% if location.facebook %}
							<a class="dealicon dealfacebook opacitysvg" href="{{location.facebook}}" target="_blank">
								{% include icons/facebook.html %}
							</a>
							{% endif %}
							{% if location.maps %}
							<a class="dealicon dealmaps opacitysvg" href="{{location.maps}}" target="_blank">
								{% include icons/maps.html %}
							</a>
							{% endif %}
							<p>{{ location.info }}</p>
							{% if location.hascode %}
							<h2 class="calltoaction"><a data-remodal-target="modal{{ destination.title }}">Obtén tu código de promoción!</a></h2>
							{% endif %}
		    	</li>
		    	{% endfor %}
		    </ul>
		  </li>
	    {% endfor %}
    </ul>
    {% endif %}

		{% if destination.hotspots %}
		<h2>Tienes que visitar estos lugares!</h2>
			<ul class="retos hotspots superselectable">
				{% for hotspot in destination.hotspots %}
            <li class="locacion_clickable hotspot_clickable{{hotspot_id}}">
              <div class="reto_image" style="background-image: url({{ site.baseurl }}images/locaciones/{{ hotspot.image }})"></div>
              <img class="reto_icon" src="{{ site.baseurl }}images/locaciones/locacion.svg">
							{% if hotspot.web %}
							<a href="{{ hotspot.web }}" target="_blank" class="challenge_title">
								{{ hotspot.name }}
							</a>
							{% else %}
              <h2 class="challenge_title">{{ hotspot.name }}</h2>
							{% endif %}
							<button class="closeme whitepadding">{% include closeme.html %}</button>
              <ul class="locaciones hotspots">
								<li>
								{% if hotspot.info %}
									<p>{{hotspot.info}}</p>
								{% endif %}
								{% if hotspot.link %}
                  <a href="{{hotspot.link}}" target="_blank" class="superclear">{{hotspot.linktext}}</a>
								{% endif %}
								{% if hotspot.facebook %}
								<a class="dealicon dealfacebook opacitysvg" href="{{hotspot.facebook}}" target="_blank">
									{% include icons/facebook.html %}
								</a>
								{% endif %}
								</li>
              </ul>
            </li>
				{% endfor %}
			</ul>
		{% endif %}

	</main>
</div>
{% endfor %}
