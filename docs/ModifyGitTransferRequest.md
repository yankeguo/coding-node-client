# ModifyGitTransferRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DepotId** | **number** | 仓库 ID | [default to undefined]
**DepotPath** | **string** | 仓库路径，与仓库ID二选一 | [optional] [default to undefined]
**TargetProjectId** | **number** | 目标项目 ID | [default to undefined]

## Example

```typescript
import { ModifyGitTransferRequest } from './api';

const instance: ModifyGitTransferRequest = {
    DepotId,
    DepotPath,
    TargetProjectId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
