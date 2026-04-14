---
layout: page
title: Services
permalink: /services/
nav: true
nav_order: 9
hero_image: /assets/img/art_2.jpg
hero_image_header: About My Services
top_specialties: [Anxiety, Depression, Coping Skills]
expertise: [ADHD, Autism, Bipolar Disorder, Body Image, Caregivers, Chronic Illness, Chronic Pain, Divorce, Emotional Disturbance, Family Conflict, Grief, LGBTQ+, Life Transitions, Mood Disorders, Open Relationships Non-Monogamy, Peer Relationships, Relationship Issues, School Issues, Self Esteem, Stress, Transgender, Women's Issues]
treatment_approach: [Art Therapy, Attachment-based, Cognitive Behavioral (CBT), Dance Movement Therapy, Eclectic, Emotionally Focused, Expressive Arts, Feminist, Humanistic, Mindfulness-Based (MBCT), Person-Centered, Relational, Somatic, Strength-Based, Trauma Focused]
---

<h3>Top Specialties</h3>
<div>
<ul>
{% for specialty in page.top_specialties %}
<li>{{specialty}}</li>
{% endfor %}
</ul>
</div>

<h3>Expertise</h3>
<div class="expertise-container">
  <ul>
    {% assign half_size = page.expertise.size | divided_by: 2.0 | ceil %}
    {% for exp in page.expertise limit: half_size %}
    <li>{{exp}}</li>
    {% endfor %}
  </ul>
</div>
<div class="expertise-container">
  <ul>
    {% assign half_size = page.expertise.size | divided_by: 2.0 | ceil %}
    {% for exp in page.expertise offset: half_size %}
    <li>{{exp}}</li>
    {% endfor %}
  </ul>
</div>

<h3>Client Focus</h3>
<div>
<ul>
  <li>Adults</li>
  <li>Individual one-on-one therapy</li>
  <li>Bisexual Allied, Gay Allied, Immuno-disorders, Lesbian Allied, Non-Binary Allied, Queer Allied, Transgender Allied</li>
</ul>
</div>

<h3>Treatment Approach</h3>
<div class="expertise-container">
  <ul>
    {% assign half_size = page.treatment_approach.size | divided_by: 2.0 | ceil %}
    {% for approach in page.treatment_approach limit: half_size %}
    <li>{{ approach }}</li>
    {% endfor %}
  </ul>
</div>
<div class="expertise-container">
  <ul>
    {% assign half_size = page.treatment_approach.size | divided_by: 2.0 | ceil %}
    {% for approach in page.treatment_approach offset: half_size %}
    <li>{{ approach }}</li>
    {% endfor %}
  </ul>
</div>

<h3>Qualifications</h3>
<div>
<ul>
  <li>Attended Lesley University</li>
  <li>Certificate from American Dance/ Movement Therapy Association (BC-DMT-1291 / 2015)</li>
  <li>Licensed by State of Massachusetts / 10238</li>
</ul>
</div>