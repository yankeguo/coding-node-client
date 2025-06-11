# CreateGitReleaseRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommitSha** | **string** | 提交 Sha 值 | [default to undefined]
**DepotId** | **number** | 仓库id | [default to undefined]
**DepotPath** | **string** | 仓库路径，与仓库ID二选一 | [optional] [default to undefined]
**Description** | **string** | 版本描述信息 | [default to undefined]
**Pre** | **boolean** | 是否为预发布版本 | [default to undefined]
**TagName** | **string** | 创建来源的分支名称或者commitId | [default to undefined]
**TargetCommitBranch** | **string** | 目标提交 Sha 值 | [default to undefined]
**Title** | **string** | 版本标题 | [default to undefined]

## Example

```typescript
import { CreateGitReleaseRequest } from './api';

const instance: CreateGitReleaseRequest = {
    CommitSha,
    DepotId,
    DepotPath,
    Description,
    Pre,
    TagName,
    TargetCommitBranch,
    Title,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
