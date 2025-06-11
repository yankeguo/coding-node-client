# CreateGitBranchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BranchName** | **string** | 分支名称 | [optional] [default to undefined]
**DepotId** | **number** | 仓库id | [optional] [default to undefined]
**DepotPath** | **string** | 仓库路径，DepotId与DepotPath二选一即可 | [optional] [default to undefined]
**Note** | **string** | 分支备注 | [optional] [default to undefined]
**StartPoint** | **string** | 创建来源的分支名称或者commitId | [optional] [default to undefined]

## Example

```typescript
import { CreateGitBranchRequest } from './api';

const instance: CreateGitBranchRequest = {
    BranchName,
    DepotId,
    DepotPath,
    Note,
    StartPoint,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
