# DescribeGitCommitCommentsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DepotPath** | **string** | 仓库路径 | [optional] [default to undefined]
**PageNumber** | **number** | 页码数量 | [optional] [default to undefined]
**PageSize** | **number** | 页码大小 | [optional] [default to undefined]
**Sha** | **string** | 提交Sha | [optional] [default to undefined]

## Example

```typescript
import { DescribeGitCommitCommentsRequest } from './api';

const instance: DescribeGitCommitCommentsRequest = {
    DepotPath,
    PageNumber,
    PageSize,
    Sha,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
