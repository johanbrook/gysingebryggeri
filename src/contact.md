---
title: Kontakta oss
url: /kontakt/
layout: layouts/page.njk
menu:
    visible: true
    title: Kontakt
    order: 6
templateEngine: njk,md
map_url: https://maps.app.goo.gl/QDxEhxQFFAyqDSP46
---

<address>
    <dl>
        <dt>Email</dt>
        <dd><a href="mailto:{{ meta.email }}">{{ meta.email }}</a></dd>

        <dt>Adress</dt>
        <dd>
            <a href="{{ map_url }}">{{ meta.address.street }}<br />{{ meta.address.postal_code }}, {{ meta.address.city }}</a>
        </dd>

        <dt>Sociala medier</dt>
        <dd><a href="{{ meta.facebook }}">Facebook</a> · <a href="{{ meta.instagram }}">Instagram</a>
         · <a href="{{ meta.facebook_club }}">Facebook för Bryggerisällskapet</a></dd>
    </dl>
</address>

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d209834.75923410355!2d16.7280631404652!3d60.320009116265865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4660a7042ad86d89%3A0x745790b85971a7bc!2sK%C3%B6lnav%C3%A4gen%2027%2C%20811%2097%20Gysinge!5e0!3m2!1sen!2sse!4v1713292335632!5m2!1sen!2sse" width="100%" height="450" style="border:0;border-radius:6px;overflow:hidden;margin-top:1rlh" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
