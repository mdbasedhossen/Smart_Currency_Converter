📌 WordPress Plugin Developer Task
Dynamic Currency Converter Plugin
Candidate: [Md Based Hossen]
Position: WordPress Plugin Developer
Company: Softvence Delta
📖 Overview

This project is a dynamic currency converter plugin for WordPress that allows users to convert currencies in real time with a smooth, no-page-reload experience.
The plugin is designed to follow modern WordPress standards, ensuring performance, scalability, and a clean user experience similar to platforms like Wise.

🎯 Objective

The objective of this task is to demonstrate:

Real-time data handling using AJAX

Clean frontend UX without page reload

Robust backend logic with API failover

Scalable architecture with multi-provider support

Admin-controlled configuration

⚙️ Core Features
1️⃣ Currency Selection

“From Currency” and “To Currency” dropdowns

Supports all major world currencies

Dynamic population of currency options

2️⃣ Amount Input

Numeric input field for entering amount

Conversion updates automatically when:

Amount changes

From currency changes

To currency changes

❌ No submit button

❌ No page reload

3️⃣ Live Conversion (AJAX Based)

Uses AJAX for fetching exchange rates

Instant recalculation on any input change

Smooth user experience similar to Wise.com

Fully asynchronous (non-blocking UI)

4️⃣ API Key Failover System

Admin can add multiple API keys

Automatic switching when:

API rate limit is exceeded

API error occurs

Ensures uninterrupted conversion service

5️⃣ Multi-Provider Support

The plugin supports multiple exchange rate providers:

ExchangeRate API

Open Exchange Rates

Fixer

CurrencyLayer

✔ Admin can enable or disable providers
✔ Providers are tried sequentially (failover logic)
✔ The first valid response is used automatically

🛠️ Admin Panel Features

Enable / disable exchange rate providers

Add multiple API keys per provider

Centralized configuration for easy management

No code editing required for configuration changes

🧩 Technical Implementation
Frontend

HTML + CSS for UI

JavaScript for:

Live input detection

AJAX requests

Instant UI updates

Backend (WordPress)

PHP for:

AJAX handlers

API request processing

Failover logic

Uses WordPress functions:

wp_ajax_*

wp_remote_get

wp_localize_script

update_option() / get_option()

🚀 Performance & UX

No page reloads

Minimal API calls

Fast response handling

Clean and user-friendly interface

Scalable structure for future extensions

🔐 Reliability & Error Handling

Graceful handling of API failures

Automatic fallback to alternative providers

Secure handling of API keys via WordPress options

Prevents user-visible errors whenever possible
