# DescribeGitCommitStatusRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommitSha** | **string** | 提交id | [optional] [default to undefined]
**DepotId** | **number** | 仓库id | [optional] [default to undefined]
**DepotPath** | **string** | 仓库路径，DepotId与DepotPath二选一即可 | [optional] [default to undefined]

## Example

```typescript
import { DescribeGitCommitStatusRequest } from './api';

const instance: DescribeGitCommitStatusRequest = {
    CommitSha,
    DepotId,
    DepotPath,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
