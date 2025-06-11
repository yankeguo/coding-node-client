# ModifyGitCherryPickRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BranchName** | **string** | 分支名称 | [optional] [default to undefined]
**DepotId** | **number** | 仓库 ID | [optional] [default to undefined]
**DepotPath** | **string** | 仓库路径，DepotId与DepotPath二选一即可 | [optional] [default to undefined]
**Sha** | **string** | 提交 ID | [optional] [default to undefined]

## Example

```typescript
import { ModifyGitCherryPickRequest } from './api';

const instance: ModifyGitCherryPickRequest = {
    BranchName,
    DepotId,
    DepotPath,
    Sha,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
