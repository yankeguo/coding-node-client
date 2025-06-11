# DeleteMergeRequestReviewerRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DepotId** | **number** | 仓库 ID | [default to undefined]
**DepotPath** | **string** | 仓库路径，与仓库ID二选一 | [optional] [default to undefined]
**MergeId** | **number** | iid | [default to undefined]
**ReviewerGlobalKey** | **string** | 评审者的GK | [default to undefined]

## Example

```typescript
import { DeleteMergeRequestReviewerRequest } from './api';

const instance: DeleteMergeRequestReviewerRequest = {
    DepotId,
    DepotPath,
    MergeId,
    ReviewerGlobalKey,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
