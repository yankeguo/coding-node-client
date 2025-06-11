# MergeRequestNote

合并请求评论

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Author** | [**CodingUser**](CodingUser.md) |  | [optional] [default to undefined]
**CommitSha** | **string** | 合并请求中提交Id | [optional] [default to '']
**Content** | **string** | 行评论的内容 | [optional] [default to '']
**CreatedAt** | **number** | 行评论创建时间 | [optional] [default to undefined]
**Id** | **number** | 行评论的Id | [optional] [default to undefined]
**Index** | **number** | diff信息中的行数 | [optional] [default to undefined]
**MergeId** | **number** | 合并请求的Iid | [optional] [default to undefined]
**ParentId** | **number** | 子评论的父Id | [optional] [default to undefined]
**Path** | **string** | 改动文件的路径 | [optional] [default to '']
**UpdatedAt** | **number** | 行评论更新时间 | [optional] [default to undefined]

## Example

```typescript
import { MergeRequestNote } from './api';

const instance: MergeRequestNote = {
    Author,
    CommitSha,
    Content,
    CreatedAt,
    Id,
    Index,
    MergeId,
    ParentId,
    Path,
    UpdatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
