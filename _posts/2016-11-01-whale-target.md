---
layout: inner
post_type: project
title: 'Whale Target'
date: 2016-11-01 00:00:00
categories: experience
tags: Design Fabrication Project-Management
featured_image: '/img/posts/whale_target/stage1Build.jpg'
button_icon: 'cog'
button_text: 'Coming Soon'
lead_text: 'A life-size target of the back of a whale for drone whale tagging research.'
secondary_text: 'The MDF frame, covered with StyroSpray-hardened fabric, measures 20 ft in length and 8 ft at its widest, an eight of an adult blue whale.'
---
{% capture project_description %}
Researchers studying whales will often put large satellite tags onto the whale's backs. The <a href="https://slate.com/human-interest/2016/09/what-whales-do-underwater-thanks-to-a-new-mounted-camera-video.html" target="_blank">current method</a> involves the researchers approaching the whale on a boat and using a long rod to slap the tag on. As you might expect, this system is dangerous for the scientists and disruptive to the whales.
The Olin Robotics Lab is working to use drones to autonomously land on the whale and press the tag onto their skin instead. To test the system, I built a life-size target of the top of a whale. The frame of plywood covered with fabric and hardened with StyroSpray measures 20ft long and 8ft at its widest, an eighth of an adult blue whale.
{% endcapture %}
{% include image-left.html content=project_description%}

<h1 class="section-title text-center">Process</h1>
{% include flex-slider.html slide_show=page.slide_show %}


{% capture caption_left %}
The <a href="http://www.3dmodels.ru/model/view/1155" target="_blank">3D rendering</a> of the whale was imported into Solidworks and used for measurements and proportions.
{% endcapture %}

{% capture caption_right %}
The final CAD of the whale target included 11 ribs supported by a spine and two side battens.
{% endcapture %}

{% include image-two.html image_left='/img/posts/whale_target/whaleSTL.png' image_caption_left=caption_left
image_right='/img/posts/whale_target/ribAssembly.png' image_caption_right=caption_right %}

{% include image-left-twothirds.html image='/img/posts/whale_target/stage1Build.jpg' caption='The first stage assembly of the whale was done to check that all parts fit together as expected, allowing me to move onto the next stage: the cover.' %}
