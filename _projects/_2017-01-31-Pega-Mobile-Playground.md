---
layout: project
title: "Pega Mobile Playground"
image: "/images/projects/pega-playground/left-pane.jpg"
categories:
  - Pegasystems
tags:
  - Android
excerpt: ""
---

## Description

Pega Mobile Playground is a demo application based on Pega platform. It allows to test drive
mobile features, user interface and case management that are possible to with Pega’s development platform.
{: style="text-align: justify;"}

Using the capability of Pega mobile development platform a user can access his business applications directly 
on a phone or tablet. It provides a real-time access and modification of the data. The platform also allows 
to utilize features of mobile devices like GPS, camera, fingerprint reader or the fact that phones and tablets 
are usually at one’s fingertips. Applications can easily be made offlineable. That means a user can work on a 
data the application have, create new data and when he enters the area where network is available the application 
will synchronize itself simultaneously.
{: style="text-align: justify;"}


## Libraries and frameworks

| Android SDK |    Java     |    Gradle   |
|  SQLCipher  |  EventBus   |    Dagger   |
|   okHttp    |    okIO     |     Gson    |
|    JUnit    | Robolectric |    Mockito  |


## Preview

{% capture images %}
  {{ site.url }}/images/projects/pega-playground/screen-1.jpg
	{{ site.url }}/images/projects/pega-playground/screen-2.jpg
  {{ site.url }}/images/projects/pega-playground/screen-3.jpg
{% endcapture %}
{% include gallery images=images caption="Phone screenshots" cols=3 %}

{% capture images %}
	{{ site.url }}/images/projects/pega-playground/screen-4.jpg
	{{ site.url }}/images/projects/pega-playground/screen-5.jpg
  {{ site.url }}/images/projects/pega-playground/screen-6.jpg
{% endcapture %}
{% include gallery images=images caption="Tablet screenshots" cols=3 %}

Screenshots are based on a version 1.1.1.


## Links

<a class='badge' target='_blank' href='https://play.google.com/store/apps/details?id=com.pega.playground'>
  <img alt='Get it on Google Play'
       src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png'/>
</a>
{: .badge}
