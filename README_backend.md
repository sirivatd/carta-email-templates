# Email Templating Backend

***Note**: This project accompanies the overall description
of the email-templating take-home assignment for FE.*

## Running the server

The backend runs within Docker, which can be installed here:

- Mac: https://docs.docker.com/docker-for-mac/install/
- Windows: https://docs.docker.com/docker-for-windows/install/
- Linux: https://docs.docker.com/engine/install/ubuntu/

No other dependencies (e.g. Python) are required.

Once Docker is installed, the server can be built and started:

```
make build
make run
```
 
 ## API Documentation

### 1. Listing Files
`GET /templates`

**Description**: Lists all files stored.

**Request body**: None

**200 Response body**: List of strings

```
[
	"registration-confirmation.tmp",
	"exercise-approval.tmp",
	"tax-documents-ready.tmp"
]
```

You can assume all responses are of status 200.

### 2. Template Fetching
`GET /templates/<name>`

**Description**: Fetches a template at the given name.

**Request body**: None

**200 Response body**: Object of the template string

```
{
	"content": "<h1>This is a template for {{ user.name }}"

}
```

**404 Response body**: Object with user-error message

```
{
	"error": "Template does not exist"
}
```

You can assume all responses are of status 200 or 404.

### 3. Template Storing
`PUT /templates/<name>`

**Description**: Stores a template at the given name.

**Request body**: Object of template string to store.
```
{
	"content": "<h1>This is a template for {{ user.name }}"
}
```

**200 Response body**: Empty object
```
{}
```

**404 Response body**: Object with user-error message
```
{
	"error": "Template does not exist"
}
```

You can assume all responses are of status 200 or 404.

### 4. Template Preview Rendering
`POST /render`

**Description**: Renders a preview of the given template with template variables.

**Request body**: Object of template string and template variables object (so-called context)
```
{
	"template": "<h1>This is a template for {{ user.name }}",
	"context": {"user": {"name": "Tagg"}}
}
```

**200 Response body**: Object with rendered body
```
{
	"body": "<h1>This is a template for Tagg</h1>"
}
```

**400 Response body**: Object with user-error message
```
{
	"error": "Missing template variable"
}
```

You can assume all responses are of status 200 or 400.
