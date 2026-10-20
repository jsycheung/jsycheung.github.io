---
layout: page
title: Services
permalink: /services/
nav: true
nav_order: 9
hero_image: /assets/img/art_2.jpg
hero_image_header: About My Services
expertise: [LGBTQIA+, Anxiety, Depression, Coping Skills, Autism, Bipolar Disorder, Body Image, Caregivers, Chronic Illness/ Pain, Divorce, Family Conflict, Grief, Life Transitions, Mood Disorders, Polyamory/ Non-Monogamy, Peer Relationships, Relationship Issues, School Issues, Self Esteem, Stress, Women's Issues]
treatment_approach: [Art Therapy, Attachment-based, Cognitive Behavioral (CBT), Dance Movement Therapy, Eclectic, Emotionally Focused, Expressive Arts, Feminist, Humanistic, Mindfulness-Based (MBCT), Person-Centered, Relational, Somatic, Strength-Based, Trauma Focused]
---
<h5>I offer both in-person and telehealth sessions. I work with adults in individual one-on-one therapy and utilize an eclectic approach that incorporates a mix of the following
modalities based off your need and comfort level.</h5>
<div style="height: 1.5rem;"></div>
<h4>My areas of specialization:</h4>
<div class="expertise-container">
  <ul>
    {% assign half_size = page.expertise.size | divided_by: 2.0 | ceil %}
    {% for exp in page.expertise limit: half_size %}
    <li>{{ exp }}</li>
    {% endfor %}
  </ul>
</div>
<div class="expertise-container">
  <ul>
    {% assign half_size = page.expertise.size | divided_by: 2.0 | ceil %}
    {% for exp in page.expertise offset: half_size %}
    <li>{{ exp }}</li>
    {% endfor %}
  </ul>
</div>

<div style="height: 1.5rem;"></div>

<h4>Treatment modalities:</h4>
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

