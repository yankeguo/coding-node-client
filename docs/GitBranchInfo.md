# GitBranchInfo

分支简略信息

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BranchName** | **string** | 分支名称 | [optional] [default to '']
**DenyForcePush** | **boolean** | 是否禁止强制推送 | [optional] [default to false]
**ForceSquash** | **boolean** | 是否可以ForceSquash | [optional] [default to false]
**IsDefaultBranch** | **boolean** | 是否默认分支 | [optional] [default to false]
**IsProtected** | **boolean** | 是否保护分支 | [optional] [default to false]
**IsReadOnly** | **boolean** | 是否只读 | [optional] [default to false]
**LastCommitDate** | **number** | 最后提交时间 | [optional] [default to undefined]
**Sha** | **string** | 分支sha值 | [optional] [default to '']
**SpecBranchType** | **string** | 仓库规范类型 | [optional] [default to '']

## Example

```typescript
import { GitBranchInfo } from './api';

const instance: GitBranchInfo = {
    BranchName,
    DenyForcePush,
    ForceSquash,
    IsDefaultBranch,
    IsProtected,
    IsReadOnly,
    LastCommitDate,
    Sha,
    SpecBranchType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
