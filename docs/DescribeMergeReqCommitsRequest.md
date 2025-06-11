# DescribeMergeReqCommitsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DepotId** | **number** | 仓库id | [default to undefined]
**DepotPath** | **string** | 与仓库路径二选一即可 | [optional] [default to undefined]
**MergeId** | **number** | 合并请求id | [default to undefined]

## Example

```typescript
import { DescribeMergeReqCommitsRequest } from './api';

const instance: DescribeMergeReqCommitsRequest = {
    DepotId,
    DepotPath,
    MergeId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
