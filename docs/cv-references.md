# CV references

Use existing person and organisation identities, with a CV-specific reference view.
The featured identity card is not used or changed.

```yaml
# data/people/example-referee.yaml
name: John Smith
job_title: Computing Lecturer
organisation_id: example-university
links:
  - url: mailto:john.smith@example.org
  - url: tel:+447555555555
    label: "+44 7555 555555"
location:
  address: |-
    Department of Computing
    Example Building
  city: Somewhere
  region: Example Region
  postalCode: EX1 2AB
  countryCode: GB
```

```yaml
# data/organisations/example-university.yaml
name: University of Somewhere
url: https://university.example.org/
```

```yaml
# data/cv.yaml
references:
  academic:
    person_id: example-referee
    relationship: Dissertation supervisor
    reference: An optional **written recommendation**.
```

```go-html-template
{{< cv/section id="references" title="References" columns="3" >}}
{{< cv/reference id="academic" >}}
{{< /cv/section >}}
```

Reference IDs determine selection and order. The referenced identity must be a
person with a name. An optional organisation_id must resolve to an organisation
with a name. All other fields are optional. Contact links retain their authored
order and labels; without a label, email and telephone links display their URI
contact value. A person's canonical url appears before the links, without repeating
that exact URL. Recommendations support Markdown; other fields are plain text.

HTML uses a CV entry h-card with p-name, p-job-title, p-org, u-email, p-tel and
structured address properties. A country code is displayed as text, not incorrectly
marked as a country name. Decorative icons have hidden contact-type labels.
h-resume has no standard referee relationship; these cards are not p-contact.

Real referee identities, CV reference data and employer-facing compositions belong
in private/local build inputs. Do not commit their contact details to a public
repository. Private generated HTML, JSON and PDF must also remain unpublished.
