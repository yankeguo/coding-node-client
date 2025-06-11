# MergeRequestData

合并请求数据

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActionAt** | **number** | 合并时间 | [optional] [default to undefined]
**ActionAuthor** | [**CodingUser**](CodingUser.md) |  | [optional] [default to undefined]
**Author** | [**CodingUser**](CodingUser.md) |  | [optional] [default to undefined]
**BaseSha** | **string** | 基础sha | [optional] [default to '']
**CommentCount** | **number** | 评论数 | [optional] [default to undefined]
**CreatedAt** | **number** | 创建时间 | [optional] [default to undefined]
**DepotId** | **number** | 仓库 Id | [optional] [default to undefined]
**Describe** | **string** | MR描述 | [optional] [default to '']
**Granted** | **number** | 授权数 | [optional] [default to undefined]
**Id** | **number** | 合并请求 Id | [optional] [default to undefined]
**Labels** | **Array&lt;string&gt;** | 标签列表 | [optional] [default to undefined]
**MergeCommitSha** | **string** | 合并Commit Sha | [optional] [default to '']
**MergeId** | **number** | 合并请求 IId | [optional] [default to undefined]
**Path** | **string** | 合并请求 web 页面路径 | [optional] [default to '']
**ProjectId** | **number** | 项目ID | [optional] [default to undefined]
**Reminded** | **boolean** | 是否提醒 | [optional] [default to false]
**Reviewers** | [**Array&lt;CodingUser&gt;**](CodingUser.md) | 评审者列表 | [optional] [default to undefined]
**SourceBranch** | **string** | 源分支 | [optional] [default to '']
**SourceBranchSha** | **string** | 源分支Commit Sha | [optional] [default to '']
**Status** | **string** | 合并请求状态 | [optional] [default to '']
**StickingPoint** | **string** | MR阻塞点 | [optional] [default to '']
**TargetBranch** | **string** | 目标分支 | [optional] [default to '']
**TargetBranchProtected** | **boolean** | 目标分支是否保护分支 | [optional] [default to false]
**TargetBranchSha** | **string** | 目标分支Commit Sha | [optional] [default to '']
**Title** | **string** | 合并请求标题 | [optional] [default to '']
**UpdateAt** | **number** | 更新时间 | [optional] [default to undefined]

## Example

```typescript
import { MergeRequestData } from './api';

const instance: MergeRequestData = {
    ActionAt,
    ActionAuthor,
    Author,
    BaseSha,
    CommentCount,
    CreatedAt,
    DepotId,
    Describe,
    Granted,
    Id,
    Labels,
    MergeCommitSha,
    MergeId,
    Path,
    ProjectId,
    Reminded,
    Reviewers,
    SourceBranch,
    SourceBranchSha,
    Status,
    StickingPoint,
    TargetBranch,
    TargetBranchProtected,
    TargetBranchSha,
    Title,
    UpdateAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
