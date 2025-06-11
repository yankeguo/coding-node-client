# ModifyMergeMRRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DepotId** | **number** | 仓库id | [optional] [default to undefined]
**DepotPath** | **string** | 仓库路径，DepotId与DepotPath二选一即可 | [optional] [default to undefined]
**IsDelSourceBranch** | **boolean** | 是否删除源分支 | [optional] [default to undefined]
**IsFastForward** | **boolean** | 是否 Fast Forward 模式 | [optional] [default to undefined]
**MergeId** | **number** | 合并请求id | [optional] [default to undefined]
**Message** | **string** | 合并信息 | [optional] [default to undefined]
**Squash** | **boolean** | 是否需要对mr进行 Squash | [optional] [default to undefined]

## Example

```typescript
import { ModifyMergeMRRequest } from './api';

const instance: ModifyMergeMRRequest = {
    DepotId,
    DepotPath,
    IsDelSourceBranch,
    IsFastForward,
    MergeId,
    Message,
    Squash,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
