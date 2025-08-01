# ModifyGitCommitRevertRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BranchName** | **string** | 分支名 | [optional] [default to undefined]
**DepotId** | **number** | 仓库 ID | [optional] [default to undefined]
**DepotPath** | **string** | 仓库路径，DepotId与DepotPath二选一即可 | [optional] [default to undefined]
**Message** | **string** | 提交描述 | [optional] [default to undefined]
**Sha** | **string** | 欲还原的提交 ID | [optional] [default to undefined]

## Example

```typescript
import { ModifyGitCommitRevertRequest } from './api';

const instance: ModifyGitCommitRevertRequest = {
    BranchName,
    DepotId,
    DepotPath,
    Message,
    Sha,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
