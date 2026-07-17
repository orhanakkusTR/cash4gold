# Owner Actions — items that can't be fixed in code

These require the business owner to act in an external tool or provide
information we must not invent. Tracked here so they aren't lost.

## Open

### GSC-1 · Manual re-indexing of legacy WordPress URLs (audit P2-26)
Google Search Console still surfaces stale **2017-dated legacy WordPress
content** for a handful of critical old URLs that have already been
redirected/removed in this rebuild. Search engines will drop these on their
own eventually, but a manual nudge is faster.

**Action (owner, in Google Search Console):** URL Inspection → paste each
critical old WP URL → **Request Indexing**, so the stale entry is recrawled,
sees the redirect/410, and is dropped from the index. One-time task; not a
code change.

### EEAT-1 · Founding year / company history (audit P2-24, P1-8 adjacent)
Founding date is stated inconsistently across the site (2010 / 2011 /
"a decade"). We must not guess. **Action (owner):** confirm the single correct
founding year so we can set one consistent `foundingDate` everywhere. Until
then the animated "years in business" stat and any founding-year copy stay
generic.

### EEAT-2 · Named appraisers / credentials (audit P1-8)
Real Google reviews name staff ("Ethan", "Mr. Sam"). A "Meet your appraisers"
section is the biggest E-E-A-T win, but names/photos/credentials must be
owner-verified, never fabricated. **Action (owner):** provide appraiser names,
photos, years of experience, and any real certifications to publish.

### PERMIT-1 · Manassas precious-metals dealer permit number (P1-9)
Chantilly (PMG26-037), Annandale (PMG26-038), and Vienna/Tysons (PMG26-036)
permit numbers are published. **Action (owner):** provide the Manassas permit
number so its "Licensed & Regulated" block can be added and the sitewide
"all four locations licensed" trust line can ship.
