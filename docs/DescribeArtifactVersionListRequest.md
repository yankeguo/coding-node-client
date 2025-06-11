# DescribeArtifactVersionListRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Package** | **string** | 包名称 | [default to undefined]
**PageNumber** | **number** | 页码，默认：1 | [optional] [default to undefined]
**PageSize** | **number** | 每页展示数量，默认：10 | [optional] [default to undefined]
**ProjectId** | **number** | 项目 ID | [default to undefined]
**Repository** | **string** | 仓库名称 | [default to undefined]

## Example

```typescript
import { DescribeArtifactVersionListRequest } from './api';

const instance: DescribeArtifactVersionListRequest = {
    Package,
    PageNumber,
    PageSize,
    ProjectId,
    Repository,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
