---
layout: page
title: Starting
permalink: /starting/
nav: true
nav_order: 10
hero_image: /assets/img/art_3.jpg
hero_image_header: Getting Started with Me
payment_methods: [Credit Card, Cash, Check, Health Savings Account, Paypal, Venmo, Zelle]
insurance: [BlueCross and BlueShield, Aetna]
---
<h5>Please take a moment to review the following information.</h5>
<div style="height: 1.5rem;"></div>
<h4>Consultation</h4>
I offer a free 15-minute phone consultation, so you can get
a sense of whether we are a good match. It is also an
opportunity for me to learn more about your needs and
decide whether or not I will be able to help.
<h4>Insurance</h4>
I am a contracted provider with the following insurances: {{ page.insurance | join: ', ' }}.

For clients with other insurance plans I can provide all the
necessary paperwork for reimbursement with a qualifying
plan. Please call your insurance provider to determine
coverage for out-of-network behavioral health providers.
<h4>Payment</h4>
I accept the following forms of payment at the time of
service:
<ul>
  {% for method in page.payment_methods %}
  <li>{{ method }}</li>
  {% endfor %}
</ul>
<div style="height: 1.5rem;"></div>
<h4>Rates</h4>
<p style="margin: 0;">Initial Intake: <span>$</span>200</p>
<p style="margin: 0;">Individual Sessions: <span>$</span>175</p>
For those facing financial difficulties, a sliding scale rate is available upon request.

<h4>Cancellation Policy</h4>
To ensure that both your treatment progress and my schedule
are respected, please notify me within 24 hours of your
appointment if you need to cancel or reschedule. First-time
cancellations or missed appointments will not incur a fee.
However, a fee will apply for subsequent late cancellations or
no-shows. If you experience an emergency, please contact me
promptly to discuss the situation. Cancellations due to severe
weather or illness will be handled with understanding and
mutual respect for safety.

<h4>Good Faith Estimate</h4>
You have the right to receive a “Good Faith Estimate” explaining
how much your medical and mental health care will cost.
Under Section 2799B-6 of the Public Health Service Act, health
care providers and health care facilities are required to inform
individuals who are not enrolled in a plan or coverage or a
Federal health care program, or not seeking to file a claim with
their plan or coverage both orally and in writing of their ability,
upon request or at the time of scheduling health care items and
services, to receive a “Good Faith Estimate” of expected
charges.
Under the law, health care providers need to give patients who
don’t have insurance or who are not using insurance an
estimate of the expected charges for medical services, including
psychotherapy services.
You have the right to receive a Good Faith Estimate for the total
expected cost of any non-emergency items or services. You can
ask your healthcare provider, and any other provider you
choose, for a Good Faith Estimate before you schedule a
service. If you receive a bill that is at least $400 more than your
Good Faith Estimate, you can dispute the bill.
Make sure to save a copy or picture of your Good Faith
Estimate.
For questions or more information about your right to a Good
Faith Estimate, visitwww.cms.gov/nosurprises or call (800)
368-1019.