# DescribeMergeRequestFileDiffRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DepotId** | **number** | 仓库id | [optional] [default to undefined]
**DepotPath** | **string** | 仓库路径，与仓库Id选其一就可以 | [optional] [default to undefined]
**MergeId** | **number** | 合并请求id | [optional] [default to undefined]

## Example

```typescript
import { DescribeMergeRequestFileDiffRequest } from './api';

const instance: DescribeMergeRequestFileDiffRequest = {
    DepotId,
    DepotPath,
    MergeId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
