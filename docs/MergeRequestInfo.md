# MergeRequestInfo

合并请求详情

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActionAt** | **number** | 操作时间 | [optional] [default to undefined]
**ActionAuthor** | [**CodingUser**](CodingUser.md) |  | [optional] [default to undefined]
**Author** | [**CodingUser**](CodingUser.md) |  | [optional] [default to undefined]
**BaseSha** | **string** | 基础Sha | [optional] [default to '']
**CommentCount** | **number** | 评论数 | [optional] [default to undefined]
**Conflicts** | **Array&lt;string&gt;** | 冲突文件列表 | [optional] [default to undefined]
**CreatedAt** | **number** | 创建时间 | [optional] [default to undefined]
**DepotId** | **number** | 仓库ID | [optional] [default to undefined]
**Describe** | **string** | 描述,为 markdown 格式 | [optional] [default to '']
**Granted** | **number** | 是否授权 | [optional] [default to undefined]
**Id** | **number** | 合并请求ID | [optional] [default to undefined]
**Labels** | **Array&lt;string&gt;** | 合并请求标签列表 | [optional] [default to undefined]
**MergeCommitSha** | **string** | 合并Commit Sha | [optional] [default to '']
**MergeId** | **number** | 合并请求iid | [optional] [default to undefined]
**Mission** | [**Mission**](Mission.md) |  | [optional] [default to undefined]
**Path** | **string** | 合并请求 web 页面路径 | [optional] [default to '']
**ProjectId** | **number** | 项目ID | [optional] [default to undefined]
**Reminded** | **boolean** | 是否提醒 | [optional] [default to false]
**Reviewers** | [**Array&lt;CodingUser&gt;**](CodingUser.md) | MR评审者 | [optional] [default to undefined]
**SourceBranch** | **string** | 源分支 | [optional] [default to '']
**SourceBranchSha** | **string** | 源分支Commit Sha | [optional] [default to '']
**Status** | **string** | 合并状态,CANMERGE(状态可自动合并),ACCEPTED(状态已接受), CANNOTMERGE(状态不可自动合并), REFUSED(状态已拒绝(关闭)), CANCEL(取消), MERGING(正在合并中), ABNORMAL(状态异常) | [optional] [default to '']
**StickingPoint** | **string** | MR阻塞点 | [optional] [default to '']
**TargetBranch** | **string** | 目标分支 | [optional] [default to '']
**TargetBranchProtected** | **boolean** | 目标分支是否为保护分支 | [optional] [default to false]
**TargetBranchSha** | **string** | 目标分支Commit Sha | [optional] [default to '']
**Title** | **string** | 合并标题 | [optional] [default to '']
**UpdatedAt** | **number** | 更新时间 | [optional] [default to undefined]

## Example

```typescript
import { MergeRequestInfo } from './api';

const instance: MergeRequestInfo = {
    ActionAt,
    ActionAuthor,
    Author,
    BaseSha,
    CommentCount,
    Conflicts,
    CreatedAt,
    DepotId,
    Describe,
    Granted,
    Id,
    Labels,
    MergeCommitSha,
    MergeId,
    Mission,
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
    UpdatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
