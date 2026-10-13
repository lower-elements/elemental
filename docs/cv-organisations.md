# CV organisation identities

CV employers, volunteer organisations, affiliations and educational institutions
use the same identity catalogue as identity cards: data/organisations/<id>.yaml.
There is no CV-specific organisation catalogue or fallback to cv.organizations.

```yaml
# data/organisations/example-university.yaml
name: University of Somewhere
url: https://university.example.org/
```

CV data retains its existing association field names:

- work, volunteer and affiliations entries use organization_id.
- education entries use institution_id.
- referee person identities use organisation_id.

Each value references an ID in data/organisations. Keep organisation names and
URLs here, rather than duplicating them in data/cv.yaml. Names are required;
URLs are optional. IDs remain subject to the identity resolver's missing-ID and
person/organisation ambiguity checks.

The identity/resolve-organisation.html partial accepts site, id and optional
position, delegates to identity/resolve-id.html, and requires an organisation
identity with a name. CV rendering models retain their existing keys; this
resolution change does not alter HTML, Microformats or JSON Resume field names.

Shared public organisations belong in the public module. Private overlays inherit
them and should only add organisations or overrides that are genuinely private.
Private person identities and CV reference relationships remain private.
