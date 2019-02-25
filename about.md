---
layout: inner
post_type: blog
title: About Me
permalink: /about/
featured_image: '/img/me.jpg'
project_link:
project_buttons:
  - is_email: true
    button_text: Email
    button_icon: 'envelope'
  - button_link: 'https://github.com/ksoltan'
    button_text: Github
    button_icon: 'github'
  - button_link: 'https://linkedin.com/in/ksoltan'
    button_text: LinkedIn
    button_icon: 'linkedin'
---
{% capture about_me %}
Hi there! I'm Katya, a senior at Olin College of Engineering graduating in May 2019. I chose to pursue a robotics degree to study systems and integration, learning about everything from prototyping and design to mechanical fabrication and programming. I am especially fascinated with algorithms and embedded systems.
My go-to tools are sticky notes, sketches, and programming. I strongly believe in user-oriented design and developing solutions that are appropriate for the people they will be used by and enjoy working directly with stakeholders. I also really enjoy communicating information, especially when technical and non-technical audiences and content mix.
If you have any feedback or questions, please get in touch!
{% endcapture %}
{% capture caption %}My work is strongly inspired by nature, where I love to spend time outside of work hiking and climbing, in awe of trees and clouds and mountains.
{% endcapture %}
{% include contact-modal.html %}
{% include image-left.html image_caption=caption project_buttons=page.project_buttons content=about_me %}
