---
layout: inner
post_type: project
title: 'Senior Capstone Project: Democratizing Air Quality'
date: 2019-05-14 00:00:00
categories: experience
tags: Embedded User-Experience Design
featured_image: '/img/posts/democratizing_aq/eb_installation_salute.png'
project_link:
button_icon: 'flask'
button_text: 'Visit Project'
lead_text: 'We built a pilot network of low-cost air quality sensors in East Boston to provide hyper-local data for citizens to make real-time health decisions'
secondary_text: '<a href="https://www.quant-aq.com/" target="blank">QuantAQ</a>, a startup, is continuing the technical development of this project!'
project_buttons:
  - display_in_preview: true
    button_link: "https://www.youtube.com/watch?v=xMn41CGxf5A&feature=youtu.be"
    button_text: Rocket Talk
    button_icon: 'youtube'
  - display_in_preview: true
    button_link: "https://xd.adobe.com/view/b04e3893-ff45-4ee7-4d0f-3c59412af099-c67f"
    button_text: UX/UI Prototype
    button_icon: 'adobe'
  - display_in_preview: false
    button_link: '/files/posts/scope_archival_poster.pdf'
    button_text: Summary Poster
    button_icon: 'file-pdf-o'
sponsors_gallery:
- columns: 1
  size: 'full'
  content:
    - image: /img/posts/democratizing_aq/collaborators.png
      caption: We worked with some incredible people on this project, from scientists to community advocates!
gallery:
- columns: 2
  content:
    - side: left
      video_url: 'https://www.youtube.com/embed/64VP7BtgzB0'
      caption: Residents can smell the jetfuel and know that something is wrong. But they don't know why or how bad it is or what to do about it.
    - side: right
      image: /img/posts/democratizing_aq/roxbury_aq_station.png
      caption: Reference-grade AQ monitoring stations are large (~1/4 football field), expensive to maintain, and their data is hard to access.
- columns: 2
  content:
    - side: left
      image: /img/posts/democratizing_aq/eb_source_map.png
      caption: Current AQ monitoring stations are too sparse to provide the hyper-local data citizens need to make  real-time health decisions.
    - side: right
      image: /img/posts/democratizing_aq/arisense_box_cropped.png
      caption: ARISense is a small, low-cost AQ sensor built at Aerodyne. It can measure and publish data to the cloud on the order of seconds.
- columns: 2
  content:
    - side: left
      image: /img/posts/democratizing_aq/system_diagram.png
      caption: Data from the sensors is sent to the cloud to be calibrated, stored, and made accessible to both citizens and scientists.
    - side: right
      image: /img/posts/democratizing_aq/olin_ref_van.png
      caption: Sensors are calibrated by a combination of online machine-learning models and on-site comparison to reference instruments in our mobile AQ lab van.
- columns: 2
  content:
    - side: left
      image: /img/posts/democratizing_aq/public_ui.png
      caption: The public can view AQ data in real-time, gain an intuition for what is good or bad AQ, and feel empowered to advocate for themselves.
    - side: right
      image: /img/posts/democratizing_aq/researcher_ui.png
      caption: Researchers can deploy networks of their own, going from working with a single instrument full-time to easily managing hundreds or more.

process_gallery:
- columns: 2
  content:
    - side: left
      image: /img/posts/democratizing_aq/framing_ux_qs.png
      caption: We started our project by identifying our stakeholders and design goals.
    - side: right
      image: /img/posts/democratizing_aq/ux_feedback.png
      caption: We conducted user research to understand how to make air quality data accessible, accurate, and actionable to our stakeholders.
- columns: 2
  content:
    - side: left
      image: /img/posts/democratizing_aq/wireframes_zero.png
      caption: Initial designs targeted questions like how do you users respond to colors? How do they interpret numbers? How do we show change?
    - side: right
      image: /img/posts/democratizing_aq/ux_prototype.png
      caption: Check out this <a href="https://xd.adobe.com/view/b04e3893-ff45-4ee7-4d0f-3c59412af099-c67f" target="_blank">interactive prototype</a> I made in Adobe XD! Click around as you would in an app.
- columns: 2
  content:
    - side: left
      image: /img/posts/democratizing_aq/ship_points.png
      caption: We created a plan for testing and developing the UX, identifying assumptions to be tested in each phase.
    - side: right
      image: /img/posts/democratizing_aq/barebones.png
      caption: The end result was a UX specification which our frontend developer worked from.
---
{% capture project_description %}
For our <a href="http://www.olin.edu/collaborate/scope/" target="blank">senior capstone project</a>, we partnered with <a href="https://www.aerodyne.com/" target="blank">Aerodyne Research Inc</a> and <a href="https://airportimpactreliefinc.org/" target="blank">AIRInc</a> to build a pilot network of low-cost air quality (AQ) sensors in East Boston. Our team focused on the software infrastructure for collecting, storing, analyzing, and serving the data to both the public and scientists. <a href="https://www.quant-aq.com/" target="blank">QuantAQ</a>, our liaison’s startup, is continuing the technical development of the project.
My role: Developed UX spec; Wrote embedded code to connect sensors and instruments to cloud; Designed public communication materials; Managed budget.
{% endcapture %}
{% include image-left.html image_caption='An airplane flies low above a neighborhood, emitting plumes of ultra-fine particles which negatively impact health.' project_buttons=page.project_buttons content=project_description %}

<h1 class="section-title text-center">Collaborators</h1>
{% include gallery.html gallery=page.sponsors_gallery %}

<h1 class="section-title text-center">Project</h1>
{% include gallery.html gallery=page.gallery %}

<h1 class="section-title text-center">Process</h1>
{% include gallery.html gallery=page.process_gallery %}
