# ForbiddenArtifactVersionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ForbiddenAction** | **string** | FORBIDDEN 禁止下载，UNFORBIDDEN 解除禁止下载 | [optional] [default to undefined]
**ForbiddenNote** | **string** | 禁止下载说明 | [optional] [default to undefined]
**Package** | **string** | 包名 | [optional] [default to undefined]
**PackageVersion** | **string** | 版本号 | [optional] [default to undefined]
**ProjectId** | **number** | 项目 ID | [optional] [default to undefined]
**Repository** | **string** | 仓库名 | [optional] [default to undefined]

## Example

```typescript
import { ForbiddenArtifactVersionRequest } from './api';

const instance: ForbiddenArtifactVersionRequest = {
    ForbiddenAction,
    ForbiddenNote,
    Package,
    PackageVersion,
    ProjectId,
    Repository,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
