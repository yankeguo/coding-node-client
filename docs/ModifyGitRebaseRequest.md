# ModifyGitRebaseRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BaseBranchName** | **string** | 基础分支名字 | [default to undefined]
**DepotId** | **number** | 仓库id | [default to undefined]
**DepotPath** | **string** | 仓库路径，DepotId与DepotPath二选一即可 | [optional] [default to undefined]
**SrcBranchName** | **string** | 源分支名字 | [default to undefined]

## Example

```typescript
import { ModifyGitRebaseRequest } from './api';

const instance: ModifyGitRebaseRequest = {
    BaseBranchName,
    DepotId,
    DepotPath,
    SrcBranchName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
