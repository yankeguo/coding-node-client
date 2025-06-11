# GitBranch

用于展示单个分支的信息

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BranchName** | **string** | 分支名称 | [optional] [default to '']
**IsDefaultBranch** | **boolean** | 是否为默认分支 | [optional] [default to false]
**IsProtected** | **boolean** | 是否为保护分支 | [optional] [default to false]
**LastCommit** | [**GitCommit**](GitCommit.md) |  | [optional] [default to undefined]
**Sha** | **string** | 分支的sha值 | [optional] [default to '']
**Content** | **string** | 分支的备注信息 | [optional] [default to '']

## Example

```typescript
import { GitBranch } from './api';

const instance: GitBranch = {
    BranchName,
    IsDefaultBranch,
    IsProtected,
    LastCommit,
    Sha,
    Content,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
