# Release

git 版本

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Body** | **string** | 内容 | [optional] [default to '']
**CommitSha** | **string** | commit Sha 值 | [optional] [default to '']
**CreatedAt** | **number** | 创建时间 | [optional] [default to undefined]
**CreatorId** | **number** | 创建者 | [optional] [default to undefined]
**DepotId** | **number** | 仓库 Id | [optional] [default to undefined]
**Html** | **string** | html内容 | [optional] [default to '']
**Id** | **number** | 版本 Id | [optional] [default to undefined]
**Pre** | **boolean** | 是否预发布 | [optional] [default to false]
**ProjectId** | **number** | 项目 Id | [optional] [default to undefined]
**ReleaseId** | **number** | 版本序号Id | [optional] [default to undefined]
**TagName** | **string** | 标签名字 | [optional] [default to '']
**TargetCommitBranch** | **string** | 目标 commit Sha 值 | [optional] [default to '']
**Title** | **string** | 标题 | [optional] [default to '']
**UpdatedAt** | **number** | 更新时间 | [optional] [default to undefined]
**ReleaseAttachment** | [**ReleaseAttachment**](ReleaseAttachment.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Release } from './api';

const instance: Release = {
    Body,
    CommitSha,
    CreatedAt,
    CreatorId,
    DepotId,
    Html,
    Id,
    Pre,
    ProjectId,
    ReleaseId,
    TagName,
    TargetCommitBranch,
    Title,
    UpdatedAt,
    ReleaseAttachment,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
