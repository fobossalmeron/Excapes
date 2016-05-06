---
layout: page
title: Arma tu viaje
permalink: armatuviaje/
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
	  <iframe src="{{ destination.video }}" frameborder="0" allowfullscreen></iframe>
	</div>

  <main class="destination_content">
    {% if destination.deals %}
		<h2 class="promociones_title">¡Ahórrate un varo!</h2>
  	<ul class="deals_list">
		  {% for deal in destination.deals %}
					<li class="deal locacion_clickable deal_clickable{{deal_id}}">
            {% if deal.type == "plane" %}
            <img class="deal_icon" src="{{ site.baseurl }}images/promociones/plane.svg">
            <span class="deal_info">Vuelos</span>
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
								{% if location.web %}
								<a class="dealbrand" href="{{ location.web }}">
								{{ location.name }}
								</a>
								{% else %}
								<h3>{{ location.name }}</h3>
								{% endif %}
								<div class="infocontainer">
									{% if location.tel %}
									<a class="phonecontact" href="tel:{{location.tel}}">
										<img src="{{ site.baseurl }}images/layout/mobile.svg">
										+(52) {{ location.tel }}
									</a>
									{% endif %}
									{% if location.tel2 %}
									<a class="phonecontact" href="tel:{{ location.tel2 }}">
										<img src="{{ site.baseurl }}images/layout/mobile.svg">
										+(52) {{ location.tel2 }}
									</a>
									{% endif %}
									{% if location.whatsapp %}
									<a class="phonecontact" href="tel:{{ location.whatsapp }}">
								 		<img src="{{ site.baseurl }}images/layout/whatsapp.svg"> {{ location.whatsapp }}
									</a>
									{% endif %}
									{% if location.mail %}
									<a class="dealicon dealmail" href="mailto:{{ location.mail }}" target="_blank">
										<img src="{{ site.baseurl }}images/layout/contactored.svg">
									</a>
									{% endif %}
									{% if location.facebook %}
									<a class="dealicon dealfacebook" href="{{location.facebook}}" target="_blank">
										<img src="{{ site.baseurl }}images/layout/fbred.svg">
									</a>
									{% endif %}
									<p>{{location.info}}</p>
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
			 <div class="reto_image" style="background-image: url({{ site.baseurl }}images/retos/{{ challenge.name }}.jpg)"></div>
			 {% endif %}
		  	<img class="reto_icon" src="{{ site.baseurl }}images/retos/{{ challenge.name }}.svg">
		    <h1 class="challenge_title">{{challenge.name}}</h1>
		    <ul class="locaciones locaciones{{ challenge_id }}">
		    	{% for location in challenge.locations %}
		    	<li>
		    		<h3 class="challenge_title">{{ location.place }}</h3>
			    		<a href="{{ location.link }}" target="_blank">{{ location.name }}</a>
			    		<p>{{ location.info }}</p>
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
              <h1 class="challenge_title">{{ hotspot.name }}</h1>
              <ul class="locaciones hotspots{{ hotspot_id }}">
								<li>
								{% if hotspot.info %}
									<p>{{hotspot.info}}</p>
								{% endif %}
								{% if hotspot.link %}
                  <a href="{{hotspot.link}}" target="_blank">{{hotspot.linktext}}</a>
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
