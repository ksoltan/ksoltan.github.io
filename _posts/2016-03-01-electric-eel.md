---
layout: inner
post_type: project
title: 'Electric Eel'
date: 2016-03-01 00:00:00
categories: experience
tags: CAD Fabrication
featured_image: '/img/posts/electric_eel/bottom.jpg'
project_link:
button_icon: 'flask'
button_text: 'Visit project'
lead_text: 'This electric sculpture of brass and aluminum mimics the rippling, oscillatory motion of an eel.'
secondary_text: 'A tail on a separate drive train beats back and forth to complete the motion.'
gallery:
  - columns: 1
    content:
    - side: center
      video_url: https://www.youtube.com/embed/kufMGsU5Q5g
      caption: The final demonstration of the kinetic sculpture.
    - side: center
      image: /img/posts/electric_eel/body.jpg
      caption: Aluminum plates move in a sinusoidal pattern one after the other, driven by the "ribs" of the fish, made up of cams offset rotationally from each other.
  - columns: 2
    content:
    - side: right
      image: /img/posts/electric_eel/drivetrain.jpg
      caption: The main shaft is powered by a gearbox with a 9:16 reduction ratio. A button embedded in the base plate controls the DC motor connected to the gearbox.
    - side: left
      image: /img/posts/electric_eel/discs.jpg
      caption: The telescoping tubing is a failure point in the design, often jamming and slipping out. Using two pieces instead of three could have improved the follower.
    - side: right
      image: /img/posts/electric_eel/tail.jpg
      caption: The sheet metal head and tail were made in halves, puched, folded, soldered together, and polished for an organic aesthetic.
    - side: left
      image: /img/posts/electric_eel/bottom.jpg
      caption: A four bar linkage, powered by a belt and pulley with a 1:3 reduction ratio, connects to a tube that rotates the tail back and forth as the eel moves.
    - side: left
      video_url: https://www.youtube.com/embed/ayc-AaQqgDE
      caption: Top view of the sculpture after demo day, when a team member restored some of the telescoping tubing-driven discs.
---
{% capture poem %}
Our first project in Introduction to Mechnical Prototyping was to design and build a compelling kinetic sculpture powered by electricity. Our team of 5 undertook to convey the mesmerizing rippling effect of an eel's body as it swims.
I primarily worked to design and fabricate the head, tail, and the tail's motion. I also used the lathe to turn the main clockcage posts. In the wee hours of the night, my inner poet awakened to tell the story of our battle-scarred (read: interestingly assembled) eel:
<h3 class="poem">The Eel's Journey</h3>
<p class="poem">Deep in the sea where the currents are strong,
In roiling waters where few fish belong,
Caught in the tempest of moody whims' reel,
Emerges from darkness a battle-scarred eel.</p>
<p class="poem">An effortless ribbon of rippling muscle,
Parting the murk as it hunts for its prey,
It never stop swimming, never stops living,
For though it will die, it will not die today.</p>
{% endcapture %}
{% include image-left.html image='/img/posts/electric_eel/final_prototype.jpg' content=poem %}
<h1 class="section-title text-center">Design</h1>

{% include gallery.html gallery=page.gallery %}
