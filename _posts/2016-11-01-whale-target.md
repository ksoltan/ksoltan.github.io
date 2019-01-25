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
gallery:
- columns: 2
  content:
  - side: left
    image: /img/posts/whale_target/whaleSTL.png
    caption: The <a href="http://www.3dmodels.ru/model/view/1155" target="_blank"> 3D rendering</a> of the whale was imported into Solidworks and used for measurements and proportions.
  - side: right
    image: /img/posts/whale_target/ribAssembly.png
    caption: The final CAD of the whale target included 11 ribs supported by a spine and two side battens.
- columns: 1
  size: full
  content:
  - side: center
    image: /img/posts/whale_target/stage1Build.jpg
    caption: All of the ribs were cut using a sabre saw from MDF. The spine was divided into three parts that were fit together with matching pockets, cut using a Shopbot.
- columns: 2
  content:
  - side: left
    image: /img/posts/whale_target/styrosprayTest.jpg
    caption: The StyroSpray 1000 hardener was tested on fabric stretched across a piece of wood. The result was suitably rigid.
  - side: right
    image: /img/posts/whale_target/galaxy.jpg
    caption: Mixing the two parts of the StyroSpray can create awesome designs, especially with a little bit of color correction.
  - side: right
    image: /img/posts/whale_target/stage2BuildProgress2.jpg
    caption: The battens were mounted along the side of the ribs and had to be cut part way through because the curvature was too tight.
  - side: left
    image: /img/posts/whale_target/stage3fabricWithSprayBegin.jpg
    caption: Fabric was stretched and stapled between each set of ribs, and StyroSpray was painted onto the fabric's surface.
  - side: right
    image: /img/posts/whale_target/stage4OneLayer.jpg
    caption: One coat of StyroSpray covers the whale's body.
  - side: left
    image: /img/posts/whale_target/stage4Tunnel.jpg
    caption: The fabric began to sag under the weight of the Styrospray. Webbing was woven between the ribs, while the ribs themselves were braced against each other with wood and metal brackets.
  - side: right
    image: /img/posts/whale_target/stage4Painting.jpg
    caption: Painting in action!
  - side: right
    image: /img/posts/whale_target/stage6DroneOne.jpg
    caption: A successful drone landing!
  - side: left
    image: /img/posts/whale_target/stage6DroneTwo.jpg
    caption: The scale of the whale target is enormous compared to the small drone.
  - side: right
    image: /img/posts/whale_target/stage5WithScaleLighten.jpg
    caption: The whale was placed outside, waiting to weather a New England winter.
---
{% capture project_description %}
Researchers studying whales will often put large satellite tags onto the whale's backs. The <a href="https://slate.com/human-interest/2016/09/what-whales-do-underwater-thanks-to-a-new-mounted-camera-video.html" target="_blank">current method</a> involves the researchers approaching the whale on a boat and using a long rod to slap the tag on.
As you might expect, this system is dangerous for the scientists and disruptive to the whales. The Olin Robotics Lab is working to use drones to autonomously land on the whale and press the tag onto their skin instead.
To test the system, I built a life-size target of the top of the whale which breaches the surface and is most commonly targeted. At 20 ft long, it is an eighth of an adult blue whale.
{% endcapture %}
{% include image-left.html content=project_description%}

<h1 class="section-title text-center">Process</h1>
{% include gallery.html gallery=page.gallery %}
