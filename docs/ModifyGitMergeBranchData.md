# ModifyGitMergeBranchData

合并请求数据

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MergeCommit** | [**GitCommit**](GitCommit.md) |  | [optional] [default to undefined]
**MergeStatus** | **string** | 合并状态 MERGED 合并成功 FAILED 合并失败，异常原因 NOT_MERGEABLE 不可合并，有代码冲突 ALREADY_MERGED 两个分支已经合并，两个分支是一样的或者目标分支的已经合并进当前分支了 | [optional] [default to '']

## Example

```typescript
import { ModifyGitMergeBranchData } from './api';

const instance: ModifyGitMergeBranchData = {
    MergeCommit,
    MergeStatus,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
