# @yankeguo/coding-node-client

![npm version](https://img.shields.io/npm/v/@yankeguo/coding-node-client.svg)
![License](https://img.shields.io/npm/l/@yankeguo/coding-node-client.svg)

An Axios based Node.js client for CODING.NET OpenAPI, generated from the official OpenAPI specification from [CODING.NET OpenAPI Documentation](https://coding.net/help/openapi#/).

## Features

- 🚀 **Complete API Coverage**: Supports all CODING.NET OpenAPI endpoints
- 📝 **TypeScript Support**: Full TypeScript definitions included
- 🔧 **Axios-based**: Built on the popular Axios HTTP client
- 🔄 **Auto-generated**: Generated from official OpenAPI specification
- 📚 **Comprehensive Documentation**: Extensive API documentation included

## Installation

```bash
npm install @yankeguo/coding-node-client
```

## Quick Start

```typescript
import { Configuration, DefaultApi } from "@yankeguo/coding-node-client";

// Create configuration
const config = new Configuration({
  basePath: "https://e.coding.net/open-api",
  accessToken: "your-access-token",
});

// Create API instance
const api = new DefaultApi(config);

// Example: Get current user info
async function getCurrentUser() {
  try {
    const response = await api.describeCodingCurrentUser(
      "Bearer your-token",
      "DescribeCodingCurrentUser",
    );
    console.log(response.data);
  } catch (error) {
    console.error("Error:", error);
  }
}
```

## Configuration Options

The `Configuration` class supports the following options:

```typescript
interface ConfigurationParameters {
  apiKey?:
    | string
    | Promise<string>
    | ((name: string) => string)
    | ((name: string) => Promise<string>);
  username?: string;
  password?: string;
  accessToken?:
    | string
    | Promise<string>
    | ((name?: string, scopes?: string[]) => string)
    | ((name?: string, scopes?: string[]) => Promise<string>);
  basePath?: string;
  serverIndex?: number;
  baseOptions?: any;
  formDataCtor?: new () => any;
}
```

### Authentication

The client supports multiple authentication methods:

1. **Access Token** (Recommended):

```typescript
const config = new Configuration({
  basePath: "https://your-team.coding.net",
  accessToken: "your-access-token",
});
```

2. **API Key**:

```typescript
const config = new Configuration({
  basePath: "https://your-team.coding.net",
  apiKey: "your-api-key",
});
```

3. **Username/Password**:

```typescript
const config = new Configuration({
  basePath: "https://your-team.coding.net",
  username: "your-username",
  password: "your-password",
});
```

## Available APIs

This client provides three main API classes:

### 1. DefaultApi

The main API class containing most CODING.NET functionality:

```typescript
import { DefaultApi } from "@yankeguo/coding-node-client";

const defaultApi = new DefaultApi(config);
```

**Key features include:**

- Project management
- Repository operations
- Issue tracking
- Continuous Integration/Deployment
- Artifact management
- User and team management
- And much more...

### 2. ServiceHookApi

For managing webhooks and service hooks:

```typescript
import { ServiceHookApi } from "@yankeguo/coding-node-client";

const serviceHookApi = new ServiceHookApi(config);

// Example: Create a service hook
const hook = await serviceHookApi.createServiceHook(
  "Bearer your-token",
  "CreateServiceHook",
  {
    ProjectName: "your-project",
    HookUrl: "https://your-webhook-url.com",
    HookEvents: ["push", "merge_request"],
  },
);
```

### 3. WikiApi

For wiki operations:

```typescript
import { WikiApi } from "@yankeguo/coding-node-client";

const wikiApi = new WikiApi(config);

// Example: Get wiki list
const wikis = await wikiApi.describeWikiList(
  "Bearer your-token",
  "DescribeWikiList",
  { ProjectName: "your-project" },
);
```

## Common Use Cases

### 1. Project Management

```typescript
// Get all projects
const projects = await api.describeCodingProjects(
  "Bearer your-token",
  "DescribeCodingProjects",
  { PageSize: 20 },
);

// Create a new project
const newProject = await api.createCodingProject(
  "Bearer your-token",
  "CreateCodingProject",
  {
    ProjectName: "my-new-project",
    ProjectDisplayName: "My New Project",
    ProjectDescription: "A sample project",
  },
);
```

### 2. Repository Operations

```typescript
// Get repository information
const repo = await api.describeGitDepot(
  "Bearer your-token",
  "DescribeGitDepot",
  {
    ProjectName: "your-project",
    DepotName: "your-repo",
  },
);

// Create a new branch
await api.createGitBranch("Bearer your-token", "CreateGitBranch", {
  ProjectName: "your-project",
  DepotName: "your-repo",
  BranchName: "feature/new-feature",
  LastCommitSha: "base-commit-sha",
});
```

### 3. Issue Management

```typescript
// List issues
const issues = await api.describeIssueList(
  "Bearer your-token",
  "DescribeIssueList",
  {
    ProjectName: "your-project",
    PageSize: 20,
  },
);

// Create a new issue
const issue = await api.createIssue("Bearer your-token", "CreateIssue", {
  ProjectName: "your-project",
  Type: "DEFECT",
  Name: "Bug Report",
  Description: "Description of the bug",
});
```

### 4. CI/CD Operations

```typescript
// Trigger a build
const build = await api.triggerCodingCIBuild(
  "Bearer your-token",
  "TriggerCodingCIBuild",
  {
    ProjectName: "your-project",
    JobName: "your-job",
    Ref: "master",
  },
);

// Get build status
const buildInfo = await api.describeCodingCIBuild(
  "Bearer your-token",
  "DescribeCodingCIBuild",
  {
    ProjectName: "your-project",
    BuildId: build.data.Response.Data.BuildId,
  },
);
```

## Error Handling

```typescript
import { AxiosError } from "axios";

try {
  const response = await api.someMethod(/* parameters */);
  console.log(response.data);
} catch (error) {
  if (error instanceof AxiosError) {
    console.error("HTTP Error:", error.response?.status);
    console.error("Error Data:", error.response?.data);
  } else {
    console.error("Unknown Error:", error);
  }
}
```

## TypeScript Support

This package includes comprehensive TypeScript definitions. All request/response types are fully typed:

```typescript
import type {
  CreateIssueRequest,
  CreateIssue200Response,
  Configuration,
} from "@yankeguo/coding-node-client";

const issueRequest: CreateIssueRequest = {
  ProjectName: "my-project",
  Type: "DEFECT",
  Name: "Bug title",
};

const response: CreateIssue200Response = await api.createIssue(
  "Bearer token",
  "CreateIssue",
  issueRequest,
);
```

## API Documentation

Detailed API documentation is available in the `docs/` directory:

- [`DefaultApi.md`](./docs/DefaultApi.md) - Main API documentation
- [`ServiceHookApi.md`](./docs/ServiceHookApi.md) - Service hooks API
- [`WikiApi.md`](./docs/WikiApi.md) - Wiki API

## Rate Limiting

CODING.NET API has rate limiting. Make sure to handle rate limit responses appropriately:

```typescript
import { setTimeout } from "timers/promises";

async function apiCallWithRetry(apiCall: () => Promise<any>, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await apiCall();
    } catch (error) {
      if (error instanceof AxiosError && error.response?.status === 429) {
        const retryAfter = error.response.headers["retry-after"] || 60;
        console.log(`Rate limited. Retrying after ${retryAfter} seconds...`);
        await setTimeout(retryAfter * 1000);
      } else {
        throw error;
      }
    }
  }
  throw new Error("Max retries exceeded");
}
```

## OpenAPI Specification Patch

This package is auto-generated from the official CODING.NET OpenAPI specification with a necessary patch applied.

### Required Patch

The official OpenAPI specification contains issues that need to be corrected before code generation:

1. Replace all `"type": "uint64"` with `"type": "integer"`:
   ```diff
   - "type": "uint64"
   + "type": "integer"
   ```
2. Remove `Authorization` header and `Action` query parameters from all endpoint parameters.
3. Clear all `required` arrays in `requestBody.content["application/json"].schema` to make request body fields optional.
4. Add authentication support to all endpoints by:
   - Adding `securitySchemes` to the `components` section with `BasicAuth`, `BearerAuth`, and `ApiKeyAuth` schemes
   - Adding `security` arrays to all path operations to support multiple authentication methods

## Contributing

This package is auto-generated from the official CODING.NET OpenAPI specification with the above patch applied.

If you find issues with the API client:

1. Check if it's an issue with the OpenAPI specification
2. Report issues to the CODING.NET team if it's a specification problem
3. Report issues to this repository if it's a client generation problem

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Links

- [CODING.NET Official Website](https://coding.net)
- [CODING.NET OpenAPI Documentation](https://coding.net/help/openapi#/)
- [GitHub Repository](https://github.com/yankeguo/coding-node-client)
- [npm Package](https://www.npmjs.com/package/@yankeguo/coding-node-client)

## Changelog

See [package.json](./package.json) for version information.

Current version: `202506.11.0`

---

**Note**: This client is generated from the official CODING.NET OpenAPI specification. For the most up-to-date API information, please refer to the [official documentation](https://coding.net/help/openapi#/).
