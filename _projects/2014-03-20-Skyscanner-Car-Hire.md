---
layout: project
title: "Skyscanner - Car Hire"
image: "/images/projects/car-hire/left-pane.jpg"
categories:
  - Miquido
tags:
  - Android
---

## Description

<!-- [ADD DESCRIPTION] -->
Car hire application extends core Skyscanner business. It is a car rentals price comparison tool allowing to get 
the best car for selected features. Users can choose pick-up and drop-off location, car class, transmission type 
and additional car equipment. Based on those choices several car rental agences are beeing queued. 
{: style="text-align: justify;"}

Car hire application is available in more than 30 languages with built in right-to-left support. 
For these languages layout direction is being changed accordingly.
{: style="text-align: justify;"}


## Libraries and frameworks

|       Android SDK      |       Java       |   Gradle  |
|         ORMLite        |       Gson       | Robospice |
| Universal Image Loader | Google Analytics |           |


## Preview

{% capture images %}
  {{ site.url }}/images/projects/car-hire/screen-1.jpg
	{{ site.url }}/images/projects/car-hire/screen-2.jpg
  {{ site.url }}/images/projects/car-hire/screen-3.jpg
{% endcapture %}
{% include gallery images=images caption="Phone screenshots" cols=3 %}

{% capture images %}
	{{ site.url }}/images/projects/car-hire/screen-4.jpg
	{{ site.url }}/images/projects/car-hire/screen-5.jpg
  {{ site.url }}/images/projects/car-hire/screen-6.jpg
{% endcapture %}
{% include gallery images=images caption="Tablet screenshots" cols=3 %}

Screenshots are based on a version 1.3.0.0.5.


## Links

<a target='_blank' href='https://play.google.com/store/apps/details?id=net.skyscanner.carhire'>
  <img alt='Get it on Google Play'
       src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png'/>
</a>
{: .badge}
