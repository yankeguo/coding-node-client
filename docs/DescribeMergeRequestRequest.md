# DescribeMergeRequestRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DepotId** | **number** | 仓库id | [default to undefined]
**DepotPath** | **string** | 仓库路径，与DepotId选择其一即可 | [optional] [default to undefined]
**MergeId** | **number** | 合并请求iid | [default to undefined]

## Example

```typescript
import { DescribeMergeRequestRequest } from './api';

const instance: DescribeMergeRequestRequest = {
    DepotId,
    DepotPath,
    MergeId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
