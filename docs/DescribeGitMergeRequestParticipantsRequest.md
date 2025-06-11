# DescribeGitMergeRequestParticipantsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DepotId** | **number** | 仓库 Id | [default to undefined]
**DepotPath** | **string** | 仓库路径，DepotId与DepotPath二选一即可 | [optional] [default to undefined]
**MergeId** | **number** | 合并请求 IId | [default to undefined]

## Example

```typescript
import { DescribeGitMergeRequestParticipantsRequest } from './api';

const instance: DescribeGitMergeRequestParticipantsRequest = {
    DepotId,
    DepotPath,
    MergeId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
