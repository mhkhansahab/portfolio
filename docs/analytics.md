# Analytics Tracking Documentation

This document lists all the analytics events being tracked in the portfolio.

## Automatic Tracking (Initialized Globally)

### Scroll Depth
Tracks how far users scroll down the page.
- **Event:** `scroll_depth`
- **Parameters:** `percentage` (25, 50, 75, 90)
- **Trigger:** When user scrolls past each threshold

### Time on Page
Tracks how long users spend on the portfolio.
- **Event:** `time_on_page`
- **Parameters:** `seconds` (30, 60, 120, 300)
- **Trigger:** At each time interval

### Section Visibility
Tracks which sections users view (using Intersection Observer).
- **Event:** `section_view`
- **Parameters:** `section_id`
- **Sections Tracked:** about, services, experience, projects, testimonials, process, faq, contact

---

## Interaction Events

### CTA Button Click
Tracks clicks on primary/secondary CTA buttons (Resume/CV, Get in touch).
- **Event:** `cta_click`
- **Parameters:** `label`, `type`, `href`
- **Component:** `PrimaryActions`

### Social Link Click
Tracks clicks on social media links.
- **Event:** `social_click`
- **Parameters:** `platform`, `href`
- **Component:** `SocialLinksRow`

### Project Click
Tracks clicks on project cards.
- **Event:** `project_click`
- **Parameters:** `project_title`, `project_href`, `tech_stack`
- **Component:** `ProjectsSection`

### Company View
Tracks clicks on company names in experience section.
- **Event:** `company_view`
- **Parameters:** `company`, `role`, `period`
- **Component:** `ExperienceSection`

### Tech Stack Click
Tracks clicks on technology tags in experience section.
- **Event:** `tech_stack_click`
- **Parameters:** `tech`, `company`
- **Component:** `ExperienceSection`

### Skill Click
Tracks clicks on skill badges in the hero section.
- **Event:** `skill_click`
- **Parameters:** `skill_name`, `tier`, `icon`
- **Component:** `TechBadge`

### Contact Initiate
Tracks clicks on the "Book a Meeting" CTA.
- **Event:** `contact_initiate`
- **Parameters:** `action`, `label`, `href`
- **Component:** `ContactCTA`

### Testimonial View
Tracks when users hover over testimonial cards.
- **Event:** `testimonial_view`
- **Parameters:** `author_name`, `author_role`
- **Component:** `TestimonialsSection`

### LinkedIn Recommendations Click
Tracks clicks on "View on LinkedIn" link.
- **Event:** `linkedin_recommendations_click`
- **Parameters:** `href`
- **Component:** `TestimonialsSection`

### FAQ Expand
Tracks when users expand FAQ items.
- **Event:** `faq_expand`
- **Parameters:** `question`
- **Component:** `FaqSection`

---

## Viewing Analytics in GA4

### Real-time View
1. Go to Google Analytics → Reports → Realtime
2. See live events as they happen

### Event Analysis
1. Go to Explore → Free-form exploration
2. Add "Event name" as dimension
3. Add event parameters as secondary dimensions
4. Filter by specific event types

### Custom Reports
Create custom reports for:
- Most clicked projects
- Most viewed skills
- FAQ engagement rate
- Scroll depth distribution
- Average time on page

---

## Environment Setup

Make sure `GA4_Measurement_ID` is set in:
- `.env.local` for local development
- Vercel Environment Variables for production

Make sure `NEXT_PUBLIC_CLARITY_PROJECT_ID` is set in:
- `.env.local` for local development
- Vercel Environment Variables for production
