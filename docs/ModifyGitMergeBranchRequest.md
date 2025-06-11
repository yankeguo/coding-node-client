# ModifyGitMergeBranchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommitMessage** | **string** | 提交信息 | [default to undefined]
**DepotPath** | **string** | 仓库路径或仓库ID | [default to undefined]
**FromBranch** | **string** | 源分支 | [default to undefined]
**ToBranch** | **string** | 目标分支 | [default to undefined]

## Example

```typescript
import { ModifyGitMergeBranchRequest } from './api';

const instance: ModifyGitMergeBranchRequest = {
    CommitMessage,
    DepotPath,
    FromBranch,
    ToBranch,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
