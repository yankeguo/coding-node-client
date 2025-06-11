# ModifyGitMergeRequestRebaseRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DepotId** | **number** | 仓库 ID | [optional] [default to undefined]
**DepotPat** | **string** | 仓库路径，与仓库ID二选一 | [optional] [default to undefined]
**MergeId** | **number** | 合并请求 资源ID | [optional] [default to undefined]

## Example

```typescript
import { ModifyGitMergeRequestRebaseRequest } from './api';

const instance: ModifyGitMergeRequestRebaseRequest = {
    DepotId,
    DepotPat,
    MergeId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
