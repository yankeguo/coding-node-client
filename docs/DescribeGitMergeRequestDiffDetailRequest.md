# DescribeGitMergeRequestDiffDetailRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DepotId** | **number** | 仓库id | [default to undefined]
**DepotPath** | **string** | 仓库路径，DepotId与DepotPath二选一即可 | [optional] [default to undefined]
**MergeId** | **number** | 合并请求id | [default to undefined]
**Path** | **string** | 文件路径 | [default to undefined]

## Example

```typescript
import { DescribeGitMergeRequestDiffDetailRequest } from './api';

const instance: DescribeGitMergeRequestDiffDetailRequest = {
    DepotId,
    DepotPath,
    MergeId,
    Path,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
