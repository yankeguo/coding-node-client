# MergeRequestDetail

合并请求详细数据

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActionAt** | **number** | 是否允许合并时间 | [optional] [default to undefined]
**ActionAuthor** | [**CodingUser**](CodingUser.md) |  | [optional] [default to undefined]
**Author** | [**CodingUser**](CodingUser.md) |  | [optional] [default to undefined]
**Content** | **string** | 合并请求描述 | [optional] [default to '']
**ContentHtml** | **string** | 合并请求描述（html 格式） | [optional] [default to '']
**CreateAt** | **number** | 创建时间 | [optional] [default to undefined]
**DepotId** | **number** | 仓库 Id | [optional] [default to undefined]
**Id** | **number** | 合并请求 Id | [optional] [default to undefined]
**MergeId** | **number** | 合并请求 Iid | [optional] [default to undefined]
**MergeStatus** | **string** | 合并请求状态 | [optional] [default to '']
**MergedSha** | **string** | 合并 Sha | [optional] [default to '']
**SourceBranch** | **string** | 源分支名 | [optional] [default to '']
**SourceSha** | **string** | 源分支 Sha | [optional] [default to '']
**TargetBranch** | **string** | 目标分支名 | [optional] [default to '']
**TargetSha** | **string** | 目标分支 Sha | [optional] [default to '']
**Title** | **string** | 合并请求标题 | [optional] [default to '']
**UpdateAt** | **number** | 更新时间 | [optional] [default to undefined]

## Example

```typescript
import { MergeRequestDetail } from './api';

const instance: MergeRequestDetail = {
    ActionAt,
    ActionAuthor,
    Author,
    Content,
    ContentHtml,
    CreateAt,
    DepotId,
    Id,
    MergeId,
    MergeStatus,
    MergedSha,
    SourceBranch,
    SourceSha,
    TargetBranch,
    TargetSha,
    Title,
    UpdateAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
