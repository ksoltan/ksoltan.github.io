---
layout: inner
post_type: project
title: 'RFID Fish Tagging Research'
date: 2016-07-01 00:00:00
categories: experience
tags: App-Development UX-Design Research
featured_image: '/img/posts/fish_tagging/fish_tags_logo.png'
project_link:
button_icon: 'flask'
button_text: 'Visit Project'
lead_text: 'Project in partnership with the Large Pelagics Research Center and the Pacific Islands Fisheries Group to develop a better way to report tagged fish.'
secondary_text: 'We designed the first prototype of a mobile platform, called HI (Hawaii) Tag, to create an incentive for fishermen to participate in local tagging projects and help fisheries make better-informed decisions about management and protection of marine ecosystems.'
project_buttons:
  - display_in_preview: true
    button_link: https://ieeexplore.ieee.org/document/7761023
    button_text: Technical Paper
    button_icon: 'file-pdf-o'
  - display_in_preview: false
    button_link: https://github.com/BluetoothFishTagging/FishTagsApplication
    button_text: Github repo
    button_icon: 'github'
gallery:
  - columns: 2
    content:
    - side: left
      image: /img/posts/fish_tagging/tagATiny.png
      caption: As of now, tens of thousands of fish are tagged, but only a small percentage are reported. One reason is due to the tedious process of catching and reporting itself.
    - side: left
      image: /img/posts/fish_tagging/paperTagging.jpg
      caption: Data collected using the conventional tagging method comes back on a paper covered in fish guts and blood by mail. It is manually entered into a database.
    - side: right
      image: /img/posts/fish_tagging/hitag.png
      caption: The HI tag uses a tiny RFID embedded in a conventional dart tag made from nylon and vinyl to automate reporting.
    - side: right
      image: /img/posts/fish_tagging/tagging.jpg
      caption: An applicator is used to insert a tag near the dorsal fin of the fish, which will hopefully be reported if the fish is caught again.
    - side: right
      image: /img/posts/fish_tagging/database.png
      caption: Our platform gathers more accurate and rich (photo) data and automatically uploads and organizes it in a database.
gallery2:
  - columns: 1
    content:
    - side: center
      image: /img/posts/fish_tagging/old_form.png
      caption: Version 1.0 used the minimum number of screens (tag information and personal information) a fisherman would need to complete. This format turned out to be very hard to work with on a rocking boat.
    - side: center
      video_url: https://www.youtube.com/embed/TdmB_GOY5iY
      caption: A documentation of the logo design process. The spots on the fish are the Hawaii islands, while the G is flipped to resemble a fish hook.
gallery3:
  - columns: 2
    content:
    - side: left
      image: /img/posts/fish_tagging/pifgBoat.jpg
      caption: Field testing was performed off of Kona in Hawaii where the first of HI Tag RFID tags were deployed.
    - side: right
      image: /img/posts/fish_tagging/cap_john_in_action.JPG
      caption: Our app was put through its first trial with PIFG fishermen and LPRC researchers.
  - columns: 1
    size: full
    content:
    - side: center
      image: /img/posts/fish_tagging/process.png
      caption: Before tagging, the tag was scanned to pre-load some data (tag ID, location) to save time. When the fish was caught, its eye was covered with a cloth to keep it calm. Then, its fork length was measured and a photo was taken. Finally, the tag was inserted and the fish released. The data was uploaded and available as soon as the boat returned to land.
gallery4:
  - columns: 1
    content:
    - side: center
      image: /img/posts/fish_tagging/final_screens.png
      caption: Version 2.0 sported a step-by-step process with large screens. The auto-filled in data was hidden, sacrificing user control which we had thought important (before we tried it ourselves).
---
{% capture project_description %}
Commercial and recreational fishing are regulated to protect marine environments and establish a safe and sustainable fish economy. Fish tagging programs help inform these decisions by giving an idea of how fish populations move and grow.
We worked with the Large Pelagic Research Center and the Pacific Islands Fisheries Group to develop a better fish tagging process that incorporates RFID technology with an mobile app called HI (Hawaii) Tag. It encourages fishermen participation to gather larger, richer sets of data which researchers can easily access and work with.
I worked on the workflow inside of the Android app, encompassing the UI and UX. We presented our work at IEEE/MTS OCEANS Monterey 2016.
{% endcapture %}
{% include image-left.html image='/img/posts/fish_tagging/fish_tags_logo.png' content=project_description project_buttons=page.project_buttons %}

<h1 class="section-title text-center">Challenge</h1>
{% include gallery.html gallery=page.gallery %}

<h1 class="section-title text-center">Prototype 1.0</h1>
{% include gallery.html gallery=page.gallery2 %}

<h1 class="section-title text-center">Testing</h1>
{% include gallery.html gallery=page.gallery3 %}

<h1 class="section-title text-center">Prototype 2.0</h1>
{% include gallery.html gallery=page.gallery4 %}
