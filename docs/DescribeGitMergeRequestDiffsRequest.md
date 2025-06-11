# DescribeGitMergeRequestDiffsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DepotId** | **number** | 仓库 ID | [optional] [default to undefined]
**DepotPath** | **string** | 仓库路径，DepotId与DepotPath二选一即可 | [optional] [default to undefined]
**MergeId** | **number** | 合并请求 ID | [optional] [default to undefined]

## Example

```typescript
import { DescribeGitMergeRequestDiffsRequest } from './api';

const instance: DescribeGitMergeRequestDiffsRequest = {
    DepotId,
    DepotPath,
    MergeId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
