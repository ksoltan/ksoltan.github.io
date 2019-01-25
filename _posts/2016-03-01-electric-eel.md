---
layout: inner
post_type: project
title: 'Electric Eel'
date: 2016-03-01 00:00:00
categories: experience
tags: CAD Fabrication
featured_image: '/img/posts/electric_eel/bottom.jpg'
project_link:
button_icon: 'cog'
button_text: 'Coming Soon'
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
      caption: Tiny caption.
  - columns: 2
    content:
    - side: right
      image: /img/posts/electric_eel/drivetrain.jpg
      caption: Tiny caption.
    - side: left
      image: /img/posts/electric_eel/discs.jpg
      caption: Tiny caption.
    - side: right
      image: /img/posts/electric_eel/tail.jpg
      caption: Tiny caption.
    - side: left
      image: /img/posts/electric_eel/bottom.jpg
      caption: Tiny caption.
    - side: left
      video_url: https://www.youtube.com/embed/ayc-AaQqgDE
      caption: Top view of the sculpture after demo day, when a team member restored some of the telescoping tubing-driven discs.
---
{% capture poem %}
<h3 class="poem">The Eel's Journey</h3>
<p class="poem">Deep in the sea where the currents are strong,
In roiling waters where few fish belong,
Caught in the tempest of moody whims' reel,
Emerges from darkness a battle-scarred eel.</p>
<p class="poem">An effortless ribbon of rippling muscle,
Parting the murk as it hunts for its prey,
It never stop swimming, never stops living,
For though it will die, it will not die today.</p>
<p class="poem">Thoroughly pierced is the skin with steel drill bits,
Scratched are its scales from the struggles of life.
Its jaws are a-rattle, its fins are a-broken,
But the eyes are aglow, persevering all strife.</p>
<p class="poem">Starvation is killing the valiant eel,
Its once thick, slick body a shivering thread,
But still it keeps swimming no matter its fate,
And keep swimming it will until it is dead.
</p>
{% endcapture %}
{% include image-left.html image='/img/posts/electric_eel/final_prototype.jpg' content=poem %}
<h1 class="section-title text-center">The Design</h1>

{% include gallery.html gallery=page.gallery %}
