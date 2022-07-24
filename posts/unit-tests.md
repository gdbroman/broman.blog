---
title: 3 Rules for Effective Unit Testing
date: 2022-07-24
isNewsletter: true
---

Do you hate unit tests?

Look, I'm not a TDD-er.

But perhaps you're overthinking.

We want our code to WORK.

We want it to KEEP WORKING.

And we want to develop FAST with CONFIDENCE.

It's as easy as 1-2-3.

### Rule 1/ Make it FAIL before you make it pass.

To eliminate false positives.

### Rule 2/ Test with FIXED INPUT.

Don't use named constants from the model code.

If you change the model code a test should complain.

### Rule 3/ Don't touch the scary outside world.

Mock network calls, local files, your girlfriend, etc.

---

Follow these rules and testing is trivial.
