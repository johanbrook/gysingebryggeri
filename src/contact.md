---
title: Kontakta oss
url: /kontakt/
layout: layouts/page.njk
menu:
    visible: true
    title: Kontakt
    order: 9
templateEngine: njk,md
---

Lol.

***

<address>
    <dl>
        <dt>Email</dt>
        <dd><a href="mailto:{{ meta.email }}">{{ meta.email }}</a></dd>

        <dt>Adress</dt>
        <dd>{{ meta.address.street }}<br />{{ meta.address.postal_code }}, {{ meta.address.city }}</dd>

        <dt>Sociala medier</dt>
        <dd><a href="{{ meta.facebook }}">Facebook</a> · <a href="{{ meta.instagram }}">Instagram</a></dd>
    </dl>
</address>
