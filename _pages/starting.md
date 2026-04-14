---
layout: page
title: Starting
permalink: /starting/
nav: true
nav_order: 10
hero_image: /assets/img/art_3.jpg
hero_image_header: Getting Started with Me
payment_methods: [American Express, Cash, Check, Discover, Health Savings Account, Mastercard, Paypal, Venmo, Visa, Zelle]
insurance: [Blue Cross, Blue Shield, BlueCross and BlueShield, Harvard Pilgrim, Tufts]
---

<h3>Fees</h3>
<ul>
<li>Individual Sessions $175</li>
<li>Sliding scale: apply if you may be eligible</li>
</ul>

<h3>Payment Methods</h3>
<ul>
  {% for method in page.payment_methods %}
  <li>{{ method }}</li>
  {% endfor %}
</ul>

<h3>Insurance</h3>
<ul>
  {% for plan in page.insurance %}
  <li>{{ plan }}</li>
  {% endfor %}
</ul>