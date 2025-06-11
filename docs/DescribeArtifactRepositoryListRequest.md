# DescribeArtifactRepositoryListRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PageNumber** | **number** | 页码，默认：1 | [optional] [default to undefined]
**PageSize** | **number** | 每页展示数量，默认：10 | [optional] [default to undefined]
**ProjectId** | **number** | 项目 ID | [optional] [default to undefined]
**Type** | **number** | 仓库类型:1-generic;2-docker;3-maven;4-npm;5-pypi;6-helm;7-composer;8-nuget;9-conan;10-cocoapods;11-rpm | [optional] [default to undefined]

## Example

```typescript
import { DescribeArtifactRepositoryListRequest } from './api';

const instance: DescribeArtifactRepositoryListRequest = {
    PageNumber,
    PageSize,
    ProjectId,
    Type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
