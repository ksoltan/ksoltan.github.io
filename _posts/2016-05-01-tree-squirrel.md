---
layout: inner
post_type: project
title: 'Tree Squirrel Wind Sculpture'
date: 2016-05-01 00:00:00
categories: experience
tags: CAD Fabrication
featured_image: '/img/posts/tree_squirrel/top.jpg'
project_link:
button_icon: 'flask'
button_text: 'Visit Project'
lead_text: 'A wind-powered sculpture which changes seasons as the wind pushes the leaves around.'
secondary_text: 'The final prototype was hung on light posts on the Olin campus and displayed to the public.'
gallery:
- columns: 1
  content:
  - side: center
    video_url: https://www.youtube.com/embed/VgxlsUxtLTQ
    caption: It is notoriously hard to capture your sculpture working. You will have to take my word that there was a time when it spun majestically and faster.
- columns: 2
  content:
  - side: left
    image: /img/posts/tree_squirrel/crown.jpg
    caption: The tree crown is an anemometer-like structure that harnesses the wind with curved leaves to rotate the main shaft.
  - side: right
    image: /img/posts/tree_squirrel/iso.jpg
    caption: The final CAD of the system.
  - side: left
    image: /img/posts/tree_squirrel/top.jpg
    caption: Each leaf is riveted to the end of a copper rod, hammered flat, which screws into aluminum hubs on a D shaft. Each hub is offset by 60 degrees for a fuller crown of leaves.
  - side: left
    image: /img/posts/tree_squirrel/brace.jpg
    caption: To alleviate sagging, a bracket was attached to the front plate to brace it.
  - side: right
    image: /img/posts/tree_squirrel/rack.jpg
    caption: A custom plant rack was welded to hold six pots of plants to add a splash of green to the bio-inspired metal.
  - side: left
    image: /img/posts/tree_squirrel/mounting.jpg
    caption: The sculptures were mounted onto light posts on Olin's campus.
  - side: right
    image: /img/posts/tree_squirrel/fourBar.jpg
    caption: The linkages were too long to support the weight of the squirrel, and the gear ration was reversed, providing a step up of 9:1 which caused the squirrel to violent jerk from side to side. We chose to remove this system for the final demo.
  - side: right
    image: /img/posts/tree_squirrel/squirrel.jpg
    caption: The sheet metal squirrel was fully CADed to use the drawings for manual fabrication.
- columns: 3
  content:
  - side: left
    image: /img/posts/tree_squirrel/squirrelProcess.jpg
    caption: All of the parts for the squirrel were hand-snipped according to the drawing.
  - side: center
    image: /img/posts/tree_squirrel/rivets.png
    caption: The head, tail, and body were riveted together.
  - side: right
    image: /img/posts/tree_squirrel/sideAssembled.png
    caption: The sheet metal was bent using pliers to achieve the final shape.
---
{% capture project_description %}
The second Mechanical Prototyping project challenged us to design and fabricate a wind powered kinetic sculpture. The final sculptures were hung up on light posts around Olin and displayed to the public.
Our team of 5 chose to create a bio-inspired project and designed a tree that changed seasons as the wind pushed the leaves around, with a squirrel popping in and out from behind the trunk. The rotation of the leaves represents the changing seasons, with brass autumn and aluminum winter.
I primarily worked on the squirrel mechanism, attempting to push the bounds of what I could do with sheet metal and four-bar linkages.
{% endcapture %}
{% include image-left.html image='/img/posts/tree_squirrel/sculpture.jpg' content=project_description %}
<h1 class="section-title text-center">Design</h1>

{% include gallery.html gallery=page.gallery %}
