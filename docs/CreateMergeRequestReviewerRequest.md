# CreateMergeRequestReviewerRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DepotId** | **number** | 仓库id | [optional] [default to undefined]
**DepotPath** | **string** | 仓库路径，DepotId与DepotPath二选一即可 | [optional] [default to undefined]
**MergeId** | **number** | 合并请求id | [optional] [default to undefined]
**ReviewerGlobalKey** | **string** | 评审者 | [optional] [default to undefined]

## Example

```typescript
import { CreateMergeRequestReviewerRequest } from './api';

const instance: CreateMergeRequestReviewerRequest = {
    DepotId,
    DepotPath,
    MergeId,
    ReviewerGlobalKey,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
